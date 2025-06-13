/* eslint-disable @typescript-eslint/no-unused-vars */
import { RegistrasiUser } from "./../../../firebase";
import React, { useState } from "react"; // Import fungsi dari file firebase

const Register: React.FC = () => {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    // Reset message
    setMessage("");

    // Validasi input
    if (
      !nama.trim() ||
      !username.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setMessage("Semua field harus diisi!");
      return;
    }

    // Validasi password match
    if (password !== confirmPassword) {
      setMessage("Password dan Confirm Password tidak cocok!");
      return;
    }

    // Validasi panjang password
    if (password.length < 6) {
      setMessage("Password minimal 6 karakter!");
      return;
    }

    setIsLoading(true);

    try {
      // Panggil fungsi registrasi dari Firebase
      const result = await RegistrasiUser(nama, username, password);

      if (result.success) {
        setMessage("Registrasi berhasil! Silakan login.");
        // Reset form
        setNama("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setMessage("Registrasi gagal. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Silahkan Registrasi Akun Pengguna Anda</h1>

      <div style={styles.formContainer}>
        {/* Tampilkan pesan */}
        {message && (
          <div
            style={{
              ...styles.message,
              backgroundColor: message.includes("berhasil")
                ? "#d4edda"
                : "#f8d7da",
              color: message.includes("berhasil") ? "#155724" : "#721c24",
              border: message.includes("berhasil")
                ? "1px solid #c3e6cb"
                : "1px solid #f5c6cb",
            }}
          >
            {message}
          </div>
        )}

        <div style={styles.inputGroup}>
          <label style={styles.label}>Nama</label>
          <input
            type="text"
            placeholder="Nama"
            aria-label="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            style={styles.input}
            disabled={isLoading}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            placeholder="Username"
            aria-label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            disabled={isLoading}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Password (minimal 6 karakter)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            disabled={isLoading}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
            disabled={isLoading}
          />
        </div>
      </div>

      <button
        style={{
          ...styles.loginButton,
          opacity: isLoading ? 0.6 : 1,
          cursor: isLoading ? "not-allowed" : "pointer",
        }}
        onClick={handleRegister}
        disabled={isLoading}
      >
        {isLoading ? "Mendaftar..." : "Registrasi"}
      </button>
    </div>
  );
};

import { CSSProperties } from "react";

export const styles: {
  [key: string]: CSSProperties;
} = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    backgroundColor: "#f0f0f0",
    padding: "2rem",
    minHeight: "88vh",
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    position: "relative",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  description: {
    fontSize: "1rem",
    textAlign: "center" as const,
    color: "#0000",
    lineHeight: "1.5",
    maxWidth: "500px",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    zIndex: 10,
    position: "absolute",
    top: "3rem",
    left: "50%",
    transform: "translateX(-50%)",
  },
  formContainer: {
    paddingTop: "-2rem",
    backgroundColor: "#4d8bad",
    padding: "1.5rem",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    minWidth: "350px",
    zIndex: 10,
  },
  inputGroup: {
    marginBottom: "1.5rem",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start" as const,
    width: "100%",
    position: "relative",
    zIndex: 10,
    borderRadius: "5px 5px 0 0",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  label: {
    display: "block",
    fontSize: "0.8rem",
    fontWeight: "600",
    color: "black",
    paddingTop: "0.5rem",
    paddingLeft: "0.5rem",
    borderRadius: "5px 5px 0 0",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#333",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  },
  loginButton: {
    width: "15%",
    padding: "12px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#6a4c93",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "1rem",
  },
  message: {
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "1rem",
    textAlign: "center" as const,
    fontSize: "0.9rem",
    fontWeight: "500",
  },
};

export default Register;
