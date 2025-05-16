import './Navbar.css'
import { FaSearch } from 'react-icons/fa';
import Icon from '../assets/img.svg';
import Bell from '../assets/notification.svg'
import { Link, useNavigate } from 'react-router-dom';

interface Navbar1Props {
    onToggleSidebar: () => void;
}

function Navbar2 ({ onToggleSidebar }: Navbar1Props) {

    const navigate = useNavigate();

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRoute = e.target.value;
    navigate(selectedRoute);
    };


    return (
        <>
            <nav className="navbar px-4 d-flex align-items-center justify-content-between" style={{ height: '60px', width: '100%', top: 0, zIndex: 1060 }}>
                <button className="btn btn-outline-light d-md-none" onClick={onToggleSidebar}>
                    ☰
                </button>

                <form className="d-none d-md-flex align-items-center flex-grow-1 me-4" style={{ maxWidth: '500px' }}>
                    <div className="input-group w-100">
                        <span className="input-group-text border-end-0" style={{ color: '#9C9C9C', borderColor: '#9C9C9C', background: '#0D1017' }}>
                            <FaSearch />
                        </span>
                        <input type="search" className="form-control border-start-0 border-end-0 text-white" style={{ borderColor: '#9C9C9C', background: '#0D1017' }} aria-label='Search' />
                        <span className="input-group-text border-start-0" style={{ color: '#9C9C9C', borderColor: '#9C9C9C', background: '#0D1017' }}>Search</span>
                    </div>
                </form>

                <div className="d-flex align-items-center justify-content-center gap-3" style={{ cursor: 'pointer' }}>
                    <ul className="nav gap-5 d-none d-lg-flex align-items-center justify-content-center mb-0 me-5">
                        <li className="nav-item"><a className="nav-link text-white" href="#"><Link to="/leaderboard" style={{  color: 'white', textDecoration: 'none'}}>Leaderboard</Link></a></li>
                        <select className="text-white border-0" style={{ background: '#0D1017' }} onChange={handleSelectChange}>
                            <option value="">Categories</option>
                            <option value="/game1">Word Games</option>
                            <option value="/game2">Trivia Games</option>
                            <option disabled value="" className='disabled'>Web3 Games</option>
                        </select>
                    </ul>

                    <img src={Icon} alt="" className='m-2' />
                    <img src={Bell} alt="" className='m-2 d-none d-lg-flex' />
                </div>

                

                {/* <button className="btn btn-warning d-none d-md-flex disabled">Connect Wallet</button> */}

                
            </nav>
        </>
    )
}

export default Navbar2