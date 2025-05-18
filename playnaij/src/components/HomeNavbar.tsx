import './Navbar.css'
import { FaSearch, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Logo from '../assets/Logo.svg'
import Icon from '../assets/img.svg';
import Bell from '../assets/notification.svg';
import Award from '../assets/Award.svg';
import User from '../assets/users 02.svg'
import { Link } from 'react-router-dom';

interface NavbarProps {
    isLoggedIn: boolean;
}

// eslint-disable-next-line no-empty-pattern
function HomeNavbar ({ }: NavbarProps) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleScrollToSection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const sectionId = e.target.value;
        if (sectionId) {
          const targetElement = document.querySelector(sectionId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };      

    return (
        <>
            <nav className="navbar px-3 px-md-4 py-2" style={{ height: 'fit-content', width: '100%', top: 0, zIndex: 1060 }}>
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="d-flex align-items-center gap-3">
                        <button
                        className="btn d-lg-none text-white p-0"
                        type="button"
                        onClick={() => setShowMobileMenu(prev => !prev)}
                        >
                            <FaBars size={20} />
                        </button>

                        <Link to='/home'><img src={Logo} alt="Logo" className='me-2' style={{ height: '40px' }} /></Link>
                    </div>
                    
                    <form className="d-none d-lg-flex align-items-center flex-grow-1 mx-4" style={{ maxWidth: '500px' }}>
                        <div className="input-group w-100">
                            <span className="input-group-text border-end-0" style={{ color: '#9C9C9C', borderColor: '#9C9C9C', background: '#0D1017' }}>
                                <FaSearch />
                            </span>
                            <input type="search" className="form-control border-start-0 border-end-0 text-white" style={{ borderColor: '#9C9C9C', background: '#0D1017' }} aria-label='Search' />
                            <span className="input-group-text border-start-0" style={{ color: '#9C9C9C', borderColor: '#9C9C9C', background: '#0D1017' }}>Search</span>
                        </div>
                    </form>

                    <div className="d-flex align-items-center gap-3" style={{ cursor: 'pointer' }}>
                        <ul className="d-none d-lg-flex nav gap-3 align-items-center mb-0 me-5">
                            <li className="nav-item"><a className="nav-link text-white" href="#"><Link to='/friends' style={{ color: 'white', textDecoration: 'none'}}>Invite Friends</Link></a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#"><Link to='/leaderboard' style={{ color: 'white', textDecoration: 'none'}}>Leaderboard</Link></a></li>
                            <li className="nav-item">
                                <select className="text-white" style={{ minWidth: '130px', background: '#0D1017' }} onChange={handleScrollToSection}>
                                    <option value="">Categories</option>
                                    <option value="#game-cards">Word Games</option>
                                    <option value="#game-cards">Trivia Games</option>
                                    <option value="#game-cards">Web3 Games</option>
                                </select>
                            </li>
                        </ul>

                        <Link to='/main'><img src={Icon} alt="User Icon" style={{ height: '32px' }} /></Link>
                        <img src={Bell} alt="Notification" style={{ height: '32px' }} />

                        {/* <button className="btn btn-warning d-none d-lg-block disabled">Connect Wallet</button> */}
                    </div>
                </div>

                {showMobileMenu && (
                    <div className="d-lg-none mt-3" style={{ cursor: 'pointer' }}>
                        <ul className="nav flex-column text-white gap-3 px-1">
                            <li className="nav-item">
                                <select className="text-white" style={{ background: '#0D1017' }} onChange={handleScrollToSection}>
                                    <option value="">Categories</option>
                                    <option value="#game-cards">Word Games</option>
                                    <option value="#game-cards">Trivia Games</option>
                                    <option value="#game-cards">Web3 Games</option>
                                </select>
                            </li>
                            <li className="nav-item d-flex align-items-center gap-2">
                                <img src={Award} alt="Leaderboard" style={{ height: '24px' }} />
                                <a className="nav-link text-white p-0" href="#"><Link to='/leaderboard' style={{ color: 'white', textDecoration: 'none'}}>Leaderboard</Link></a>
                            </li>
                            <li className="nav-item d-flex align-items-center gap-2">
                                <img src={User} alt="Invite" style={{ height: '24px' }} />
                                <a className="nav-link text-white p-0" href="#"><Link to='/friends' style={{ color: 'white', textDecoration: 'none'}}>Invite Friends</Link></a>
                            </li>
                            {/* <li className="nav-item">
                                <button className="btn btn-warning w-100 disabled">Connect Wallet</button>
                            </li> */}
                        </ul>
                    </div>
                )}
            </nav> 
        </>
    )
}

export default HomeNavbar