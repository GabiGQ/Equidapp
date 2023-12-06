import React from 'react';
import '../../../Styles/Mujeres.css';
import '../../../Styles/pCursos.css';
import Sidebar from '../Sidebar';
import { useState } from 'react';
import S from '../../../img/iconos/S.svg'
import T from '../../../img/iconos/T.svg'
import E from '../../../img/iconos/E.svg'
import M from '../../../img/iconos/M.svg'
import MarieCurie from '../../../img/mujeres/MarieCurie.png'
import Rosalind from '../../../img/mujeres/rosalind-franklin.jpg'
import Mariana from '../../../img/mujeres/Mariana Costa.jpg'
import Natalia from '../../../img/mujeres/Natalia Montellano.jpg'
import Valentina from '../../../img/mujeres/Valentina Muñoz Rabanal.png'
import Hedy from '../../../img/mujeres/Hedy.png'
import Katherine from '../../../img/mujeres/katherine-johnson.webp'
import Ada from '../../../img/mujeres/ada lovelace.jpg'
import Grace from '../../../img/mujeres/Grace_M._Hopper.jpg'
import Lillian from '../../../img/mujeres/Lillian_Moller_Gilbreth.jpg'
import Esther from '../../../img/mujeres/Esther-Conwell.webp'
import Chien from '../../../img/mujeres/Chien-Shiung Wu.jpg'
import Karen from '../../../img/mujeres/Karen-Uhlenbeck.jpg'
import Mary from '../../../img/mujeres/Mary_Lucy_Cartwright.jpg'
import Sofia from '../../../img/mujeres/Sofia Kovalevskaya.jpg'
import Cathleen from '../../../img/mujeres/Cathleen Synge.png'
import Sylvia from '../../../img/mujeres/Sylvia Earle.png'
import Jennifer from '../../../img/mujeres/Jennifer Doudna.jpg'
import Reshma from '../../../img/mujeres/Reshma.jpeg'
import Kimberly from '../../../img/mujeres/Kimberly Bryant.webp'
import Mae from '../../../img/mujeres/Mae_Carol_Jemison.jpg'
import { Link } from 'react-router-dom';


function MujeresBio() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const mujeresCientificasData = [
    { nombre: 'Marie Curie', 
      categoria: 'ciencia', 
      miniBiografia: 'Descubridora de la radiactividad. Ganadora de 2 premios nobel.',
      imagenUrl: MarieCurie },
    { nombre: 'Rosalind Franklin', 
      categoria: 'ciencia', 
      miniBiografia: 'Química y cristalógrafa, contribuyó a la comprensión de la estructura del ADN.',
      imagenUrl: Rosalind},
      
    { nombre: 'Mariana Costa', 
      categoria: 'tecnologia', 
      miniBiografia:'Cofundadora y directora ejecutiva de Laboratoria, una organización enfocada en empoderar a las mujeres latinoamericanas en el campo de la tecnología.',
      imagenUrl: Mariana
    },
    { nombre: 'Natalia Montellano', 
      categoria: 'ciencia', 
      miniBiografia:' Investigaciones en ciencia de los alimentos, materia blanda, biofísica, proteínas y funciones biológicamente activas.',
      imagenUrl: Natalia
    },
    { nombre: 'Valentina Muñoz', 
      categoria: 'tecnologia', 
      miniBiografia:'Cofundadora y presidenta de la Asociación de Mujeres Jóvenes por las Ideas (AMUJI Chile). Fue reconocida recientemente como la programadora más joven en contribuir a la construcción de la primera política de Inteligencia Artificial en su país',
      imagenUrl: Valentina
    },
    { nombre: 'Hedy Lammar',
      categoria: 'ingenieria', 
      miniBiografia:'Aunque más conocida como actriz, también co-inventó un sistema de comunicaciones secretas que sirvió como base para el desarrollo de tecnologías como el salto de frecuencia, fundamental en las comunicaciones inalámbricas modernas.',
      imagenUrl: Hedy
    },
    { nombre: 'Katherine Johnson', 
      categoria: 'matematicas', 
      miniBiografia:'Matemática y física espacial, contribuyó significativamente a la NASA.',
      imagenUrl: Katherine  
    },
    { nombre: 'Ada Lovelace', 
      categoria: 'tecnologia', 
      miniBiografia:'Considerada la primera programadora de computadoras, Ada Lovelace escribió el primer algoritmo destinado a ser procesado por una máquina, anticipando así el concepto de programación informática.',
      imagenUrl: Ada  
    },
    { nombre: 'Grace Hopper', 
      categoria: 'tecnologia', 
      miniBiografia:'Pionera en la programación de computadoras y una de las creadoras del primer compilador, lo que llevó al desarrollo de lenguajes de programación de alto nivel.',
      imagenUrl: Grace
    },
    { nombre: 'Lillian Moller Gilbreth', 
      categoria: 'ingenieria', 
      miniBiografia:' Ingeniera industrial y psicóloga, pionera en el campo de la eficiencia y la ergonomía.',
      imagenUrl: Lillian
    },
    { nombre: 'Esther Conwell', 
      categoria: 'ingenieria', 
      miniBiografia:'Fue una líder en investigación de semiconductores. Su trabajo, que explica cómo los electrones viajan a través de semiconductores, cambió la cara de la informática moderna.',
      imagenUrl: Esther
    },
    { nombre: 'Chien-Shiung Wu ', 
      categoria: 'ingenieria', 
      miniBiografia:'Física experimental e ingeniera, contribuyó significativamente al campo de la física nuclear y fue parte fundamental del experimento de la paridad.',
      imagenUrl: Chien
    },
    { nombre: 'Karen Uhlenbeck', 
      categoria: 'matematicas', 
      miniBiografia:'Matemática estadounidense galardonada con el Premio Abel en 2019 por su trabajo en el campo de las ecuaciones en derivadas parciales.',
      imagenUrl: Karen
    },
    { nombre: 'Mary Cartwright', 
      categoria: 'matematicas', 
      miniBiografia:'Matemática británica que hizo contribuciones destacadas a la teoría de las ecuaciones diferenciales y a la teoría del caos',
      imagenUrl: Mary
    },
    { nombre: 'Sofia Kovalevskaya', 
      categoria: 'matematicas', 
      miniBiografia:' Matemática rusa y primera mujer en obtener un doctorado en matemáticas. Realizó contribuciones significativas a la teoría de las ecuaciones diferenciales y la mecánica.',
      imagenUrl: Sofia
    },
    { nombre: 'Cathleen Morawetz', 
      categoria: 'matematicas', 
      miniBiografia:'Matemática aplicada que contribuyó a la teoría de las ecuaciones en derivadas parciales y la dinámica de fluidos.',
      imagenUrl: Cathleen
    },
    { nombre: 'Sylvia Earle', 
      categoria: 'ciencia', 
      miniBiografia:' Oceanógrafa y exploradora submarina que ha dedicado su vida al estudio y la protección de los océanos.',
      imagenUrl: Sylvia
    },
    { nombre: 'Jennifer Doudna', 
      categoria: 'ciencia', 
      miniBiografia:'Bioquímica y genetista conocida por su papel en el desarrollo de la tecnología CRISPR-Cas9 para la edición del genoma.',
      imagenUrl: Jennifer  
    },
    { nombre: 'Reshma Saujani', 
      categoria: 'tecnologia', 
      miniBiografia:'Fundadora de Girls Who Code, una organización que promueve la educación en programación para niñas y mujeres.',
      imagenUrl: Reshma
    },
    { nombre: ' Kimberly Bryant', 
      categoria: 'ingenieria', 
      miniBiografia:'Fundadora de Black Girls Code, es una de las mujeres ingenieras que lucha por introducir al sexo femenino en este ámbito.',
      imagenUrl: Kimberly
    },
    { nombre: 'Mae Jemison', 
      categoria: 'ingenieria', 
      miniBiografia:'Física y astronauta, la primera mujer afroamericana en el espacio.',
      imagenUrl: Mae
    },
  ]

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

    return (
    <div className="app-container container-fluid  row">
      
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 col ">
        
        <Sidebar/>
      </div>
      
      <div className="app-main container-fluid col-lg col-md-12">
      <Link to="/MujeresSTEM" className="text-start btn btn-back-mujeres">
            Volver atrás
        </Link>
      
      <div>
        <div className="btn-group-horizontal1 d-flex flex-wrap justify-content-center" role="group" aria-label="Horizontal button group">
        <button onClick={() => handleCategoryChange('ciencia')}  className="btn btn-outline-light flex-grow-1">
        <img src={S} alt="Icono S" className="img-fluid" />
        </button>
        <button onClick={() => handleCategoryChange('tecnologia')} className="btn btn-outline-light flex-grow-1">    
        <img src={T} alt="Icono T" className="img-fluid" />
        </button>
        <button onClick={() => handleCategoryChange('ingenieria')} className="btn btn-outline-light flex-grow-1">
        <img src={E} alt="Icono E" className="img-fluid" />
        </button>
        <button onClick={() => handleCategoryChange('matematicas')} className="btn btn-outline-light flex-grow-1">
        <img src={M} alt="Icono M" className="img-fluid" />
        </button>
      </div>

      <div>
          <h4 className="text-center p-4 font-size-mujeres">
            A lo largo de la historia, las mujeres han desempeñado un papel
            fundamental en el avance de la ciencia, la tecnología, la ingeniería
            y las matemáticas, aunque sus contribuciones no siempre han sido
            ampliamente reconocidas o celebradas.
          </h4>
        </div>
    
      <div className="row">
        {mujeresCientificasData.map((cientifica, index) => (
    
        (selectedCategory === cientifica.categoria) && (
          <div key={index} className="col-lg-4 mb-4">
            <div className= "book">
            <div className="cover">
            <img src={cientifica.imagenUrl} alt={cientifica.nombre} className="img-fluid" />
              <div className="cover-overlay">
              <p className="nombre">{cientifica.nombre}</p>
              </div>
            </div>
            <p className="bio">{cientifica.miniBiografia}</p>
          </div>
        </div>
        
        )
      ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default MujeresBio;
