import React, { useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { styles } from "../styles";
import { Link } from "react-router-dom";

interface Props {
  onBack(): void;
}

const AccountSettingsScreen: React.FC<Props> = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [allow, setAllow] = useState(true);
  const loginId = "JonDoe419";

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
      <h3 style={styles.sectionTitle}>ACCOUNT SETTINGS</h3>

      <div style={styles.section}>
        <h4>LOGIN ID</h4>
        <p style={styles.smaller}>
          You use this to login, and nobody else can see it:
        </p>
        <div
          style={{
            ...styles.editRow,
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <span>{loginId}</span>
          <button style={styles.linkBtn}>Change</button>
        </div>
      </div>

      <div style={styles.section}>
        <h4>PASSWORD</h4>
        <div
          style={{
            ...styles.editRow,
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <span>••••••••••••••</span>
          <button style={styles.linkBtn}>Change</button>
        </div>
      </div>

      <div style={styles.section}>
        <p>Want People to Be Able to Follow You?</p>
        <label>
          <input
            type="radio"
            checked={allow}
            onChange={() => setAllow(true)}
          />{" "}
          Sure, other players on PlayNaij Games can follow me.
        </label>
        <br />
        <label>
          <input
            type="radio"
            checked={!allow}
            onChange={() => setAllow(false)}
          />{" "}
          Nope, don’t let anyone on PlayNaij Games follow me.
        </label>
      </div>

      <button style={{ ...styles.btnGreen, width: isMobile ? "100%" : "auto" }}>
        Save
      </button>
    </div>
  );
};

export default AccountSettingsScreen;
