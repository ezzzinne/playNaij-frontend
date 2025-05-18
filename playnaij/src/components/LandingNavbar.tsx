import './Navbar.css'
import { FaSearch, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Logo from '../assets/Logo.svg'
import User2 from '../assets/users 02.svg'
import { Link } from 'react-router-dom';
import { useAuth } from '../redux/AuthContext';

type NavbarProps = {
    className?: string;
};

// eslint-disable-next-line no-empty-pattern
function Navbar ({ }: NavbarProps) {    

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const { login } = useAuth();

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
           <nav className="navbar px-3 px-md-4 d-flex align-items-center justify-content-between flex-wrap {`navbar ${className}`}" style={{ height: 'fit-content', width: '100%', top: 0, zIndex: 1060 }}>
                <div className="d-flex align-items-center gap-3">
                    <div className="d-lg-none">
                        <button
                        className="btn text-white p-0 me-2"
                        type="button"
                        onClick={() => setShowMobileMenu(prev => !prev)}
                        >
                            <FaBars size={20} />
                        </button>
                    </div>

                    <Link to='/'><img src={Logo} alt="Logo" style={{ height: '40px' }} /></Link>
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

                <div className="d-flex align-items-center gap-2 mb-2 mb-lg-0">
                    <ul className="d-none d-lg-flex nav gap-5 align-items-center mb-0">
                        <li className="nav-item"><a className="nav-link text-white" href="#"><Link to='/friends' style={{  color: 'white', textDecoration: 'none', cursor: 'pointer'}}>Invite Friends</Link></a></li>
                        <li className="nav-item">
                            <select className="text-white" style={{ minWidth: '130px', background: '#0D1017' }} onChange={handleScrollToSection}>
                                <option value="">Categories</option>
                                <option value="#game-cards">Word Games</option>
                                <option value="#game-cards">Trivia Games</option>
                                <option value="#game-cards">Web3 Games</option>
                            </select>
                        </li>
                    </ul>
                </div>

                <div className='d-flex gap-3 align-items-center mb-2 mb-lg-0' style={{ cursor: 'pointer' }}>
                    {/* <button className="btn btn-outline-success text-white d-none d-lg-flex disabled" style={{ background: '#0D1017' }}>Connect Wallet</button> */}
                    <button onClick={login} className="btn px-5" style={{ backgroundColor: '#10B981' }}><Link to='/login' style={{  color: 'white', textDecoration: 'none' }}>Log In</Link></button>
                </div>
                

                {showMobileMenu && (
                    <div className="d-lg-none mt-2 d-flex flex-column align-items-start w-100" style={{ cursor: 'pointer' }}>
                        <ul className="nav flex-column text-white gap-3 mb-3">
                            <li className="nav-item">
                                <select className="text-white" style={{ background: '#0D1017' }} onChange={handleScrollToSection}>
                                    <option value="">Categories</option>
                                    <option value="#game-cards">Word Games</option>
                                    <option value="#game-cards">Trivia</option>
                                    <option value="#game-cards">Web3</option>
                                </select>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <img src={User2} alt="" />
                                <a className="nav-link text-white" href="#">Invite Friends</a>
                            </li>
                        </ul>

                        {/* <div className="d-flex flex-column gap-2">
                            <button className="btn btn-outline-success text-white disabled">Connect Wallet</button>
                        </div> */}
                    </div>
                )}
            </nav> 
        </>
    )
}

export default Navbar