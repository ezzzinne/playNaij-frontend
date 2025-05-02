import Logo from '../assets/Logo.svg'
import '../pages/LandingPage.css'

function Footer () {
    return (
        <>
            <div className="container px-3">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 my-5 gap-5">
                <div className="col mb-3 col-12 col-md-3">
                    <img src={Logo} alt="" />
                    <p className="mt-3 w-100" style={{ color: '#9CA3AF' }}>The ultimate Nigerian gaming platform</p>
                </div>

                <div className="col mb-3 ms-2">
                    <p style={{ color: 'white' }}>Games</p>
                    <ul className="nav flex-column ">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{ color: '#9CA3AF' }}>Streetz</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{ color: '#9CA3AF' }}>Who Sabi</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{ color: '#9CA3AF' }}>Hustlerz</a></li>
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

            <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center'>
                <p className='text-center' style={{ color: '#9CA3AF' }}>© 2025 PlayNaij. All rights reserved.</p>
            </div>
        </div>        
        </>
    )
}

export default Footer