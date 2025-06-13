// "use client";
// import React, { useState } from "react";
// import MainComponent from "./index.main";
// import Login from "@/pages/login/login.component";

// // Interface untuk tipe User
// export interface User {
//   id: string;
//   name: string;
//   username: string;
//   createdAt?: string;
// }

// export default function Home() {
//   // 1. State untuk status login dan data user
//   const [isLogin, setIsLogin] = useState(false);
//   const [currentUser, setCurrentUser] = useState<User | null>(null);

//   // 2. Fungsi untuk menangani login yang berhasil
//   const handleLoginSuccess = (userData: User) => {
//     console.log("Login berhasil, data user:", userData);
//     setCurrentUser(userData);
//     setIsLogin(true);
//   };

//   // 3. Fungsi untuk menangani logout
//   const handleLogout = () => {
//     setCurrentUser(null);
//     setIsLogin(false);
//   };

//   return (
//     <div style={styles.container}>
//       {!isLogin ? (
//         <Login onLoginSuccess={handleLoginSuccess} />
//       ) : (
//         <MainComponent currentUser={currentUser} onLogout={handleLogout} />
//       )}
//     </div>
//   );
// }

// export const styles = {
//   container: {
//     backgroundColor: "white",
//     minHeight: "100vh",
//   },
//   content: {
//     flex: 1,
//   },
// };

"use client";
import React, { useState } from "react";
import MainComponent from "./index.main";
import IndexLogin from "./index.login"; // Import IndexLogin bukan Login langsung

// Interface untuk tipe User
export interface User {
  id: string;
  name: string;
  username: string;
  createdAt?: string;
}

export default function Home() {
  // 1. State untuk status login dan data user
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // 2. Fungsi untuk menangani login yang berhasil
  const handleLoginSuccess = (userData: User) => {
    console.log("Login berhasil, data user:", userData);
    setCurrentUser(userData);
    setIsLogin(true);
  };

  // 3. Fungsi untuk menangani logout
  const handleLogout = () => {
    setCurrentUser(null);
    setIsLogin(false);
  };

  return (
    <div style={styles.container}>
      {!isLogin ? (
        // Gunakan IndexLogin yang berisi HeaderComponent
        <IndexLogin onLoginSuccess={handleLoginSuccess} />
      ) : (
        <MainComponent currentUser={currentUser} onLogout={handleLogout} />
      )}
    </div>
  );
}

export const styles = {
  container: {
    backgroundColor: "white",
    minHeight: "100vh",
  },
  content: {
    flex: 1,
  },
};