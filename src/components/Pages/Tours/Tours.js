import React, { Component, Fragment } from 'react';

import svg from '../../../assets/Icon/sprite.svg';

class Tours extends Component {

    render() {

        return(
            <Fragment>
                 <div className="page-not-available">
                    <svg>
                        <use xlinkHref={`${svg}#icon-paper-plane`}/>
                    </svg>
                    Tours not available
                </div>
            </Fragment>
        )
    }
}

export default Tours;