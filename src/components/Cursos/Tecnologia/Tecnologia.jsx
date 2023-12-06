import React from 'react';
import Sidebar from '../../Cursos/Sidebar';
import '../../../Styles/tecnologia.css';
import '../../../Styles/pCursos.css';
import { Link } from 'react-router-dom';
import Programacion from '../../../img/generales/PROGRAMACION.png';
import IA from '../../../img/generales/IA.png';
import CienciaDatos from '../../../img/generales/CIENCIADATOS.png';



function Tecnologia() {

return (
    <div className="app-container container-fluid  row">
    <div className="container-fluid app-sidebar col-lg-10 col-md-12 col">
        
        <Sidebar/>
    </div>
    
    <div className="app-main container-fluid col-lg col-md-12">
    <div className="welcome-box mb-3 d-flex flex-row align-items-center justify-content-around">
        <Link to="/PlataformaCursos" className="text-start btn btn-back">
            Volver atrás
        </Link>
        <h2 className="perfilFont text-start">Bienvenid@ a Tecnología</h2>
        <p></p>
        <p></p>
        </div>

                <div className="mt-3 row d-flex align-items-center justify-content-center courses-btn">
                    <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <Link to="/programacion" type="button" className="btn btn-lg btn-block">
                            <img src={Programacion} alt="Programacion" className="img-fluid imgZoom" />
                        </Link>
                    </div>
                    <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <Link to="/IA" type="button" className="btn btn-lg btn-block">
                            <img src={IA} alt="IA" className="img-fluid imgZoom" />
                        </Link>
                    </div>
                    <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <Link to="/CienciadeDatos" type="button" className="btn btn-lg btn-block">
                            <img src={CienciaDatos} alt="CienciaDatos" className="img-fluid imgZoom" />
                        </Link>
                    </div>
                </div>
                <div className='row container-fluid d-flex align-content-center justify-content-center'>
                
                
                <Link to="/Quizz-Tecnologia" className="btn button1"> ¡Vamos al Quiz!</Link>
        
                </div>
            </div>
    
    
    </div>
);
}

export default Tecnologia;
