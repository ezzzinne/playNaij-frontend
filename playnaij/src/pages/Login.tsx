import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface LoginPageProps {
    onLogin: () => void;
}

// eslint-disable-next-line no-empty-pattern
function LoginPage({ }: LoginPageProps) {
    const navigate = useNavigate();
    const [isLoggedIn, ] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
          navigate('/home');
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
        
        </>
    )
}

export default LoginPage