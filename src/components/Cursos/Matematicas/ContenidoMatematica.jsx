import React, { useState } from 'react';
import '../../../Styles/pCursos.css';
import "../../../Styles/btn-back.css";
import Mascota from '../../../img/generales/Logo EquidApp.png';
import ImagenesMatematicas from './ImagenesMatematica'



function ContenidoMatematica() {
  const paragraphs = [
    "Los matemáticos exploran el fascinante mundo de los números y las formas", 
    "Desde problemas simples hasta complejas ecuaciones y patrones en la naturaleza.", 
    "Únete y descubre más acerca de los conceptos fundamentales de las matemáticas, desde la aritmética básica hasta las complejas fórmulas que ayudan a entender el universo que nos rodea.",
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
            <ImagenesMatematicas currentIndex={currentIndex} changePoints={imageChangePoints} />
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

export default ContenidoMatematica;
