import React, { useState, useEffect } from 'react';
import AvatarModal from './Avatar/AvatarModal';
import perfil from '../../img/generales/perfil.jpeg';
import '../../Styles/pCursos.css';
import { Link } from 'react-router-dom';
import Quiz from '../../img/iconos/Quiz.svg';
import Recursos from '../../img/iconos/Recursos.svg';

import Medal from './Avatar/Medallas/Medal';
import CIENCIA from '../../img/medallas/CIENCIA.png';
import INGENIERIA from '../../img/medallas/Ingenieria.png';
import MATEMATICAS from '../../img/medallas/MATEMATICAS.png';
import MUJERES from '../../img/medallas/MUJERES.png';
import STEM from '../../img/medallas/STEM.png';
import TECNOLOGIA from '../../img/medallas/TECNOLOGIA.png';
import CambioImagen from '../../img/iconos/cambioimagen.png';
import { useAuth } from "../../context/AuthContext";
import { fetchMedalsFromApi } from "../../api/auth"; // Importa la función directamente
import Cookies from 'js-cookie';

function Sidebar() {
    const { user,id } = useAuth(); // user contiene la información del usuario incluido el _id
    const [medals, setMedals] = useState([]); // Estado local para almacenar las medallas
    const [isAvatarModalOpen, setAvatarModalOpen] = useState(false);
    const [avatar, setAvatar] = useState(() => localStorage.getItem('userAvatar') || perfil);

    useEffect(() => {
        // Obtén el token desde las cookies
        const token = Cookies.get('token');
        if (user?.id._id && token) {
            fetchMedalsFromApi(user.id._id, token).then(response => {
                console.log(response.data); // Imprime las medallas
                setMedals(response.data); // Actualiza el estado local de medallas
            }).catch(error => {
                console.error('Error al obtener las medallas:', error);
            });
        }
    }, [id]);

    useEffect(() => {
        console.log(medals);
    }, [medals]);
    const medalImages = [
        { name: 'CienciaM', image: CIENCIA },
        { name: 'IngenieriaM', image: INGENIERIA },
        { name: 'MatematicasM', image: MATEMATICAS },
        { name: 'MujeresM', image: MUJERES },
        { name: 'StemM', image: STEM },
        { name: 'TecnologiaM', image: TECNOLOGIA },
    ];

    const handleAvatarChange = (newAvatarSrc) => {
        setAvatar(newAvatarSrc);
        localStorage.setItem('userAvatar', newAvatarSrc);
        setAvatarModalOpen(false);
    };

    return (
        <div className="user-box row">
            <div>
                <img src={avatar} alt="Perfil" className="foto-perfil" />
                <div className="medals-container">
                {Array.isArray(medals) && medalImages.map((medalInfo, index) => {
    const isUnlocked = medals.some(medal => medal.nombre === medalInfo.name && medal.obtenida);
    return (
        <Medal 
            key={index} 
            unlocked={isUnlocked} 
            imageUnlocked={medalInfo.image} 
            imageLocked={medalInfo.image} // La misma imagen, el estilo se controla en el componente Medal
        />
    );
})}
                </div>
                <h4 className='perfilFont'>{user.name}</h4>
            </div>
            <div className="btn-group-vertical sidebar" role="group" aria-label="Vertical button group">
                <button type="button" className="btn">
                    <Link to="/quizz-intro">
                        <img className='icons-btn' src={Quiz} alt="Quiz" />
                    </Link>
                </button>
                <button type="button" className="btn">
                    <Link to="/recurso">
                        <img className='icons-btn' src={Recursos} alt="Recursos" />
                    </Link>
                </button>
                <button type="button" className="btn" onClick={() => setAvatarModalOpen(true)}>
                    <img className='icons-btn' src={CambioImagen} alt="Cambio Imagen" />
                </button>


                <AvatarModal
                    isOpen={isAvatarModalOpen}
                    onClose={() => setAvatarModalOpen(false)}
                    onSelectAvatar={handleAvatarChange}
                />
            </div>
        </div>
    );
}

export default Sidebar;
