import React, { Fragment } from 'react';

import './home.scss';
import gallery01 from '../../../assets/img/nat-1.jpg';
import gallery02 from '../../../assets/img/nat-2.jpg';
import gallery03 from '../../../assets/img/nat-3.jpg';


const Home = () => {


    return (
        <Fragment>
            <div className="home-main">
                <div className="home-main__heading1">
                    Exciting Tours for Adventurous People.
                </div>

                <div className="home-main__section1">
                    <div className="home-main__section-cont">
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

                </div>

                <div className="section2">
                    <div className="section2__card">
                        asdsa
                    </div>
                    
                    <div className="section2__card">
                        asdasd
                    </div>

                    <div className="section2__card">
                        asdsad
                    </div>

                    <div className="section2__card">
                        asdasd
                    </div>
                </div>



            </div>
        </Fragment>
    )
}

export default Home;