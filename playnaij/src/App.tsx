import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import CreateAccount from './components/CreateAccount';
import VerifyAccount from './pages/VerifyAccount';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/verify" element={<VerifyAccount />} /> {/* ✅ moved inside Routes */}
      </Routes>
    </Router>
  );
};

export default App;
