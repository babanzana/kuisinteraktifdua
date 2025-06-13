"use client";
import HeaderComponent from "@/component/header.component";
import Login from "@/pages/login/login.component";
import Register from "@/pages/registrasi/registrasi.component";

import React, { useState } from "react";
import { User } from "./page";
type CurrentPage = "login" | "register";

// 1. Definisikan tipe untuk props yang diterima
interface IndexLoginProps {
  onLoginSuccess: (userData: User) => void;
}

export default function IndexLogin({ onLoginSuccess }: IndexLoginProps) {
  const [currentPage, setCurrentPage] = useState<CurrentPage>("login");

  const handleLoginClick = () => {
    setCurrentPage("login");
  };

  const handleRegisterClick = () => {
    setCurrentPage("register");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "login":
        // 2. Teruskan props onLoginSuccess ke komponen Login
        return <Login onLoginSuccess={onLoginSuccess} />;
      case "register":
        return <Register />; // Anda mungkin juga perlu meneruskan props ke sini nanti
      default:
        return <Login onLoginSuccess={onLoginSuccess} />;
    }
  };

  return (
    <div style={styles.container}>
      <HeaderComponent
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
      />
      <div style={styles.content}>{renderCurrentPage()}</div>
    </div>
  );
}

export const styles = {
  container: {
    backgroundColor: "#5ed6ff",
    minHeight: "100vh",
  },
  content: {
    flex: 1,
    backgroundColor: "#5ed6ff",
  },
};
