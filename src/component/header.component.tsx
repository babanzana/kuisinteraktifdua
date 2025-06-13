import React, { useState } from "react";
import Image from "next/image";

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({
  onLoginClick,
  onRegisterClick,
}) => {
  const [activeButton, setActiveButton] = useState<"login" | "register" | null>(
    "login"
  );

  const handleLoginClick = () => {
    setActiveButton("login");
    onLoginClick();
  };

  const handleRegisterClick = () => {
    setActiveButton("register");
    onRegisterClick();
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
            color: activeButton === "login" ? "black" : "#888",
          }}
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          style={{
            ...styles.button,
            color: activeButton === "register" ? "black" : "#888",
          }}
          onClick={handleRegisterClick}
        >
          Registrasi
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
  logoutButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#dc3545",
    border: "none",
    fontSize: "1rem",
    color: "white",
    fontWeight: "500",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
  },
};

export default HeaderComponent;
