// import { initializeApp } from 'firebase/app';
// // import { getAnalytics } from 'firebase/analytics';

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
// };

// export const app = initializeApp(firebaseConfig);
// // export const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4Zp46DkQoPnK-RQvJBmOf5f-ebQS2gnY",
  authDomain: "casual-web-game.firebaseapp.com",
  projectId: "casual-web-game",
  appId: "1:397983629321:web:6694ec953f1577274ff8d8",
};

export const app = initializeApp(firebaseConfig);
