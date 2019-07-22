import React, { Fragment, useState } from 'react';

import svg from '../../../assets/Icon/sprite.svg';

const Card = ({ tour }) => {
    const [isWishList, wishList] = useState(false);

    let heartIcon = isWishList ? '#icon-heart' : '#icon-heart-outlined'

    return (
        <Fragment>
            <div className="tour-card">
                <div className="tour-card__image">
                        <svg onMouseEnter={() => wishList(!isWishList)} onMouseLeave={() => wishList(!isWishList)} className="tour-card__icons-heart">
                            <use xlinkHref={`${svg}${heartIcon}`} />
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
                            {
                                tour.seatsLeft + ` seats left`
                            }
                        </div>
                    </div>


                    <div className="tour-card__schedule">
                        <svg className="tour-card__icons">
                            <use xlinkHref={`${svg}#icon-calendar`} />
                        </svg>
                        {
                            tour.date
                        }
                    </div>


                    <div className="tour-card__buy-section">   
                        <button className="tour-card__buy-section-btn ">Register Now</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Card