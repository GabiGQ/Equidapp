import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentVideo from './FisicaContenido';
import ModalContentInfo from './FisicaContenidoInfo';
import Sidebar from '../../Sidebar';
import '../../../../Styles/ciencias.css';
import '../../../../Styles/pCursos.css';
import { Link } from 'react-router-dom';
import '../../../../Styles/btn-back.css';
import '../../../../Styles/text-content.css';
import ContenidoFisica from './ContenidoFisica'

function Fisica() {

    const [showModalVideo, setShowModalVideo] = useState(false);
    const [showModalInfo, setShowModalInfo] = useState(false);
    return (
        <div className="app-container container-fluid  row">
            <div className="container-fluid app-sidebar col-lg-10 col-md-12 col ">
                <Sidebar />
            </div>
            <div className="app-main container-fluid col-lg col-md-12">
                <div className="welcome-box mb-3 d-flex flex-row align-items-center justify-content-around">
                    <Link to="/Ciencia" className="text-start btn btn-back">
                        Volver atrás
                    </Link>
                    <h2 className="perfilFont">Bienvenid@ a </h2>
                    <p></p><p></p>
                </div>

                <div className="mt-3 container-fluid d-md-flex flex-md-row align-items-center justify-content-center">
                    <ContenidoFisica />

                </div>
                <div className='btn-group-horizontal d-flex flex-wrap justify-content-evenly  mb-5 pt-4'>
                    <>
                        <button class="game-button mb-2" onClick={() => setShowModalVideo(true)}>
                            <svg class="play-icon" viewBox="0 0 40 40">
                                <path d="M 10,10 L 30,20 L 10,30 z"></path>
                            </svg>
                            PLAY VIDEO
                        </button>
                        {showModalVideo && createPortal(
                            <ModalContentVideo onClose={() => setShowModalVideo(false)} />,
                            document.body)}
                    </>
                    <>
                        <button class="game-button" onClick={() => setShowModalInfo(true)}>
                            <svg class="play-icon" viewBox="0 0 40 40">
                                <path d="M 10,10 L 30,20 L 10,30 z"></path>
                            </svg>
                            INFORMACION CURSO
                        </button>
                        {showModalInfo && createPortal(
                            <ModalContentInfo onClose={() => setShowModalInfo(false)} />,
                            document.body)}
                    </>
                </div>
            </div>
        </div>
    )
}
export default Fisica