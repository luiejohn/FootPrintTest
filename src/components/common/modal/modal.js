import React from 'react';

import './modal.scss';
// import SamplePic from '../../../assets/img/gallery-1.jpg';
import BackDrop from './../backdrop/backdrop';


const Modal = ( props )  => {
    return (
        <div>
            <BackDrop className={props.show ? "backdrop" : null} onClick={() => props.handleChange('loggingIn', false)}/>
            <div id="openModal" className={ props.show ? "modal modal-show" : "modal modal-hide"}>
                {
                    props.children
                }
            </div>
        </div>

    )
}

export default Modal;