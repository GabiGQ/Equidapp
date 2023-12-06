import Imagen06 from '../img/generales/ImagenPortada06.jpg'
import Imagen10 from '../img/generales/ImagenPortada10.jpg'
import '../App.css'
import { Link } from 'react-router-dom'

export default function StemInfo() {
    return (
      <div className="container">
        <div className="row justify-content-center">
       
          <div className="col-lg-6 col-md-8 col-sm-12 mb-3">
            <div className="card cardStemInfo">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={Imagen06} className="img-fluid rounded-start h-100" alt="ImgImportanciaStem" />
                </div>
                <div className="col-md-8 d-flex flex-column">
                  <div className="card-body">
                    <h5 className="card-title">Importancia de la diversidad en STEM</h5>
                    <p className="card-text">Durante mucho tiempo, las áreas de STEM han estado dominadas por hombres, lo que ha creado barreras para las mujeres.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
    
          <div className="col-lg-6 col-md-8 col-sm-12 mb-3">
            <div className="card cardStemInfo">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={Imagen10} className="img-fluid rounded-start h-100" alt="ImgUneteStem" />
                </div>
                <div className="col-md-8 d-flex flex-column">
                  <div className="card-body">
                    <h5 className="card-title">Únete a nuestra comunidad</h5>
                    <p className="card-text">Ofrecemos recursos, tutoriales y guías específicamente diseñados para mujeres que buscan adentrarse o avanzar en campos STEM.</p>
                    <Link to="/registrarse" className="btn btnStem"> Regístrate </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  