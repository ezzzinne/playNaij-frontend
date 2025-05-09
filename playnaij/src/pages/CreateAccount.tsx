import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './CreateAccount.css';
import LandingNavbar from '../components/LandingNavbar';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { app } from '../firebase';
import { sendEmailVerification } from 'firebase/auth';
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

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recaptchaRef = useRef<any>(null);
  const navigate = useNavigate();

  const auth = getAuth(app);
  const db = getFirestore(app);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCaptcha = (token: string | null) => {
    setCaptchaToken(token);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.accepted) {
      alert('You must accept the terms to continue.');
      return;
    }

    if (!captchaToken) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    if (form.password !== form.confirm) {
      alert('Passwords do not match.');
      return;
    }

    try {
      // Check for duplicate username
      const q = query(collection(db, 'users'), where('username', '==', form.username));
      const snapshot = await getDocs(q);
  
      if (!snapshot.empty) {
        alert('Username already exists. Please choose another.');
        return;
      }

      // Create Firebase user
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;
  
      // Send verification email
      await sendEmailVerification(user);
  
      // Save user info to Firestore
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        username: form.username,
        email: form.email,
        createdAt: new Date()
      });
  
      alert('Account created! Please check your email to verify your account before logging in.');
      navigate('/'); // Optional: Navigate to a "Verify Email" screen
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Signup error:', error);
      alert(error.message || 'An error occurred during signup.');
    } finally {
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
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
    <>
        <LandingNavbar />

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

            <div className="ca-recaptcha">
                <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || 'invalid-key'}
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
              <hr />
              <span className="ca-sm">Or sign in with</span>
              <hr />
            </div>

            { 
            <div className="ca-social-buttons">
            <button aria-label="Google sign up" className="ca-social" onClick={handleGoogleLogin} type='button'>
            <img
                src={Google}
                alt="Google sign in"
              />
            </button>
            <button aria-label="Facebook sign up" className="ca-social" onClick={handleFacebookLogin} type='button'>
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