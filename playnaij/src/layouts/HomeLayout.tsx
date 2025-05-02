import { ReactNode } from 'react';
import HomeNavbar from "../components/HomeNavbar";

interface LayoutProps {
    children: ReactNode;
}

function HomeLayout ({ children }: LayoutProps) {
    return (
        <>
            <HomeNavbar isLoggedIn={true} />
            <main>{children}</main>
        </>
    )
}

export default HomeLayout