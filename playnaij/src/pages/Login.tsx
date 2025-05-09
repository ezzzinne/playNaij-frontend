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

  const handleLogin = () => {
    // Form validation
    if (!form.username || !form.password) {
      setError('Please enter both username and password.');
      return;
    }

    if (!form.remember) {
      setError('You must agree to remember me before logging in.');
      return;
    }

    setError(''); // Clear error if everything is valid

    // Replace this with real auth logic
    const userExists = true;

    if (!userExists) {
      navigate('/create-account');
    } else {
      navigate('/home');
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
            aria-label="Google sign up"
            onClick={handleGoogleLogin}
            type="button"
            className="ca-social"
          >
            <img src="/google logo.png" alt="Google sign in" />
          </button>

          <button
            aria-label="Facebook sign up"
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