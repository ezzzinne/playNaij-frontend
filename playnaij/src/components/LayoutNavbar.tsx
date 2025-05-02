import './Navbar.css'
import { FaSearch } from 'react-icons/fa';
import Icon from '../assets/img.svg';
import Bell from '../assets/notification.svg'

function Navbar1 () {

    function onToggleSidebar(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
        throw new Error('Function not implemented.');
    }

    return (
        <>
            <nav className="navbar bg-dark px-4 d-flex align-items-center justify-content-between" style={{ height: '60px', width: '100%', top: 0, zIndex: 1060 }}>
                <button className="btn btn-outline-dark d-md-none" onClick={onToggleSidebar}>
                    ☰
                </button>

                <form className="d-flex align-items-center flex-grow-1 me-4" style={{ maxWidth: '500px' }}>
                    <div className="input-group w-100">
                        <span className="input-group-text bg-white border-end-0 border-light-subtle">
                            <FaSearch />
                        </span>
                        <input type="search" className="form-control border-start-0 border-end-0" aria-label='Search' />
                        <span className="input-group-text bg-white border-start-0">Search</span>
                    </div>
                </form>

                <ul className="nav gap-4 d-none d-md-flex">
                    <li className="nav-item"><a className="nav-link text-white" href="#">Leaderboard</a></li>
                    <select className="text-white bg-dark" id="">
                        <option value="">Categories</option>
                        <option value="">Word Games</option>
                        <option value="">Trivia</option>
                        <option value="">Web3</option>
                    </select>
                </ul>

                <div>
                    <img src={Icon} alt="" className='m-2' />
                    <img src={Bell} alt="" className='m-2' />
                </div>

                <button className="btn btn-warning">Connect Wallet</button>
            </nav>
        </>
    )
}

export default Navbar1