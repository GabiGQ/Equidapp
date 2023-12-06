
import Sidebar from '../Sidebar';
import Math from '../../../img/generales/Math.png'
import "../../../Styles/MatematicasCSS.css"
import '../../../Styles/pCursos.css';
import { Link } from 'react-router-dom';

const Matematicas1 = () => {
  return (
    <div className="app-container container-fluid row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 col ">
        <Sidebar />
      </div>
      <div className="app-main container-fluid col-lg col-md-12">
      <div className="welcome-box mb-3 d-flex flex-row align-items-center justify-content-around">
        <Link to="/PlataformaCursos" className="text-start btn btn-back">
            Volver atrás
        </Link>
        <h2 className="perfilFont text-start">Bienvenid@ a Matemáticas </h2>
        <p></p>
        <p></p>
        </div>
        <div className="row d-flex align-items-center justify-content-center courses-btn">
                    <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <Link to="/MatematicasIntro" type="button" className="btn btn-lg btn-block">
                            <img src={Math} alt="Matematica" className="img-fluid imgZoom mb-3" />
                        </Link>
                    </div>
                    <div className='row container-fluid d-flex align-content-center justify-content-center'> 
              <Link to="/Quizz-Matematicas" class="btn button1"> ¡Vamos al Quiz! </Link>   
              </div>
      </div>
      </div>
    </div> 
  );
};

export default Matematicas1;