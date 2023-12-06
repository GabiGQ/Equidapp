import React, { useState, useEffect } from 'react';
import '../../../Styles/pCursos.css';
import img1 from '../../../img/contenido/Bienvenida.jpg';
import img2 from '../../../img/contenido/STEM.jpg';
import img3 from '../../../img/contenido/3.jpg';

const ImagenesIntro = ({ currentIndex, changePoints }) => {
  const [images] = useState([
    img1,
    img2,
    img3
    // ... otras imágenes
  ]);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Cambiar automáticamente la imagen solo en los puntos de cambio
    if (Array.isArray(changePoints) && changePoints.includes(currentIndex)) {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }
  }, [currentIndex, changePoints, images]);

  return (
    <div className="image-carousel">
      <img
        src={images[currentImage]}
        alt={`Imagen ${currentImage + 1}`}
        className="img-fluid insideBox" // Añade la clase aquí
      />
    </div>
  );
};

export default ImagenesIntro;