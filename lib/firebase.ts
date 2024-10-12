// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import { getDatabase } from "firebase/database"; // For Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIOcyUgDNvU5ZVb-ViKxl2iphRzzD0tmU",
  authDomain: "schoolmanagementsystem-dcf71.firebaseapp.com",
  projectId: "schoolmanagementsystem-dcf71",
  storageBucket: "schoolmanagementsystem-dcf71.appspot.com",
  messagingSenderId: "289346567275",
  appId: "1:289346567275:web:9d16a74a99ef603049852e",
  measurementId: "G-L5XCX72X6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const database = getDatabase(app); // Initialize Realtime Database

// Export the initialized services
export { storage, database };
