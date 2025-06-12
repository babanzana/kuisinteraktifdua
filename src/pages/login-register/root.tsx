import React, { useState, FormEvent, MouseEvent } from "react";

// Types
interface FormData {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

interface HeaderWithAuthProps {
  activeView: "login" | "register";
  onViewChange: (view: "login" | "register") => void;
}

// Styles (moved to top for better organization)
const styles = {
  // Container styles
  container: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
  } as React.CSSProperties,

  // Header styles
  header: {
    backgroundColor: "#2563eb",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  } as React.CSSProperties,

  // Logo styles
  logo: {
    backgroundColor: "#e5e7eb",
    padding: "12px 24px",
    color: "#374151",
    fontSize: "18px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px",
  } as React.CSSProperties,

  // Auth buttons container
  authButtons: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  } as React.CSSProperties,

  // Auth button styles
  authButton: {
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    padding: "10px 20px",
    backgroundColor: "transparent",
    border: "2px solid #ffffff",
    borderRadius: "6px",
    transition: "all 0.3s ease",
  } as React.CSSProperties,

  authButtonActive: {
    color: "#2563eb",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    padding: "10px 20px",
    backgroundColor: "#ffffff",
    border: "2px solid #ffffff",
    borderRadius: "6px",
    transition: "all 0.3s ease",
  } as React.CSSProperties,

  // Main content area
  mainContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 80px)",
    padding: "40px 20px",
  } as React.CSSProperties,

  // Form container with swipe animation
  formContainer: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    padding: "40px",
    width: "100%",
    maxWidth: "400px",
    position: "relative",
    overflow: "hidden",
  } as React.CSSProperties,

  // Swipe content wrapper
  swipeWrapper: {
    display: "flex",
    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    width: "200%",
  } as React.CSSProperties,

  // Individual form styles
  formSection: {
    width: "50%",
    minHeight: "400px",
    padding: "0 20px",
    boxSizing: "border-box",
  } as React.CSSProperties,

  formTitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "8px",
    textAlign: "center",
  } as React.CSSProperties,

  formSubtitle: {
    fontSize: "16px",
    color: "#6b7280",
    marginBottom: "32px",
    textAlign: "center",
  } as React.CSSProperties,

  // Form input styles
  inputGroup: {
    marginBottom: "20px",
  } as React.CSSProperties,

  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
    marginBottom: "6px",
  } as React.CSSProperties,

  input: {
    width: "100%",
    padding: "12px 16px",
    fontSize: "16px",
    border: "2px solid #e5e7eb",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  } as React.CSSProperties,

  inputFocus: {
    borderColor: "#2563eb",
  } as React.CSSProperties,

  // Submit button
  submitButton: {
    width: "100%",
    padding: "14px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#ffffff",
    backgroundColor: "#2563eb",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.2s",
    marginTop: "20px",
  } as React.CSSProperties,

  submitButtonHover: {
    backgroundColor: "#1d4ed8",
  } as React.CSSProperties,

  // Switch form link
  switchLink: {
    textAlign: "center",
    marginTop: "24px",
    fontSize: "14px",
    color: "#6b7280",
  } as React.CSSProperties,

  switchButton: {
    color: "#2563eb",
    fontWeight: "500",
    cursor: "pointer",
    textDecoration: "underline",
    background: "none",
    border: "none",
    fontSize: "14px",
  } as React.CSSProperties,
};

// Login Form Component
const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister }) => {
  const [formData, setFormData] = useState<
    Pick<FormData, "email" | "password">
  >({
    email: "",
    password: "",
  });
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      alert("Semua field harus diisi!");
      return;
    }

    console.log("Login:", formData);
    alert("Login berhasil!");
  };

  const handleInputChange =
    (field: keyof Pick<FormData, "email" | "password">) =>
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const getInputStyle = (inputName: string): React.CSSProperties => ({
    ...styles.input,
    ...(focusedInput === inputName ? styles.inputFocus : {}),
  });

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.style.backgroundColor =
      styles.submitButtonHover.backgroundColor!;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.style.backgroundColor =
      styles.submitButton.backgroundColor!;
  };

  return (
    <div style={styles.formSection}>
      <h2 style={styles.formTitle}>Selamat Datang</h2>
      <p style={styles.formSubtitle}>Masuk ke akun Anda</p>

      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="login-email">
            Email
          </label>
          <input
            id="login-email"
            style={getInputStyle("email")}
            type="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
            placeholder="Masukkan email Anda"
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="login-password">
            Password
          </label>
          <input
            id="login-password"
            style={getInputStyle("password")}
            type="password"
            value={formData.password}
            onChange={handleInputChange("password")}
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
            placeholder="Masukkan password Anda"
            required
          />
        </div>

        <button
          type="submit"
          style={styles.submitButton}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Masuk
        </button>
      </form>

      <div style={styles.switchLink}>
        Belum punya akun?{" "}
        <button
          type="button"
          style={styles.switchButton}
          onClick={onSwitchToRegister}
        >
          Daftar sekarang
        </button>
      </div>
    </div>
  );
};

// Register Form Component
const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState<Required<FormData>>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Semua field harus diisi!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Password tidak cocok!");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password harus minimal 6 karakter!");
      return;
    }

    console.log("Register:", {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
    alert("Registrasi berhasil!");
  };

  const handleInputChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const getInputStyle = (inputName: string): React.CSSProperties => ({
    ...styles.input,
    ...(focusedInput === inputName ? styles.inputFocus : {}),
  });

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.style.backgroundColor =
      styles.submitButtonHover.backgroundColor!;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.style.backgroundColor =
      styles.submitButton.backgroundColor!;
  };

  return (
    <div style={styles.formSection}>
      <h2 style={styles.formTitle}>Buat Akun Baru</h2>
      <p style={styles.formSubtitle}>Daftar untuk memulai</p>

      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="register-name">
            Nama Lengkap
          </label>
          <input
            id="register-name"
            style={getInputStyle("name")}
            type="text"
            value={formData.name}
            onChange={handleInputChange("name")}
            onFocus={() => setFocusedInput("name")}
            onBlur={() => setFocusedInput(null)}
            placeholder="Masukkan nama lengkap"
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="register-email">
            Email
          </label>
          <input
            id="register-email"
            style={getInputStyle("email")}
            type="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
            placeholder="Masukkan email Anda"
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="register-password">
            Password
          </label>
          <input
            id="register-password"
            style={getInputStyle("password")}
            type="password"
            value={formData.password}
            onChange={handleInputChange("password")}
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
            placeholder="Buat password (min. 6 karakter)"
            required
            minLength={6}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="register-confirm-password">
            Konfirmasi Password
          </label>
          <input
            id="register-confirm-password"
            style={getInputStyle("confirmPassword")}
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange("confirmPassword")}
            onFocus={() => setFocusedInput("confirmPassword")}
            onBlur={() => setFocusedInput(null)}
            placeholder="Konfirmasi password"
            required
          />
        </div>

        <button
          type="submit"
          style={styles.submitButton}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Daftar
        </button>
      </form>

      <div style={styles.switchLink}>
        Sudah punya akun?{" "}
        <button
          type="button"
          style={styles.switchButton}
          onClick={onSwitchToLogin}
        >
          Masuk di sini
        </button>
      </div>
    </div>
  );
};

// Header Component
const HeaderWithAuth: React.FC<HeaderWithAuthProps> = ({
  activeView,
  onViewChange,
}) => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Image Logo</div>
      <nav
        style={styles.authButtons}
        role="navigation"
        aria-label="Authentication"
      >
        <button
          type="button"
          style={
            activeView === "login" ? styles.authButtonActive : styles.authButton
          }
          onClick={() => onViewChange("login")}
          aria-pressed={activeView === "login"}
        >
          Login
        </button>
        <button
          type="button"
          style={
            activeView === "register"
              ? styles.authButtonActive
              : styles.authButton
          }
          onClick={() => onViewChange("register")}
          aria-pressed={activeView === "register"}
        >
          Registrasi
        </button>
      </nav>
    </header>
  );
};

// Main Root Component
export const RootLoginRegister: React.FC = () => {
  const [activeView, setActiveView] = useState<"login" | "register">("login");

  const handleViewChange = (view: "login" | "register"): void => {
    setActiveView(view);
  };

  const swipeStyle: React.CSSProperties = {
    ...styles.swipeWrapper,
    transform: activeView === "login" ? "translateX(0%)" : "translateX(-50%)",
  };

  return (
    <div style={styles.container}>
      <HeaderWithAuth activeView={activeView} onViewChange={handleViewChange} />

      <main style={styles.mainContent}>
        <div style={styles.formContainer}>
          <div style={swipeStyle}>
            <LoginForm onSwitchToRegister={() => setActiveView("register")} />
            <RegisterForm onSwitchToLogin={() => setActiveView("login")} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RootLoginRegister;
