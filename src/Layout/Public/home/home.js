import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


import './home.scss';
import gallery01 from '../../../assets/img/nat-1.jpg';
import gallery02 from '../../../assets/img/nat-2.jpg';
import gallery03 from '../../../assets/img/nat-3.jpg';
import svg from '../../../assets/Icon/sprite.svg';
import Modal from '../../../components/common/modal/modal';


const Home = ({isLogin, handleChange}) => {

    return (
        <Fragment>
            <Modal show={isLogin}>
                <div className="modal-content">
                    <button onClick={ () => handleChange('loggingIn', false)} className="btn-close">&times;</button>
                    <span className="login-with">Sign in with</span>
                    <div className="social-cont">
                        <button className="btn-media">Google</button>
                        <button className="btn-media">Facebook</button>
                    </div>

                    <div className="login-cont">
                        <span className="login-with" style={{paddingTop:0}}>or sign in with credentials</span>

                        <input type="text" placeholder="Email" className="login__input" />
                        <input type="Password" placeholder="Password" className="login__input"/>
                        <div className="remember-me">
                            <input type="checkbox" id="check1"/> <label htmlFor="check1">Remember Me</label>
                        </div>

                        <div className="login-btn-cont">
                            <Link to="/admin" >
                                <button>LOGIN</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </Modal>



            <div className="home-main">

                    <div className="home-main__heading1">
                        Exciting Tours for Adventurous People.
                    </div>

                <section className="home-main__section1">

                    <div className="section-cont pdt-6">
                            <div className="home-main__item-text">
                                <div className="heading-small">
                                    You're going to fall in love with nature.
                                </div>

                                <p className="paragraph-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam earum nulla ea enim alias non incidunt? Explicabo aspernatur, enim tempore inventore ea itaque quasi fugit id et in sequi blanditiis?
                                </p>

                                <div className="heading-small">
                                    Live adventures like you have never seen before.
                                </div>

                                <p className="paragraph-text">
                                    Quam earum nulla ea enim alias non incidunt? Explicabo aspernatur, enim tempore inventore ea itaque quasi fugit id et in sequi blanditiis?
                                </p>
                            </div>

                            <div className="home-main__item-images">
                                <img src={gallery01} alt="" className="home-main__photos home-main__photos-01"/>
                                <img src={gallery02} alt="" className="home-main__photos home-main__photos-02"/>
                                <img src={gallery03} alt="" className="home-main__photos home-main__photos-03"/>
                            </div>
                    </div>

                </section>

                <section className="section2">
                    <div className="section-cont">
                        <div className="section2__card">
                            <svg className="section2__card-icon">
                                <use xlinkHref={`${svg}#icon-globe`} />
                            </svg>

                            <div className="text-center mt-2">
                                <div className="heading-small mb-2">
                                    Explore the world
                                </div>

                                <p className="paragraph-text mb-2">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ab labore provident eaque, iusto dignissimos consectetur ex suscipit at beatae maiores.
                                </p>
                            </div>
                        </div>
                        
                        <div className="section2__card">
                            <svg className="section2__card-icon">
                                <use xlinkHref={`${svg}#icon-compass`} />
                            </svg>

                            <div className="text-center mt-2">
                                <div className="heading-small mb-2">
                                    Meet Nature
                                </div>

                                <p className="paragraph-text mb-2">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ab labore provident eaque.
                                </p>
                            </div>
                        </div>

                        <div className="section2__card">
                            <svg className="section2__card-icon">
                                <use xlinkHref={`${svg}#icon-map`} />
                            </svg>

                            <div className="text-center mt-2">
                                <div className="heading-small mb-2">
                                    Find Your Way
                                </div>

                                <p className="paragraph-text mb-2">
                                    Amet consectetur adipisicing elit. Maxime ab labore provident eaque, iusto dignissimos consectetur ex suscipit at beatae maiores.
                                </p>
                            </div>
                        </div>

                        <div className="section2__card">
                            <svg className="section2__card-icon">
                                <use xlinkHref={`${svg}#icon-heart-outlined`} />
                            </svg>

                            <div className="text-center mt-2">
                                <div className="heading-small mb-2">
                                    Live a Healthier Life
                                </div>

                                <p className="paragraph-text mb-2">
                                    Maxime ab labore provident eaque, iusto dignissimos consectetur ex suscipit.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="section_cont3">

                </section>

            </div>
        </Fragment>
    )
}

export default Home;