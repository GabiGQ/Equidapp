import React, { useState,useEffect } from 'react';
import MascotaFeliz from "../../../img/generales/Logo EquidApp.png";
import MascotaTriste from "../../../img/generales/Equidapp-Triste.png"


const questions = [
  {
    questionText: "¿Qué es la robótica?",
    answerOptions: [
      { answerText: "El estudio de las plantas.", isCorrect: false },
      { answerText: "El campo de la ingeniería que se ocupa del diseño y construcción de robots.", isCorrect: true },
      { answerText: "La creación de aplicaciones de teléfonos móviles.", isCorrect: false },
      { answerText: "Un género de música electrónica.", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál es el propósito principal de la robótica?",
    answerOptions: [
      { answerText: "Entretener a las personas.", isCorrect: false },
      { answerText: "Realizar tareas físicas o computacionales de manera autónoma.", isCorrect: true },
      { answerText: "Diseñar ropa de moda.", isCorrect: false },
      { answerText: "Investigar sobre la historia de la ciencia.", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál de los siguientes NO es un paso en el desarrollo de un robot?",
    answerOptions: [
      { answerText: "Programación.", isCorrect: false },
      { answerText: "Entrenamiento de animales.", isCorrect: true },
      { answerText: "Diseño.", isCorrect: false },
      { answerText: "Pruebas y optimización.", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué función realiza un robot quirúrgico en medicina?",
    answerOptions: [
      { answerText: "Cocinar alimentos.", isCorrect: false },
      { answerText: "Asistir a cirujanos en procedimientos precisos.", isCorrect: true },
      { answerText: "Tener conversaciones con pacientes.", isCorrect: false },
      { answerText: "Dirigir hospitales.", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué componente esencial de la robótica implica la programación de robots?",
    answerOptions: [
      { answerText: "Diseño de hardware.", isCorrect: false },
      { answerText: "Planificación de rutas turísticas.", isCorrect: false },
      { answerText: "Programación de software.", isCorrect: true },
      { answerText: "Reparación de automóviles.", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál es el propósito principal de la ingeniería de hardware?",
    answerOptions: [
      { answerText: "Diseñar programas de software.", isCorrect: false },
      { answerText: "Crear componentes físicos de una computadora.", isCorrect: true },
      { answerText: "Gestionar redes de computadoras.", isCorrect: false },
      { answerText: "Resolver problemas matemáticos.", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué es la función principal de la CPU en una computadora?",
    answerOptions: [
      { answerText: "Almacenar datos de forma permanente.", isCorrect: false },
      { answerText: "Realizar cálculos y ejecutar instrucciones.", isCorrect: true },
      { answerText: "Mostrar imágenes en la pantalla.", isCorrect: false },
      { answerText: "Administrar la memoria RAM.", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál de las siguientes opciones es un ejemplo de hardware de entrada?",
    answerOptions: [
      { answerText: "Una impresora.", isCorrect: false },
      { answerText: "Un monitor de computadora.", isCorrect: false },
      { answerText: "Un teclado.", isCorrect: true },
      { answerText: "Un altavoz.", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué es el software de sistema en una computadora?",
    answerOptions: [
      { answerText: "Aplicaciones de productividad como procesadores de texto.", isCorrect: false },
      { answerText: "El sistema operativo que administra el hardware.", isCorrect: true },
      { answerText: "Juegos y entretenimiento.", isCorrect: false },
      { answerText: "Navegadores web y redes sociales.", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál de las siguientes tecnologías permite la comunicación inalámbrica entre dispositivos cercanos?",
    answerOptions: [
      { answerText: "Bluetooth.", isCorrect: true },
      { answerText: "Ethernet.", isCorrect: false },
      { answerText: "USB.", isCorrect: false },
      { answerText: "HDMI.", isCorrect: false },
    ],
  },
];

function QuizzInge({ setFeedbackMessage, setMascotaImage }) {
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
export default QuizzInge;