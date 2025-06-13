/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set, get, child } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// firebase.js

const firebaseConfig = {
  apiKey: "AIzaSyCKS37bx_Nj-NOPIC054z-JXVbp__PKLO8",
  authDomain: "kuisinteraktif-4e7fc.firebaseapp.com",
  // UBAH BARIS INI
  databaseURL: "https://kuisinteraktif-4e7fc-default-rtdb.firebaseio.com",
  projectId: "kuisinteraktif-4e7fc",
  storageBucket: "kuisinteraktif-4e7fc.firebasestorage.app",
  messagingSenderId: "507314358577",
  appId: "1:507314358577:web:50a83bbd376f46a1618810",
  measurementId: "G-7GV1NSYNVB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

// Export database untuk digunakan di komponen lain
export { database };

// Fungsi untuk shuffle array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Register User
export const RegistrasiUser = async (name, username, password) => {
  try {
    const usersRef = ref(database, "users");
    const newUserRef = push(usersRef);
    const userId = newUserRef.key;

    await set(newUserRef, {
      id: userId,
      name: name,
      username: username,
      password: password,
      createdAt: new Date().toISOString(),
    });

    console.log("User registered successfully with ID:", userId);
    return { success: true, userId: userId };
  } catch (error) {
    console.error("Error registering user:", error);
    return { success: false, error: error.message };
  }
};

// Login User
export const LoginUser = async (username, password) => {
  try {
    const usersRef = ref(database, "users");
    const usersSnapshot = await get(usersRef);

    if (usersSnapshot.exists()) {
      const users = usersSnapshot.val();
      // Cari user yang cocok berdasarkan username dan password
      const user = Object.values(users).find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        console.log("Login successful for user:", user.name);
        return { success: true, user: user };
      } else {
        console.log("Invalid username or password");
        return { success: false, error: "Username atau password salah" };
      }
    } else {
      console.log("No users found in database");
      return { success: false, error: "Tidak ada user terdaftar" };
    }
  } catch (error) {
    console.error("Error during login:", error);
    return { success: false, error: error.message };
  }
};

// Ambil 30 soal random
export const GetRandomQuestions = async (category) => {
  try {
    const questionsRef = ref(database, `quiz/${category}`);
    const questionsSnapshot = await get(questionsRef);

    if (questionsSnapshot.exists()) {
      const questionsData = questionsSnapshot.val();
      const allQuestions = Object.values(questionsData);

      if (allQuestions.length === 0) {
        console.log("No questions found for category:", category);
        return [];
      }

      // Shuffle dan ambil maksimal 30 soal
      const shuffledQuestions = shuffleArray(allQuestions);
      const selectedQuestions = shuffledQuestions.slice(
        0,
        Math.min(30, shuffledQuestions.length)
      );

      console.log(
        `Loaded ${selectedQuestions.length} questions for category: ${category}`
      );
      return selectedQuestions;
    } else {
      console.log("No questions found for category:", category);
      return [];
    }
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};

// Fungsi tambahan untuk menyimpan hasil kuis
export const SaveQuizResult = async (
  userId,
  category,
  score,
  totalQuestions,
  answers
) => {
  try {
    const resultsRef = ref(database, "quiz_results");
    const newResultRef = push(resultsRef);

    await set(newResultRef, {
      userId: userId,
      category: category,
      score: score,
      totalQuestions: totalQuestions,
      percentage: Math.round((score / totalQuestions) * 100),
      answers: answers,
      completedAt: new Date().toISOString(),
    });

    console.log("Quiz result saved successfully");
    return { success: true, resultId: newResultRef.key };
  } catch (error) {
    console.error("Error saving quiz result:", error);
    return { success: false, error: error.message };
  }
};

// Fungsi untuk mengambil hasil kuis user
export const GetUserQuizResults = async (userId) => {
  try {
    const resultsRef = ref(database, "quiz_results");
    const resultsSnapshot = await get(resultsRef);

    if (resultsSnapshot.exists()) {
      const allResults = resultsSnapshot.val();
      const userResults = Object.values(allResults).filter(
        (result) => result.userId === userId
      );

      // Sort by completedAt (newest first)
      userResults.sort(
        (a, b) => new Date(b.completedAt) - new Date(a.completedAt)
      );

      return userResults;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching user quiz results:", error);
    throw error;
  }
};

// Fungsi untuk mengecek apakah username sudah ada
export const CheckUsernameExists = async (username) => {
  try {
    const usersRef = ref(database, "users");
    const usersSnapshot = await get(usersRef);

    if (usersSnapshot.exists()) {
      const users = usersSnapshot.val();
      const existingUser = Object.values(users).find(
        (user) => user.username === username
      );
      return existingUser !== undefined;
    }
    return false;
  } catch (error) {
    console.error("Error checking username:", error);
    return false;
  }
};

// Fungsi untuk mendapatkan statistik kuis
export const GetQuizStats = async (category) => {
  try {
    const questionsRef = ref(database, `quiz/${category}`);
    const questionsSnapshot = await get(questionsRef);

    if (questionsSnapshot.exists()) {
      const questionsData = questionsSnapshot.val();
      const totalQuestions = Object.keys(questionsData).length;

      return {
        totalQuestions: totalQuestions,
        category: category,
      };
    } else {
      return {
        totalQuestions: 0,
        category: category,
      };
    }
  } catch (error) {
    console.error("Error getting quiz stats:", error);
    return {
      totalQuestions: 0,
      category: category,
    };
  }
};

export default app;
