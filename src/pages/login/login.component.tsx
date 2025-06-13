/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, CSSProperties } from "react";
import { LoginUser } from "./../../../firebase";
import { User } from "@/app/page.jsx";

// Interface untuk tipe User
// interface User {
//   id: string;
//   name: string;
//   username: string;
//   createdAt?: string;
// }

// 2. Definisikan tipe untuk props
interface IndexLoginProps {
  onLoginSuccess: (userData: User) => void;
}

const Login: React.FC<IndexLoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State untuk pesan error
  const [isLoading, setIsLoading] = useState(false); // State untuk loading

  // 3. Ubah handleLogin menjadi async untuk menggunakan await
  const handleLogin = async () => {
    setError(""); // Reset pesan error
    setIsLoading(true); // Mulai loading

    // Validasi input dasar
    if (!username || !password) {
      setError("Username dan password tidak boleh kosong.");
      setIsLoading(false);
      return;
    }

    try {
      const result = await LoginUser(username, password);

      // 5. Periksa hasilnya
      if (result && result.success && result.user) {
        // Jika berhasil, panggil onLoginSuccess dari props
        console.log("Login berhasil:", result.user);
        onLoginSuccess(result.user);
      } else {
        // Jika gagal, tampilkan pesan error
        setError("Username atau password salah.");
      }
    } catch (err) {
      console.error("Error saat login:", err);
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false); // Selesai loading
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Silahkan Login Akun Pengguna Anda</h1>

      {/* Tampilkan pesan error jika ada */}
      {error && <p style={styles.errorText}>{error}</p>}

      <div style={styles.formContainer}>
        {/* ... input fields Anda ... */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            placeholder="Username"
            aria-label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            disabled={isLoading} // Nonaktifkan input saat loading
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            disabled={isLoading} // Nonaktifkan input saat loading
          />
        </div>
      </div>

      <button
        style={
          isLoading
            ? { ...styles.loginButton, ...styles.loginButtonDisabled }
            : styles.loginButton
        }
        onClick={handleLogin}
        disabled={isLoading} // Nonaktifkan tombol saat loading
      >
        {isLoading ? "Loading..." : "Login"}
      </button>
    </div>
  );
};

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
    position: "absolute", // Tambahkan ini
    top: "3rem", // 2rem dari atas
    left: "50%", // Tengah horizontal
    transform: "translateX(-50%)", // Untuk benar-benar memusatkan
  },
  formContainer: {
    backgroundColor: "#4d8bad", // Semi-transparent blue-gray
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
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent blue-gray
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
  // loginButton: {
  //   width: "15%",
  //   padding: "12px",
  //   fontSize: "1.1rem",
  //   fontWeight: "bold",
  //   color: "#fff",
  //   backgroundColor: "#6a4c93", // Purple color similar to the image
  //   border: "none",
  //   borderRadius: "25px",
  //   cursor: "pointer",
  //   transition: "all 0.3s ease",
  //   marginTop: "1rem",
  // },
  errorText: {
    color: "red",
    backgroundColor: "rgba(255, 220, 220, 0.9)",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "1rem",
    zIndex: 20,
    fontWeight: "bold",
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

  loginButtonDisabled: {
    backgroundColor: "#bca0dc",
    cursor: "not-allowed",
  },
};

export default Login;
