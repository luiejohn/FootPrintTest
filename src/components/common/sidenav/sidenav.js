import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './sidenav.scss';
import svg from '../../../assets/Icon/sprite.svg';

import PrivateLayout from '../../../Layout/Private/private';

class SideNav extends Component {

    constructor() {
        super();
        // this.state = {
        //     activeLink: 0
        // }
    }


    render () {
        let { content, pageChange } = this.props;

        return (
            <div className="sidebar">
                <ul className="side-nav">
                    <li className={ content === 0 ? "side-nav__item side-nav__item--active" : "side-nav__item" }>
                        <Link href="#"  to="/admin" onClick={ ()=> pageChange('activeContent', 0) } className="side-nav__link">
                            <svg className="side-nav__icon">
                                    <use xlinkHref={`${svg}#icon-home`}></use>
                            </svg>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className={ content === 1 ? "side-nav__item side-nav__item--active" : "side-nav__item" }>
                            <Link  to="/admin/flight" onClick={ ()=> pageChange('activeContent', 1) } className="side-nav__link">
                                <svg className="side-nav__icon">
                                        <use xlinkHref={`${svg}#icon-aircraft-take-off`}></use>
                                </svg>
                                <span>Flight</span>
                            </Link>
                    </li>
                    <li className={ content === 2 ? "side-nav__item side-nav__item--active" : "side-nav__item" }>
                            <Link to="/admin/hotels" onClick={ ()=> pageChange('activeContent', 2) } className="side-nav__link">
                                <svg className="side-nav__icon">
                                        <use xlinkHref={`${svg}#icon-open-book`}></use>
                                </svg>
                                <span>Messages</span>
                            </Link>
                    </li>
                    <li className={ content === 3 ? "side-nav__item side-nav__item--active" : "side-nav__item" }>
                            <Link  to="/admin/car-rental" onClick={ ()=> pageChange('activeContent', 3) } className="side-nav__link">
                                <svg className="side-nav__icon">
                                        <use xlinkHref={`${svg}#icon-key`}></use>
                                </svg>
                                <span>Car Rental</span>
                            </Link>
                    </li>
                    <li className={ content === 4 ? "side-nav__item side-nav__item--active" : "side-nav__item" }>
                            <Link to="/admin/Tours" onClick={ ()=> pageChange('activeContent', 4) } className="side-nav__link">
                                <svg className="side-nav__icon">
                                        <use xlinkHref={`${svg}#icon-map`}></use>
                                </svg>
                                <span>Tours</span>
                            </Link>
                    </li>
                </ul>
        
                <div className="legal">
                    &copy; 2019 by Luie. All rights reserved.
                </div>
            </div>
            )
    }
}



export default SideNav;