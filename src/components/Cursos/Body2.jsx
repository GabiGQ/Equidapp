import React from 'react';
import '../../Styles/pCursos.css';
import MujerSTEM from "../../img/generales/STEMimg.jpg";
import { Link } from 'react-router-dom';
import IntroStemImage from "../../img/generales/IntroStemImage.jpg";


function Body2(){

return(
    <div class="container-flex text-center">

        <Link to="/IntroStem">
                    <img 
                    src={IntroStemImage} 
                    alt="Intro Stem" 
                    className="img-mujeres-stem img-fluid imgZoom" />
                </Link>

                <Link to="/MujeresSTEM">
                    <img 
                    src={MujerSTEM} 
                    alt="Mujeres en STEM" 
                    className="img-mujeres-stem img-fluid imgZoom" />
                </Link>  
            </div>

)}
export default Body2;