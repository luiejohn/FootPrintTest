import React from 'react';

import './footer.scss';
import svg from '../../../assets/Icon/sprite.svg';


const Footer = () => {

    return (
        <div className="footer">
            <div className="footer__center-cont">
                <div className="footer__logo">
                    <svg className="footer__icon">
                        <use xlinkHref={`${svg}#icon-compass`} />
                    </svg>
                </div>

                <div className="footer__nav-cont">
                    <ul className="footer__nav">
                        <a href="home.com" alt="" >
                            <li>Company</li>
                        </a>
                        <a href="home.com" alt="" >
                            <li>Contact Us</li>
                        </a>
                        <a href="home.com" alt="" >
                            <li>Careers</li>
                        </a>
                        <a href="home.com" alt="" >
                            <li>Privacy Policy</li>
                        </a>
                        <a href="home.com" alt="" >
                            <li>Terms</li>
                        </a>
                    </ul>
                    <div className="footer__copyright">
                        Built by Luie. All rights reserved &copy; 2019.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;