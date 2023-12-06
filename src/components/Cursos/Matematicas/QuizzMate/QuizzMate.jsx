import React, { useState,useEffect } from 'react';
import MascotaFeliz from "../../../../img/generales/Logo EquidApp.png";
import MascotaTriste from "../../../../img/generales/Equidapp-Triste.png"



  const questions = [
    {
      questionText: "¿Qué antiguo matemático griego es conocido por haber dicho: 'Todo es número'?",
      answerOptions: [
        { answerText: "Sócrates", isCorrect: false },
        { answerText: "Aristóteles", isCorrect: false },
        { answerText: "Platón", isCorrect: false },
        { answerText: "Pitágoras", isCorrect: true },
      ],
    },
    {
      questionText: "¿Qué significa el término 'realismo matemático' en filosofía de las matemáticas?",
      answerOptions: [
        { answerText: "Que las matemáticas son meras invenciones humanas", isCorrect: false },
        { answerText: "Que las matemáticas son descubrimientos de hechos objetivos que existen independientemente de la mente humana", isCorrect: true },
        { answerText: "Que las matemáticas son construcciones mentales basadas en reglas", isCorrect: false },
        { answerText: "Que las matemáticas son subjetivas y varían según la cultura", isCorrect: false },
      ],
    },
    {
      questionText: "¿Quién es famoso por sus teoremas de incompletitud, que limitan lo que puede demostrarse en matemáticas?",
      answerOptions: [
        { answerText: "Euclides", isCorrect: false },
        { answerText: "Pitágoras", isCorrect: false },
        { answerText: "Kurt Gödel", isCorrect: true },
        { answerText: "Leonhard Euler", isCorrect: false },
      ],
    },
    {
      questionText: "¿Cuál de los siguientes conceptos matemáticos está relacionado con la idea de infinitud y ha sido objeto de debate filosófico durante siglos?",
      answerOptions: [
        { answerText: "Números complejos", isCorrect: false },
        { answerText: "Teorema de Pitágoras", isCorrect: false },
        { answerText: "Series infinitas", isCorrect: true },
        { answerText: "Fractales", isCorrect: false },
      ],
    },
    {
      questionText: "¿Cuál es la rama de las matemáticas que se ocupa del estudio de la estructura y propiedades de los números enteros?",
      answerOptions: [
        { answerText: "Álgebra lineal", isCorrect: false },
        { answerText: "Geometría", isCorrect: false },
        { answerText: "Teoría de números", isCorrect: true },
        { answerText: "Cálculo", isCorrect: false },
      ],
    },
    {
      questionText: "¿Qué es la geometría?",
      answerOptions: [
        { answerText: "El estudio de las propiedades de los números enteros", isCorrect: false },
        { answerText: "El estudio de las formas y las propiedades del espacio", isCorrect: true },
        { answerText: "La rama de las matemáticas que se enfoca en ecuaciones y cálculos", isCorrect: false },
        { answerText: "El estudio de la lógica y la argumentación", isCorrect: false },
      ],
    },
    {
      questionText: "¿Qué matemático y filósofo griego desarrolló una serie de axiomas y demostraciones que se convirtieron en la base de la geometría euclidiana?",
      answerOptions: [
        { answerText: "Arquímedes", isCorrect: false },
        { answerText: "Tales de Mileto", isCorrect: false },
        { answerText: "Euclides", isCorrect: true },
        { answerText: "Heráclito", isCorrect: false },
      ],
    },
    {
      questionText: "¿Cuál es la relación entre el 'problema de los tres cuerpos' en física y la filosofía de las matemáticas?",
      answerOptions: [
        { answerText: "El problema de los tres cuerpos demuestra que las matemáticas son objetivas", isCorrect: false },
        { answerText: "El problema de los tres cuerpos demuestra que las matemáticas son subjetivas", isCorrect: false },
        { answerText: "El problema de los tres cuerpos es un ejemplo de cómo las matemáticas pueden ser aplicadas en la física", isCorrect: true },
        { answerText: "El problema de los tres cuerpos desafía la existencia de las matemáticas", isCorrect: false },
      ],
    },
    {
      questionText: "¿Cuál es el concepto filosófico que plantea que las matemáticas son universales y existen independientemente de la cultura o la mente humana?",
      answerOptions: [
        { answerText: "Nominalismo", isCorrect: false },
        { answerText: "Constructivismo", isCorrect: false },
        { answerText: "Realismo matemático", isCorrect: true },
        { answerText: "Escepticismo matemático", isCorrect: false },
      ],
    },
    {
      questionText: "¿Qué filósofo y matemático griego se considera uno de los fundadores de la matemática y afirmó que 'todo es número'?",
      answerOptions: [
        { answerText: "Tales de Mileto", isCorrect: false },
        { answerText: "Aristóteles", isCorrect: false },
        { answerText: "Pitágoras", isCorrect: true },
        { answerText: "Heráclito", isCorrect: false },
      ],
    },
    {
      questionText: "¿Qué es la filosofía de las matemáticas?",
      answerOptions: [
        { answerText: "El estudio de las matemáticas desde una perspectiva histórica", isCorrect: false },
        { answerText: "El estudio de las matemáticas desde una perspectiva filosófica, cuestionando su naturaleza y origen", isCorrect: true },
        { answerText: "El estudio de las matemáticas desde una perspectiva artística", isCorrect: false },
        { answerText: "El estudio de las matemáticas desde una perspectiva religiosa", isCorrect: false },
      ],
    },
    {
      questionText: "¿Qué término describe la visión filosófica de que las matemáticas son construcciones mentales basadas en reglas y símbolos?",
      answerOptions: [
        { answerText: "Realismo matemático", isCorrect: false },
        { answerText: "Formalismo", isCorrect: true },
        { answerText: "Nominalismo", isCorrect: false },
        { answerText: "Idealismo matemático", isCorrect: false },
      ],
    },
    {
      questionText: "¿Cuál es la afirmación que representa la visión filosófica conocida como 'idealismo matemático'?",
      answerOptions: [
        { answerText: "Las matemáticas son descubrimientos de hechos objetivos", isCorrect: false },
        { answerText: "Las matemáticas son meras invenciones humanas sin base en la realidad", isCorrect: true },
        { answerText: "Las matemáticas son subjetivas y varían según la cultura", isCorrect: false },
        { answerText: "Las matemáticas son construcciones mentales basadas en reglas", isCorrect: false },
      ],
    },
    {
      questionText: "¿Qué matemático griego fue famoso por su trabajo en geometría, incluyendo la creación de los Elementos, un influyente tratado matemático?",
      answerOptions: [
        { answerText: "Tales de Mileto", isCorrect: false },
        { answerText: "Pitágoras", isCorrect: false },
        { answerText: "Euclides", isCorrect: true },
        { answerText: "Heráclito", isCorrect: false },
      ],
    },
    {
      questionText: "¿Qué es el formalismo en filosofía de las matemáticas?",
      answerOptions: [
        { answerText: "La idea de que las matemáticas son invenciones humanas sin base en la realidad", isCorrect: false },
        { answerText: "La idea de que las matemáticas son descubrimientos de hechos objetivos", isCorrect: false },
        { answerText: "La idea de que las matemáticas son construcciones mentales basadas en reglas y símbolos", isCorrect: true },
        { answerText: "La idea de que las matemáticas son subjetivas y varían según la cultura", isCorrect: false },
      ],
    },
  ];
  
  
  
function QuizzMate({ setFeedbackMessage, setMascotaImage }) {
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

export default QuizzMate;