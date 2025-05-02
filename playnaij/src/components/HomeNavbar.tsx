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
            <nav className="navbar px-3 px-md-4 d-flex align-items-center justify-content-between flex-wrap" style={{ height: 'fit-content', width: '100%', top: 0, zIndex: 1060 }}>

                <div className="d-flex align-items-center gap-3">
                    <div className="d-md-none">
                        <button
                        className="btn text-white p-0 me-2"
                        type="button"
                        onClick={() => setShowMobileMenu(prev => !prev)}
                        >
                            <FaBars size={20} />
                        </button>
                    </div>
                </div>

                <div className="d-flex align-items-center mb-2 mb-md-0 me-3">
                    <img src={Logo} alt="Logo" style={{ height: '40px' }} />
                </div>

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

                    <div className='d-flex gap-2'>
                        <button className="btn btn-warning px-4">Connect Wallet</button>
                    </div>
                </div>

                {showMobileMenu && (
                    <div className="w-100 d-md-none mt-2">
                        <ul className="nav flex-column text-white gap-2 mb-3">
                            <li className="nav-item">
                                <select className="form-select text-white border-secondary" style={{ background: '#0D1017' }}>
                                    <option value="">Categories</option>
                                    <option value="">Word Games</option>
                                    <option value="">Trivia Games</option>
                                    <option value="">Web3 Games</option>
                                </select>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#"><span className='me-3'><img src={Award} alt="" /></span>Leaderboard</a>
                                <a className="nav-link text-white" href="#"><span className='me-3'><img src={User} alt="" /></span>Invite Friends</a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav> 
        </>
    )
}

export default HomeNavbar