import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';


import './nav-home.scss';
import svg from '../../../assets/Icon/sprite.svg';
import Modal from './../modal/modal';
import BackDrop from './../backdrop/backdrop';


class HomeNav extends Component {

    state = {
            isTop: true,
            mobileNav: false,
            loggingIn: false,
            homePage: this.props.homePage,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollDetect, false);
        window.addEventListener('keydown', this.closeModal, false);

        if(this.props.route.location.pathname === "/"){
            this.setState({homePage: true})
        }
        else {
            this.setState({homePage: false})
        }


    }

    componentWillUnmount() {
        // console.log('Unmount!');
        window.removeEventListener('scroll', this.scrollDetect, false);
        window.removeEventListener('keydown', this.closeModal, false);

    }


    handleChange = (name, value) => {
        this.setState({[name]: value});
        
    }

    // isHomePage = () => {
    //     const {homePage} = this.state;
    //     this.setState({homePage: !homePage});
    // }

    updateNavLog = (name) => {
        // this.handleChange('mobileNav', false);
        this.handleChange('mobileNav', !this.state.mobileNav);
        if(name === 'login'){
            this.handleChange('loggingIn', true);
        }

        //For Navigation Bar Color Change on Home vs Different Pages
        if(name==='home'){
            this.setState({homePage: true})
        }
        else {
            this.setState({homePage: false});
        }

    }

    scrollDetect = () => {
        const isTop = window.scrollY < 100;
        if (isTop !== this.state.isTop){
            this.setState({ isTop });
        }
    }

    closeModal = (event) => {
        if(event.keyCode === 27) {
            this.setState({loggingIn: false});
        }
    }

    render () {
        const { isTop, mobileNav, loggingIn, homePage } = this.state;
        return (
            <Fragment>
                 <BackDrop className={ mobileNav ? "backdrop" : null} onClick={() => this.handleChange('mobileNav', false)} />
                <div className={homePage && isTop && !mobileNav ? "home-nav" : "home-nav-colored"} id="home-nav">
                    <div className="home-nav__logo">
                        <div>
                            <svg className="home-nav__icon-logo">
                                <use xlinkHref={`${svg}#icon-compass`}></use>
                            </svg>
                        </div>

                        <span>FootPrint</span>
                    </div>
                    <ul className="home-nav__navigation">

                        <Link to="/tours" className={ homePage && isTop ? "home-nav__link" : "home-nav__link-colored"} onClick={() => this.handleChange('homePage', false)}>
                                <li className="home-nav__item">
                                    <svg className={homePage && isTop ? "home-nav__nav-icon" : "home-nav__nav-icon-colored"}>
                                        <use xlinkHref={`${svg}#icon-paper-plane`}></use>
                                    </svg>
                                    <span>Tours</span>
                                </li>                  
                        </Link>

                        <Link to="/" className={homePage && isTop ? "home-nav__link" : "home-nav__link-colored"} onClick={() => this.handleChange('homePage', false)}>
                            <li className="home-nav__item">
                                <svg className={homePage && isTop ? "home-nav__nav-icon" : "home-nav__nav-icon-colored"}>
                                    <use xlinkHref={`${svg}#icon-add-user`}></use>
                                </svg>
                                <span>Register</span>
                            </li>
                        </Link >
                        <button onClick={() => this.handleChange('loggingIn', true)} className={homePage && isTop ? "home-nav__link" : "home-nav__link-colored"} >
                            <li className="home-nav__item">
                                <svg className={homePage && isTop ? "home-nav__nav-icon" : "home-nav__nav-icon-colored"}>
                                    <use xlinkHref={`${svg}#icon-users`}></use>
                                </svg>
                                <span style={{fontSize:'1.3rem'}}>Login</span> 
                            </li>
                        </button>

                        <Link to="/" className={homePage && isTop ? "home-nav__link" : "home-nav__link-colored"} onClick={() => this.handleChange('homePage', true)}>
                                <li className="home-nav__item">
                                    <svg className={homePage && isTop ? "home-nav__nav-icon" : "home-nav__nav-icon-colored"}>
                                        <use xlinkHref={`${svg}#icon-home`}></use>
                                    </svg>
                                    <span>Home</span>
                                </li>                    
                        </Link>
                        
                    </ul>


                    <button onClick={() => this.handleChange('mobileNav', !mobileNav)} className={ homePage && isTop && !mobileNav ? "home-nav__mobile-nav-button home-nav__mobile-nav-button-circle" : "home-nav__mobile-nav-button"}>
                            <svg className="home-nav__mobile-nav-icon">
                                <use xlinkHref={`${svg}#icon-menu`}></use>
                            </svg>
                    </button>
                    
                    <div className={ mobileNav ? "home-nav__mobile-nav-cont home-nav__mobile-nav-cont-show" : "home-nav__mobile-nav-cont" }>
                        
                        <div className="home-nav__mobile-nav-list" >
                            <Link to="/tours" className="home-nav__mobile-nav-item" onClick={() => this.updateNavLog('')}>
                                <svg className="home-nav__nav-icon">
                                    <use xlinkHref={`${svg}#icon-paper-plane`}></use>
                                </svg>
                                <span>Tours</span>
                            </Link>

                            <Link to="/" className="home-nav__mobile-nav-item" onClick={() => this.updateNavLog('')}>
                                <svg className="home-nav__nav-icon">
                                    <use xlinkHref={`${svg}#icon-add-user`}></use>
                                </svg>
                                <span>Register</span>
                            </Link>
                            <button className="home-nav__mobile-nav-item" onClick={() => this.updateNavLog('login')}>
                                <svg className="home-nav__nav-icon">
                                    <use xlinkHref={`${svg}#icon-users`}></use>
                                </svg>
                                <span>Login</span>
                            </button>
                            <Link to="/" className="home-nav__mobile-nav-item" onClick={() => this.updateNavLog('home')}>
                                <svg className="home-nav__nav-icon">
                                    <use xlinkHref={`${svg}#icon-home`}></use>
                                </svg>
                                <span>Home</span>
                            </Link>
                            
                        </div>
                    </div>

                </div>

                    <Modal show={loggingIn} handleChange={this.handleChange}>

                    <div className="modal-content">
                        <button onClick={ () => this.handleChange('loggingIn', false)} className="btn-close">&times;</button>
                        
                        <span className="login-with">Sign in with</span>
                        <div className="social-cont">
                            
                            <button className="btn-media">
                                <svg className="google-icon">
                                    <use xlinkHref={`${svg}#icon-google2`}></use>
                                </svg>
                                <span>
                                    Google
                                </span>
                            </button>
                            <button className="btn-media">
                                <svg className="fb-icon">
                                    <use xlinkHref={`${svg}#icon-facebook2`}></use>
                                </svg>
                                <span>
                                    Facebook
                                </span>
                            </button>
                        </div>

                        <div className="login-cont">
                            <span className="login-with">or sign in with credentials</span>

                            <input type="text" placeholder="Email" className="login__input" />
                            <input type="Password" placeholder="Password" className="login__input"/>
                            <div className="remember-me">
                                <input type="checkbox" id="check1"/> <label htmlFor="check1">Remember Me</label>
                            </div>

                            <div className="login-btn-cont">
                                <Link onClick={ () => this.handleChange('loggingIn', true)} to="/admin">
                                    LOGIN
                                </Link>
                            </div>
                        </div>

                    </div>
                </Modal>
            </Fragment>
        )
    }
}

export default HomeNav;