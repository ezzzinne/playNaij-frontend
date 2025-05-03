import './Navbar.css'
import { FaSearch, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Logo from '../assets/Logo.svg'
import User from '../assets/user-circle.svg'
import User2 from '../assets/users 02.svg'
import { Link } from 'react-router-dom';

type NavbarProps = {
    className?: string;
};

// eslint-disable-next-line no-empty-pattern
function Navbar ({ }: NavbarProps) {    

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    
    return (
        <>
           <nav className="navbar px-3 px-md-4 d-flex align-items-center justify-content-between flex-wrap {`navbar ${className}`}" style={{ height: 'fit-content', width: '100%', top: 0, zIndex: 1060 }}>

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

                <div className="d-flex align-items-center mb-2 mb-md-0">
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
                        <select className="text-white" style={{ minWidth: '130px', background: '#0D1017' }} id="">
                            <option value="">Categories</option>
                            <option value="">Word Games</option>
                            <option value="">Trivia Games</option>
                            <option value="">Web3 Games</option>
                        </select>
                    </ul>

                    <img src={User} alt="User Icon" style={{ height: '32px' }} />

                    <div className='d-flex gap-2'>
                        <button className="btn btn-outline-success me-3 text-white d-none d-md-flex" style={{ background: '#0D1017' }}>Connect Wallet</button>
                        <button className="btn btn-success px-3"><Link to='/login' style={{  color: 'white', textDecoration: 'none'}}>Log In</Link></button>
                    </div>
                </div>

                {showMobileMenu && (
                    <div className="d-md-none mt-2 d-flex flex-column align-items-start">
                        <ul className="nav flex-column text-white gap-2 mb-3">
                            <li className="nav-item">
                                <select className="text-white" style={{ background: '#0D1017' }}>
                                    <option value="">Categories</option>
                                    <option value="">Word Games</option>
                                    <option value="">Trivia</option>
                                    <option value="">Web3</option>
                                </select>
                            </li>
                            <li className="nav-item d-flex">
                                <img src={User2} alt="" />
                                <a className="nav-link text-white" href="#">Invite Friends</a>
                            </li>
                        </ul>

                        <div className="d-flex flex-column gap-2">
                            <button className="btn btn-outline-success text-white">Connect Wallet</button>
                        </div>
                    </div>
                )}
            </nav> 
        </>
    )
}

export default Navbar