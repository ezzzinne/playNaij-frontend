import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import Layout from './layouts/GameLayout';
import Streetz from './games/web2/Streetz.tsx';
import HomePage from './pages/HomePage.tsx';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount.tsx';
import GameScreen from './games/web2/Streetz.tsx/components/GameScreen.tsx';
import WhoSabiGame from './games/web2/WhoSabi.tsx/index.tsx';
import LoadingScreen from './games/web2/WhoSabi.tsx/components/LoadingScreen.tsx';
import CategorySelection from './games/web2/WhoSabi.tsx/components/CategorySelection.tsx';
import VerifyAccount from './pages/verifyAccount.tsx';
import FriendsPage from './pages/Friends.tsx';
import Leaderboard from './pages/Leaderboard.tsx';
import ShareProfilePage from './pages/ShareProfile.tsx';
import WhoSabiStartScreen from './games/web2/WhoSabi.tsx/components/HomeScreen.tsx';
import QuestionScreen from './games/web2/WhoSabi.tsx/components/QuestionScreen.tsx';
import InviteFriendsScreen from './pages/InviteFriendsProfileScreen.tsx';
import MainScreen from './pages/MainProfileScreen.tsx';
import EditProfileScreen from './pages/EditProfileScreen.tsx';
import AccountSettingsScreen from './pages/AccountSettingsProfileScreen.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import AppLayout from './layouts/HomeLayout.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<AppLayout><LandingPage /></AppLayout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/verify" element={<VerifyAccount />} />
          <Route path="/home" element={<AppLayout><HomePage /></AppLayout>} />
          <Route path="/game" element={<Layout><GameScreen /></Layout>} />
          <Route path="/loading" element={<Layout><LoadingScreen /></Layout>} />
          <Route path='/categories' element={<Layout><CategorySelection onSelect={(category) => console.log(category)} /></Layout>} />
          <Route path='/play' element={<Layout><WhoSabiStartScreen /></Layout>} />
          <Route path="/questions/:category" element={<Layout><QuestionScreen /></Layout>} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/share-profile" element={<ShareProfilePage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/invite" element={<InviteFriendsScreen onBack={function (): void {
            throw new Error('Function not implemented.');
          } } />} />
          <Route path="/main" element={<MainScreen onInviteFriends={function (): void {
            throw new Error('Function not implemented.');
          } } onEditProfile={function (): void {
            throw new Error('Function not implemented.');
          } } onAccountSettings={function (): void {
            throw new Error('Function not implemented.');
          } } />} />
          <Route path="/edit" element={<EditProfileScreen onBack={function (): void {
            throw new Error('Function not implemented.');
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } } onSave={function (_nick: string, _avatar: string): void {
            throw new Error('Function not implemented.');
          } } />} />
          <Route path="/account" element={<AccountSettingsScreen onBack={function (): void {
            throw new Error('Function not implemented.');
          } } />} />

          
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
