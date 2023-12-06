import React from 'react';
import Sidebar from '../../Cursos/Sidebar';
import '../../../Styles/ingenieria.css';
import '../../../Styles/pCursos.css';
import {Link} from 'react-router-dom';
import COMPUTACION from '../../../img/generales/COMPUTACION.png';
import ROBOTICA from '../../../img/generales/ROBOTICA.png';


function Ingenieria() {

  return (
    <div className="app-container container-fluid  row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 col ">
        
        <Sidebar/>
      </div>
      
      <div className="app-main container-fluid col-lg col-md-12">
      <div className="welcome-box mb-3 d-flex flex-row align-items-center justify-content-around">
        <Link to="/PlataformaCursos" className="text-start btn btn-back">
            Volver atrás
        </Link>
        <h2 className="perfilFont text-start">Bienvenid@ a Ingeniería</h2>
        <p></p>
        <p></p>
        </div>

                <div className="mt-3 row d-flex align-items-center justify-content-center courses-btn">
                    <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <Link to="/Computacion" type="button" className="btn btn-lg btn-block">
                            <img src={COMPUTACION} alt="Computacion" className="img-fluid imgZoom" />
                        </Link>
                    </div>
                    <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <Link to="/Robotica" type="button" className="btn btn-lg btn-block">
                            <img src={ROBOTICA} alt="Robotica" className="img-fluid imgZoom" />
                        </Link>
                    </div>
                <div className='row container-fluid d-flex align-content-center justify-content-center'> 
                <Link to="/Quizz-Ingenieria" class="btn button1"> ¡Vamos al Quiz! </Link>    
                </div>

                </div>

            </div>
      
    </div>
  );
}

export default Ingenieria;
