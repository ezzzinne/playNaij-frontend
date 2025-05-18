import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";



export const loginWithFacebook = async (navigate: ReturnType<typeof useNavigate>) => {
    const auth = getAuth(app);
    const fbProvider = new FacebookAuthProvider();
  
try {
    const result = await signInWithPopup(auth, fbProvider);
    const user = result.user;
    const idToken = await user.getIdToken();

    console.log("Facebook ID Token:", idToken);

    // Send ID Token to your backend
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
    console.error("Facebook login error:", error.message);
  }
};
