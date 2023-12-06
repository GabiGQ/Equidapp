import React from 'react';
import imagenPortada03 from '../img/generales/ImagenPortada03.jpg';
import imagenPortada04 from '../img/generales/ImagenPortada04.jpg';
import imagenPortada05 from '../img/generales/ImagenPortada05.jpg';



export default function Main() {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-evenly text-center'>
        <div className="col-lg-4">
        
        <div className="card-about cardAbout">
            <img src={imagenPortada03} className="card-img-top card-image-about img-fluid" alt="imagenQuienesSomos"/>
            
              <h5 className="card-title-about">¡Bienvenid@ a EquidApp!</h5>
              <div className="card-body-about">
              <p className="card-text-about"> ¡Bienvenidas a EquidApp! Somos tu ventana al universo STEM.
                Diseñada para niñas mayores de 14 años, nuestra plataforma
                ofrece herramientas y recursos que hacen que la programación
                y las carreras STEM sean accesibles y emocionantes.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card-about cardAbout">
            <img src={imagenPortada05} className="card-img-top card-image-about img-fluid" alt="imagenOrigenEquidApp"/>
            
              <h5 className="card-title-about">Origen de EquidApp</h5>
              <div className="card-body-about">
              <p className="card-text-about"> Además, nacimos como un proyecto integrador en el bootcamp
                "Generation", donde un apasionado equipo de 5 jóvenes amantes
                de la programación se unió para acercar el mundo del código a
                niñas y adolescentes. ¡Descubre tu potencial con EquidApp!</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card-about cardAbout">
            <img src={imagenPortada04} className="card-img-top card-image-about img-fluid" alt="imagenObjetivosEquidApp"/>
            
              <h5 className="card-title-about">Nuestros Objetivos</h5>
              <div className="card-body-about">
              <p className="card-text-about"> Nuestro sitio web fue inspirado por el Objetivo de
                Desarrollo Sustentable "Igualdad de Género" de la ONU.
                Estamos construyendo un espacio donde todas las niñas
                pueden explorar, aprender y liderar en el fascinante mundo
                de la ciencia y la tecnología.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
