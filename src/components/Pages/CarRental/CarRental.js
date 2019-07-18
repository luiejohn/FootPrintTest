import React, { Component, Fragment } from 'react';

import './CarRental.scss'
import svg from '../../../assets/Icon/sprite.svg';

class CarRental extends Component {

    render() {

        return(
            <Fragment>
                <div className="page-not-available">
                    <svg>
                        <use xlinkHref={`${svg}#icon-paper-plane`}/>
                    </svg>
                    Rentals not available
                </div>
            </Fragment>
        )
    }
}

export default CarRental;