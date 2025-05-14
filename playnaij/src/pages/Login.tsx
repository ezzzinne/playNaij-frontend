import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider
} from 'firebase/auth';
import { app } from '../firebase';
import { IoEye, IoEyeOff } from '../components/icons';
import '../styles/login.css';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    username: '',
    password: '',
    remember: false
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth(app);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

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
      const response = await fetch('https://casual-web-game-platform.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: form.username,
          password: form.password
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      // Example: localStorage.setItem('token', data.token);
      navigate('/home');
    } catch (err: any) {
      setError(err.message || 'An error occurred during login.');
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google user:', user);
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Facebook user:', user);
    } catch (error) {
      console.error('Facebook login error:', error);
    }
  };

  return (
    <div className="auth-container auth-background">
      <div className="auth-box">
        <div className="auth-close">
          <button>&times;</button>
        </div>

        <h1 className="auth-title">Login</h1>

        {error && <p className="error-message">{error}</p>}

        <div>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={onChange}
            placeholder="Enter Username"
            className="auth-input"
          />
        </div>

        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="Enter password"
            className="auth-input"
          />
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
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

          <Link to="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link>
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <div className="divider">
          <hr />
          <span>Or sign in with</span>
          <hr />
        </div>

        <div className="ca-social-buttons">
          <button
            aria-label="Google sign in"
            onClick={handleGoogleLogin}
            type="button"
            className="ca-social"
          >
            <img src="/google logo.png" alt="Google sign in" />
          </button>

          <button
            aria-label="Facebook sign in"
            onClick={handleFacebookLogin}
            type="button"
            className="ca-social"
          >
            <img src="/Facebook_Logo_(2019).png" alt="Facebook sign in" />
          </button>
        </div>

        <p className="signup">
          Don’t have an account?{' '}
          <Link to="/create-account" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
