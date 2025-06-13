/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect, CSSProperties } from "react";
import { database, SaveQuizResult } from "./../../../../firebase";
import { ref, get } from "firebase/database";

// ... (fungsi shuffleArray dan getRandomQuestions tetap sama)
const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getRandomQuestions = async (category: string) => {
  try {
    const questionsRef = ref(database, "quiz/" + category);
    const questionsSnapshot = await get(questionsRef);
    const questionsData = questionsSnapshot.val();
    if (!questionsData) {
      console.log("Tidak ada data soal untuk kategori:", category);
      return [];
    }
    const allQuestions = Object.values(questionsData);
    const shuffledQuestions = shuffleArray(allQuestions);
    return shuffledQuestions.slice(0, Math.min(30, shuffledQuestions.length));
  } catch (error) {
    console.error("Error mengambil soal:", error);
    return [];
  }
};

interface Question {
  question: string;
  imageUrl?: string;
  options: string[];
  correctAnswer: string;
}

interface Answer {
  questionIndex: number;
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

// ### FUNGSI BARU UNTUK PERHITUNGAN BINTANG ###
const calculateStars = (percentage: number) => {
  if (percentage === 100) return 5; // Skor sempurna dapat 5 bintang
  if (percentage >= 80) return 4;
  if (percentage >= 60) return 3;
  if (percentage >= 40) return 2;
  if (percentage > 0) return 1;
  return 0; // Tidak ada bintang jika skor 0
};

interface KuisSoalProps {
  category: any;
  onBackToCategory: () => void;
  onBackToLanding: () => void;
  currentUser?: any;
}

const KuisSoal: React.FC<KuisSoalProps> = ({
  category,
  onBackToCategory,
  onBackToLanding,
  currentUser,
}: any) => {
  const categoryId = category.id || "ipa";

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // ... (useEffect, handleAnswerClick, handleTimeOut, handleNextQuestion, dan closeModal tetap sama)
  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      setError(null);
      try {
        const randomQuestions = await getRandomQuestions(categoryId);
        if (randomQuestions.length === 0) {
          setError("Tidak ada soal tersedia untuk kategori ini");
          return;
        }
        setQuestions(randomQuestions);
        setCurrentQuestionIndex(0);
      } catch (err) {
        setError("Gagal memuat soal. Silakan coba lagi.");
        console.error("Error loading questions:", err);
      } finally {
        setLoading(false);
      }
    };
    loadQuestions();
  }, [categoryId]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeOut();
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  // const handleAnswerClick = (option: string) => {
  //   const currentQuestion = questions[currentQuestionIndex];
  //   const isCorrect = option === currentQuestion.correctAnswer;
  //   if (isCorrect) {
  //     setScore(score + 1);
  //   }
  //   const newAnswer: Answer = {
  //     questionIndex: currentQuestionIndex,
  //     question: currentQuestion.question,
  //     selectedAnswer: option,
  //     correctAnswer: currentQuestion.correctAnswer,
  //     isCorrect: isCorrect,
  //   };
  //   setAnswers((prev) => [...prev, newAnswer]);
  //   setAnsweredQuestions(answeredQuestions + 1);
  //   setTimeout(() => {
  //     handleNextQuestion();
  //   }, 1000);
  // };
  const handleAnswerClick = (option: string) => {
    if (isAnswered) return; // Mencegah jawaban ganda

    setIsAnswered(true);
    setSelectedAnswer(option); // Simpan jawaban yang dipilih

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = option === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    const newAnswer: Answer = {
      questionIndex: currentQuestionIndex,
      question: currentQuestion.question,
      selectedAnswer: option,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect: isCorrect,
    };
    setAnswers((prev) => [...prev, newAnswer]);
    setAnsweredQuestions(answeredQuestions + 1);

    setTimeout(() => {
      handleNextQuestion();
    }, 1000); // Beri jeda 1 detik untuk menunjukkan feedback
  };

  const handleTimeOut = () => {
    if (isAnswered) return;
    setIsAnswered(true);
    const currentQuestion = questions[currentQuestionIndex];
    const newAnswer: Answer = {
      questionIndex: currentQuestionIndex,
      question: currentQuestion.question,
      selectedAnswer: "Waktu Habis",
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect: false,
    };
    setAnswers((prev) => [...prev, newAnswer]);
    setAnsweredQuestions(answeredQuestions + 1);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
      setSelectedAnswer(null); // Reset jawaban terpilih
      setIsAnswered(false); // Reset status menjawab
    } else {
      setShowModal(true);
    }
  };

  const closeModal = async () => {
    if (isSaving) return;

    if (currentUser && currentUser.id) {
      setIsSaving(true);
      try {
        const result = await SaveQuizResult(
          currentUser.id,
          category.name || "Kategori Umum",
          score,
          questions.length,
          answers
        );

        if (result.success) {
          console.log("Hasil kuis berhasil disimpan:", result.resultId);
        } else {
          console.error("Gagal menyimpan hasil kuis:", result.error);
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat menyimpan hasil kuis:", error);
      } finally {
        setIsSaving(false);
      }
    } else {
      console.log("Tidak ada user, hasil tidak disimpan.");
    }

    setShowModal(false);
    onBackToLanding();
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQuestions(0);
    setAnswers([]);
    setTimeLeft(30);
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingContainer}>
          <p style={styles.loadingText}>Memuat soal...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.errorContainer}>
          <p style={styles.errorText}>{error}</p>
          <button
            style={styles.retryButton}
            onClick={() => window.location.reload()}
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.errorContainer}>
          <p style={styles.errorText}>Tidak ada soal tersedia</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const finalScore =
    questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  return (
    <div style={styles.container}>
      {/* --- MODAL DIALOG --- */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 style={styles.modalTitle}>Selamat</h2>
            <h3 style={styles.modalSubtitle}>Berikut Hasil Skor Anda</h3>
            <div style={styles.modalHeaderBox}>
              <p style={{ fontSize: "1.6rem" }}>
                Selamat telah menyelesaikan kuis ini
              </p>
              <p style={{ fontSize: "1.6rem" }}>
                {new Date().toLocaleDateString("id-ID")}
              </p>
              <div style={styles.modalInfoBox}>
                <p style={{ fontWeight: "bold" }}>
                  Kategori: {category.name || "Ilmu Pengetahuan Alam"}
                </p>
                <p style={{ fontWeight: "bold" }}>
                  Dari: {score}/{questions.length} Soal
                </p>
                <p style={{ fontWeight: "bold" }}>Skor: {finalScore}</p>
              </div>
            </div>
            <div style={styles.starsContainer}>
              {/* ### LOGIKA BINTANG DIPERBAIKI DI SINI ### */}
              {[...Array(calculateStars(finalScore))].map((_, i) => (
                <img
                  key={i}
                  src="/star.png"
                  alt="Bintang"
                  style={styles.starImage}
                />
              ))}
            </div>
            <p style={styles.nameLabel}>Nama</p>
            <div style={styles.nameBox}>
              <span>{currentUser?.name || "Guest"}</span>
            </div>
            <button
              style={{
                ...styles.saveButton,
                backgroundColor: isSaving ? "#aaa" : "#5028a0",
                cursor: isSaving ? "not-allowed" : "pointer",
              }}
              onClick={closeModal}
              disabled={isSaving}
            >
              {isSaving ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </div>
      )}

      {/* --- KONTEN KUIS --- */}
      <div style={styles.quizContainer}>
        {/* ... (sisa dari JSX konten kuis tetap sama) ... */}
        <div style={styles.progressContainer}>
          <span style={styles.progressText}>
            Soal {currentQuestionIndex + 1} dari {questions.length}
          </span>
        </div>
        <div style={styles.questionContainer}>
          <div style={styles.timerContainer}>
            <span style={styles.timerLabel}>Sisa Waktu:</span>
            <span style={styles.timerText}>{`00:${String(timeLeft).padStart(
              2,
              "0"
            )}`}</span>
          </div>
          {currentQuestion.imageUrl && (
            <img
              src={currentQuestion.imageUrl}
              alt="Soal Kuis"
              style={styles.questionImage}
            />
          )}
          <div style={styles.questionBox}>
            <p style={styles.questionText}>{currentQuestion.question}</p>
          </div>
        </div>
        <div style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const currentQuestionAnswered = isAnswered;
            const isCorrect = currentQuestion.correctAnswer === option;

            // Tentukan gaya tombol berdasarkan statusnya
            const getOptionButtonStyle = () => {
              if (!currentQuestionAnswered) {
                return styles.optionButton; // Gaya default
              }
              if (isSelected) {
                return {
                  ...styles.optionButton,
                  backgroundColor: isCorrect ? "#20ff80" : "#ff4d4d", // Hijau jika benar, merah jika salah
                  borderColor: isCorrect ? "#000" : "#d32f2f",
                };
              }
              if (isCorrect) {
                return {
                  ...styles.optionButton,
                  backgroundColor: "#20ff80", // Tandai jawaban benar
                };
              }
              return {
                ...styles.optionButton,
                backgroundColor: "#EAEAEA",
                cursor: "not-allowed",
              }; // Gaya untuk opsi lain yang tidak dipilih
            };

            return (
              <button
                key={index}
                style={getOptionButtonStyle()}
                onClick={() => handleAnswerClick(option)}
                disabled={isAnswered} // Nonaktifkan tombol setelah dijawab
              >
                {/* ### LOGIKA LINGKARAN DIPERBARUI DI SINI ### */}
                <div
                  style={
                    isSelected
                      ? styles.optionCircleSelected
                      : styles.optionCircle
                  }
                ></div>
                <span>{option}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ... (semua object 'styles' Anda tetap sama di sini)
export const styles: { [key: string]: CSSProperties } = {
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

  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  },

  loadingText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
  },

  errorContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    gap: "20px",
  },

  errorText: {
    fontSize: "1.2rem",
    color: "#d32f2f",
    textAlign: "center",
  },

  retryButton: {
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    fontSize: "1rem",
    cursor: "pointer",
  },

  progressContainer: {
    marginBottom: "20px",
  },

  progressText: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#333",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "8px 16px",
    borderRadius: "20px",
    border: "2px solid #333",
  },

  timerContainer: {
    backgroundColor: "#EAEAEA",
    border: "2px solid #000",
    borderRadius: "50px",
    padding: "8px 25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
    marginRight: "20px",
  },

  timerLabel: {
    fontWeight: "bold",
    fontSize: "1rem",
    color: "#000",
  },

  timerText: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#000",
  },

  quizContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "6rem",
    width: "100%",
    maxWidth: "1200px",
  },

  questionContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "40px",
    width: "100%",
  },

  questionImage: {
    width: "320px",
    height: "200px",
    borderRadius: "10px",
    objectFit: "cover",
    border: "2px solid #ddd",
  },

  questionBox: {
    flex: 1,
    height: "160px",
    border: "2px solid #333",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
  },

  questionText: {
    fontSize: "1rem",
    lineHeight: "1.5",
    color: "black",
    fontWeight: "bold",
  },

  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "30%",
    paddingLeft: "105px",
  },

  optionButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1ed906",
    border: "2px solid #000000",
    borderRadius: "12px",
    padding: "15px",
    cursor: "pointer",
    width: "100%",
    maxWidth: "450px",
    textAlign: "left",
    color: "black",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "transform 0.2s, background-color 0.2s",
  },

  optionCircle: {
    width: "24px",
    height: "24px",
    backgroundColor: "white",
    borderRadius: "50%",
    marginRight: "15px",
    flexShrink: 0,
  },

  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },

  modalContent: {
    backgroundColor: "#20ff80",
    color: "black",
    borderRadius: "80px",
    padding: "20px 40px",
    width: "90%",
    maxWidth: "600px",
    border: "6px solid black",
    textAlign: "center",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  modalHeaderBox: {
    width: "100%",
    border: "2px solid black",
    borderRadius: "15px",
    padding: "15px",
    marginBottom: "15px",
  },

  modalTitle: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
  },

  modalSubtitle: {
    margin: "0 0 15px 0",
    fontSize: "1.2rem",
  },

  modalInfoBox: {
    textAlign: "left",
    lineHeight: "1.6",
  },

  starsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },

  starImage: {
    width: "80px",
    height: "80px",
  },

  nameLabel: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    margin: "15px 0 5px 0",
  },

  nameBox: {
    border: "2px solid black",
    borderRadius: "10px",
    padding: "10px 25px",
    marginBottom: "20px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    backgroundColor: "#20ff80",
    minWidth: "150px",
  },

  saveButton: {
    backgroundColor: "#5028a0",
    color: "white",
    border: "none",
    borderRadius: "20px",
    padding: "10px 40px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  optionCircleSelected: {
    // ### STYLE BARU ###
    width: "24px",
    height: "24px",
    backgroundColor: "#5028a0", // Warna ungu saat dipilih
    borderRadius: "50%",
    marginRight: "15px",
    flexShrink: 0,
  },
};

export default KuisSoal;
