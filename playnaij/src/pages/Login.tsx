import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, IoEye, IoEyeOff } from '../components/icons';
import { Link } from 'react-router-dom';
import './Login.css'; 
import LandingNavbar from '../components/LandingNavbar';
import bgImage from '../assets/background login page.jpg';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Fake check — replace with real validation later
    const userExists = false; // simulate: user does NOT exist

    if (!userExists) {
      navigate('/home');
    } else {
      navigate('/create-account');
    }
  };

  return (
    <>
        <LandingNavbar className="bg-transparent shadow-none" />

        <div className="auth-container"
        style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
        }}
        >
        <div className="auth-box">
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button style={{ fontSize: '1.25rem', color: 'white' }}>&times;</button>
            </div>

            <h1>LOGIN</h1>

            <div>
            <input type="text" placeholder="Enter Username" />
            </div>

            <div className="password-wrapper">
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
            />
            <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
            </span>
            </div>

            <div className="remember-forgot">
            <label>
                <input type="checkbox" style={{ marginRight: '0.5rem' }} />
                Remember me
            </label>
            <button style={{ color: '#60a5fa', background: 'none', border: 'none' }}>
                Forgot Password?
            </button>
            </div>

            <button className="login-btn" onClick={handleLogin}>
            <Link to='/home' ></Link>Login
            </button>

            <div className="divider">
            <hr />
            <span style={{ fontSize: '0.875rem' }}>Or sign in with</span>
            <hr />
            </div>

            <div className="socials">
            <button><FaGoogle /></button>
            <button><FaFacebookF /></button>
            </div>

            <p className="signup">
            Don't have an account?{' '}
            <button
                onClick={() => navigate('/create-account')}
                style={{ color: '#60a5fa', background: 'none', border: 'none', cursor: 'pointer' }}
            >
                <Link to="/create-account">Sign Up</Link>
            </button>
            </p>
        </div>
        </div>
    </>

    
  );
}