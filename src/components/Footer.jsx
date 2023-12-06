import '../App.css'
import PNG from '../img/generales/generationpng.png'

export default function Footer() {
    return (
        <footer className="footer text-light text-center py-4">
        <div className="container">
          <div className="row">
            {/* Columna de Agradecimientos */}
            <div className="col-md-6">
              <h5 className="text-start">Herramientas utilizadas</h5>
              <ul className="text-start">
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>Icons8 Developers</li>
              </ul>
            </div>
  
            {/* Columna de Contacto */}
            <div className="col-md-6">
              <h5>Proyecto EquidApp</h5>
              <p>EquidApp nace como proyecto integrador desde el Bootcamp Generation Chile.</p>
              <p></p>
              <p></p>
            </div>
          </div>
  
          {/* Derechos de Autor */}
          <p className="mb-0">
            <img src={PNG} alt='Generation logo' className='img-fluid png-footer'/>
          </p>
        </div>
      </footer>
  );
};