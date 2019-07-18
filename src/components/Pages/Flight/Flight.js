import React, { Component, Fragment } from 'react';

import svg from '../../../assets/Icon/sprite.svg';

class Flight extends Component {

    render() {

        return(
            <Fragment>
                <div className="page-not-available">
                    <svg>
                        <use xlinkHref={`${svg}#icon-paper-plane`}/>
                    </svg>
                    Flights not available
                </div>
            </Fragment>
        )
    }
}

export default Flight;