import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import Layout from './layouts/GameLayout';
import Streetz from './games/web2/Streetz.tsx';
import HomePage from './pages/HomePage.tsx';
import LandingLayout from './layouts/LandingLayout.tsx';
import HomeLayout from './layouts/HomeLayout.tsx';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount.tsx';
import GameScreen from './games/web2/Streetz.tsx/components/GameScreen.tsx';
import WhoSabiGame from './games/web2/WhoSabi.tsx/index.tsx';
import LoadingScreen from './games/web2/WhoSabi.tsx/components/LoadingScreen.tsx';
import CategorySelection from './games/web2/WhoSabi.tsx/components/CategorySelection.tsx';
import VerifyAccount from './pages/verifyAccount.tsx';
import FriendsPage from './tailwind-components/Friends.tsx';
import Leaderboard from './pages/Leaderboard.tsx';
import ShareProfilePage from './pages/ShareProfile.tsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingLayout><LandingPage /></LandingLayout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/verify" element={<VerifyAccount />} />
          <Route path="/home" element={<HomeLayout><HomePage /></HomeLayout>} />
          <Route path="/game" element={<Layout><GameScreen /></Layout>} />
          <Route path="/loading" element={<Layout><LoadingScreen /></Layout>} />
          <Route path='/categories' element={<Layout><CategorySelection /></Layout>} />
          <Route path="/friends" element={<FriendsPage />} />
        <Route path="/share-profile" element={<ShareProfilePage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
          
          <Route 
            path='/game1'
            element={
              <Layout>
                <Streetz />
              </Layout>
            }
          />

          <Route 
            path='/game2'
            element={
              <Layout>
                <WhoSabiGame />
              </Layout>
            }
          />

          <Route />
        </Routes>
      </Router>
    </>
    
  )
}

export default App
