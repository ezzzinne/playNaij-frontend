import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function VerifyAccount() {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState('Verifying...');
  const token = searchParams.get('token');

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get(`https://casual-web-game-platform.onrender.com/verify?token=${token}`);
        if (res.status === 200) {
          setMessage('Account successfully verified!');
        } else {
          setMessage('Verification failed. Invalid or expired token.');
        }
      } catch (error) {
        setMessage('Something went wrong. Please try again later.');
      }
    };

    if (token) verify();
    else setMessage('No token provided.');
  }, [token]);

  return <div className="verification-message">{message}</div>;
}
