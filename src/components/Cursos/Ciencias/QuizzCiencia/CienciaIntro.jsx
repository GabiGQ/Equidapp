import React from 'react';
import '../../../../Styles/pCursos.css';
import StemBtnQuizz from '../../StemBtnQuizz';
import Sidebar from '../../Sidebar';
import ContainerQuizz from './ContainerCienciaQuizz';


function IngeIntro() {

  return (
    <div className="app-container container-fluid  row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 col ">
        
        <Sidebar/>
      </div>
      <div className="app-main container-fluid col-lg col-md-12 w- h-80">
        
        <StemBtnQuizz/>
        <ContainerQuizz/>
      </div>
      
      
    </div>
  );
}

export default IngeIntro;
