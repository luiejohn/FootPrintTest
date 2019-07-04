import React from 'react';

import './modal.scss';
import SamplePic from '../../../assets/img/gallery-1.jpg';

const Modal = () => {
    return (
        <div id="openModal" className="modalDialog">
            <div>
                <img src={SamplePic} className="view_image" alt=""/> <a href="#close" title="Close" className="close">X</a>
            </div>
        </div>
    )
}

export default Modal;