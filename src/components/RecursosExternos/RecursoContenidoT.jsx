
import FreeCodeCamp from '../../img/recurs/FreeCodeCamp.jpg'
import BlockyGames from '../../img/recurs/Blocky-Games.jpg'
import Scratch from '../../img/recurs/Scratch.png'
export default function ModalContentT({ onClose }) {
    const toFreeCodeCamp = () => {
        window.open("https://www.freecodecamp.org/espanol/", "_blank");
    
    };
    const toBlockyGames = () => {
        window.open("https://blockly.games/", "_blank");
    
    };
    const toScratch = () => {
        window.open("https://scratch.mit.edu/", "_blank")
    }
    

    return (
        <div className="modal-1">
        <div class="card-group">
            
            <div className="card1 cardT" style={{ width: '100%', maxWidth: '13rem' }} onClick={toFreeCodeCamp}>
            <img src={FreeCodeCamp} 
                alt="FreeCodeCamp"
                style={{ cursor: "pointer" }}
                className="img-fluid"
                viewBox="0 0 24 24"
                />
                <div class="card__content1">
                <p class="card__title1"> FreeCodeCamp </p>
                <p class="card__description1"> Plataforma educativa, aprendizaje de desarrollo web gratuito.</p>
                </div>
            </div>

        
            <div className="card1 cardT" style={{ width: '100%', maxWidth: '18rem' }} onClick={toBlockyGames}>
            
            <img src={BlockyGames} 
                alt="Blocky-Games"
                style={{ cursor: "pointer" }}
                className="img-fluid"
                viewBox="0 0 24 24"
                />
                <div class="card__content1">
                <p class="card__title1"> Blocky Games </p>
                    <p class="card__description1"> Plataforma interactiva para aprender programación mediante bloques visuales y divertidos desafíos.</p>
                </div>
            </div>
            <div className="card1 cardT" style={{ width: '100%', maxWidth: '18rem' }} onClick={toScratch}>
            <img src={Scratch} 
                alt="Scratch"
                style={{ cursor: "pointer" }}
                className="img-fluid"
                viewBox="0 0 24 24"
                />
                <div class="card__content1">
                <p class="card__title1"> Scratch </p>
                <p class="card__description1">Plataforma creativa de programación para niños. Crea historias, juegos y animaciones visualmente.</p>
                </div>
            </div>
    </div> 
        <button onClick={onClose}  type="button" class="btn-close mt-4" aria-label="Close"></button>
    </div>
    );
}
