import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


import './navigation.scss';

import svg from '../../../assets/Icon/sprite.svg';
import user from '../../../assets/img/lui.jpg';
import kent from '../../../assets/img/kent.jpg';
import kirb from '../../../assets/img/kirb.jpg';
import jevin from '../../../assets/img/jevin.jpg';


class Navigation extends Component {

        constructor(props) {
                super(props)
                this.state = {
                    isTop: true,
                    mobileNav: false
                }
                // this.scrollDetect = this.onScroll.bind(this);
            }

        handleChange = (name, value) => {
        this.setState({[name]: value});
        
        }

        updateNavLog = () => {
        this.handleChange('mobileNav', !this.state.mobileNav);
        this.props.handleChange('loggingIn', true);
        
        }

        render() {
                const { pageChange } = this.props;
                let { mobileNav } = this.state;
                return (
                        <Fragment>
                        <div className={ mobileNav ? "backdrop" : null} onClick={() => this.handleChange('mobileNav', false)}></div>
                        <div className="top-nav">
                                <div className="top-nav__logo">
                                        <div>
                                        <svg className="home-nav__icon-logo">
                                                <use xlinkHref={`${svg}#icon-compass`}></use>
                                        </svg>
                                        </div>

                                        <span>FootPrint</span>
                                </div>
                
                            <form action="#" className="search">
                                <input type="text" className="search__input" placeholder="Search"/>
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
                                            <h2 className="notif-dropdown__header">Messages</h2>
                                            <ul className="notif-dropdown__list">
                                                <li className="notif-dropdown__list-item">
                                                        <a href="home.com" className="notif-dropdown__link">
                                                                <div className="notif-dropdown__photo-cont">
                                                                        <img src={kent} alt="Friend 1" className="notif-dropdown__photo"/>
                                                                </div>
                                                                <span className="notif-dropdown__msg">Lorem ipsum dolor, sit amet.</span>
                                                        </a>
                                                </li>
                                                <li className="notif-dropdown__list-item">
                                                        <a href="home.com" className="notif-dropdown__link">
                                                                <div className="notif-dropdown__photo-cont">
                                                                        <img src={jevin} alt="Friend 1" className="notif-dropdown__photo"/>
                                                                </div>
                                                                <span className="notif-dropdown__msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                                                        </a>
                                                </li>
                                                <li className="notif-dropdown__list-item">
                                                        <a href="home.com" className="notif-dropdown__link">
                                                                <div className="notif-dropdown__photo-cont">
                                                                        <img src={kirb} alt="Friend 1" className="notif-dropdown__photo"/>
                                                                </div>
                                                                <span className="notif-dropdown__msg">Sit amet consectetur adipisicing elit.</span>
                                                        </a>
                                                </li>
                                                <li className="notif-dropdown__list-item">
                                                        <a href="home.com" className="notif-dropdown__link">
                                                                <div className="notif-dropdown__photo-cont">
                                                                        <img src={kent} alt="Friend 1" className="notif-dropdown__photo"/>
                                                                </div>
                                                                <span className="notif-dropdown__msg">Lorem met consectetur adipisicing elit.</span>
                                                        </a>
                                                </li>
                                            </ul>
                
                                        <Link to="/admin/messages" onClick={ () => pageChange('activeContent', 2) } className=" btn-inline notif-dropdown__show-all">
                                               Show all &rarr;
                                        </Link>
                                            
                                    </div>
                                </div>
                
                                <div className="user-nav__user">
                                    <img src={user} alt="user" className="user-nav__user-photo" />
                                    <span className="user-nav__user-name">
                                        Luie
                                    </span>
                
                                    <div className="user-dropdown" id="user-dropdown">
                                            
                                            <h2 className="user-dropdown__header">User Account</h2>
                                            <ul className="user-dropdown__list">
                                                <li className="user-dropdown__list-item">
                                                        <a href="home.com" className="user-dropdown__link">
                                                                <svg className="user-dropdown__icon">
                                                                        <use xlinkHref={`${svg}#icon-aircraft-take-off`}></use>
                                                                </svg>
                                                                <span className="user-dropdown__msg">My Bookings</span>
                                                        </a>
                                                </li>
                                                <li className="user-dropdown__list-item">
                                                        <a href="home.com" className="user-dropdown__link">
                                                                <svg className="user-dropdown__icon">
                                                                        <use xlinkHref={`${svg}#icon-heart-outlined`}></use>
                                                                </svg>
                                                                <span className="user-dropdown__msg">Wishlist</span>
                                                        </a>
                                                </li>
                                                <li className="user-dropdown__list-item">
                                                        <a href="home.com" className="user-dropdown__link">
                                                                <svg className="user-dropdown__icon">
                                                                        <use xlinkHref={`${svg}#icon-cog`}></use>
                                                                </svg>
                                                                <span className="user-dropdown__msg">Settings</span>
                                                        </a>
                                                </li>
                                                <Link to="/" className="user-dropdown__list-item user-dropdown__link">
                                                        <svg className="user-dropdown__icon">
                                                                <use xlinkHref={`${svg}#icon-login`}></use>
                                                        </svg>
                                                        <span className="user-dropdown__msg">Logout</span>
                                                </Link>
                                            </ul>
                                    </div>
                                </div>
                            </nav>
                
                        <div onClick={() => this.handleChange('mobileNav', !mobileNav)} className="home-nav__mobile-nav-admin-btn">
                                <svg className="home-nav__mobile-nav-icon">
                                        <use xlinkHref={`${svg}#icon-menu`}></use>
                                </svg>
                        </div>
                        <div className={ mobileNav ? "home-nav__mobile-nav-admin-cont home-nav__mobile-nav-admin-cont-show" : "home-nav__mobile-nav-admin-cont" }>
                                <div className="home-nav__mobile-nav-list" >
                                        <Link to="/" className="home-nav__mobile-nav-admin-item" >
                                                <svg className="home-nav__nav-icon">
                                                        <use xlinkHref={`${svg}#icon-paper-plane`}></use>
                                                </svg>
                                                Tours
                                        </Link>
                                        <button className="home-nav__mobile-nav-admin-item" >
                                                <svg className="home-nav__nav-icon">
                                                        <use xlinkHref={`${svg}#icon-chat`}></use>
                                                </svg>
                                                Messages
                                        </button>
                                        <button className="home-nav__mobile-nav-admin-item" >
                                                <svg className="home-nav__nav-icon">
                                                        <use xlinkHref={`${svg}#icon-bookmark`}></use>
                                                </svg>
                                                Bookmarks
                                        </button>

                                        <Link to="/" className="home-nav__mobile-nav-admin-item">
                                                <svg className="user-dropdown__icon">
                                                        <use xlinkHref={`${svg}#icon-login`}></use>
                                                </svg>
                                                Logout
                                       
                                        </Link>

                                </div>
                        </div>
                
                        </div>
                        </Fragment>
                    )
        }
}


export default Navigation;