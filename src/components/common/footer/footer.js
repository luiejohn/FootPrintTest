import React from 'react';

import './footer.scss';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer__center-cont">
                <div className="footer__logo">
                    LOGO
                </div>

                <div className="footer__nav-cont">
                    <ul className="footer__nav">
                        <a href="#" alt="" >
                            <li>Company</li>
                        </a>
                        <a href="#" alt="" >
                            <li>Contact Us</li>
                        </a>
                        <a href="#" alt="" >
                            <li>Careers</li>
                        </a>
                        <a href="#" alt="" >
                            <li>Privacy Policy</li>
                        </a>
                        <a href="#" alt="" >
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