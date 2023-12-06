
import Cokitos from '../../img/recurs/Cokitos.png'
import Cerebriti from '../../img/recurs/Cerebrite.png'
export default function ModalContentM({ onClose }) {
    const toCokitos = () => {
        window.open("https://www.cokitos.com/tag/juegos-de-matematicas","_blank");
    
    };
    const toCerebriti = () => {
        window.open("https://www.cerebriti.com/juegos-de-matematicas/","_blank");
    
    };
    return (
    <div className="modal-1">
        <div class="card-group">

            <div className="card1" style={{ width: '100%', maxWidth: '18rem' }} onClick={toCokitos}>
            <img src={Cokitos} 
                alt="Cokitos"
                style={{ cursor: "pointer" }}
                className="card-img-top"
                viewBox="0 0 24 24"
                />
            <div class="card__content1">
                <p class="card__title1"> Cokitos </p>
                <p class="card__description1"> Juegos de matemáticas para niños, aprendizaje divertido y educativo en línea.</p>
                </div>
            </div>

        
            <div className="card1" style={{ width: '10rem' }} onClick={toCerebriti}>
            <img src={Cerebriti} 
                alt="Cerebriti"
                style={{ cursor: "pointer" }}
                className="card-img-top"
                viewBox="0 0 24 24"
                />
                <div class="card__content1">
                <p class="card__title1"> Cerebriti </p>
                <p class="card__description1">  Plataforma educativa con juegos y actividades para el aprendizaje interactivo y personalizado</p>
                </div>
            </div>
        <button onClick={onClose}  type="button" class="btn-close mt-4" aria-label="Close"></button>
    </div>
    </div>
    );
}
