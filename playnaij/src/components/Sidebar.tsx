import { useRef, useEffect } from 'react';
import Logo from "../assets/Logo.svg"
import Home from '../assets/home 02.svg'
import Rewards from '../assets/Frame.svg'
import Invite from "../assets/invite.svg"
import Community from "../assets/community.svg"
import Download from '../assets/download 01.svg'
import Settings from '../assets/settings.svg'
import Help from '../assets/help 01.svg'
import Logout from '../assets/logout.svg'
import MoreGames from '../assets/Frame 2147227324.svg'
import { Link } from 'react-router-dom';

function Sidebar ({ showSidebar, setShowSidebar }: { showSidebar: boolean, setShowSidebar: (val: boolean) => void }) {
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
          if (
            sidebarRef.current &&
            !sidebarRef.current.contains(e.target as Node) &&
            window.innerWidth < 768
          ) {
            setShowSidebar(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        document.body.style.overflow = showSidebar && window.innerWidth < 768 ? 'hidden' : 'auto';
        return () => {
          document.body.style.overflow = 'auto';
        };
    }, [showSidebar]);

    return (
        <>
            <main>
                {/* <button
                    className="btn bg-dark text-white btn-outline-dark m-3 d-md-none"
                    onClick={() => setShowSidebar(true)}
                    >
                    ☰
                </button> */}

                <div
                    ref={sidebarRef}
                    className={`text-white d-flex flex-column p-3 shadow-lg top-0 start-0 h-100
                        ${showSidebar ? 'd-flex' : 'd-none'} d-md-flex`} 
                    style={{
                        height: '100%',
                        zIndex: 1050,
                        width: '250px',
                        background: '#10131C',
                    }}
                >

                    <a href="/" className="mb-2 d-flex justify-content-center align-items-center">
                        <img src={Logo} alt="" />
                    </a>
                    <hr />

                    <ul className="nav flex-column mb-2">
                        <li className="nav-item mb-0">
                            <a href="#" className="nav-link d-flex align-items-start text-white" aria-current="page">
                            <img src={Home} alt="" className="me-4" />
                            <Link to="/home" style={{  color: 'white', textDecoration: 'none'}}>Home</Link>
                            </a>
                        </li>
                        <li className="nav-item mb-0">
                            <a href="#" className="nav-link link-body-emphasis text-white">
                            <img src={Rewards} alt="" className="me-4" />
                            Rewards
                            </a>
                        </li>
                        <li className="nav-item mb-0">
                            <a href="#" className="nav-link link-body-emphasis text-white">
                            <img src={Invite} alt="" className="me-4" />
                            Invite Friends
                            </a>
                        </li>
                        <li className="nav-item mb-0">
                            <a href="#" className="nav-link link-body-emphasis text-white">
                            <img src={Community} alt="" className="me-4" />
                            Community
                            </a>
                        </li>
                        <li className="nav-item mb-0">
                            <a href="#" className="nav-link link-body-emphasis text-white">
                            <img src={Download} alt="" className="me-4" />
                            Downloads
                            </a>
                        </li>
                    </ul>
                    <hr />

                    <ul className="nav flex-column mb-auto">
                        <li className="nav-item mb-0">
                            <a href="#" className="nav-link active text-white" aria-current="page">
                            <img src={Settings} alt="" className="me-4" />
                            Settings
                            </a>
                        </li>
                        <li className="nav-item mb-0">
                            <a href="#" className="nav-link link-body-emphasis text-white">
                            <img src={Help} alt="" className="me-4" />
                            Help
                            </a>
                        </li>
                        <li className="nav-item mb-0">
                            <a href="#" className="nav-link link-body-emphasis text-white">
                            <img src={Logout} alt="" className="me-4" />
                            Log out
                            </a>
                        </li>
                    </ul>

                    <img src={MoreGames} alt="" className="mt-4 more-games" />
                </div>

            </main>
        </>
    )
}

export default Sidebar