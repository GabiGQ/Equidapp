import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentS from './RecursoContenidoS'
import ModalContentT from './RecursoContenidoT'
import ModalContentE from './RecursoContenidoE'
import ModalContentM from './RecursoContenidoM'
import Sidebar from '../Cursos/Sidebar';
import S from '../../img/iconos/S.svg'
import T from '../../img/iconos/T.svg'
import E from '../../img/iconos/E.svg'
import M from '../../img/iconos/M.svg'
import Cookies from '../../img/recurs/galleta.png'
import '../../Styles/recurso.css';
import '../../Styles/pCursos.css';




function Recurso() {
    const [showModalS, setShowModalS] = useState(false);
    const [showModalT, setShowModalT] = useState(false);
    const [showModalE, setShowModalE] = useState(false);
    const [showModalM, setShowModalM] = useState(false);

    return (
        <div className="app-container container-fluid row">
            <div className="container-fluid app-sidebar col-lg-10 col-md-12 col">
                <Sidebar />
            </div>

            <div className="app-main container-fluid col-lg col-md-12 ">
                    <div className="header-box container ">
                        <h2 className="perfilFont">¡Sigamos Aprendiendo! : Recursos Divertidos</h2>
                    </div>

                    <div className="row">
                        <div className="col">
                            {/* Letras STEM en una fila */}
                            <div className="btn-group-horizontal d-flex flex-wrap justify-content-center" role="group" aria-label="Horizontal button group">
                                <button type="button" className="btn btn-outline-light flex-grow-1" onClick={() => setShowModalS(true)}>
                                    <img src={S} alt="Icono S" className="img-fluid" />
                                </button>
                                {showModalS && createPortal(<ModalContentS onClose={() => setShowModalS(false)} />, document.body)}

                                <button type="button" className="btn btn-outline-light flex-grow-1" onClick={() => setShowModalT(true)}>
                                    <img src={T} alt="Icono T" className="img-fluid" />
                                </button>
                                {showModalT && createPortal(<ModalContentT onClose={() => setShowModalT(false)} />, document.body)}

                                <button type="button" className="btn btn-outline-light flex-grow-1" onClick={() => setShowModalE(true)}>
                                    <img src={E} alt="Icono E" className="img-fluid" />
                                </button>
                                {showModalE && createPortal(<ModalContentE onClose={() => setShowModalE(false)} />, document.body)}

                                <button type="button" className="btn btn-outline-light flex-grow-1" onClick={() => setShowModalM(true)}>
                                    <img src={M} alt="Icono M" className="img-fluid" />
                                </button>
                                {showModalM && createPortal(<ModalContentM onClose={() => setShowModalM(false)} />, document.body)}
                            </div>
                        </div>
                    </div>


                    <div className="row mt-5 d-flex justify-content-center align-items-center ">
                        <div className="col-md-6 flip-card-container mb-2">
                            {/* Primera flipcard */}
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <p className="title">¿Qué son las Cookies?</p>
                                        <img src={Cookies} className="img-fluid rounded-start" alt="Cookies" />
                                    </div>
                                    <div className="flip-card-back">
                                        <p className="title">Las cookies en internet no son galletas, ¡son algo digital!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 flip-card-container">
                            {/* Segunda flipcard */}
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <p className="title">Ayudan a que las páginas funcionen mejor</p>
                                        <p>Aunque no necesitan saber todo <br />¡La seguridad es lo primero!</p>
                                    </div>
                                    <div className="flip-card-back">
                                        <p className="title">Son como pequeñas notas que guardan información sobre lo que me gusta en una página web.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}





export default Recurso;