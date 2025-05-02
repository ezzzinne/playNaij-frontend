import Footer from "../components/Footer"
import Frame from '../assets/Frame 2147227341.svg'
import Streetz from "../assets/Streetz.svg"
import WhoSabi from '../assets/Who sabi.svg'
import Hustlerz from '../assets/Hustlerz.svg'
import People from '../assets/People.svg'
import Icon1 from '../assets/Icon1.svg'
import Icon2 from '../assets/Icon2.svg'
import Icon3 from '../assets/Icon3.svg'
import Icon4 from '../assets/Icon4.svg'
import './LandingPage.css'


function LandingPage () {
    return (
        <>
            <img src={Frame} className="img-fluid" alt="" />

            <h3 className="text-center mt-4 fs-2" style={{ color: '#B5E9D8' }}>Available Games</h3>

            <div className="row row-cols-1 row-cols-md-3 g-4 p-5 container-fluid">
                <div className="col">
                    <div className="card h-100" style={{ borderColor: '#F59E0B', backgroundColor: '#0D1017D9' }}>
                        <img src={Streetz} className="card-img-top p-4" alt="..." />
                        <div className="card-body">
                            <p className="card-title mb-2 text-warning fs-3 mt-0">Streetz</p>
                            <p style={{ color: '#9CA3AF' }}>Build words in Pidgin English, use power-ups, and become the ultimate word master!</p>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <small style={{ color: '#8E7564'}}><span><img src={People} className="me-1" /></span>50K Players</small>
                                <button className="btn mx-3 text-white" style={{ backgroundColor: '#10B981' }}>Play Now</button>
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
                                <button className="btn mx-3 text-white" style={{ backgroundColor: '#10B981' }}>Play Now</button>
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
                                <button className="btn mx-3 text-white" style={{ backgroundColor: '#10B981' }}>Play Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="text-center fs-1" style={{ color: '#E7F8F2'}}>Why Choose PlayNaij?</h3>
            <p className="text-center fs-4" style={{ color: '#9CA3AF'}}>Experience gaming with authentic Nigerian flavor!</p>
        
            <div className="row g-4 p-5 row-cols-2 row-cols-md-4">
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

            <Footer />
        </>
    )
}

export default LandingPage





