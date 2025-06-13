import React from "react";

const Tentang: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.section}>
          <h1 style={styles.title}>Perkenalkan Aplikasi Quiz Interaktif</h1>
          <p style={styles.description}>
            Quiz Interaktif adalah aplikasi edukasi yang dirancang untuk
            membantu anak-anak belajar dengan cara yang menyenangkan melalui
            kuis interaktif. Aplikasi ini menyediakan berbagai soal dalam
            berbagai kategori, seperti Ilmu Pengetahuan Alam, Ilmu Pengetahuan
            Sosial, Matematika, dan lain-lain. Setiap kuis dikembangkan untuk
            menantang daya pikir dan membantu pengguna meningkatkan kemampuan
            belajar secara bertahap.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subtitle}>Versi Aplikasi</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Nama Aplikasi:</strong> Quiz Interaktif
            </li>
            <li style={styles.listItem}>
              <strong>Versi:</strong> 1.0.0
            </li>
            <li style={styles.listItem}>
              <strong>Tanggal Rilis:</strong> 2024
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subtitle}>Pengembang</h2>
          <p style={styles.description}>
            Aplikasi ini dikembangkan oleh <strong>Willianus Vicktor</strong>,
            mahasiswa Program Studi Informatika, Fakultas Teknologi Informasi,
            Universitas Widya Dharma Pontianak.
          </p>
        </div>
      </div>
    </div>
  );
};

import { CSSProperties } from "react";

export const styles: {
  container: CSSProperties;
  title: CSSProperties;
  content: CSSProperties;
  section: CSSProperties;
  subtitle: CSSProperties;
  description: CSSProperties;
  list: CSSProperties;
  listItem: CSSProperties;
} = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "flex-start" as const,
    alignItems: "center" as const,
    backgroundColor: "#f0f0f0",
    padding: "2rem",
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
    fontSize: "2rem",
    marginBottom: "2rem",
    fontWeight: "bold",
    color: "black",
    textAlign: "center" as const,
  },
  content: {
    width: "90vw",
    backgroundColor: "rgba(237, 233, 233, 0.52)",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  section: {
    marginBottom: "2rem",
  },
  subtitle: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "black",
  },
  description: {
    fontSize: "1rem",
    color: "black",
    fontWeight: "bold",
    lineHeight: "1.6",
    textAlign: "justify" as const,
  },
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  listItem: {
    fontSize: "1rem",
    color: "black",
    fontWeight: "bold",
    lineHeight: "1.6",
  },
};

export default Tentang;
