import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaGoogle, FaFacebookF } from '../components/icons';
 import './CreateAccount.css';

export default function CreateAccount() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
    accepted: false,
  });

  // store the token returned by reCAPTCHA
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<any>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // called by <ReCAPTCHA> when user completes the widget
  const handleCaptcha = (token: string | null) => {
    setCaptchaToken(token);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.accepted) {
      alert('You must accept the terms to continue.');
      return;
    }

    if (!captchaToken) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    // TODO: send { ...form, captchaToken } to your backend

    recaptchaRef.current?.reset();
    setCaptchaToken(null);
  };

  return (
    <div className="ca-wrapper"
      style={{
        backgroundImage: 'url("/background login page.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}>

      <div className="ca-container">
        <header className="ca-header">
          <Link to="/" className="ca-back">←</Link>
          <p className="ca-switch">
            Already have an account?{' '}
            <Link to="/" className="ca-link">Log In.</Link>
          </p>
          <button className="ca-close">×</button>
        </header>

        <h1 className="ca-title">Create An Account</h1>

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
              <p className="ca-note">
                This is the name that other users will see for you.
              </p>
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
              <button type="button" className="ca-eye">👁</button>
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

          <div className="ca-recaptcha">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY!}
              onChange={handleCaptcha}
            />
          </div>

          <button
            type="submit"
            className="ca-submit"
            disabled={!form.accepted}
          >
            Sign Up
          </button>

          <div className="ca-social-divider">
            <span className="ca-sm">Or sign in with</span>
          </div>

          { 
           <div className="ca-social-buttons">
           <button aria-label="Google sign up" className="ca-social">
  <FaGoogle size={20} />
</button>
<button aria-label="Facebook sign up" className="ca-social">
  <FaFacebookF size={20} />
</button>
 
          </div>}
        </form>
      </div>
    </div>
  );
}
