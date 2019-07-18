import React from 'react';

import './Tours-List.scss';
import svg from '../../../assets/Icon/sprite.svg';

const ToursList = ({ Tours, className }) => {


    return (
        <div className={className}>
            {
                Tours.map( tour => {
                    return(
                        <div className="tour-card" key={tour.tourID}>
                            <div className="tour-card__image">
                                    <svg className="tour-card__icons-heart">
                                        <use xlinkHref={`${svg}#icon-heart-outlined`} />
                                    </svg>

                                    <img src={tour.image} alt="tour" className="tour-card__image-1"/>
                            </div>
                            <div className="tour-card__content">
                                <div className="tour-card__title">
                                    {
                                        tour.title
                                    }
                                </div>


                                <div className="tour-card__group-detail">
                                    <div className="tour-card__duration">
                                        <svg className="tour-card__icons">
                                            <use xlinkHref={`${svg}#icon-map`} />
                                        </svg>   
                                        3 day tour
                                    </div>

                                    <div className="tour-card__seats">
                                        <svg className="tour-card__icons">
                                            <use xlinkHref={`${svg}#icon-user`} />
                                        </svg>      
                                        5 seats left
                                    </div>
                                </div>


                                <div className="tour-card__schedule">
                                    <svg className="tour-card__icons">
                                        <use xlinkHref={`${svg}#icon-calendar`} />
                                    </svg>
                                    September 29, 2019
                                </div>



                                <div className="tour-card__buy-section">   
                                    <button className="tour-card__buy-section-btn">Register Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            
        </div>
    )
}

export default ToursList;