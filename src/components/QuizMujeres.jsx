import React, { useState, useEffect } from 'react';
import MascotaFeliz from "../img/generales/Logo EquidApp.png";
import MascotaTriste from "../img/generales/Equidapp-Triste.png";
import Modal from "../components/Cursos/Avatar/Medallas/Mmodal";
import Medal from "../components/Cursos/Avatar/Medallas/Medal";
import Insignia from "../img/medallas/STEM.png";
import { useAuth } from '../context/AuthContext'; // Asegúrate de que esta es la ruta correcta
import axios from 'axios';
import Cookies from 'js-cookie';
import { updateMedallas,fetchMedalsFromApi } from '../api/auth'; // Asegúrate de que la ruta es correcta
const questions = [
  {
    questionText: "¿Qué ciencia se centra en el estudio de los seres vivos y su entorno?",
    answerOptions: [
      { answerText: "Física", isCorrect: false },
      { answerText: "Química", isCorrect: false },
      { answerText: "Biología", isCorrect: true },
      { answerText: "Astronomía", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál de las siguientes no es una rama de la ingeniería?",
    answerOptions: [
      { answerText: "Ingeniería Civil", isCorrect: false },
      { answerText: "Ingeniería de Sabores", isCorrect: true },
      { answerText: "Ingeniería Eléctrica", isCorrect: false },
      { answerText: "Ingeniería Mecánica", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué rama de las matemáticas se enfoca en el estudio de las relaciones espaciales y las propiedades de las figuras?",
    answerOptions: [
      { answerText: "Álgebra", isCorrect: false },
      { answerText: "Trigonometría", isCorrect: false },
      { answerText: "Geometría", isCorrect: true },
      { answerText: "Estadística", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál de las siguientes opciones representa un ejemplo de tecnología?",
    answerOptions: [
      { answerText: "Un átomo", isCorrect: false },
      { answerText: "Un teléfono inteligente", isCorrect: true },
      { answerText: "La gravedad", isCorrect: false },
      { answerText: "Una flor", isCorrect: false },
    ],
  },
  {
    questionText: "¿En qué área de STEM podrías estar interesado si te gusta diseñar aplicaciones para teléfonos móviles?",
    answerOptions: [
      { answerText: "Ciencia", isCorrect: false },
      { answerText: "Tecnología", isCorrect: true },
      { answerText: "Ingeniería", isCorrect: false },
      { answerText: "Matemáticas", isCorrect: false },
    ],
  },
];
function QuizIntroSTEM({ setFeedbackMessage, setMascotaImage }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [showMedalModal, setShowMedalModal] = useState(false);
  const [quizAllowed, setQuizAllowed] = useState(false);
  const { user, token } = useAuth();
  // Efecto para comprobar si la medalla de Ciencia está desbloqueada
  useEffect(() => {
    const token = Cookies.get('token');
    if (user?._id && token) {
      fetchMedalsFromApi(user._id, token)
        .then(response => {
          const cienciaMedalUnlocked = response.data.some(medal => medal.nombre === 'StemM' && medal.obtenida);
          setQuizAllowed(!cienciaMedalUnlocked);
        })
        .catch(error => {
          console.error('Error al obtener las medallas:', error);
          setQuizAllowed(true);
        });
  }
  }, [user?._id, token]);
  // Efecto para aleatorizar preguntas y limitar a 7
  useEffect(() => {
    const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, 7);
    setRandomQuestions(shuffledQuestions);
  }, []);
  useEffect(() => {
    if (showScore) {
      updateMedallas(user._id, 'StemM', token)
        .then(() => {
          console.log("Intentando mostrar el modal");
          setShowMedalModal(true);
          console.log('Medalla STEM actualizada con éxito');
        })
        .catch(error => {
          console.error('Error al actualizar la medalla:', error);
        });
    }
  }, [showScore, user?._id, token]);


  // Manejador de respuestas
  const handleAnswerButtonClick = (isCorrect, answerText) => {
    setSelectedAnswer(answerText);
    setFeedbackMessage(isCorrect ? "¡Correcto! ¡Muy bien hecho!" : "¡Incorrecto! Intenta de nuevo.");
    setMascotaImage(isCorrect ? MascotaFeliz : MascotaTriste);
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < randomQuestions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      }, 1000);
    } else {
      setShowScore(true);
    }
  };
  // Restablecer el cuestionario
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowMedalModal(false);
  };
  // Renderizado condicional si el quiz no está permitido
  if (!quizAllowed) {
    return (
      <div className='container mt-5'>
        <div className='score-section text-center'>
          <p>Ya has desbloqueado la medalla de Stem. ¡Felicidades!</p>
          <img src={Insignia} alt="Medalla de Stem" className="img-fluid" />
        </div>
      </div>
    );
  }
  // Componente del cuestionario
  return (
    <div className='quiz container mt-5'>
      {showScore ? (
        <div>
          {showMedalModal ? (
            <div>
              <p>¡Felicidades! Medalla desbloqueada.</p>
              <img src={Insignia} alt="Medalla" className="img-fluid" />
            </div>
          ) : (
            <>
              <p >Has acertado {score} de {randomQuestions.length} preguntas.</p>
              <button className="btn btn-purple" onClick={resetQuiz}>Reintentar</button>
            </>
          )}
        </div>
      ) : (
        <>
          <div>
            <div className="card-body">
              <span >Pregunta {currentQuestion + 1}</span>
            </div>
            <div className='card-body'>
              {randomQuestions[currentQuestion]?.questionText}
            </div>
          </div>
          <div className='answer-section'>
            <ul>
            {randomQuestions[currentQuestion]?.answerOptions.map((answerOption, index) => (
  <li key={index} >
    <button
      onClick={() => handleAnswerButtonClick(answerOption.isCorrect, answerOption.answerText)}
      disabled={selectedAnswer !== null}
      className={`btn m-2 w-100 ${selectedAnswer === answerOption.answerText ? (answerOption.isCorrect ? 'btn-success' : 'btn-danger') : 'btn btn-purple'}`}
    >
      {answerOption.answerText}
    </button>
  </li>
))}
            </ul>
          </div>
        </>
      )}
      {showMedalModal && (
        <Modal onClose={() => setShowMedalModal(false)}>
          <h2>¡Felicidades!</h2>
          <p>Has desbloqueado una medalla por tu excelente desempeño.</p>
          <Medal
            unlocked={true}
            imageUnlocked={Insignia}
            imageLocked={Insignia}
          />
        </Modal>
      )}
    </div>
  );
}
export default QuizIntroSTEM;