import './Navbar.css'
import { FaSearch, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Logo from '../assets/Logo.svg'
import Icon from '../assets/img.svg';
import Bell from '../assets/notification.svg';
import Award from '../assets/Award.svg';
import User from '../assets/users 02.svg'

interface NavbarProps {
    isLoggedIn: boolean;
}

// eslint-disable-next-line no-empty-pattern
function HomeNavbar ({ }: NavbarProps) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <nav className="navbar px-3 px-md-4 py-2" style={{ height: 'fit-content', width: '100%', top: 0, zIndex: 1060 }}>
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="d-md-none d-flex align-items-center gap-3">
                        <button
                        className="btn text-white p-0 me-2"
                        type="button"
                        onClick={() => setShowMobileMenu(prev => !prev)}
                        >
                            <FaBars size={20} />
                        </button>
                    </div>
                    
                    <img src={Logo} alt="Logo" className='me-2' style={{ height: '40px' }} />

                    <form className="d-none d-md-flex align-items-center flex-grow-1 me-md-4 mb-2" style={{ maxWidth: '500px' }}>
                        <div className="input-group w-100">
                            <span className="input-group-text border-end-0" style={{ color: '#9C9C9C', borderColor: '#9C9C9C', background: '#0D1017' }}>
                                <FaSearch />
                            </span>
                            <input type="search" className="form-control border-start-0 border-end-0 text-white" style={{ borderColor: '#9C9C9C', background: '#0D1017' }} aria-label='Search' />
                            <span className="input-group-text border-start-0" style={{ color: '#9C9C9C', borderColor: '#9C9C9C', background: '#0D1017' }}>Search</span>
                        </div>
                    </form>

                    <div className="d-flex align-items-center gap-3 mb-2 mb-md-0">
                        <ul className="d-none d-md-flex nav gap-3 align-items-center mb-2 mb-md-0">
                            <li className="nav-item"><a className="nav-link text-white" href="#">Invite Friends</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#">Leaderboard</a></li>
                            <select className="text-white" style={{ minWidth: '130px', background: '#0D1017' }} id="">
                                <option value="">Categories</option>
                                <option value="">Word Games</option>
                                <option value="">Trivia</option>
                                <option value="">Web3</option>
                            </select>
                        </ul>

                        <img src={Icon} alt="User Icon" style={{ height: '32px' }} />
                        <img src={Bell} alt="Notification" style={{ height: '32px' }} />
                    </div>
                        
                    <div className="d-flex align-items-center ms-3 mb-2 mb-md-0">
                        <button className="btn btn-warning">Connect Wallet</button>
                    </div>
                </div>

                {showMobileMenu && (
                    <div className="d-md-none mt-2 d-flex flex-column align-items-start">
                        <ul className="nav flex-column text-white gap-2 mb-3">
                            <li className="nav-item">
                                <select className="text-white" style={{ background: '#0D1017' }}>
                                    <option value="">Categories</option>
                                    <option value="">Word Games</option>
                                    <option value="">Trivia Games</option>
                                    <option value="">Web3 Games</option>
                                </select>
                            </li>
                            <li className="nav-item">
                                <div className='d-flex'>
                                    <img src={Award} alt="" />
                                    <a className="nav-link text-white" href="#">Leaderboard</a>
                                </div>
                                <div className='d-flex'>
                                    <img src={User} alt="" />
                                    <a className="nav-link text-white" href="#">Invite Friends</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </nav> 
        </>
    )
}

export default HomeNavbar