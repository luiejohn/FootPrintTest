import React from 'react';

import './modal.scss';
// import SamplePic from '../../../assets/img/gallery-1.jpg';

const Modal = ( props )  => {
    return (
        <div>
            <div className={props.show ? "backdrop" : null}></div>
            <div id="openModal" className={ props.show ? "modal modal-show" : "modal modal-hide"}>
                {
                    props.children
                }
            </div>
        </div>

    )
}

export default Modal;