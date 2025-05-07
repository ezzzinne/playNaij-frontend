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

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingLayout><LandingPage /></LandingLayout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/home" element={<HomeLayout><HomePage /></HomeLayout>} />
          <Route path="/game" element={<Layout><GameScreen /></Layout>} />

          <Route 
            path='/game1'
            element={
              <Layout>
                <Streetz />
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
