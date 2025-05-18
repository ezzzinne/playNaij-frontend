// src/pages/MainScreen.tsx
import React, { useEffect, useState } from "react";
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { styles } from '../styles';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";

interface Props {
  onInviteFriends(): void;
  onEditProfile(): void;
  onAccountSettings(): void;
}

const games = [
  { id: "1", title: "Streetz", xp: 100, mins: 7, img: "images/streetz.png" },
  { id: "2", title: "Who Sabi", xp: 150, mins: 10, img: "images/whosabi.png" },
  {
    id: "3",
    title: "Game 3?",
    xp: 100,
    mins: 7,
    img: "images/game3.png",
  },
];

const MainScreen: React.FC<Props> = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) return;

      try {
        const res = await fetch('https://casual-web-game-platform.onrender.com/api/users');
        const data = await res.json();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const currentUser = data.find((u: any) => u._id === userId);
        setUser(currentUser);
      } catch (err) {
        console.error('Failed to fetch user data:', err);
      }
    };

    fetchUser();
  }, []);

  const lastGame = {
    id: "3",
    title: "Game 3?",
    xp: 100,
    mins: 7,
    img: "images/game3.png",
  };

  // const lastGame = games[2];

  return (
    <div style={styles.container}>
      <HomeNavbar isLoggedIn={true} />
      {/* HEADER */}
      <div
        style={{
          ...styles.header,
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
        }}
      >
        <div
          style={{
            ...styles.profileInfo,
            marginBottom: isMobile ? 16 : 0,
          }}
        >
          <img src="images/avatar1.png" alt="" style={styles.avatar} />
          <div>
            <h2 style={styles.username}>JonDoe419</h2>
            <p style={styles.subtitle}>NEW KID IN THE BLOCK</p>
            <div style={styles.xpBar}>
              <div style={{ ...styles.xpFill, width: "70%" }} />
            </div>
            <p style={styles.xpLabel}>350/500 XP</p>
          </div>
        </div>

        <div
          style={{
            ...styles.topStats,
            flexWrap: isMobile ? "wrap" : "nowrap",
          }}
        >
          <div style={styles.statCard}>
            <p style={styles.small}>🔥 Play Streak</p>
            <strong>3 Days</strong>
            <p style={styles.smaller}>Highest: 3 Days</p>
          </div>
          <div style={styles.statCard}>
            <p style={styles.small}>👍 Games Liked</p>
            <strong>0</strong>
          </div>
          <div style={styles.statCard}>
            <strong style={styles.large}>3</strong>
            <p style={styles.small}>Games Played</p>
          </div>
          <div style={styles.statCard}>
            <strong style={styles.large}>0</strong>
            <p style={styles.small}>Levels Completed</p>
          </div>
        </div>

        <div
          style={{
            ...styles.buttonsCol,
            flexDirection: isMobile ? "row" : "column",
          }}
        >
          <Link to='/edit'>
            <button style={styles.btnGray}>
              Edit Profile
            </button>
          </Link>
          <Link to='/account'>
            <button style={styles.btnGray}>
              Account Settings
            </button>
          </Link>
        </div>
      </div>

      {/* MAIN GRID */}
      <div
        style={{
          ...styles.mainGrid,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* LEFT COLUMN */}
        <section style={styles.leftCol}>
          <h3 style={styles.sectionTitle}>MY GAMES</h3>
          <div style={styles.tabs}>
            {["XP", "Alphabetical", "Recently Played", "Favorites"].map(
              (tab, i) => (
                <span
                  key={tab}
                  style={
                    i === 0
                      ? { ...styles.tab, ...styles.tabActive }
                      : styles.tab
                  }
                >
                  {tab}
                </span>
              )
            )}
          </div>
          {games.map((g) => (
            <div key={g.id} style={styles.gameRow}>
              <img src={g.img} alt={g.title} style={styles.gameImg} />
              <div>
                <p style={styles.small}>{g.title}</p>
                <div style={styles.xpBarSmall}>
                  <div
                    style={{
                      ...styles.xpFillSmall,
                      width: `${(g.xp / 200) * 100}%`,
                    }}
                  />
                </div>
                <p style={styles.smaller}>Played {g.mins} Minutes</p>
              </div>
            </div>
          ))}
        </section>

        {/* RIGHT COLUMN */}
        <aside style={styles.rightCol}>
          <div>
            <h4 style={styles.sectionTitle}>LAST GAME PLAYED</h4>
            <p style={styles.smaller}>This is your last played game</p>
            <div style={styles.gameRow}>
              <img
                src={lastGame.img}
                alt={lastGame.title}
                style={styles.gameImg}
              />
              <div>
                <p style={styles.small}>{lastGame.title}</p>
                <p style={styles.smaller}>
                  {lastGame.xp} XP · {lastGame.mins} Minutes
                </p>
              </div>
            </div>
            <Link to='/game1'><button style={styles.btnGreen}>Continue</button></Link>
          </div>

          <div style={{ marginTop: 24 }}>
            <h4 style={styles.sectionTitle}>FRIENDS FOLLOWED</h4>
            <p style={styles.smaller}>
              Follow other players to see the games they’re playing and their
              levels.
            </p>
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <Link to='/invite'>
                <button
                  style={styles.btnGreen}
                >
                  Invite Friends
                </button>
              </Link>
            </div>
          </div>
        </aside>
      </div>
      <h3 className="text-center fs-1 mt-5 mb-0" style={{ color: '#E7F8F2'}}>Why Choose PlayNaij?</h3>
      <Footer />
    </div>
  );
};

export default MainScreen;
