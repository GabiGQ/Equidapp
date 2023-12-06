import React from 'react';
import '../../Styles/pCursos.css';
import StemBtnQuizz from './StemBtnQuizz';
import Sidebar from './Sidebar';
import QuizzInicial from './QuizzInicial';


function Pcursos() {

  return (
    <div className="app-container container-fluid  row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 col ">
        
        <Sidebar/>
      </div>
      <div className="app-main container-fluid col-lg col-md-12 ">
        <StemBtnQuizz />
        
      
        <QuizzInicial/>
      </div>
      
      
    </div>
  );
}

export default Pcursos;
