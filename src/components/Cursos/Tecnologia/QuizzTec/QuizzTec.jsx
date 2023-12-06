import React, { useState,useEffect } from 'react';
import MascotaFeliz from "../../../../img/generales/Logo EquidApp.png";
import MascotaTriste from "../../../../img/generales/Equidapp-Triste.png"



const questions = [
  // Preguntas de Tecnología - Estudio de Datos
  {
    questionText: "¿Qué es el estudio de datos y en qué consiste?",
    answerOptions: [
      { answerText: "La ciencia de estudiar la luna", isCorrect: false },
      { answerText: "El proceso de analizar información digital", isCorrect: true },
      { answerText: "La investigación de fósiles antiguos", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál es la importancia de analizar datos en la toma de decisiones?",
    answerOptions: [
      { answerText: "No tiene relevancia en la toma de decisiones", isCorrect: false },
      { answerText: "Ayuda a tomar decisiones basadas en información objetiva", isCorrect: true },
      { answerText: "Solo es relevante en la toma de decisiones personales", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué diferencia existe entre datos brutos y datos procesados?",
    answerOptions: [
      { answerText: "No hay diferencia", isCorrect: false },
      { answerText: "Los datos brutos son información original sin procesar, mientras que los datos procesados son datos que han sido organizados y analizados", isCorrect: true },
      { answerText: "Los datos brutos son datos que solo se usan en matemáticas", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué papel juegan las herramientas de visualización de datos en el estudio de datos?",
    answerOptions: [
      { answerText: "Ningún papel", isCorrect: false },
      { answerText: "Ayudan a convertir números en gráficos comprensibles", isCorrect: true },
      { answerText: "Son útiles solo para entretenimiento", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál es la relación entre el estudio de datos y la inteligencia artificial?",
    answerOptions: [
      { answerText: "No tienen relación", isCorrect: false },
      { answerText: "La inteligencia artificial es una rama del estudio de datos", isCorrect: false },
      { answerText: "El estudio de datos es una rama de la inteligencia artificial", isCorrect: true },
    ],
  },
  // Preguntas de Tecnología - Inteligencia Artificial
  {
    questionText: "¿Qué significa la sigla 'IA' en el contexto de la tecnología?",
    answerOptions: [
      { answerText: "Informática Avanzada", isCorrect: false },
      { answerText: "Inteligencia Alienígena", isCorrect: false },
      { answerText: "Inteligencia Artificial", isCorrect: true },
      { answerText: "Inversión Avanzada", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál es el objetivo principal de la Inteligencia Artificial?",
    answerOptions: [
      { answerText: "Hacer que las máquinas sean más tontas", isCorrect: false },
      { answerText: "Imitar la inteligencia humana en máquinas", isCorrect: true },
      { answerText: "Crear robots con emociones", isCorrect: false },
      { answerText: "Automatizar trabajos manuales", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué es el aprendizaje automático?",
    answerOptions: [
      { answerText: "Un tipo de software antivirus", isCorrect: false },
      { answerText: "Un proceso por el cual las máquinas pueden aprender de datos y mejorar su rendimiento", isCorrect: true },
      { answerText: "Un juego de mesa popular", isCorrect: false },
      { answerText: "Un nuevo sistema operativo", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál de las siguientes no es una aplicación común de la IA en la vida cotidiana?",
    answerOptions: [
      { answerText: "Asistentes virtuales como Siri o Alexa", isCorrect: false },
      { answerText: "Diagnóstico médico asistido por ordenador", isCorrect: false },
      { answerText: "Reparación de automóviles", isCorrect: true },
      { answerText: "Sistemas de recomendación de películas en línea", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué es un 'algoritmo' en el contexto de la IA?",
    answerOptions: [
      { answerText: "Un tipo de juego de computadora", isCorrect: false },
      { answerText: "Un conjunto de reglas y pasos para realizar una tarea", isCorrect: true },
      { answerText: "Un robot avanzado", isCorrect: false },
      { answerText: "Un dispositivo de almacenamiento", isCorrect: false },
    ],
  },
  // Preguntas de Tecnología - Programación
  {
    questionText: "¿Qué es la programación?",
    answerOptions: [
      { answerText: "Un lenguaje humano", isCorrect: false },
      { answerText: "Un idioma extranjero", isCorrect: false },
      { answerText: "Un conjunto de instrucciones para computadoras", isCorrect: true },
      { answerText: "Un tipo de juego en línea", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál de las siguientes no es un lenguaje de programación común?",
    answerOptions: [
      { answerText: "JavaScript", isCorrect: false },
      { answerText: "Python", isCorrect: false },
      { answerText: "Español", isCorrect: true },
      { answerText: "C++", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué tipo de dispositivo se puede programar?",
    answerOptions: [
      { answerText: "Refrigerador", isCorrect: false },
      { answerText: "Televisión", isCorrect: false },
      { answerText: "Computadora", isCorrect: true },
      { answerText: "Pelota de fútbol", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué es un 'algoritmo' en programación?",
    answerOptions: [
      { answerText: "Un tipo de error", isCorrect: false },
      { answerText: "Un conjunto de reglas para hacer matemáticas", isCorrect: false },
      { answerText: "Un conjunto de pasos para resolver un problema", isCorrect: true },
      { answerText: "Un tipo de robot", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué tipo de programa se utiliza para escribir código de programación?",
    answerOptions: [
      { answerText: "Un navegador web", isCorrect: false },
      { answerText: "Un procesador de texto", isCorrect: true },
      { answerText: "Una calculadora", isCorrect: false },
      { answerText: "Una cámara de fotos", isCorrect: false },
    ],
  },
];

  
  
  
function QuizzTec({ setFeedbackMessage, setMascotaImage }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [randomQuestions, setRandomQuestions] = useState([]);

  // Función para seleccionar 7 preguntas aleatorias
  const selectRandomQuestions = (allQuestions, numQuestions) => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
  };

  // Inicializar el cuestionario con preguntas aleatorias al montar el componente
  useEffect(() => {
    setRandomQuestions(selectRandomQuestions(questions, 7));
  }, []);

  const handleAnswerOptionClick = (answerOption) => {
    setSelectedAnswer(answerOption.answerText);

    if (answerOption.isCorrect) {
      setMascotaImage(MascotaFeliz);
      setScore(score + 1);
      setFeedbackMessage("¡Correcto! ¡Muy bien!");
    } else {
      setMascotaImage(MascotaTriste);
      setFeedbackMessage("¡Ups! Esa no es la respuesta correcta.");
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < randomQuestions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer("");
        setFeedbackMessage("");
      }, 1000);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer("");
    setFeedbackMessage("");
  };

  return (
    <div className='quiz'>
      <div className='quiz-intro'>
        {/* Mensaje de bienvenida */}
      </div>

      {showScore ? (
        <div className='score-section'>
          Has acertado {score} de {randomQuestions.length} preguntas.
          <button onClick={resetQuiz} className='btn btn-purple'>Volver a empezar</button>
        </div>
      ) : (
        <div className='card quizzCard'>
          <div className='card-body'>
            {randomQuestions.length > 0 && currentQuestion < randomQuestions.length ? (
              <>
                <div className='question-section'>
                  <div className='question-count'>
                    <span>Pregunta {currentQuestion + 1}</span>/{randomQuestions.length}
                  </div>
                  <div className='question-text'>{randomQuestions[currentQuestion].questionText}</div>
                </div>
                <div className='answer-section'>
                  <ul>
                    {randomQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleAnswerOptionClick(answerOption)}
                          className={`btn m-2 ${selectedAnswer === answerOption.answerText ? (answerOption.isCorrect ? 'btn-success' : 'btn-danger') : 'btn btn-purple'}`}
                          disabled={selectedAnswer !== ""}
                        >
                          {answerOption.answerText}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div>Cargando preguntas...</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizzTec;