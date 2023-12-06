import React from "react";
import "../../../Styles/pCursos.css";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import MujeresIntro from "./QuizzMujeres/MujeresIntro";

function Mujeres() {
  return (
    <div className="app-container container-fluid  row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12  col ">
        <Sidebar />
      </div>

      <div className="app-main container-fluid col-lg col-md-12">
        <div className="welcome-box mb-3 d-flex flex-row align-items-center justify-content-around">
          <Link to="/PlataformaCursos" className="text-start btn btn-back">
            Volver atrás
          </Link>
          <h2 className="perfilFontM">
            {" "}
            Descubriendo el Legado Femenino: Ciencia, Tecnología, Ingeniería y
            Matemáticas (STEM)
          </h2><p></p><p></p>
        </div>

        
        <div className="row container-fluid d-flex align-content-center justify-content-center mb-5">
          <MujeresIntro />
        </div>
        <div className="row container-fluid d-flex align-content-center justify-content-center">
          <Link to="/MujeresBio" class="btnM">
            ¡Aprende sobre las mujeres en STEM!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mujeres;
