// This component displays a leaderboard with user ranks, names, and XP points.
import { Trophy } from "lucide-react";
import '../App.css';

interface User {
  rank: number;
  name: string;
  xp: number;
}

const users: User[] = [
  { rank: 1, name: "FAVOUR", xp: 1548197 },
  { rank: 2, name: "CHUCKS", xp: 1548190 },
  { rank: 3, name: "VIVIAN", xp: 1548189 },
  { rank: 4, name: "CHIGOZIE", xp: 1548122 },
  { rank: 5, name: "ADA", xp: 1548119 },
];

const rankColors: { [key: number]: React.CSSProperties } = {
  1: { backgroundColor: "#2F80ED", color: "#fff" },
  2: { backgroundColor: "#F59E0B", color: "#fff" }, // Bootstrap orange
  3: { backgroundColor: "#5B3303", color: "#fff" }, // Approx amber-800
};

const medalEmojis: { [key: number]: string } = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

const Leaderboard = () => {
  return (
    <div className="min-vh-100 text-white d-flex flex-column align-items-center p-4 leaderboard" style={{ backgroundColor: '#0F1623' }}>
      {/* Header */}
      <div className="d-flex align-items-center gap-3 mb-4 flex-wrap justify-content-center text-center">
        <Trophy className="text-warning" style={{ width: '32px', height: '32px' }} />
        <h1
          className="leaderboard fw-bold text-uppercase text-center"
          style={{ color: '#F59E0B', fontSize: '40px', letterSpacing: '0.1em' }}
        >
          LEADERBOARD
        </h1>
        <Trophy className="text-warning" style={{ width: '32px', height: '32px' }} />
      </div>

      {/* Table Header */}
      <div className="container-fluid" style={{ maxWidth: '768px' }}>
        <div className="row text-center fw-semibold fs-4 rounded py-2 mb-2">
          <div className="col-4 col-sm">RANK</div>
          <div className="col-4 col-sm">USER</div>
          <div className="col-4 col-sm">XP</div>
        </div>

        {/* User Rows */}
        {users.map((user) => (
          <div
            key={user.rank}
            className="row align-items-center text-center mb-4 rounded py-2 px-3"
            style={rankColors[user.rank] ?? { backgroundColor: '#92959C', color: '#fff' }}
          >
            <div className="col-4 col-sm">
              {medalEmojis[user.rank] ? (
                <span className="fs-4">{medalEmojis[user.rank]}</span>
              ) : (
                <span className="leaderboard fw-bold">#{user.rank}</span>
              )}
            </div>

            <div className="col-4 col-sm">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <div
                  className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center fw-bold"
                  style={{ width: '30px', height: '30px' }}
                >
                  {user.name[0]}
                </div>
                <span className="leaderboard fw-medium">{user.name}</span>
              </div>
            </div>

            {/* XP Points */}
            <div className="col-4 col-sm leaderboard font-monospace">
              {user.xp.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-4 w-100 px-3 px-sm-0" style={{ maxWidth: "400px" }}>
        <button
          className="btn btn-success px-5 rounded-pill fw-bold text-white"
          style={{ backgroundColor: '#10B981' }}
        >
          Continue Playing
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;