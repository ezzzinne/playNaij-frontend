import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CreateAccount.css';
import Google from "../assets/google logo.png";
import Facebook from "../assets/Facebook_Logo_(2019).png";

export default function CreateAccount() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
    accepted: false,
  });

  const navigate = useNavigate();

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
      alert('You must accept the terms to continue.');
      return;
    }

    if (form.password !== form.confirm) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('https://casual-web-game-platform.onrender.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to register. Please try again.');
      }

      // Success - redirect to login or verification page
      alert('Account created successfully. Please check your email.');
      navigate('/verify-email-sent');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Signup error:', error);
      alert(error.message || 'An error occurred during signup.');
    }
  };

  return (
    <>
        <div className="ca-wrapper auth-background">
        <div className="ca-container">
            <header className="ca-header">
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }} className="ca-back">←</Link>
            <p className="ca-switch">
                Already have an account?{' '}
                <Link to="/login" className="ca-link">Log In.</Link>
            </p>
            <button className="ca-close"><Link to='/' style={{ color: 'white', textDecoration: 'none' }}>×</Link></button>
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
                disabled={!form.accepted}
            >
              Sign Up
            </button>

            <div className="ca-social-divider">
              <hr />
              <span className="ca-sm">Or sign in with</span>
              <hr />
            </div>

            { 
            <div className="ca-social-buttons">
            <button aria-label="Google sign up" className="ca-social" type='button' disabled title="Coming soon">
            <img
                src={Google}
                alt="Google sign in"
              />
            </button>
            <button aria-label="Facebook sign up" className="ca-social" type='button' disabled title="Coming soon">
            <img
                src={Facebook}
                alt="Facebook sign in"
              />
            </button>
            </div>}
            </form>
        </div>
        </div>
    </>
    
  );
}