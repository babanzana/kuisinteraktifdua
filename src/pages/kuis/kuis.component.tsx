// import React from "react";

// const Kuis: React.FC = () => {
//   return (
//     <div style={styles.container}>
//       {/* Judul yang disesuaikan dengan gambar */}
//       <h1 style={styles.title}>Selamat Datang di Game Kuis Interaktif !</h1>

//       {/* Tombol yang disesuaikan dengan gambar, menggantikan paragraf deskripsi */}
//       <button style={styles.button}>Mulai Bermain</button>
//     </div>
//   );
// };

// import { CSSProperties } from "react";

// // Tipe untuk objek styles diperbarui: 'description' dihapus, 'button' ditambahkan
// export const styles: {
//   container: CSSProperties;
//   title: CSSProperties;
//   button: CSSProperties; // Menggantikan description
// } = {
//   container: {
//     display: "flex",
//     flexDirection: "column" as const,
//     justifyContent: "flex-start", // Diubah ke flex-start untuk memulai dari atas
//     alignItems: "center" as const,
//     backgroundColor: "#f0f0f0",
//     padding: "2rem",
//     paddingTop: "15vh", // Ditambahkan untuk memberi jarak dari atas
//     minHeight: "88vh",
//     backgroundImage: "url('/background-main.jpg')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundAttachment: "fixed",
//     position: "relative",
//     fontFamily:
//       '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//   },
//   title: {
//     // Style untuk judul disesuaikan agar mirip dengan gambar
//     fontSize: "2rem",
//     fontWeight: "bold",
//     color: "#000000",
//     marginBottom: "2rem",
//     textAlign: "center" as const,
//   },
//   // Style untuk tombol baru
//   button: {
//     backgroundColor: "#6A4FDE", // Warna ungu yang mirip dengan gambar
//     color: "white",
//     border: "none",
//     height: "80px", // Sedikit disesuaikan agar tidak terlalu besar
//     borderRadius: "40px", // (Setengah dari height) agar bentuknya sempurna
//     padding: "0 35px", // Padding vertikal 0 karena height sudah fix
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//     cursor: "pointer",
//     marginTop: "4rem",
//     boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
//     transition: "transform 0.2s ease-in-out",
//     // Tambahan untuk memastikan teks di tengah tombol dengan height tetap
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// };

// export default Kuis;

import React from "react";
import { CSSProperties } from "react";

interface KuisProps {
  onStartQuiz: () => void;
}

const Kuis: React.FC<KuisProps> = ({ onStartQuiz }) => {
  return (
    <div style={styles.container}>
      {/* Judul yang disesuaikan dengan gambar */}
      <h1 style={styles.title}>Selamat Datang di Game Kuis Interaktif !</h1>

      {/* Tombol yang disesuaikan dengan gambar, menggantikan paragraf deskripsi */}
      <button style={styles.button} onClick={onStartQuiz}>
        Mulai Bermain
      </button>
    </div>
  );
};

// Tipe untuk objek styles diperbarui: 'description' dihapus, 'button' ditambahkan
export const styles: {
  container: CSSProperties;
  title: CSSProperties;
  button: CSSProperties; // Menggantikan description
} = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "flex-start", // Diubah ke flex-start untuk memulai dari atas
    alignItems: "center" as const,
    backgroundColor: "#f0f0f0",
    padding: "2rem",
    paddingTop: "15vh", // Ditambahkan untuk memberi jarak dari atas
    minHeight: "88vh",
    backgroundImage: "url('/background-main.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    position: "relative",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  title: {
    // Style untuk judul disesuaikan agar mirip dengan gambar
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: "2rem",
    textAlign: "center" as const,
  },
  // Style untuk tombol baru
  button: {
    backgroundColor: "#6A4FDE", // Warna ungu yang mirip dengan gambar
    color: "white",
    border: "none",
    height: "80px", // Sedikit disesuaikan agar tidak terlalu besar
    borderRadius: "40px", // (Setengah dari height) agar bentuknya sempurna
    padding: "0 35px", // Padding vertikal 0 karena height sudah fix
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "4rem",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s ease-in-out",
    // Tambahan untuk memastikan teks di tengah tombol dengan height tetap
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Kuis;
