import React from "react";

// Header dengan menu navigasi (seperti gambar 1)
const HeaderWithMenu: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    backgroundColor: "#2563eb",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const logoStyle: React.CSSProperties = {
    backgroundColor: "#e5e7eb",
    padding: "12px 24px",
    color: "#374151",
    fontSize: "18px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
  };

  const navStyle: React.CSSProperties = {
    display: "flex",
    gap: "32px",
    alignItems: "center",
  };

  const navLinkStyle: React.CSSProperties = {
    color: "#1f2937",
    fontSize: "16px",
    fontWeight: "500",
    textDecoration: "none",
    cursor: "pointer",
    padding: "8px 0",
    transition: "color 0.2s",
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Image Logo</div>
      <nav style={navStyle}>
        <a href="#" style={navLinkStyle}>
          Kuis
        </a>
        <a href="#" style={navLinkStyle}>
          Cara Bermain
        </a>
        <a href="#" style={navLinkStyle}>
          Tentang
        </a>
        <a href="#" style={navLinkStyle}>
          Riwayat
        </a>
        <a href="#" style={navLinkStyle}>
          Logout
        </a>
      </nav>
    </header>
  );
};

// Header dengan login/registrasi (seperti gambar 2)
const HeaderWithAuth: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    backgroundColor: "#2563eb",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const logoStyle: React.CSSProperties = {
    backgroundColor: "#e5e7eb",
    padding: "12px 24px",
    color: "#374151",
    fontSize: "18px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
  };

  const authButtonsStyle: React.CSSProperties = {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  };

  const authButtonStyle: React.CSSProperties = {
    color: "#1f2937",
    fontSize: "16px",
    fontWeight: "500",
    textDecoration: "none",
    cursor: "pointer",
    padding: "8px 16px",
    backgroundColor: "transparent",
    border: "none",
    transition: "background-color 0.2s",
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Image Logo</div>
      <div style={authButtonsStyle}>
        <button style={authButtonStyle}>Login</button>
        <button style={authButtonStyle}>Registrasi</button>
      </div>
    </header>
  );
};

// Komponen utama yang menampilkan kedua variant
const WebsiteHeaders: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: "32px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "16px",
    padding: "0 24px",
    color: "#1f2937",
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Header dengan Menu Navigasi</h2>
        <HeaderWithMenu />
      </div>

      <div style={sectionStyle}>
        <h2 style={titleStyle}>Header dengan Login/Registrasi</h2>
        <HeaderWithAuth />
      </div>
    </div>
  );
};

export default WebsiteHeaders;
