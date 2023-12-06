import React, { useState } from 'react';
import '../../../Styles/pCursos.css';
import '../../../Styles/btn-back.css';
import Mascota from '../../../img/generales/Logo EquidApp.png';
import ImagenesIntro from './ImagenesIntro'



function ContenidoStem() {
  const paragraphs = [
    "Hola soy “JMO” y seré tu compañera en EquidApp.",
    "Muchas gracias por registrarte, ¡Estás por entrar en un mundo lleno de oportunidades y descubrimiento!",
    "El mundo STEM o CTIM en español está formado por la primera letra de las cuatro áreas de estudio: Ciencia, Tecnología, Ingeniería y Matemáticas",
    "¡Cada una de estas materias es increíble! ¡Aprendiendo de ellas podrías convertirte en una futura doctora, investigadora o ingeniería!",
    "No hay límites en lo que quieras ser y el día de mañana puedes ser tú la que inspire a otras niñas",
    "¡Vamos! Descubramos el mundo STEM",
    "Primero vamos a hacer un pequeño Quiz, aqui te haremos algunas preguntas",
    "Este Quiz es para ver que tanto conoces de estas carreras y no te preocupes, puedes repetirlo hasta que consigas todas las respuestas",
    "Luego puedes explorar como tu quieras, pero partamos haciendo click en el cuadro con el signo de pregunta que esta justo bajo tu nombre!"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < paragraphs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const imageChangePoints = [2, 4];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div>
            <ImagenesIntro currentIndex={currentIndex} changePoints={imageChangePoints} />
          </div>
        </div>
        <div className="col-lg-8 d-flex pt-5">
          <div className="col talkingPetText" onClick={handleNext}>
            <p>{paragraphs[currentIndex]}</p>
            <p className='ClickContinuar'>Click para Continuar</p>
            <div>
              <button className="btn btnbackstem" onClick={(e) => { e.stopPropagation(); handlePrev(); }} disabled={currentIndex === 0}>
                Retroceder
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
        <div className="d-flex align-items-end">
          <img className="contentPet" src={Mascota} alt="Mascota" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default ContenidoStem;
