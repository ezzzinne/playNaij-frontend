import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const loginWithGoogle = async (navigate: ReturnType<typeof useNavigate>) => {
    
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const idToken = await user.getIdToken();

    console.log("ID Token:", idToken);

    const res = await fetch("https://casual-web-game-platform.onrender.com/api/auth/social-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    });

    const data = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/home");
    console.log("Backend Response:", data);

    return data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Google login error:", error.message);
}
};