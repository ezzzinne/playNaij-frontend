import React, { useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { styles } from "../styles";

interface Props {
  onBack(): void;
}

const friends = [
  {
    id: "f1",
    name: "Olopa41900",
    lastGame: "Who Sabi?",
    avatar: "/images/avatar-police.png",
  },
  {
    id: "f2",
    name: "Baddie247",
    lastGame: "Who Sabi?",
    avatar: "/images/avatar-baddie.png",
  },
];

const InviteFriendsScreen: React.FC<Props> = ({ onBack }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const [friendList, setFriendList] = useState(friends);
  const [showInvitePopup, setShowInvitePopup] = useState(false);

  const handleRemove = (id: string) => {
    setFriendList(friendList.filter((friend) => friend.id !== id));
  };

  const handleInvite = () => {
    setShowInvitePopup(true); // Show the invite popup
  };

  const handleCopyLink = () => {
    const gameLink = `https://playnaij.com/invite`;
    navigator.clipboard.writeText(gameLink);
    alert(`Game link copied to clipboard: ${gameLink}`);
    setShowInvitePopup(false); // Close the popup after copying
  };

  return (
    <div
      style={{
        ...styles.container,
        padding: isMobile ? 12 : 24,
      }}
    >
      <button onClick={onBack} style={styles.backBtn}>
        ← Back
      </button>
      <h3 style={styles.sectionTitle}>FRIENDS FOLLOWED</h3>
      {friendList.map((f) => (
        <div
          key={f.id}
          style={{
            ...styles.friendRow,
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
          }}
        >
          <img src={f.avatar} alt="" style={styles.friendAvatar} />
          <div style={{ flex: 1, marginTop: isMobile ? 8 : 0 }}>
            <strong>{f.name}</strong>
            <p style={styles.smaller}>Last Game: {f.lastGame}</p>
          </div>
          <button
            onClick={() => handleRemove(f.id)}
            style={styles.btnRemove}
          >
            Remove
          </button>
        </div>
      ))}

      <h3 style={styles.sectionTitle}>INVITE FRIENDS</h3>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <button onClick={handleInvite} style={styles.btnGreen}>
          Invite Friend
        </button>
      </div>

      {showInvitePopup && (
        <div style={styles.popup}>
          <p style={styles.popupText}>
            Share this link to invite your friends:
          </p>
          <p style={styles.popupLink}>https://playnaij.com/invite</p>
          <button onClick={handleCopyLink} style={styles.btnGreen}>
            Copy Link
          </button>
          <button
            onClick={() => setShowInvitePopup(false)}
            style={styles.btnGray}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default InviteFriendsScreen;