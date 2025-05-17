import React, { useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { styles } from "../styles";
import { Link } from "react-router-dom";

interface Props {
  onBack(): void;
}

const avatars = [
  "images/avatar1.png",
  "images/avatar2.png",
  "images/avatar3.png",
  "images/avatar4.png",
  "images/avatar5.png",
  "images/avatar6.png",
  "images/avatar7.png"
];

const EditProfileScreen: React.FC<Props & { onSave: (nick: string, avatar: string) => void }> = ({
  onBack,
  onSave,
}) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [sel, setSel] = useState(avatars[0]);
  const [nick, setNick] = useState("JonDoe419");

  const handleSave = () => {
    onSave(nick, sel);
    onBack();
  };

  return (
    <div
      style={{
        ...styles.container,
        padding: isMobile ? 12 : 24,
      }}
    >
      <Link to="/main">
        <button style={styles.backBtn}>
          ← Close
        </button>
      </Link>
      <h3 style={styles.sectionTitle}>EDIT MY PROFILE</h3>

      <h4>1. CHOOSE AN AVATAR</h4>
      <div
        style={{
          ...styles.avatarRow,
          flexWrap: isMobile ? "wrap" : "nowrap",
        }}
      >
        {avatars.map((a) => (
          <img
            key={a}
            src={a}
            alt=""
            onClick={() => setSel(a)}
            style={{
              ...styles.avatarChoice,
              border:
                sel === a ? "3px solid #00C47A" : "3px solid transparent",
            }}
          />
        ))}
      </div>

      <h4>2. YOUR NICKNAME</h4>
      <p style={styles.smaller}>This is the name other players will see</p>
      <div
        style={{
          ...styles.editRow,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 12 : 8,
        }}
      >
        <input
          value={nick}
          onChange={(e) => setNick(e.target.value)}
          style={{
            ...styles.input,
            width: isMobile ? "100%" : "auto",
            marginBottom: isMobile ? 8 : 0,
          }}
        />
        <button
          style={{
            ...styles.btnGreen,
            width: isMobile ? "100%" : "auto",
          }}
        >
          Change
        </button>
      </div>

      <button
        onClick={handleSave}
        style={{
          ...styles.btnGreen,
          width: isMobile ? "100%" : "auto",
          marginTop: isMobile ? 16 : 8,
        }}
      >
        Save
      </button>
    </div>
  );
};

export default EditProfileScreen;
