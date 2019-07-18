import React, { Component, Fragment } from 'react';

import './Messages.scss'
import svg from '../../../assets/Icon/sprite.svg';

class Hotels extends Component {

    render(){

        return(
            <Fragment>
                <div className="page-not-available">
                    <svg>
                        <use xlinkHref={`${svg}#icon-paper-plane`}/>
                    </svg>
                    Messages not available
                </div>
            </Fragment>
        )
    }
}

export default Hotels;