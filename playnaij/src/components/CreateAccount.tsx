import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CreateAccount.css';

export default function CreateAccount() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
    accepted: false,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

 const passwordValid = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(form.password);

const formValid =
  form.username &&
  form.email &&
  form.password &&
  form.confirm &&
  form.password === form.confirm &&
  passwordValid &&
  form.accepted;




  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.accepted) {
    setError('You must accept the terms to continue.');
    return;
  }

  if (form.password !== form.confirm) {
    setError('Passwords do not match.');
    return;
  }

  if (!passwordValid) {
    setError('Password must be at least 6 characters and include both letters and numbers.');
    return;
  }

  try {
    if (process.env.NODE_ENV === 'development') {
      console.log('Registering with payload:', {
        username: form.username,
        email: form.email,
        password: form.password
      });
    }

    const response = await fetch('https://casual-web-game-platform.onrender.com/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: form.username,
        email: form.email,
        password: form.password
      })
    });

    const data = await response.json();

    if (process.env.NODE_ENV === 'development') {
      console.log('Response:', data);
    }

    if (!response.ok) {
      console.error('Backend error:', data); 
       const messages = Object.values(data.errors || {}).join(' ');
throw new Error(messages || data.message || 'Failed to register.');

    }

    alert('Account created successfully. Please check your email.');
    navigate('/verify-email-sent');
  } catch (err: any) {
    setError(err.message || 'An error occurred during signup.');
  }
};



  const handleGoogleCredentialResponse = async (response: any) => {
    try {
      const res = await fetch('https://casual-web-game-platform.onrender.com/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential: response.credential })
      });

      if (!res.ok) throw new Error('Google sign-up failed');
      navigate('/home');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleFacebookLogin = () => {
    window.FB.login(
      async (response: any) => {
        if (response.authResponse) {
          try {
            const res = await fetch('https://casual-web-game-platform.onrender.com/auth/facebook', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ accessToken: response.authResponse.accessToken })
            });

            if (!res.ok) throw new Error('Facebook sign-up failed');
            navigate('/home');
          } catch (err: any) {
            setError(err.message);
          }
        } else {
          setError('Facebook sign-up was cancelled.');
        }
      },
      { scope: 'email' }
    );
  };

 useEffect(() => {
  // Google button init
  if (window.google) {
    window.google.accounts.id.initialize({
      client_id: '597377794282-gk9907sffjpu550iedru4hrf6j8p0rrm.apps.googleusercontent.com',
      callback: handleGoogleCredentialResponse
    });
    // window.google.accounts.id.renderButton(
    //   document.getElementById('google-signup-button'),
    //   { theme: 'outline', size: 'large',type: 'icon'  }
    // );
  }

  // Load Facebook SDK
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: '3213614008788759',
      cookie: true,
      xfbml: true,
      version: 'v19.0'
    });
  };

  (function (d, s, id) {
    if (d.getElementById(id)) return;
    const fjs = d.getElementsByTagName(s)[0];
    const js = d.createElement(s) as HTMLScriptElement;
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode!.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
}, []);

const handleFacebookLoginClick = () => {
    (async () => {
      try {
        await handleFacebookLogin();
      } catch (err) {
        console.error(err);
      }
    })();
  };

  return (
    <div className="ca-wrapper auth-background">
      <div className="ca-container">
        <header className="ca-header">
          <button className="ca-back" onClick={() => navigate(-1)}>←</button>
<button className="ca-close" onClick={() => navigate('/')}>×</button>

          <p className="ca-switch">
            Already have an account? <Link to="/" className="ca-link">Log In.</Link>
          </p>
        </header>

        <h1 className="ca-title">Create An Account</h1>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={onSubmit}>
          <div className="ca-grid">
            <div className="ca-field">
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={onChange}
                placeholder="Enter Username"
                className="ca-input"
                required
              />
              <p className="ca-note">This is the name that other users will see for you.</p>
            </div>

            <div className="ca-field">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Enter your Email"
                className="ca-input"
                required
              />
            </div>

            <div className="ca-field ca-relative">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={onChange}
                placeholder="Enter password"
                className="ca-input"
                required
              />
            </div>

            <div className="ca-field ca-relative">
              <input
                type="password"
                name="confirm"
                value={form.confirm}
                onChange={onChange}
                placeholder="Confirm password"
                className="ca-input"
                required
              />
            </div>
          </div>

          <p className="ca-password-note">
            *Passwords must be at least 6 characters and include both letters and numbers
          </p>

          <hr className="ca-divider" />

          <div className="ca-terms">
            <input
              type="checkbox"
              id="terms"
              name="accepted"
              checked={form.accepted}
              onChange={onChange}
            />
            <label htmlFor="terms" className="ca-terms-label">
              I am 13 years (or the applicable minimum age) or older and accept the{' '}
              <Link to="/terms" className="ca-info-link">terms and conditions</Link> and{' '}
              <Link to="/privacy" className="ca-info-link">privacy policy</Link>
            </label>
          </div>

  <button
  type="submit"
  className="ca-submit"
  disabled={!formValid}
  style={{
    backgroundColor: formValid ? ' #10b981' : '#ccc',
    cursor: formValid ? 'pointer' : 'not-allowed',
  }}
>
  Sign Up
</button>

          <div className="ca-social-divider">
            <hr />
            <span className="ca-sm">Or sign in with</span>
            <hr />
          </div>

          <div className="ca-social-buttons">
            <button
              aria-label="Google sign up"
              type="button"
              className="ca-social"
              onClick={() => window.google.accounts.id.prompt()}
            >
              <img src="/google logo.png" alt="Google sign in" style={{ width: '30px', height: '30px' }} />
            </button>
            <button
              aria-label="Facebook sign up"
              type="button"
              className="ca-social"
              onClick={handleFacebookLoginClick}
            >
              <img src="/Facebook_Logo_(2019).png" alt="Facebook sign in" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}