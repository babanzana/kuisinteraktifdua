import React, { useState } from "react";

interface LoginData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field: keyof LoginData, value: string) => {
    setLoginData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = () => {
    console.log("Login data:", loginData);
    // Handle login logic here
    if (loginData.username && loginData.password) {
      alert(`Login berhasil untuk user: ${loginData.username}`);
    } else {
      alert("Mohon isi username dan password");
    }
  };

  const handleForgotPassword = () => {
    alert("Fitur lupa password akan segera tersedia");
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <h1 style={styles.title}>Silahkan Login ke Akun Anda</h1>

        <div style={styles.formContainer}>
          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>Username atau Email</label>
            <input
              type="text"
              style={styles.textInput}
              placeholder="Masukkan Username atau Email"
              value={loginData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                style={styles.passwordInput}
                placeholder="Masukkan Password"
                value={loginData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
              />
              <button
                type="button"
                style={styles.togglePasswordButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div style={styles.forgotPasswordContainer}>
            <button
              type="button"
              style={styles.forgotPasswordButton}
              onClick={handleForgotPassword}
            >
              Lupa Password?
            </button>
          </div>
        </div>

        <button
          style={styles.loginButton}
          onClick={handleLogin}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#1e40af")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#2563eb")
          }
        >
          Login
        </button>

        <div style={styles.registerLinkContainer}>
          <span style={styles.registerText}>Belum punya akun? </span>
          <button
            style={styles.registerLink}
            onClick={() => alert("Redirect ke halaman registrasi")}
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    position: "relative",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },

  // Main content styles - mempertahankan design form yang sudah ada
  mainContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "60px",
    paddingLeft: "20px",
    paddingRight: "20px",
    position: "relative",
    zIndex: 2,
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: "40px",
    paddingLeft: "20px",
    paddingRight: "20px",
    margin: "0 0 40px 0",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  },
  formContainer: {
    backgroundColor: "rgba(90, 155, 212, 0.95)",
    borderRadius: "20px",
    padding: "30px",
    width: "100%",
    maxWidth: "400px",
    marginBottom: "20px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(10px)",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  inputLabel: {
    fontSize: "14px",
    color: "white",
    marginBottom: "5px",
    fontWeight: "500",
    display: "block",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  },
  textInput: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "8px",
    padding: "12px 15px",
    fontSize: "16px",
    color: "#333",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxSizing: "border-box",
    outline: "none",
    transition: "all 0.2s",
  },
  passwordContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  passwordInput: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "8px",
    padding: "12px 45px 12px 15px",
    fontSize: "16px",
    color: "#333",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxSizing: "border-box",
    outline: "none",
    transition: "all 0.2s",
  },
  togglePasswordButton: {
    position: "absolute",
    right: "12px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    padding: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "24px",
    height: "24px",
  },
  forgotPasswordContainer: {
    textAlign: "right",
    marginTop: "10px",
  },
  forgotPasswordButton: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "12px",
    cursor: "pointer",
    textDecoration: "underline",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  },
  loginButton: {
    backgroundColor: "#2563eb",
    border: "none",
    borderRadius: "25px",
    padding: "15px 40px",
    minWidth: "150px",
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.2s",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    marginBottom: "20px",
  },
  registerLinkContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  registerText: {
    color: "white",
    fontSize: "14px",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  },
  registerLink: {
    background: "none",
    border: "none",
    color: "#60a5fa",
    fontSize: "14px",
    cursor: "pointer",
    textDecoration: "underline",
    fontWeight: "500",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  },
};

export default LoginForm;
