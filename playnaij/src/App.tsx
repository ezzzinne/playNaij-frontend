import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import CreateAccount from './components/CreateAccount';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
};

export default App;
