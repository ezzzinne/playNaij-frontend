import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/Login';
import Layout from './layouts/GameLayout';
import Streetz from './games/web2/Streetz.tsx';
import HomePage from './pages/HomePage.tsx';
import { useState } from 'react';
import LandingLayout from './layouts/LandingLayout.tsx';
import HomeLayout from './layouts/HomeLayout.tsx';


function App() {
  const [, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingLayout><LandingPage /></LandingLayout>} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/home" element={<HomeLayout><HomePage /></HomeLayout>} />

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
