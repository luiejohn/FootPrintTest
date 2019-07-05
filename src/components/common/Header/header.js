import React, { Fragment } from 'react';

import './header.scss';
import svg from '../../../assets/Icon/sprite.svg';


const Header = () => {

    return (
        <Fragment>
            <div className="home-header">
                <div className="home-header__headline">
                    OUTDOORS
                </div>
                <div className="home-header__subheadline">
                    is where life happens
                </div>
                <div className="home-header__search">
                    <input type="text" placeholder="Email" />
                        <span>
                            <svg className="home-header__sub-icon">
                                <use xlinkHref={`${svg}#icon-mail`} />
                            </svg>
                        </span>
                    <button className="btn-subscribe">Subscribe Now</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;