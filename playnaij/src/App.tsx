import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShareProfilePage from "./pages/ShareProfile";
import FriendsPage from "./pages/Friends";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <BrowserRouter>
      {/* <Leaderboard /> */}
      <Routes>
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/share-profile" element={<ShareProfilePage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
