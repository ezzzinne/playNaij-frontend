import './Navbar.css'
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../redux/AuthContext';

interface Navbar1Props {
    onToggleSidebar: () => void;
}

function Navbar1 ({ onToggleSidebar }: Navbar1Props) {
    const { login } = useAuth();

    const navigate = useNavigate();

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRoute = e.target.value;
    navigate(selectedRoute);
    };
    
    return (
        <>
            <nav className="navbar px-4 d-flex align-items-center justify-content-between flex-wrap" style={{ height: 'fit-content', top: 0, zIndex: 1060 }}>
                <button className="btn btn-outline-light d-lg-none" onClick={onToggleSidebar}>
                    ☰
                </button>

                <form className="d-none d-lg-flex align-items-center flex-grow-1 me-4" style={{ maxWidth: '500px' }}>
                    <div className="input-group w-100">
                        <span className="input-group-text border-end-0" style={{ color: '#9C9C9C', borderColor: '#9C9C9C', background: '#0D1017' }}>
                            <FaSearch />
                        </span>
                        <input type="search" className="form-control border-start-0 border-end-0 text-white" style={{ borderColor: '#9C9C9C', background: '#0D1017' }} aria-label='Search' />
                        <span className="input-group-text border-start-0" style={{ color: '#9C9C9C', borderColor: '#9C9C9C', background: '#0D1017' }}>Search</span>
                    </div>
                </form>

                <ul className="nav gap-4 d-none d-lg-flex">
                    <select className="text-white border-0" style={{ background: '#0D1017' }} onChange={handleSelectChange}>
                        <option value="">Categories</option>
                        <option value="/game1">Word Games</option>
                        <option value="/game2">Trivia Games</option>
                        <option disabled value="">Web3 Games</option>
                    </select>

                    <div className='d-flex gap-3 align-items-center mb-2 mb-lg-0'>
                        <button className="btn btn-outline-success me-3 text-white d-none d-lg-flex" style={{ background: '#0D1017' }}>Connect Wallet</button>
                        <button onClick={login} className="btn" style={{ backgroundColor: '#10B981' }}><Link to='/login' style={{  color: 'white', textDecoration: 'none'}}>Log In</Link></button>
                    </div>
                </ul>

                

                
            </nav>
        </>
    )
}

export default Navbar1