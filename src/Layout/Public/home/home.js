import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';


import './home.scss';
import gallery01 from '../../../assets/img/nat-1.jpg';
import gallery02 from '../../../assets/img/nat-2.jpg';
import gallery03 from '../../../assets/img/nat-3.jpg';
import svg from '../../../assets/Icon/sprite.svg';
import Header from './../../../components/common/Header/header';


const Home = () => {

    return (
        <Fragment>
            <Header />
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
                    <div className="section-cont2">
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

                <section className="section-cont3">
                    <section className="section-book">
                        <div className="book">
                            <div className="book__form">
                                <form action="#" className="form">
                                    <div className="u-center-text u-margin-bottom-md">
                                            <h2 className="heading-small mb-2">
                                                Start Booking now
                                            </h2>
                                    </div>
                                    <div className="form__group">
                                        <input type="text" className="form__input" id="name" placeholder="Full Name" required/>
                                        <label htmlFor="name" className="form__label">Full Name</label>
                                    </div>
                                    <div className="form__group">
                                        <input type="email" className="form__input" id="email" placeholder="Email Address" required/>
                                        <label htmlFor="email" className="form__label">Email Address</label>
                                    </div>

                                    <div className="form_group u-margin-bottom-md">
                                        <div className="form__radio-group">
                                            <input type="radio" className="form__radio-input" id="small" name="size"/>
                                            <label htmlFor="small" className="form__radio-label">
                                                <span className="form__radio-button"></span>
                                                Small tour group
                                            </label>
                                        </div>

                                        <div className="form__radio-group">
                                                <input type="radio" className="form__radio-input" id="large" name="size"/>
                                                <label htmlFor="large" className="form__radio-label">
                                                    <span className="form__radio-button"></span>
                                                    Large tour group
                                                </label>
                                        </div>
                                    </div>

                                    <div className="submit-form-group mt-4">
                                            <button className="btn-subscribe">Next Step &rarr;</button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </section>
                </section>
            </div>
        </Fragment>
    )
}

export default Home;