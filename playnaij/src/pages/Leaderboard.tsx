// This component displays a leaderboard with user ranks, names, and XP points.
import { Trophy } from "lucide-react";

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

const rankColors: { [key: number]: string } = {
  1: "bg-blue-500 text-white",
  2: "bg-orange-400 text-white",
  3: "bg-amber-800 text-white",
};

const medalEmojis: { [key: number]: string } = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="flex items-center gap-4 mb-6">
        <Trophy className="text-yellow-400 w-8 h-8" />
        <h1 className="leaderboard text-[#f59e0b] text-[40px] font-bold tracking-widest">
          LEADERBOARD
        </h1>
        <Trophy className="text-yellow-400 w-8 h-8" />
      </div>

      <div className="w-full max-w-2xl space-y-2">
        <div className="grid grid-cols-3 text-[25px] rounded-lg text-center font-semibold py-2">
          <div className="leaderboard">RANK</div>
          <div className="leaderboard">USER</div>
          <div className="leaderboard">XP</div>
        </div>

        {users.map((user) => (
          <div
            key={user.rank}
            className={`grid grid-cols-3  items-center  mb-8 rounded-lg py-2 px-4 text-center ${
              rankColors[user.rank] ?? "bg-[#92959c]"
            }`}
          >
            <div>
              {medalEmojis[user.rank] ? (
                <span className="text-2xl">{medalEmojis[user.rank]}</span>
              ) : (
                <span className="leaderboard font-bold">#{user.rank}</span>
              )}
            </div>
            {/* <div className="flex items-center"> */}{" "}
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">
                {user.name[0]}
              </div>
              <span className="leaderboard flex items-center justify-center font-medium">
                {user.name}
              </span>
            </div>
            {/* </div> */}
            {/* XP */}
            <div className="leaderboard font-mono">
              {user.xp.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <button className="leaderboard bg-[#61cba8] py-4 px-15 mt-10 text-[#000] rounded-full">
        CONTINUE PLAYING
      </button>
    </div>
  );
};

export default Leaderboard;
