// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @next/next/no-img-element */
// import { User } from "@/app/page";
// import React, { useState } from "react"; // <-- Impor useState
// import { CSSProperties } from "react";

// // Dummy data untuk riwayat kuis
// const historyData = [
//   {
//     id: 1,
//     score: 84,
//     date: "17 Oktober 2024",
//     category: "Ilmu Pengetahuan Alam",
//     stars: 4,
//   },
//   {
//     id: 2,
//     score: 92,
//     date: "15 Oktober 2024",
//     category: "Matematika",
//     stars: 5,
//   },
//   {
//     id: 3,
//     score: 76,
//     date: "14 Oktober 2024",
//     category: "Sejarah",
//     stars: 4,
//   },
//   {
//     id: 4,
//     score: 88,
//     date: "12 Oktober 2024",
//     category: "Ilmu Pengetahuan Sosial",
//     stars: 4,
//   },
// ];
// interface RiwayatProps {
//   currentUser: User | null;
// }
// const Riwayat: React.FC<RiwayatProps> = ({ currentUser }) => {
//   // State untuk menyimpan term pencarian
//   const [searchTerm, setSearchTerm] = useState("");

//   // Logika untuk memfilter data berdasarkan kategori
//   const filteredHistory = historyData.filter((item) =>
//     item.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={styles.container}>
//       {/* --- BAGIAN ATAS: JUDUL DAN PENCARIAN --- */}
//       <div style={styles.headerContainer}>
//         <h1 style={styles.pageTitle}>Riwayat Kuis Anda</h1>
//         <div style={styles.searchContainer}>
//           <label style={styles.searchLabel}>Cari:</label>
//           <input
//             type="text"
//             placeholder="Cari kategori..."
//             style={styles.searchInput}
//             value={searchTerm} // Hubungkan value dengan state
//             onChange={(e) => setSearchTerm(e.target.value)} // Update state saat diketik
//           />
//         </div>
//       </div>

//       {/* --- DAFTAR RIWAYAT --- */}
//       <div style={styles.listContainer}>
//         {/* Render data yang sudah difilter */}
//         {filteredHistory.map((item) => (
//           <div key={item.id} style={styles.cardContainer}>
//             {/* Bagian Kiri: Skor dan Tanggal */}
//             <div style={styles.cardScoreSection}>
//               <span style={styles.cardScore}>{item.score}</span>
//               <span style={styles.cardDate}>{item.date}</span>
//             </div>

//             {/* Bagian Tengah: Judul, Bintang, Kategori */}
//             <div style={styles.cardMainSection}>
//               <span style={styles.cardTitle}>Skor Anda</span>
//               <div style={styles.starsContainer}>
//                 {Array.from({ length: item.stars }).map((_, index) => (
//                   <img
//                     key={index}
//                     src="/star.png"
//                     alt="Bintang"
//                     style={styles.starImage}
//                   />
//                 ))}
//               </div>
//               <span style={styles.cardCategory}>{item.category}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Menambahkan style baru ke object styles
// export const styles: {
//   [key: string]: CSSProperties;
// } = {
//   // Style lama Anda
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     backgroundColor: "#f0f0f0",
//     padding: "2rem",
//     minHeight: "88vh",
//     backgroundImage: "url('/background-main.jpg')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     fontFamily:
//       '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//   },

//   // Style baru untuk halaman riwayat
//   headerContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "100%",
//     maxWidth: "800px",
//     marginBottom: "2rem",
//     padding: "0 1rem",
//   },
//   pageTitle: {
//     fontSize: "2rem",
//     fontWeight: "bold",
//     color: "#333",
//   },
//   searchContainer: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//   },
//   searchLabel: {
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//     color: "#000",
//   },
//   searchInput: {
//     padding: "8px 12px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     fontSize: "1rem",
//     width: "200px", // Memberi lebar pada input
//   },
//   listContainer: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "1.5rem",
//     width: "100%",
//     maxWidth: "800px",
//   },
//   // --- Style Card Disesuaikan ---
//   cardContainer: {
//     display: "flex",
//     alignItems: "center",
//     backgroundColor: "#CAD5E0", // Warna latar kebiruan/abu-abu
//     border: "2px solid #A0C4FF", // Border biru muda
//     borderRadius: "25px", // Sudut lebih melengkung
//     padding: "20px",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     gap: "20px",
//   },
//   cardScoreSection: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingRight: "20px",
//     // borderRight: "1px solid #ccc", // Garis pemisah dihilangkan
//   },
//   cardScore: {
//     fontSize: "2.5rem",
//     fontWeight: "bold",
//     color: "#000",
//   },
//   cardDate: {
//     fontSize: "0.9rem",
//     color: "#007bff", // Warna biru untuk link
//     textDecoration: "underline", // Garis bawah
//     cursor: "pointer",
//   },
//   cardMainSection: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "8px",
//   },
//   cardTitle: {
//     fontSize: "1.2rem",
//     fontWeight: "500",
//     color: "#333",
//   },
//   starsContainer: {
//     display: "flex",
//     gap: "5px",
//   },
//   starImage: {
//     width: "50px", // Ukuran bintang disesuaikan
//     height: "50px",
//   },
//   cardCategory: {
//     fontSize: "1.2rem", // Sedikit diperbesar
//     fontWeight: "bold",
//     color: "#000",
//     marginTop: "5px",
//   },
// };

// export default Riwayat;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { User } from "@/app/page";
import React, { useState, useEffect, CSSProperties } from "react";
// Periksa apakah GetUserQuizResults adalah ekspor default atau named, lalu impor dengan benar.
// Jika named export pastikan di file ../../app/firebase ada: export const GetUserQuizResults = ...
import { GetUserQuizResults } from "../../../firebase";
// Jika default export, gunakan:
// import GetUserQuizResults from "../../app/firebase";

// Hapus dummy data

interface RiwayatProps {
  currentUser: User | null;
}

// Fungsi bantuan untuk menghitung bintang berdasarkan skor
// ### FUNGSI BARU UNTUK PERHITUNGAN BINTANG ###
const calculateStars = (percentage: number) => {
  if (percentage === 100) return 5; // Skor sempurna dapat 5 bintang
  if (percentage >= 80) return 4;
  if (percentage >= 60) return 3;
  if (percentage >= 40) return 2;
  if (percentage > 0) return 1;
  return 0; // Tidak ada bintang jika skor 0
};

// Fungsi bantuan untuk memformat tanggal
const formatDate = (isoString: string) => {
  return new Date(isoString).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const Riwayat: React.FC<RiwayatProps> = ({ currentUser }) => {
  console.log("🚀 ~ currentUser:", currentUser);
  // State untuk menyimpan term pencarian
  const [searchTerm, setSearchTerm] = useState("");
  // State untuk menyimpan data riwayat dari Firebase
  const [quizHistory, setQuizHistory] = useState<any[]>([]);
  // State untuk loading
  const [loading, setLoading] = useState(true);

  // Mengambil data saat komponen dimuat
  useEffect(() => {
    // Pastikan currentUser ada sebelum mengambil data
    if (currentUser) {
      const fetchUserHistory = async () => {
        try {
          setLoading(true);
          const results = await GetUserQuizResults(currentUser.id);
          setQuizHistory(results);
        } catch (error) {
          console.error("Gagal mengambil riwayat kuis:", error);
          // Set riwayat menjadi array kosong jika terjadi error
          setQuizHistory([]);
        } finally {
          setLoading(false);
        }
      };

      fetchUserHistory();
    } else {
      // Jika tidak ada user, set loading ke false dan data kosong
      setLoading(false);
      setQuizHistory([]);
    }
  }, [currentUser]); // <-- Jalankan effect saat currentUser berubah

  // Logika untuk memfilter data berdasarkan kategori
  const filteredHistory = quizHistory.filter((item) =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* --- BAGIAN ATAS: JUDUL DAN PENCARIAN --- */}
      <div style={styles.headerContainer}>
        <h1 style={styles.pageTitle}>Riwayat Kuis Anda</h1>
        <div style={styles.searchContainer}>
          <label style={styles.searchLabel}>Cari:</label>
          <input
            type="text"
            placeholder="Cari kategori..."
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* --- DAFTAR RIWAYAT --- */}
      <div style={styles.listContainer}>
        {loading ? (
          <p style={styles.loadingText}>Memuat riwayat...</p>
        ) : filteredHistory.length > 0 ? (
          filteredHistory.map((item, index) => (
            <div key={item.id || index} style={styles.cardContainer}>
              {/* Bagian Kiri: Skor dan Tanggal */}
              <div style={styles.cardScoreSection}>
                <span style={styles.cardScore}>{item.percentage}</span>
                <span style={styles.cardDate}>
                  {formatDate(item.completedAt)}
                </span>
              </div>

              {/* Bagian Tengah: Judul, Bintang, Kategori */}
              <div style={styles.cardMainSection}>
                <span style={styles.cardTitle}>Skor Anda</span>
                <div style={styles.starsContainer}>
                  {Array.from({ length: calculateStars(item.percentage) }).map(
                    (_, starIndex) => (
                      <img
                        key={starIndex}
                        src="/star.png"
                        alt="Bintang"
                        style={styles.starImage}
                      />
                    )
                  )}
                </div>
                <span style={styles.cardCategory}>{item.category}</span>
              </div>
            </div>
          ))
        ) : (
          <p style={styles.loadingText}>Anda belum memiliki riwayat kuis.</p>
        )}
      </div>
    </div>
  );
};

// Menambahkan style baru ke object styles
export const styles: {
  [key: string]: CSSProperties;
} = {
  // Style lama Anda
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: "2rem",
    minHeight: "88vh",
    backgroundImage: "url('/background-main.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },

  // Style baru untuk halaman riwayat
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "800px",
    marginBottom: "2rem",
    padding: "0 1rem",
  },
  pageTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  searchLabel: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#000",
  },
  searchInput: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    width: "200px",
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
    maxWidth: "800px",
  },
  // --- Style Card Disesuaikan ---
  cardContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#CAD5E0",
    border: "2px solid #A0C4FF",
    borderRadius: "25px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    gap: "20px",
  },
  cardScoreSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: "20px",
  },
  cardScore: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#000",
  },
  cardDate: {
    fontSize: "0.9rem",
    color: "#333", // Warna diubah agar lebih mudah dibaca
    marginTop: "5px",
  },
  cardMainSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: "500",
    color: "#333",
  },
  starsContainer: {
    display: "flex",
    gap: "5px",
  },
  starImage: {
    width: "50px",
    height: "50px",
  },
  cardCategory: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#000",
    marginTop: "5px",
  },
  // Style untuk teks loading/kosong
  loadingText: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
    borderRadius: "10px",
  },
};

export default Riwayat;
