/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import HeaderMainComponent from "@/component/header-main.component";
import CaraBermain from "@/pages/cara-bermain/cara-bermain.component";
import KuisKateogri from "@/pages/kuis/kuis-kategori/kuis-kategori.component";
import KuisSoal from "@/pages/kuis/kuis-soal/kuis-soal.component";
import Kuis from "@/pages/kuis/kuis.component";
import Riwayat from "@/pages/riwayat/riwayat.component";
import Tentang from "@/pages/tentang/tentang.component";
import React, { useState } from "react";

// Interface untuk tipe User
interface User {
  id: string;
  name: string;
  username: string;
  createdAt?: string;
}

// Props untuk MainComponent
interface MainComponentProps {
  currentUser: User | null;
  onLogout: () => void;
}

type MainPage = "kuis" | "cara-bermain" | "tentang" | "riwayat" | "dashboard";
type QuizState = "landing" | "kategori" | "soal";

export default function MainComponent({
  currentUser,
  onLogout,
}: MainComponentProps) {
  const [currentPage, setCurrentPage] = useState<MainPage>("dashboard");
  const [quizState, setQuizState] = useState<QuizState>("landing");
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  // Handler untuk navigation utama
  const handleKuisClick = () => {
    setCurrentPage("kuis");
    setQuizState("landing"); // Reset ke landing page kuis
  };

  const handleCaraBermainClick = () => {
    setCurrentPage("cara-bermain");
    setQuizState("landing"); // Reset quiz state
  };

  const handleTentangClick = () => {
    setCurrentPage("tentang");
    setQuizState("landing"); // Reset quiz state
  };

  const handleRiwayatClick = () => {
    setCurrentPage("riwayat");
    setQuizState("landing"); // Reset quiz state
  };

  const handleLogoutClick = () => {
    // Panggil fungsi logout dari parent component
    onLogout();
  };

  // Handler untuk quiz flow
  const handleStartQuiz = () => {
    setQuizState("kategori");
  };

  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
    setQuizState("soal");
  };

  const handleBackToCategory = () => {
    setQuizState("kategori");
    setSelectedCategory(null);
  };

  const handleBackToLanding = () => {
    setQuizState("landing");
    setSelectedCategory(null);
  };

  // Render komponen kuis berdasarkan state
  const renderQuizComponent = () => {
    switch (quizState) {
      case "landing":
        return <Kuis onStartQuiz={handleStartQuiz} />;
      case "kategori":
        return (
          <KuisKateogri
            onCategorySelect={handleCategorySelect}
            onBackToLanding={handleBackToLanding}
          />
        );
      case "soal":
        return selectedCategory ? (
          <KuisSoal
            category={selectedCategory}
            onBackToCategory={handleBackToCategory}
            onBackToLanding={handleBackToLanding}
            currentUser={currentUser} // Pass currentUser ke KuisSoal
          />
        ) : null;
      default:
        return <Kuis onStartQuiz={handleStartQuiz} />;
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "kuis":
        return renderQuizComponent();
      case "cara-bermain":
        return <CaraBermain />;
      case "tentang":
        return <Tentang />;
      case "riwayat":
        return <Riwayat currentUser={currentUser} />; // Pass currentUser ke Riwayat juga
      default:
        return renderQuizComponent();
    }
  };

  // Tentukan apakah header harus dinonaktifkan
  const isHeaderDisabled = currentPage === "kuis" && quizState !== "landing";

  return (
    <div style={styles.container}>
      <HeaderMainComponent
        onKuisClick={handleKuisClick}
        onCaraBermainClick={handleCaraBermainClick}
        onTentangClick={handleTentangClick}
        onRiwayatClick={handleRiwayatClick}
        onLogoutClick={handleLogoutClick}
        disabled={isHeaderDisabled}
        currentUser={currentUser} // Pass currentUser ke Header jika diperlukan
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
