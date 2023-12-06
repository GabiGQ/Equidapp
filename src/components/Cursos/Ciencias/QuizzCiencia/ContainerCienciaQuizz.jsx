// ContainerQuizz.js
import React, { useState } from 'react';
import "../../../../Styles/pCursos.css";
import QuizzCiencia from './QuizzCiencia';
import MascotaFeliz from "../../../../img/generales/Logo EquidApp.png";


function ContainerQuizz() {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [mascotaImage, setMascotaImage] = useState(MascotaFeliz); // Estado para la imagen de la mascota

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto h-100">
          <div className="news-activities-text">
            <QuizzCiencia setFeedbackMessage={setFeedbackMessage} setMascotaImage={setMascotaImage} />
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-end align-items-center position-relative">
          {feedbackMessage && (
            <div className="feedback-bubble">
              {feedbackMessage}
            </div>
          )}
          <img src={mascotaImage} alt="Mascota" className="mascota-image" />
        </div>
      </div>
    </div>
  );
}

export default ContainerQuizz;
