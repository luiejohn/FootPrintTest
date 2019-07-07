import React from 'react';
import { Link } from 'react-router-dom';


import './navigation.scss';

import svg from '../../../assets/Icon/sprite.svg';
import user from '../../../assets/img/lui.jpg';
import kent from '../../../assets/img/kent.jpg';
import kirb from '../../../assets/img/kirb.jpg';
import jevin from '../../../assets/img/jevin.jpg';

const Navigation = ( { pageChange } ) => {

    return (
        <div className="top-nav">
            <div className="logo">
                <span className="logo__main">FootPrint</span>
                <span className="logo__sub">Travel Agency</span>
            </div>

            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Seach hotels"/>
                <button className="search__button">
                    <svg className="search__icon">
                        <use xlinkHref={`${svg}#icon-magnifying-glass`} />
                    </svg>
                    
                </button>
            </form>

            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref={`${svg}#icon-bookmark`}></use>
                    </svg>

                    <span className="user-nav__notification">
                            7
                    </span>
                </div>

                <div className="user-nav__icon-box user-nav__icon--notif">
                    <svg className="user-nav__icon">
                            <use xlinkHref={`${svg}#icon-chat`}></use>
                    </svg>

                    <span className="user-nav__notification">
                        13
                    </span>

                    <div className="notif-dropdown" id="notif-dropdown">
                            <h2 className="notif-dropdown__header">Notifications</h2>
                            <ul className="notif-dropdown__list">
                                <li className="notif-dropdown__list-item">
                                        <a href="#" className="notif-dropdown__link">
                                                <div className="notif-dropdown__photo-cont">
                                                        <img src={kent} alt="Friend 1" className="notif-dropdown__photo"/>
                                                </div>
                                                <span className="notif-dropdown__msg">Lorem ipsum dolor, sit amet.</span>
                                        </a>
                                </li>
                                <li className="notif-dropdown__list-item">
                                        <a href="#" className="notif-dropdown__link">
                                                <div className="notif-dropdown__photo-cont">
                                                        <img src={jevin} alt="Friend 1" className="notif-dropdown__photo"/>
                                                </div>
                                                <span className="notif-dropdown__msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                                        </a>
                                </li>
                                <li className="notif-dropdown__list-item">
                                        <a href="#" className="notif-dropdown__link">
                                                <div className="notif-dropdown__photo-cont">
                                                        <img src={kirb} alt="Friend 1" className="notif-dropdown__photo"/>
                                                </div>
                                                <span className="notif-dropdown__msg">Sit amet consectetur adipisicing elit.</span>
                                        </a>
                                </li>
                                <li className="notif-dropdown__list-item">
                                        <a href="#" className="notif-dropdown__link">
                                                <div className="notif-dropdown__photo-cont">
                                                        <img src={kent} alt="Friend 1" className="notif-dropdown__photo"/>
                                                </div>
                                                <span className="notif-dropdown__msg">Lorem met consectetur adipisicing elit.</span>
                                        </a>
                                </li>
                            </ul>

                        <Link to="/admin/hotels" onClick={ () => pageChange('activeContent', 2) } className=" btn-inline notif-dropdown__show-all">
                               Show all &rarr;
                        </Link>
                            
                    </div>
                </div>

                <div className="user-nav__user">
                    <img src={user} alt="user image" className="user-nav__user-photo" />
                    <span className="user-nav__user-name">
                        Luie
                    </span>

                    <div className="user-dropdown" id="user-dropdown">
                            
                            <h2 className="user-dropdown__header">User Account</h2>
                            <ul className="user-dropdown__list">
                                <li className="user-dropdown__list-item">
                                        <a href="#" className="user-dropdown__link">
                                                <svg className="user-dropdown__icon">
                                                        <use xlinkHref={`${svg}#icon-aircraft-take-off`}></use>
                                                </svg>
                                                <span className="user-dropdown__msg">My Bookings</span>
                                        </a>
                                </li>
                                <li className="user-dropdown__list-item">
                                        <a href="#" className="user-dropdown__link">
                                                <svg className="user-dropdown__icon">
                                                        <use xlinkHref={`${svg}#icon-heart-outlined`}></use>
                                                </svg>
                                                <span className="user-dropdown__msg">Wishlist</span>
                                        </a>
                                </li>
                                <li className="user-dropdown__list-item">
                                        <a href="#" className="user-dropdown__link">
                                                <svg className="user-dropdown__icon">
                                                        <use xlinkHref={`${svg}#icon-cog`}></use>
                                                </svg>
                                                <span className="user-dropdown__msg">Settings</span>
                                        </a>
                                </li>
                                <li className="user-dropdown__list-item">
                                        <Link to="/" className="user-dropdown__link">
                                                <svg className="user-dropdown__icon">
                                                        <use xlinkHref={`${svg}#icon-login`}></use>
                                                </svg>
                                                <span className="user-dropdown__msg">Logout</span>
                                        </Link>
                                </li>
                            </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navigation;