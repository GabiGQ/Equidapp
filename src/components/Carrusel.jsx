import React from "react";
import EquidappPortada from '../img/generales/EQUIDAPP-portadaprueba.png'
import Banner2 from '../img/generales/Banner2.png'
import Banner3 from '../img/generales/Banner3.png'

function Carrusel() {
  return (
    <section id="carrusel">
      <div id="carouselExampleCaptions" className="carousel slide carrusel" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="4000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={EquidappPortada} className="d-block w-100 img-fluid imgCarrusel" alt="imagen-portada-1" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="colorPortada"><strong /></h5>
              <p className="colorPortada"> <em></em></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner2} className="d-block w-100 img-fluid imgCarrusel" alt="ninos-en-computador" />
            <div className="carousel-caption d-none d-md-block text-white">
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner3} className="d-block w-100 img-fluid imgCarrusel" alt="Mujeres stem" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Carrusel