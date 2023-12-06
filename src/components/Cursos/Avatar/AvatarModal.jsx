// AvatarModal.js
import React from 'react';
import '../../../Styles/AvatarModal.css'; 

import av01 from '../../../img/avatars/1.png'
import av02 from '../../../img/avatars/2.png'
import av03 from '../../../img/avatars/3.png'
import av04 from '../../../img/avatars/4.png'
import av05 from '../../../img/avatars/5.png'
import av06 from '../../../img/avatars/6.png'
import av07 from '../../../img/avatars/7.png'
import av08 from '../../../img/avatars/8.png'
import av09 from '../../../img/avatars/9.png'
import av10 from '../../../img/avatars/10.png'
import av11 from '../../../img/avatars/11.png'
import av12 from '../../../img/avatars/perfil.jpeg'


const AvatarModal = ({ isOpen, onClose, onSelectAvatar }) => {
    const avatars = [av01, av02, av03, av04, av05, av06, av07, av08, av09, av10, av11, av12];

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            {/* ... */}
            <div className="avatar-grid">
                {avatars.map((avatar, index) => (
                    <div key={index} className="avatar-item" onClick={() => onSelectAvatar(avatar)}>
                        <img src={avatar} alt={`Avatar ${index + 1}`} className="avatar-image img-fluid imgZoom" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvatarModal;
