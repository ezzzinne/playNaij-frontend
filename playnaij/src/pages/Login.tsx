import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoEye, IoEyeOff } from '../components/icons';
import '../styles/login.css';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: '', password: '', remember: false });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const formValid = form.username && form.password && form.remember;

  // Handle traditional login
  const handleLogin = async () => {
    if (!form.username || !form.password) {
      setError('Please enter both username and password.');
      return;
    }

    if (!form.remember) {
      setError('You must agree to remember me before logging in.');
      return;
    }

    setError('');
    try {
      const response = await fetch('https://casual-web-game-platform.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      
const data = await response.json();
console.log(data);

// Save the token
localStorage.setItem('token', data.token);


fetch('/protected-route', {
  headers: {
    Authorization: `Bearer ${data.token}`,
  },
});

// Redirect to home page
navigate('/home');
} catch (err: any) {
      setError(err.message || 'An error occurred during login.');
    }
  };

  // Google Login handler
  const handleGoogleLogin = async (googleResponse: any) => {
  try {
    const res = await fetch('https://casual-web-game-platform.onrender.com/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ credential: googleResponse.credential }),
    });

    if (!res.ok) throw new Error('Google login failed');
    // Optional: save token or redirect
    navigate('/home');
  } catch (err: any) {
    setError(err.message || 'Google login failed.');
  }
};

  // Facebook login
  const handleFacebookLogin = () => {
    window.FB.login(
      async (response: any) => {
        if (response.authResponse) {
          try {
            const res = await fetch('https://casual-web-game-platform.onrender.com/auth/facebook', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ accessToken: response.authResponse.accessToken }),
            });

            if (!res.ok) throw new Error('Facebook login failed');

            const data = await res.json();
            console.log(data); 

            navigate('/home');
          } catch (err: any) {
            setError(err.message);
          }
        } else {
          setError('Facebook login was cancelled.');
        }
      },
      { scope: 'email' }
    );
  };



  // Setup Google and Facebook SDKs
  useEffect(() => {
    if (window.google) {
    window.google.accounts.id.initialize({
      client_id: '597377794282-gk9907sffjpu550iedru4hrf6j8p0rrm.apps.googleusercontent.com',
      callback: handleGoogleLogin,
    });
      // window.google.accounts.id.renderButton(
      //   document.getElementById('google-login-button'),
      //   { theme: 'outline', size: 'large' }
      // );
    }

    if (window.FB) {
      window.FB.init({
        appId: '3213614008788759', //  App ID
        cookie: true,
        xfbml: true,
        version: 'v19.0',
      });
    }
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <div className="auth-container auth-background">
      <div className="auth-box">
        <div className="auth-close"><button>&times;</button></div>
        <h1 className="auth-title">Login</h1>

        {error && <p className="error-message">{error}</p>}

        <input
          type="text"
          name="username"
          value={form.username}
          onChange={onChange}
          placeholder="Enter Username"
          className="auth-input"
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="Enter password"
            className="auth-input"
          />
          <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
          </span>
        </div>

        <div className="login-remember">
          <label htmlFor="remember" className="remember-label">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={form.remember}
              onChange={onChange}
            />
            Remember me
          </label>
          <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
        </div>

        <button
  className="login-btn"
  onClick={handleLogin}
  style={{
    backgroundColor: formValid ? '#10b981' : '#ccc',
    cursor: formValid ? 'pointer' : 'not-allowed',
  }}
  disabled={!formValid}
>
  Login
</button>


        <div className="divider">
          <hr />
          <span>Or sign in with</span>
          <hr />
        </div>

        <div className="ca-social-buttons">
          <button
  type="button"
  className="login-social"
  onClick={() => window.google.accounts.id.prompt()}
>
  <img src="/google logo.png" alt="Google sign in" style={{ width: '25px', height: '30px', objectFit: 'contain' }}/>
</button>

          <button onClick={handleFacebookLogin} className="ca-social">
            <img src="/Facebook_Logo_(2019).png" alt="Facebook sign in" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
          </button>
        </div>

        <p className="signup">
          Don’t have an account? <Link to="/create-account" className="signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
