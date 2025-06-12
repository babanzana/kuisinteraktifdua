// // import React, { useState } from "react";

// // interface FormData {
// //   nama1: string;
// //   nama2: string;
// //   nama3: string;
// //   nama4: string;
// // }

// // const RegistrationForm: React.FC = () => {
// //   const [formData, setFormData] = useState<FormData>({
// //     nama1: "",
// //     nama2: "",
// //     nama3: "",
// //     nama4: "",
// //   });

// //   const handleInputChange = (field: keyof FormData, value: string) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       [field]: value,
// //     }));
// //   };

// //   const handleRegistration = () => {
// //     console.log("Registration data:", formData);
// //     // Handle registration logic here
// //   };

// //   const handleLogin = () => {
// //     console.log("Navigate to login");
// //     // Handle login navigation here
// //   };

// //   return (
// //     <div style={styles.container}>
// //       {/* Header */}
// //       <div style={styles.header}>
// //         <button
// //           onClick={handleLogin}
// //           style={styles.headerButton}
// //           onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
// //           onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
// //         >
// //           Login
// //         </button>
// //         <button
// //           style={styles.headerButton}
// //           onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
// //           onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
// //         >
// //           Registrasi
// //         </button>
// //       </div>

// //       {/* Main Content */}
// //       <div style={styles.mainContent}>
// //         <h1 style={styles.title}>Silahkan Registrasi Akun Pengguna Anda</h1>

// //         <div style={styles.formContainer}>
// //           <div style={styles.inputGroup}>
// //             <label style={styles.inputLabel}>Nama Lengkap</label>
// //             <input
// //               type="text"
// //               style={styles.textInput}
// //               placeholder="Masukkan Nama Lengkap"
// //               value={formData.nama1}
// //               onChange={(e) => handleInputChange("nama1", e.target.value)}
// //             />
// //           </div>

// //           <div style={styles.inputGroup}>
// //             <label style={styles.inputLabel}>Email</label>
// //             <input
// //               type="email"
// //               style={styles.textInput}
// //               placeholder="Masukkan Email"
// //               value={formData.nama2}
// //               onChange={(e) => handleInputChange("nama2", e.target.value)}
// //             />
// //           </div>

// //           <div style={styles.inputGroup}>
// //             <label style={styles.inputLabel}>Username</label>
// //             <input
// //               type="text"
// //               style={styles.textInput}
// //               placeholder="Masukkan Username"
// //               value={formData.nama3}
// //               onChange={(e) => handleInputChange("nama3", e.target.value)}
// //             />
// //           </div>

// //           <div style={styles.inputGroup}>
// //             <label style={styles.inputLabel}>Password</label>
// //             <input
// //               type="password"
// //               style={styles.textInput}
// //               placeholder="Masukkan Password"
// //               value={formData.nama4}
// //               onChange={(e) => handleInputChange("nama4", e.target.value)}
// //             />
// //           </div>
// //         </div>

// //         <button
// //           style={styles.registerButton}
// //           onClick={handleRegistration}
// //           onMouseEnter={(e) =>
// //             (e.currentTarget.style.backgroundColor = "#6B5CE7")
// //           }
// //           onMouseLeave={(e) =>
// //             (e.currentTarget.style.backgroundColor = "#7B68EE")
// //           }
// //         >
// //           Registrasi
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles: { [key: string]: React.CSSProperties } = {
// //   container: {
// //     minHeight: "100vh",
// //     backgroundImage: "url('/background.jpg')",
// //     backgroundSize: "cover", // Gambar akan menutupi seluruh area (mungkin ter-crop sebagian)
// //     backgroundPosition: "center", // Pusatkan gambar
// //     backgroundRepeat: "no-repeat",
// //     backgroundAttachment: "fixed", // Opsional: biarkan background tetap saat scroll
// //     // Pastikan container relatif untuk overlay
// //     position: "relative",
// //   },
// //   overlay: {
// //     position: "absolute",
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     backgroundColor: "rgba(0, 0, 0, 0.4)", // Overlay hitam transparan
// //     zIndex: 1,
// //   },
// //   header: {
// //     backgroundColor: "rgba(33, 150, 243, 0.9)", // Semi-transparan
// //     display: "flex",
// //     justifyContent: "flex-end",
// //     alignItems: "center",
// //     padding: "15px 20px",
// //     gap: "20px",
// //     position: "relative",
// //     zIndex: 2,
// //   },
// //   headerButton: {
// //     backgroundColor: "transparent",
// //     border: "none",
// //     color: "white",
// //     fontSize: "16px",
// //     fontWeight: "500",
// //     cursor: "pointer",
// //     padding: "8px 16px",
// //     borderRadius: "4px",
// //     transition: "opacity 0.2s",
// //   },
// //   mainContent: {
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     paddingTop: "40px",
// //     paddingLeft: "20px",
// //     paddingRight: "20px",
// //     position: "relative",
// //     zIndex: 2,
// //   },
// //   title: {
// //     fontSize: "24px",
// //     fontWeight: "bold",
// //     color: "white", // Warna putih agar kontras dengan background
// //     textAlign: "center",
// //     marginBottom: "40px",
// //     paddingLeft: "20px",
// //     paddingRight: "20px",
// //     margin: "0 0 40px 0",
// //     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Shadow untuk keterbacaan
// //   },
// //   formContainer: {
// //     backgroundColor: "rgba(90, 155, 212, 0.95)", // Semi-transparan
// //     borderRadius: "20px",
// //     padding: "30px",
// //     width: "100%",
// //     maxWidth: "400px",
// //     marginBottom: "30px",
// //     boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
// //     backdropFilter: "blur(10px)", // Efek blur untuk glass morphism
// //   },
// //   inputGroup: {
// //     marginBottom: "20px",
// //   },
// //   inputLabel: {
// //     fontSize: "14px",
// //     color: "white", // Warna putih untuk label
// //     marginBottom: "5px",
// //     fontWeight: "500",
// //     display: "block",
// //     textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
// //   },
// //   textInput: {
// //     width: "100%",
// //     backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparan
// //     borderRadius: "8px",
// //     padding: "12px 15px",
// //     fontSize: "16px",
// //     color: "#333",
// //     border: "1px solid rgba(255, 255, 255, 0.3)",
// //     boxSizing: "border-box",
// //     outline: "none",
// //     transition: "all 0.2s",
// //   },
// //   registerButton: {
// //     backgroundColor: "#7B68EE",
// //     border: "none",
// //     borderRadius: "25px",
// //     padding: "15px 40px",
// //     minWidth: "150px",
// //     color: "white",
// //     fontSize: "16px",
// //     fontWeight: "600",
// //     cursor: "pointer",
// //     transition: "background-color 0.2s",
// //     boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
// //   },
// // };

// // export default RegistrationForm;

// import React, { useState } from "react";

// interface FormData {
//   nama1: string;
//   nama2: string;
//   nama3: string;
//   nama4: string;
// }

// const RegistrationForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     nama1: "",
//     nama2: "",
//     nama3: "",
//     nama4: "",
//   });

//   const handleInputChange = (field: keyof FormData, value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleRegistration = () => {
//     console.log("Registration data:", formData);
//     // Handle registration logic here
//   };

//   const handleLogin = () => {
//     console.log("Navigate to login");
//     // Handle login navigation here
//   };

//   return (
//     <div style={styles.container}>
//       {/* Header - menggunakan design yang konsisten */}
//       <header style={styles.header}>
// {/* Gunakan header tadi disini tetapi  */}
//       </header>

//       {/* Main Content */}
//       <div style={styles.mainContent}>
//         <h1 style={styles.title}>Silahkan Registrasi Akun Pengguna Anda</h1>

//         <div style={styles.formContainer}>
//           <div style={styles.inputGroup}>
//             <label style={styles.inputLabel}>Nama Lengkap</label>
//             <input
//               type="text"
//               style={styles.textInput}
//               placeholder="Masukkan Nama Lengkap"
//               value={formData.nama1}
//               onChange={(e) => handleInputChange("nama1", e.target.value)}
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label style={styles.inputLabel}>Email</label>
//             <input
//               type="email"
//               style={styles.textInput}
//               placeholder="Masukkan Email"
//               value={formData.nama2}
//               onChange={(e) => handleInputChange("nama2", e.target.value)}
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label style={styles.inputLabel}>Username</label>
//             <input
//               type="text"
//               style={styles.textInput}
//               placeholder="Masukkan Username"
//               value={formData.nama3}
//               onChange={(e) => handleInputChange("nama3", e.target.value)}
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label style={styles.inputLabel}>Password</label>
//             <input
//               type="password"
//               style={styles.textInput}
//               placeholder="Masukkan Password"
//               value={formData.nama4}
//               onChange={(e) => handleInputChange("nama4", e.target.value)}
//             />
//           </div>
//         </div>

//         <button
//           style={styles.registerButton}
//           onClick={handleRegistration}
//           onMouseEnter={(e) =>
//             (e.currentTarget.style.backgroundColor = "#1e40af")
//           }
//           onMouseLeave={(e) =>
//             (e.currentTarget.style.backgroundColor = "#2563eb")
//           }
//         >
//           Registrasi
//         </button>
//       </div>
//     </div>
//   );
// };

// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     minHeight: "100vh",
//     backgroundImage: "url('/background.jpg')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundAttachment: "fixed",
//     position: "relative",
//     fontFamily:
//       '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//   },

//   // Header styles - konsisten dengan design yang diminta
//   header: {
//     backgroundColor: "#2563eb", // Warna biru yang sama dengan design
//     padding: "16px 24px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//     position: "relative",
//     zIndex: 2,
//   },
//   logo: {
//     backgroundColor: "#e5e7eb",
//     padding: "12px 24px",
//     color: "#374151",
//     fontSize: "18px",
//     fontWeight: "600",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   authButtons: {
//     display: "flex",
//     gap: "16px",
//     alignItems: "center",
//   },
//   authButton: {
//     color: "#1f2937",
//     fontSize: "16px",
//     fontWeight: "500",
//     cursor: "pointer",
//     padding: "8px 16px",
//     backgroundColor: "transparent",
//     border: "none",
//     borderRadius: "4px",
//     transition: "background-color 0.2s",
//   },
//   authButtonActive: {
//     color: "#1f2937",
//     fontSize: "16px",
//     fontWeight: "500",
//     cursor: "pointer",
//     padding: "8px 16px",
//     backgroundColor: "rgba(255, 255, 255, 0.2)", // Sedikit highlight untuk button aktif
//     border: "none",
//     borderRadius: "4px",
//     transition: "background-color 0.2s",
//   },

//   // Main content styles - mempertahankan design form yang sudah ada
//   mainContent: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     paddingTop: "40px",
//     paddingLeft: "20px",
//     paddingRight: "20px",
//     position: "relative",
//     zIndex: 2,
//   },
//   title: {
//     fontSize: "24px",
//     fontWeight: "bold",
//     color: "white",
//     textAlign: "center",
//     marginBottom: "40px",
//     paddingLeft: "20px",
//     paddingRight: "20px",
//     margin: "0 0 40px 0",
//     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
//   },
//   formContainer: {
//     backgroundColor: "rgba(90, 155, 212, 0.95)",
//     borderRadius: "20px",
//     padding: "30px",
//     width: "100%",
//     maxWidth: "400px",
//     marginBottom: "30px",
//     boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
//     backdropFilter: "blur(10px)",
//   },
//   inputGroup: {
//     marginBottom: "20px",
//   },
//   inputLabel: {
//     fontSize: "14px",
//     color: "white",
//     marginBottom: "5px",
//     fontWeight: "500",
//     display: "block",
//     textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
//   },
//   textInput: {
//     width: "100%",
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     borderRadius: "8px",
//     padding: "12px 15px",
//     fontSize: "16px",
//     color: "#333",
//     border: "1px solid rgba(255, 255, 255, 0.3)",
//     boxSizing: "border-box",
//     outline: "none",
//     transition: "all 0.2s",
//   },
//   registerButton: {
//     backgroundColor: "#2563eb", // Ubah warna button agar konsisten dengan header
//     border: "none",
//     borderRadius: "25px",
//     padding: "15px 40px",
//     minWidth: "150px",
//     color: "white",
//     fontSize: "16px",
//     fontWeight: "600",
//     cursor: "pointer",
//     transition: "background-color 0.2s",
//     boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
//   },
// };

// export default RegistrationForm;
