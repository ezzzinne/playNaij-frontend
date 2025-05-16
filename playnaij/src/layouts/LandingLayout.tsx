import { ReactNode } from 'react';
import LandingNavbar from "../components/LandingNavbar";

interface LayoutProps {
    children: ReactNode;
}

function LandingLayout ({ children }: LayoutProps) {
    return (
        <>
            <LandingNavbar />
            <main>{children}</main>
        </>
    )
}

export default LandingLayout