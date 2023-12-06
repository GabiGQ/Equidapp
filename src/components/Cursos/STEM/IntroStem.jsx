import React from 'react';
import '../../../Styles/pCursos.css';
import Sidebar from './../Sidebar';
import ContenidoStem from './ContenidoStem';

function IntroStem() {
  return (
    <div className="app-container container-fluid row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 col">
        <Sidebar />
      </div>

      <div className="app-main container-fluid col-lg col-md-12 ">
      <div className="mt-3 container-fluid d-md-flex flex-md-row align-items-center justify-content-center">
        <ContenidoStem />
        </div>
      </div>
    </div>
  );
}

export default IntroStem;