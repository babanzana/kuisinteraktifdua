/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { CSSProperties } from "react";

const categories = [
  {
    name: "Ilmu Pengetahuan Alam",
    imageUrl: "/IPA.png",
    path: "/kuis/ipa",
    id: "ipa",
  },
  {
    name: "Ilmu Pengetahuan Sosial",
    imageUrl: "/IPS.png",
    path: "/kuis/ips",
    id: "ips",
  },
  {
    name: "Sejarah",
    imageUrl: "/Sejarah.png",
    path: "/kuis/sejarah",
    id: "sejarah",
  },
  {
    name: "Matematika",
    imageUrl: "/Matematika.png",
    path: "/kuis/matematika",
    id: "matematika",
  },
];

interface KuisKategoriProps {
  onCategorySelect: (category: any) => void;
  onBackToLanding: () => void;
}

const KuisKateogri: React.FC<KuisKategoriProps> = ({
  onCategorySelect,
  onBackToLanding,
}) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Silahkan Pilih Kategori Kuis yang Ingin Anda Dimainkan
      </h1>

      <div style={styles.gridContainer}>
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              backgroundImage: `url(${category.imageUrl})`,
            }}
          >
            <h2 style={styles.cardTitle}>{category.name}</h2>
            <button
              style={styles.cardButton}
              onClick={() => onCategorySelect(category)}
            >
              Pilih
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles dengan tambahan backButton
export const styles: {
  container: CSSProperties;
  title: CSSProperties;
  gridContainer: CSSProperties;
  card: CSSProperties;
  cardTitle: CSSProperties;
  cardButton: CSSProperties;
  backButton: CSSProperties;
} = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    backgroundColor: "#f0f0f0",
    padding: "2rem",
    paddingTop: "8vh",
    minHeight: "88vh",
    backgroundImage: "url('/background-main.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: "2rem",
    left: "2rem",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.2s",
    zIndex: 1,
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: "3rem",
    textAlign: "center" as const,
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "2.5rem",
    justifyContent: "center",
  },
  // Style kartu disesuaikan untuk background image
  card: {
    width: "360px",
    height: "240px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "20px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
    border: "3px solid transparent",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    // Properti penting untuk background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white", // Mengubah warna teks default di dalam kartu menjadi putih
  },
  // Style judul kartu disesuaikan agar kontras dengan gambar
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "black", // Warna teks putih
    marginBottom: "1rem",
    textAlign: "center",
  },
  cardButton: {
    backgroundColor: "#7B68EE",
    color: "white",
    border: "none",
    borderRadius: "20px",
    padding: "10px 30px", // Sedikit lebih besar
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s, transform 0.2s",
  },
};

export default KuisKateogri;
