import React, { useState } from 'react';
import '../../../../Styles/pCursos.css';
import "../../../../Styles/btn-back.css";
import Mascota from '../../../../img/generales/Logo EquidApp.png';
import ImagenesComputacion from './ImagenesComputacion'



function ContenidoComputacion() {
  const paragraphs = [
    "Los expertos en computación exploran el fascinante mundo de las máquinas y la información a diferentes niveles.", 
    "Desde el código en programas individuales hasta la gestión de sistemas complejos en toda la red.",
    "Ven y aprende más de lo fundamental en la computación."
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
            <ImagenesComputacion currentIndex={currentIndex} changePoints={imageChangePoints} />
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

export default ContenidoComputacion;
