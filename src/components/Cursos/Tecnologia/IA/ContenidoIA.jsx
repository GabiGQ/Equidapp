import React, { useState } from 'react';
import '../../../../Styles/pCursos.css';
import "../../../../Styles/btn-back.css";
import Mascota from '../../../../img/generales/Logo EquidApp.png';
import ImagenesIA from './ImagenesIA'



function ContenidoIA() {
  const paragraphs = [
    "Sumérgete en el apasionante mundo de la inteligencia artificial, desentrañando los secretos de cómo las máquinas pueden reconocer patrones en datos, tomar decisiones autónomas y hasta entender el lenguaje humano.",
    "Explora cómo la inteligencia artificial puede transformar nuestra forma de trabajar y vivir, desde asistentes virtuales hasta vehículos autónomos.", 
    "¡Únete y descubre los asombrosos poderes de las IAs"
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
            <ImagenesIA currentIndex={currentIndex} changePoints={imageChangePoints} />
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

export default ContenidoIA;
