// import React from "react";

// // StyleSheet object untuk mengelola semua styles
// const styles = {
//   // Container styles
//   container: {
//     fontFamily:
//       '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//   },

//   section: {
//     marginBottom: "32px",
//   },

//   title: {
//     fontSize: "20px",
//     fontWeight: "600",
//     marginBottom: "16px",
//     padding: "0 24px",
//     color: "#1f2937",
//   },

//   // Header styles
//   header: {
//     backgroundColor: "#2563eb",
//     padding: "16px 24px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//   },

//   // Logo styles
//   logo: {
//     backgroundColor: "#e5e7eb",
//     padding: "12px 24px",
//     color: "#374151",
//     fontSize: "18px",
//     fontWeight: "600",
//     border: "none",
//     cursor: "pointer",
//   },

//   // Navigation styles
//   nav: {
//     display: "flex",
//     gap: "32px",
//     alignItems: "center",
//   },

//   navLink: {
//     color: "#1f2937",
//     fontSize: "16px",
//     fontWeight: "500",
//     textDecoration: "none",
//     cursor: "pointer",
//     padding: "8px 0",
//     transition: "color 0.2s",
//   },

//   // Auth buttons container
//   authButtons: {
//     display: "flex",
//     gap: "16px",
//     alignItems: "center",
//   },

//   // Auth button styles
//   authButton: {
//     color: "#1f2937",
//     fontSize: "16px",
//     fontWeight: "500",
//     textDecoration: "none",
//     cursor: "pointer",
//     padding: "8px 16px",
//     backgroundColor: "transparent",
//     border: "none",
//     transition: "background-color 0.2s",
//   },
// };

// // Header dengan menu navigasi
// const HeaderWithMenu: React.FC = () => {
//   return (
//     <header style={styles.header}>
//       <div style={styles.logo}>Image Logo</div>
//       <nav style={styles.nav}>
//         <a href="#" style={styles.navLink}>
//           Kuis
//         </a>
//         <a href="#" style={styles.navLink}>
//           Cara Bermain
//         </a>
//         <a href="#" style={styles.navLink}>
//           Tentang
//         </a>
//         <a href="#" style={styles.navLink}>
//           Riwayat
//         </a>
//         <a href="#" style={styles.navLink}>
//           Logout
//         </a>
//       </nav>
//     </header>
//   );
// };

// // Header dengan login/registrasi
// const HeaderWithAuth: React.FC = () => {
//   return (
//     <header style={styles.header}>
//       <div style={styles.logo}>Image Logo</div>
//       <div style={styles.authButtons}>
//         <button style={styles.authButton}>Login</button>
//         <button style={styles.authButton}>Registrasi</button>
//       </div>
//     </header>
//   );
// };

// // Komponen utama yang menampilkan kedua variant
// const WebsiteHeaders: React.FC = () => {
//   return (
//     <div style={styles.container}>
//       <div style={styles.section}>
//         <h2 style={styles.title}>Header dengan Menu Navigasi</h2>
//         <HeaderWithMenu />
//       </div>

//       <div style={styles.section}>
//         <h2 style={styles.title}>Header dengan Login/Registrasi</h2>
//         <HeaderWithAuth />
//       </div>
//     </div>
//   );
// };

// export default WebsiteHeaders;

"use client";
import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <nav className={styles.nav}>
          <button className={styles.navButton} onClick={onLoginClick}>
            Login
          </button>
          <button className={styles.navButton} onClick={onRegisterClick}>
            Registrasi
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
