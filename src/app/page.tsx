"use client";
import React, { useState } from "react";
import MainComponent from "./index.main";
import IndexLogin from "./index.login"; // Import IndexLogin bukan Login langsung

export interface User {
  id: string;
  name: string;
  username: string;
  createdAt?: string;
}

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLoginSuccess = (userData: User) => {
    setCurrentUser(userData);
    setIsLogin(true);
  };

  // 3. Fungsi untuk menangani logout
  const handleLogout = () => {
    setCurrentUser(null);
    setIsLogin(false);
  };

  return (
    <div style={styles.container}>
      {!isLogin ? (
        <IndexLogin onLoginSuccess={handleLoginSuccess} />
      ) : (
        <MainComponent currentUser={currentUser} onLogout={handleLogout} />
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "white",
    minHeight: "100vh",
  },
  content: {
    flex: 1,
  },
};
