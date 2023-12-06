import React, { useState,useEffect } from 'react';
import MascotaFeliz from "../../../../img/generales/Logo EquidApp.png";
import MascotaTriste from "../../../../img/generales/Equidapp-Triste.png"



  const questions = [
    {
      questionText: "¿Quién es reconocida como la primera programadora de computadoras?",
      answerOptions: [
        { answerText: "Marie Curie", isCorrect: false },
        { answerText: "Alan Turing", isCorrect: false },
        { answerText: "Ada Lovelace", isCorrect: true },
      ],
    },
    {
      questionText: "¿Quién, destacado en la informática, desarrolló el primer compilador y popularizó el término debugging ?",
      answerOptions: [
        { answerText: "Margaret Hamilton", isCorrect: false },
        { answerText: "Grace Hopper", isCorrect: true },
        { answerText: " John McCarthy", isCorrect: false },
      ],
    },
    {
      questionText: "¿Quién es conocida por sus contribuciones a protocolos de red y la prevención de bucles en redes Ethernet?",
      answerOptions: [
        { answerText: "Shafi Goldwasser", isCorrect: false },
        { answerText: "Radia Perlman", isCorrect: true },
        { answerText: "Tim Berners-Lee", isCorrect: false },
      ],
    },
    {
      questionText: "¿Quién es reconocida por sus contribuciones a la teoría de la complejidad computacional y la criptografía?",
      answerOptions: [
        { answerText: "Donna Strickland", isCorrect: false },
        { answerText: "Richard Stallman", isCorrect: false },
        { answerText: "Shafi Goldwasser", isCorrect: true },
      ],
    },
    {
      questionText: "¿Quién es la primera mujer afroamericana en obtener un doctorado en astrofísica y ha destacado por su investigación sobre agujeros negros supermasivos en el centro de las galaxias?",
      answerOptions: [
        { answerText: "Chanda Prescod-Weinstein", isCorrect: false },
        { answerText: "Mae Jemison", isCorrect: false },
        { answerText: "Jedidah C. Isler", isCorrect: true },
      ],
    },
    {
      questionText: "¿Quién es conocida por su trabajo en modelado matemático de procesos biológicos, como el crecimiento de tumores y la respuesta inmune?",
      answerOptions: [
        { answerText: "Trachette Jackson", isCorrect: true },
        { answerText: "Mary Cartwright", isCorrect: false },
        { answerText: "Ingrid Daubechies", isCorrect: false },
      ],
    },
    {
      questionText: "¿Quién, utilizando el modelado digital en 3D, desarrollo personajes de videojuegos que se mueven de manera realista, con extremidades y expresiones faciales convincentes?",
      answerOptions: [
        { answerText: "Amy Hennig", isCorrect: false },
        { answerText: " Brenda Laurel", isCorrect: false },
        { answerText: "Lisette Titre-Montgomery", isCorrect: true },
      ],
    },
    {
      questionText: "¿Quién es la investigadora guatemalteca y exploradora de National Geographic especializada en el uso de tecnologías geoespaciales para el monitoreo forestal y la estimación de biomasa?",
      answerOptions: [
        { answerText: "Radia Perlman", isCorrect: false },
        { answerText: "África Flores-Anderson", isCorrect: true },
        { answerText: "Evelyn Boyd Granville", isCorrect: false },
      ],
    },
    {
      questionText: "¿Quién es una destacada bioinformática y genetista computacional, conocida por su papel en el Proyecto Genoma Humano?",
      answerOptions: [
        { answerText: "Rosalind Franklin", isCorrect: false },
        { answerText: "Barbara McClintock", isCorrect: false },
        { answerText: "Elaine Mardis", isCorrect: true }
      ],
    },
    {
      questionText: "¿Quién es conocida como la creadora del primer robot social y es una pionera en el campo de la robótica social?",
      answerOptions: [
        { answerText: "Mae Jemison", isCorrect: false },
        { answerText: " Cynthia Breazeal", isCorrect: true },
        { answerText: "Nergis Mavalvala", isCorrect: false },
      ],
    },
    {
      questionText: "¿Quién es la matemática hindú conocida como 'la computadora humana' y destacada por su asombrosa capacidad para realizar cálculos mentales complejos, incluso logrando superar a las computadoras en ciertos casos?",
      answerOptions: [
        { answerText: "Shakuntala Devi", isCorrect: true },
        { answerText: "Evelyn Boyd Granville", isCorrect: false },
        { answerText: "Ingrid Daubechies", isCorrect: false },
      ],
    },
    {
      questionText: "¿Quién es la informática y científica de la computación que recibió el premio Turing en 2008 por sus contribuciones fundamentales a la programación orientada a objetos?",
      answerOptions: [
        { answerText: "Barbara Liskov", isCorrect: true },
        { answerText: "Grace Hopper", isCorrect: false },
        { answerText: "Shakuntala Devi", isCorrect: false },
      ],
    },
    {
      questionText: "¿Quién fue la astrónoma que proporcionó evidencia clave para la existencia de la materia oscura?",
      answerOptions: [
        { answerText: "Carolyn Porco", isCorrect: false },
        { answerText: "Vera Rubin", isCorrect: true },
        { answerText: "Maria Mitchell", isCorrect: false },
      ],
    },
    {
      questionText: "¿Quién es la bioquímica y genetista conocida por su papel fundamental en el desarrollo de la herramienta revolucionaria de edición genética?",
      answerOptions: [
        { answerText: "Barbara Liskov", isCorrect: false },
        { answerText: "Carolyn Porco", isCorrect: false },
        { answerText: "Jennifer Doudna", isCorrect: true },
      ],
    },
    {
      questionText: "¿Quién es la científica, investigadora y divulgadora científica chilena, reconocida por sus contribuciones en microbiología marina y su labor como coordinadora del equipo Ciencia, Tecnología y Sociedad en la Universidad de Antofagasta?",
      answerOptions: [
        { answerText: "Rosa Ester Salazar", isCorrect: false },
        { answerText: "Ruth Rodríguez", isCorrect: false },
        { answerText: "Gladys Hayashida", isCorrect: true },
      ],
    },
  ];
  
  
  
function QuizzMujeres({ setFeedbackMessage, setMascotaImage }) {
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

export default QuizzMujeres;