/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import React, { useState } from "react";

interface HeaderMainProps {
  onKuisClick: () => void;
  onCaraBermainClick: () => void;
  onTentangClick: () => void;
  onRiwayatClick: () => void;
  onLogoutClick: () => void;
  currentUser: any;
  disabled?: boolean;
}

const HeaderMainComponent: React.FC<HeaderMainProps> = ({
  onKuisClick,
  onCaraBermainClick,
  onTentangClick,
  onRiwayatClick,
  onLogoutClick,
  currentUser,
  disabled,
}) => {
  const [activeButton, setActiveButton] = useState<
    "kuis" | "caraBermain" | "tentang" | "riwayat" | "logout" | null
  >("kuis");

  const handleButtonClick = (
    buttonType: "kuis" | "caraBermain" | "tentang" | "riwayat" | "logout",
    onClickHandler: () => void
  ) => {
    setActiveButton(buttonType);
    onClickHandler();
  };

  return (
    <div style={styles.header}>
      <div style={styles.logo}>
        <div style={styles.logoContainer}>
          <Image src="/logo.png" alt="Logo" fill style={styles.logoImage} />
        </div>
      </div>
      <div style={styles.navButtons}>
        <button
          style={{
            ...styles.button,
            color: activeButton === "kuis" ? "black" : "#888",
          }}
          onClick={() => handleButtonClick("kuis", onKuisClick)}
        >
          Kuis
        </button>
        <button
          style={{
            ...styles.button,
            color: activeButton === "caraBermain" ? "black" : "#888",
          }}
          onClick={() => handleButtonClick("caraBermain", onCaraBermainClick)}
        >
          Cara Bermain
        </button>
        <button
          style={{
            ...styles.button,
            color: activeButton === "tentang" ? "black" : "#888",
          }}
          onClick={() => handleButtonClick("tentang", onTentangClick)}
        >
          Tentang
        </button>
        <button
          style={{
            ...styles.button,
            color: activeButton === "riwayat" ? "black" : "#888",
          }}
          onClick={() => handleButtonClick("riwayat", onRiwayatClick)}
        >
          Riwayat
        </button>
        <button
          style={{
            ...styles.button,
            color: activeButton === "logout" ? "black" : "#888",
          }}
          onClick={() => handleButtonClick("logout", onLogoutClick)}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#055ecc",
    padding: "1rem 2rem",
    minHeight: "12vh",
    borderBottom: "2px solid rgb(27, 27, 28)",
    borderRadius: "0 0 20px 20px",
    marginBottom: "0",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#666",
  },
  logoContainer: {
    position: "relative" as const,
    width: "25vh",
    height: "12vh",
    minWidth: "100%",
    minHeight: "60px",
  },
  logoImage: {
    borderRadius: "8px",
    width: "100%",
    objectFit: "cover" as const,
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
  },
  navButtons: {
    display: "flex",
    gap: "1rem",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "color 0.2s ease", // Tambahan untuk transisi smooth
  },
};

export default HeaderMainComponent;
