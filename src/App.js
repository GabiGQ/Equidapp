import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext'
import { MedalsProvider } from "./context/medalsContext.jsx";
import { pdfjs } from 'react-pdf';
import Navbar from "./components/Navbar";
import Registro from "./components/Registro";
import Home from "./components/Home";
import Login from "./components/Login";
import Pcursos from "./components/Cursos/Pcursos";
import Matematicas from "./components/Cursos/Matematicas/Matematicas"
import Recurso from "./components/RecursosExternos/Recurso";
import MatematicasIntro from "./components/Cursos/Matematicas/MatematicasIntro";
import MujeresSTEM from "./components/Cursos/MujeresSTEM/Mujeres"
import MujeresBio from "./components/Cursos/MujeresSTEM/MujeresBio"
import Ciencia from "./components/Cursos/Ciencias/Ciencia"
import Biologia from "./components/Cursos/Ciencias/Biologia/Biologia"
import Fisica from "./components/Cursos/Ciencias/Fisica/Fisica"
import Quimica from "./components/Cursos/Ciencias/Quimica/Quimica.jsx"
import Tecnologia from "./components/Cursos/Tecnologia/Tecnologia"
import Ingenieria from "./components/Cursos/Ingenieria/Ingenieria"
import Computacion from "./components/Cursos/Ingenieria/Computacion/Computacion.jsx"
import Robotica from "./components/Cursos/Ingenieria/Robotica/Robotica.jsx"
import Programacion from "./components/Cursos/Tecnologia/Programacion/Programacion.jsx"
import IA from "./components/Cursos/Tecnologia/IA/IA.jsx"
import CienciaDeDatos from "./components/Cursos/Tecnologia/CDD/CienciaDeDatos"
import CursoIntro from "./components/Cursos/CursoIntro";
import IntroStem from "./components/Cursos/STEM/IntroStem";
import IngeIntro from "./components/Cursos/Ingenieria/IngeIntro";
import CienciaIntro from "./components/Cursos/Ciencias/QuizzCiencia/CienciaIntro";
import MatematicasIntroQuizz from "./components/Cursos/Matematicas/QuizzMate/MateIntro";
import TecIntroQuizz from "./components/Cursos/Tecnologia/QuizzTec/TecIntro";


import RutasProtegidas from './RutasProtegidas.jsx'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString() 


function App() {
  // TODO: aca de sebe meter el context provider 
  return (
    <AuthProvider>
      <MedalsProvider>
      <div>
        <Router>
          <div>
            <Navbar />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/registrarse" element={<Registro />} />
                <Route path="/login" element={<Login />} />

                <Route element={ <RutasProtegidas /> }>
                <Route path="/PlataformaCursos" element={<Pcursos />} />
                <Route path="/recurso" element={<Recurso />} />
                <Route path="/" element={<Pcursos />} />
                <Route path="/Matematicas" element={<Matematicas />} />
                <Route path="/MatematicasIntro" element={<MatematicasIntro />} />
                <Route path="/Ciencia" element={<Ciencia />} />
                <Route path="/Biologia" element={<Biologia />} />
                <Route path="/Fisica" element={<Fisica />} />
                <Route path="/Quimica" element={<Quimica />} />
                <Route path="/Tecnologia" element={<Tecnologia />} />
                <Route path="/Programacion" element={<Programacion />} />
                <Route path="/IA" element={<IA />} />
                <Route path="/CienciaDeDatos" element={<CienciaDeDatos />} />
                <Route path="/Ingenieria" element={<Ingenieria />} />
                <Route path="/Computacion" element={<Computacion />} />
                <Route path="/Robotica" element={<Robotica />} />
                <Route path="/Quizz-intro" element = {<CursoIntro />}/>
                <Route path="/Quizz-Ingenieria" element = {<IngeIntro/>}/>
                <Route path="/Quizz-Ciencia" element = {<CienciaIntro/>}/>
                <Route path="/Quizz-Matematicas" element = {<MatematicasIntroQuizz/>}/>
                <Route path="/Quizz-Tecnologia" element = {<TecIntroQuizz/>}/>
                <Route path="/MujeresSTEM" element = {<MujeresSTEM />}/>
                <Route path="/IntroStem" element = {<IntroStem />}/>
                <Route path="/MujeresBio" element = {<MujeresBio />}/>
              
              
              </Route>
              </Routes>
            </div>
          </div>
        </Router>
      </div>
      </MedalsProvider>
    </AuthProvider>
  );
}

export default App;
