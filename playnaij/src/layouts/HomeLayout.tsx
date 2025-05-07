import { ReactNode } from 'react';
import { useAuth } from '../redux/AuthContext';
import HomeNavbar from "../components/HomeNavbar";
import LandingNavbar from '../components/LandingNavbar';

interface LayoutProps {
    children: ReactNode;
}

function HomeLayout ({ children }: LayoutProps) {
    const { isLoggedIn } = useAuth();

    return (
        <>
            {isLoggedIn ? <HomeNavbar isLoggedIn={true} /> : <LandingNavbar />}
            <main>{children}</main>
        </>
    )
}

export default HomeLayout