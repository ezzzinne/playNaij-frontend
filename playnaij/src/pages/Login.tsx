import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface LoginPageProps {
    onLogin: () => void;
}

function LoginPage({ onLogin }: LoginPageProps) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleLogin = () => {
        // Logic to verify Login - API call
        setIsLoggedIn(true);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleSubmit = () => {
        // Handle form validation/login API here
        onLogin();
        navigate('/home');
    };

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