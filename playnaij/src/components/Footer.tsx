import Logo from '../assets/Logo.svg'
import Icon1 from '../assets/Icon1.svg'
import Icon2 from '../assets/Icon2.svg'
import Icon3 from '../assets/Icon3.svg'
import Icon4 from '../assets/Icon4.svg'
import '../pages/LandingPage.css'
import { Link } from 'react-router-dom'

function Footer () {
    return (
        <>
            <div className='bg1'>
                <div>
                    <p className="text-center fs-4 mt-0" style={{ color: '#9CA3AF'}}>Experience gaming with authentic Nigerian flavor!</p>
                    <div className="row g-4 p-3 row-cols-2 row-cols-md-4">
                        <div className="feature col d-flex flex-column align-items-center justify-content-center">
                            <div className="feature-icon mb-1">
                                <img src={Icon1} alt="" />
                            </div>
                            <p className="fs-4 text-white mb-1">Cultural Gaming</p>
                            <p className="text-center" style={{ color: '#9CA3AF' }}>Games that celebrate Nigerian identity and culture</p>
                        </div>
                        <div className="feature col d-flex flex-column align-items-center justify-content-center">
                            <div className="feature-icon mb-1">
                                <img src={Icon2} alt="" />
                            </div>
                            <p className="fs-4 text-white mb-1">Web3 Ready</p>
                            <p className="text-center" style={{ color: '#9CA3AF' }}>Earn and trade NFTs while you play</p>
                        </div>
                        <div className="feature col d-flex flex-column align-items-center justify-content-center">
                            <div className="feature-icon mb-1">
                                <img src={Icon3} alt="" />
                            </div>
                            <p className="fs-4 text-white mb-1">Daily Rewards</p>
                            <p className="text-center" style={{ color: '#9CA3AF' }}>Win prizes and climb the leaderboard</p>
                        </div>
                        <div className="feature col d-flex flex-column align-items-center justify-content-center">
                            <div className="feature-icon mb-1">
                                <img src={Icon4} alt="" />
                            </div>
                            <p className="fs-4 text-white mb-1">Community</p>
                            <p className="text-center" style={{ color: '#9CA3AF' }}>Connect with friends and players across Nigeria</p>
                        </div>
                    </div>
                    <hr className="w-100" style={{ color: '#4F4F4F' }} />
                </div>

                <div className="container px-3">
                    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 my-5 gap-5">
                        <div className="col mb-3 col-12 col-md-3">
                            <img src={Logo} alt="" />
                            <p className="mt-3 w-100" style={{ color: '#9CA3AF' }}>The ultimate Nigerian gaming platform</p>
                        </div>

                        <div className="col mb-3 ms-2">
                            <p style={{ color: 'white' }}>Games</p>
                            <ul className="nav flex-column ">
                                <Link to='/game1' style={{ textDecoration: 'none' }}><li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{ color: '#9CA3AF' }}>Streetz</a></li></Link>
                                <Link to='/game2' style={{ textDecoration: 'none' }} ><li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{ color: '#9CA3AF' }}>Who Sabi</a></li></Link>
                                <li className="nav-item mb-2"><a className="nav-link p-0" style={{ color: '#9CA3AF', cursor: 'pointer' }}>Hustlerz</a></li>
                            </ul>
                        </div>

                        <div className="col mb-3 ms-2">
                            <p style={{ color: 'white' }}>Community</p>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{ color: '#9CA3AF' }}>Twitter</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{ color: '#9CA3AF' }}>Instagram</a></li>
                            </ul>
                        </div>

                        <div className="col mb-3 ms-2">
                            <p style={{ color: 'white' }}>Support</p>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{ color: '#9CA3AF' }}>FAQ</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{ color: '#9CA3AF' }}>Contact Us</a></li>
                            </ul>
                        </div>
                        <hr className="w-100" style={{ color: '#4F4F4F' }} />

                    </footer>

                    
                </div> 

                <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center'>
                    <p className='text-center' style={{ color: '#9CA3AF' }}>© 2025 PlayNaij. All rights reserved.</p>
                </div>  
            </div>
                 
        </>
    )
}

export default Footer