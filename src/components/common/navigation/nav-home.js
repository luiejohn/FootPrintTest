import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


import './nav-home.scss';

const HomeNav = () => {

    return (
        <Fragment>
            <div className="home-nav">
                <div className="home-nav__logo">
                    LOGO
                </div>
                <ul className="home-nav__navigation">
                    <a href="#" className="home-nav__link">
                        <li className="home-nav__item">
                            
                                Tours
                            
                        </li>
                    </a>
                    <a href="#" className="home-nav__link">
                        <li className="home-nav__item">
                            
                                About Us
                            
                        </li>
                    </a>
                    <a href="#" className="home-nav__link">
                        <li className="home-nav__item">
                            
                                Register
                            
                        </li>
                    </a>
                    <Link to="/admin" className="home-nav__link">
                        <li className="home-nav__item">
                            Login
                        </li>
                    </Link>
                </ul>
            </div>
        </Fragment>
    )
}

export default HomeNav;