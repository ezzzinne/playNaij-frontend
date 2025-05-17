import { CSSProperties } from "react";

export const styles: Record<string, CSSProperties> = {
  // Base
  container: {
    fontFamily:  '"Rubik", sans-serif ',
    background: "#0D1017",
    color: "#FFFFFF",
    minHeight: "100vh",
    boxSizing: "border-box",
  },
  backBtn: {
    background: "none",
    border: "none",
    color: "#00C47A",
    cursor: "pointer",
    fontSize: 16,
    marginBottom: 16,
  },

  // HEADER
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px",
    gap: 20,
  },
  profileInfo: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: "50%",
    border: "2px solid #00C47A",
  },
  username: { fontSize: 20, fontWeight: 600, margin: 0 },
  subtitle: {
    fontSize: 12,
    color: "#94A3B8",
    margin: "4px 0",
    textTransform: "uppercase",
  },
  xpBar: {
    width: 240,
    height: 12,
    background: "#1E293B",
    borderRadius: 6,
    overflow: "hidden",
  },
  xpFill: {
    height: "100%",
    background: "#FACC15",
  },
  xpLabel: { fontSize: 10, marginTop: 4, color: "#94A3B8" },

  topStats: {
    display: "flex",
    gap: 12,
  },
  statCard: {
    background: "#1E293B",
    borderRadius: 8,
    padding: "12px 16px",
    textAlign: "center",
    minWidth: 96,
  },
  small: { fontSize: 12, margin: 0, color: "#94A3B8" },
  large: { fontSize: 24, fontWeight: 600, margin: 0 },
  statLabel: { fontSize: 12, margin: 0 },

  buttonsCol: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  btnGray: {
    background: "#334155",
    border: "none",
    borderRadius: 6,
    padding: "8px 12px",
    color: "#FFFFFF",
    cursor: "pointer",
    fontSize: 14,
    textAlign: "center",
  },

  // MAIN GRID
  mainGrid: {
    display: "flex",
    gap: 20,
    padding: "0 24px 24px",
  },
  leftCol: { flex: 2 },
  rightCol: {
    flex: 1,
    background: "#1E293B",
    borderRadius: 8,
    padding: 16,
  },

  // My Games
  sectionTitle: { fontSize: 16, fontWeight: 600, marginBottom: 12, fontFamily: '"Rubik", sans-serif' },
  tabs: { display: "flex", gap: 16, marginBottom: 16 },
  tab: {
    fontSize: 12,
    color: "#94A3B8",
    borderBottom: "none",
    paddingBottom: 4,
    cursor: "pointer",
  },
  tabActive: {
    fontSize: 12,
    color: "#00C47A",
    borderBottom: "2px solid #00C47A",
    paddingBottom: 4,
    cursor: "pointer",
  },

  gameRow: {
    display: "flex",
    gap: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  gameImg: { width: 100, height: 56, borderRadius: 6, objectFit: "cover" },
  xpBarSmall: {
    width: 120,
    height: 8,
    background: "#334155",
    borderRadius: 4,
    overflow: "hidden",
    margin: "4px 0",
  },
  xpFillSmall: { height: "100%", background: "#FACC15" },

  // Continue / Invite
  btnGreen: {
    background: "#00C47A",
    border: "none",
    borderRadius: 8,
    color: "#FFFFFF",
    padding: "12px 16px",
    fontSize: 14,
    cursor: "pointer",
    width: "100%",
    marginTop: 12,
  },

  divider: {
    height: 1,
    background: "#334155",
    margin: "16px 0",
  },

  // Friends Row (Invite Screen)
  friendRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  friendAvatar: { width: 48, height: 48, borderRadius: "50%" },
  btnRemove: {
    background: "#00C47A",
    border: "none",
    borderRadius: 6,
    color: "#FFFFFF",
    padding: "6px 12px",
    cursor: "pointer",
    fontSize: 12,
  },

  // Edit Profile
  avatarRow: {
    display: "flex",
    gap: 12,
    marginBottom: 24,
  },

  avatarChoice: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    cursor: "pointer",
    border: "2px solid transparent",
  },

  editRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    marginBottom: 24,
  },
  input: {
    flex: 1,
    padding: 8,
    borderRadius: 6,
    border: "1px solid #334155",
    background: "#1E293B",
    color: "#FFFFFF",
    fontSize: 14,
  },

  // Account Settings
  section: { marginBottom: 24 },
  linkBtn: {
    background: "none",
    border: "none",
    color: "#3B82F6",
    cursor: "pointer",
    fontSize: 14,
  },
};