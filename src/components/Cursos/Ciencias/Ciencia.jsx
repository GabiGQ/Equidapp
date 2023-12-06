import React from 'react';
import Sidebar from '../../Cursos/Sidebar';
import '../../../Styles/ciencias.css';
import '../../../Styles/pCursos.css';
import Biologia from '../../../img/generales/BIOLOGIA.png';
import Quimica from '../../../img/generales/QUIMICA.png';
import Fisica from '../../../img/generales/FISICA.png';
import { Link } from 'react-router-dom';

function Ciencia() {
    return (
        <div className="app-container container-fluid  row">
        <div className="container-fluid app-sidebar col-lg-10 col-md-12 col">
                <Sidebar />
            </div>
            <div className="app-main container-fluid col-lg col-md-12">
                <div className="welcome-box mb-3 d-flex flex-row align-items-center justify-content-around">
                    <Link to="/PlataformaCursos" className="text-start btn btn-back">
                    Volver atrás
                    </Link>
                    <h2 className="perfilFont text-start">Bienvenid@ a Ciencias</h2>
                    <p></p>
                    <p></p>
                </div>
                <div className="row d-flex align-items-center justify-content-center courses-btn">
                    <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <Link to="/Biologia" type="button" className="btn btn-lg btn-block">
                            <img src={Biologia} alt="Biologia" className="img-fluid imgZoom" />
                        </Link>
                    </div>
                    <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <Link to="/Quimica" type="button" className="btn btn-lg btn-block">
                            <img src={Quimica} alt="Quimica" className="img-fluid imgZoom" />
                        </Link>
                    </div>
                    <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <Link to="/Fisica" type="button" className="btn btn-lg btn-block">
                            <img src={Fisica} alt="Fisica" className="img-fluid imgZoom" />
                        </Link>
                    </div>
                </div>

                <div className='row container-fluid d-flex align-content-center justify-content-center '>
                
                <Link to="/Quizz-Ciencia" className="btn button1"> ¡Vamos al Quiz! </Link>
            

                </div>
            </div>
        </div>
    );
}

export default Ciencia;
