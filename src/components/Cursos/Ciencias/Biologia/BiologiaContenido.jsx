
import React from 'react'
import ReactPlayer from 'react-player'

export default function ModalContentVideo({ onClose }) {

    return (
    
    <div className="modal-1">

            <ReactPlayer
            url='https://www.youtube.com/watch?v=ktxH-lN_tiQ'
            className='react-player'
            playing
            width='100%'
            height='100%'
            controls= 'false'
            />

        <button onClick={onClose}  type="button" className="btn-close" aria-label="Close"></button>
    </div>
    )
}