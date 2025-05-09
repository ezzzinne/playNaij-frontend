import Footer from "../components/Footer"
import Frame from '../assets/Frame 2147227341.svg'
import Streetz from "../assets/Streetz.svg"
import WhoSabi from '../assets/Who sabi.svg'
import Hustlerz from '../assets/Hustlerz.svg'
import People from '../assets/People.svg'
import './LandingPage.css'
import { Link } from "react-router-dom"

function HomePage () {
    return (
        <>
            <img src={Frame} className="img-fluid" alt="" />

            <h3 className="text-center mt-4 fs-2" style={{ color: '#B5E9D8' }}>Available Games</h3>

            <div className="row row-cols-1 row-cols-md-3 g-4 p-4 container-fluid" id="game-cards">
                <div className="col">
                    <div className="card h-100" style={{ borderColor: '#F59E0B', backgroundColor: '#0D1017D9' }}>
                        <img src={Streetz} className="card-img-top p-4" alt="..." />
                        <div className="card-body">
                            <p className="card-title mb-2 text-warning fs-3 mt-0">Streetz</p>
                            <p style={{ color: '#9CA3AF' }}>Build words in Pidgin English, use power-ups, and become the ultimate word master!</p>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <small style={{ color: '#8E7564'}}><span><img src={People} className="me-1" /></span>50K Players</small>
                                <button className="btn mx-2 text-white" style={{ backgroundColor: '#10B981' }}><Link to='/game1' style={{  color: 'white', textDecoration: 'none'}}>Play Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" style={{ borderColor: '#F59E0B', backgroundColor: '#0D1017D9' }}>
                        <img src={WhoSabi} className="card-img-top p-4" alt="..." />
                        <div className="card-body">
                            <p className="card-title mb-2 text-warning fs-3 mt-0">Who Sabi</p>
                            <p style={{ color: '#9CA3AF' }}>Test your knowledge of Naija culture, entertainment, and current events!</p>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <small style={{ color: '#8E7564'}}><span><img src={People} className="me-1" /></span>50K Players</small>
                                <button className="btn mx-2 text-white" style={{ backgroundColor: '#10B981' }}><Link to='/game2' style={{  color: 'white', textDecoration: 'none'}}>Play Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" style={{ borderColor: '#F59E0B', backgroundColor: '#0D1017D9' }}>
                        <img src={Hustlerz} className="card-img-top p-4" alt="..." />
                        <div className="card-body">
                            <p className="card-title mb-2 text-warning fs-3 mt-0">Hustlerz</p>
                            <p style={{ color: '#9CA3AF' }}>Run your virtual Lagos market stall with NFT-powered items and strategy!</p>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <small style={{ color: '#8E7564'}}><span><img src={People} className="me-1" /></span>50K Players</small>
                                <button className="btn btn-outline-success mx-1 text-white disabled" style={{ backgroundColor: '#0D1017' }}>Coming soon</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="text-center fs-1 mt-3 mb-0" style={{ color: '#E7F8F2'}}>Why Choose PlayNaij?</h3>
            <Footer />
        </>
    )
}

export default HomePage