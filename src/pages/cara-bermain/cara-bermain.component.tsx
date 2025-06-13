import React from "react";

const CaraBermain: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.section}>
          <h1 style={styles.title}>Cara Bermain</h1>
          <h2 style={styles.subtitle}>Tentang Aplikasi</h2>
          <p style={styles.description}>
            Aplikasi kuis ini dirancang untuk membantu anak-anak sekolah dasar
            belajar melalui kuis interaktif yang dapat meningkatkan kemampuan
            berpikir mereka secara menyenangkan dan edukatif.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subtitle}>Cara Membuat Akun</h2>
          <p style={styles.sectionHeader}>Langkah-langkah:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Pilih menu <strong>Registrasi</strong>.
            </li>
            <li style={styles.listItem}>
              Masukkan nama, username, dan password.
            </li>
            <li style={styles.listItem}>
              Pilih <strong>Registrasi</strong>.
            </li>
            <li style={styles.listItem}>
              Setelah mendaftar, pengguna bisa Login untuk mulai menggunakan
              aplikasi.
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subtitle}>Cara Bermain Kuis</h2>
          <p style={styles.sectionHeader}>Langkah-langkah:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Pilih menu Kuis setelah login.</li>
            <li style={styles.listItem}>
              Pilih kategori kuis yang diinginkan, misalnya Matematika, Ilmu
              Pengetahuan Alam, Sejarah, atau Ilmu Pengetahuan Sosial.
            </li>
            <li style={styles.listItem}>Jawab setiap pertanyaan dalam kuis.</li>
            <li style={styles.listItem}>
              Setelah selesai, hasil kuis akan langsung ditampilkan.
            </li>
            <li style={styles.listItem}>
              Pengguna dapat menyimpan hasil kuis untuk dilihat di kemudian
              hari.
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subtitle}>Hasil Kuis</h2>
          <p style={styles.sectionHeader}>Data yang ditampilkan:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Jumlah soal yang dijawab benar.</li>
            <li style={styles.listItem}>Skor akhir.</li>
            <li style={styles.listItem}>
              Waktu yang dihabiskan untuk menyelesaikan kuis.
            </li>
            <li style={styles.listItem}>Kategori kuis yang dipilih.</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subtitle}>Riwayat Bermain</h2>
          <p style={styles.description}>
            <strong>Riwayat Bermain</strong> Pengguna dapat melihat sesi
            permainan sebelumnya pada menu <strong>Riwayat Kuis</strong>, yang
            menampilkan:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Tanggal bermain.</li>
            <li style={styles.listItem}>Kategori kuis yang dimainkan.</li>
            <li style={styles.listItem}>Skor yang diperoleh.</li>
            <li style={styles.listItem}>Waktu penyelesaian.</li>
          </ul>
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
  sectionHeader: CSSProperties;
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
    fontWeight: "bold",
    marginBottom: "2rem",
    color: "#333",
    textAlign: "center" as const,
  },
  content: {
    width: "90vw",
    backgroundColor: "rgba(237, 233, 233, 0.52)",
    padding: "2rem",
    paddingLeft: "6rem",
    paddingRight: "6rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  section: {
    marginBottom: "2rem",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "black",
  },
  sectionHeader: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "black",
  },
  description: {
    fontSize: "1rem",
    color: "black",
    lineHeight: "1",
    textAlign: "justify" as const,
  },
  list: {
    paddingLeft: "3rem",
    margin: "0",
  },
  listItem: {
    fontSize: "1rem",
    color: "black",
    lineHeight: "1",
    textAlign: "justify" as const,
  },
};

export default CaraBermain;
