import React, { Component } from 'react';

import './content.scss';
// import svg from '../../../assets/Icon'

import svg from '../../../assets/Icon/sprite.svg';
import gallery1 from '../../../assets/img/gallery-1.jpg';
import gallery2 from '../../../assets/img/gallery-2.jpg';
import gallery3 from '../../../assets/img/gallery-3.jpg';
import person1 from '../../../assets/img/kent.jpg';
import person2 from '../../../assets/img/kirb.jpg';
import person3 from '../../../assets/img/jevin.jpg';
import person4 from '../../../assets/img/twitter.jpg';


class Content extends Component {


    render(){

        return (
            <main className="hotel-view">
            <div className="gallery">
                <figure className="gallery__item">
                        <img src={gallery1} alt="" className="gallery__photo"/>
    
                        <div className="gallery__caption">
                                <a href="#openModal" className="btn btn__view">
                                    <svg className="btn__view__icon">
                                            <use xlinkHref={`${svg}#icon-magnifying-glass`}></use>
                                    </svg>
                                    <span>
                                        View
                                    </span>
                                </a>
                        </div>
                </figure>
    
                <figure className="gallery__item">
                        <img src={gallery2} alt="" className="gallery__photo"/>
    
                        <span className="gallery__caption">
                                <a href="#openModal" className="btn btn__view">
                                        <svg className="btn__view__icon">
                                                <use xlinkHref={`${svg}#icon-magnifying-glass`}></use>
                                        </svg>
                                        <span>
                                            View
                                        </span>
                                </a>
                        </span>
                </figure>
                    
                <figure className="gallery__item">
                        <img src={gallery3} alt="" className="gallery__photo"/>
    
                        <span className="gallery__caption gallery__caption-3">
                            <a href="#openModal" className="btn btn__view">
                                    <svg className="btn__view__icon">
                                            <use xlinkHref={`${svg}#icon-magnifying-glass`}></use>
                                    </svg>
                                    <span>
                                        View
                                    </span>
                            </a>
                        </span>
                </figure>
            </div>
    
            <div className="overview">
                <h1 className="overview__heading">
                    Hotel Las Palmas
                </h1>
    
                <div className="overview__stars">
                    <svg className="overview__icon-star">
                            <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="overview__icon-star">
                            <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="overview__icon-star">
                            <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="overview__icon-star">
                            <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="overview__icon-star">
                            <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                </div>
    
                <div className="overview__location">
                        <svg className="overview__icon-location">
                                <use xlinkHref={`${svg}#icon-location-pin`}></use>
                        </svg>
                        <button className="btn-inline">Albufeira, Portugal</button>
                </div>
    
                <div className="overview__rating">
                    <div className="overview__rating-average">8.6</div>
                    <div className="overview__rating-count">429 votes</div>
                </div>
            </div>
    
            <div className="detail">
                <div className="description">
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur animi adipisci, qui dolores blanditiis explicabo delectus iure. Fugit unde dolor atque accusantium! Quam qui corrupti numquam alias error nulla!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem sint dolorem exercitationem consequatur porro quisquam labore, a error distinctio accusamus quis, excepturi adipisci necessitatibus accusantium eaque cum, numquam eveniet eius!
                    </p>
    
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ullam delectus minus voluptates voluptatibus cum esse, nemo repudiandae nostrum tempore excepturi ex enim at facere nam, consequuntur fugiat perferendis hic.
                
                    </p>
    
                    <ul className="list">
                        <li className="list__item">Close to the beach</li>
                        <li className="list__item">Breakfast included</li>
                        <li className="list__item">Free airport shuttle</li>
                        <li className="list__item">Free wifi in all rooms</li>
                        <li className="list__item">Air conditioning and heating</li>
                        <li className="list__item">Pets allowed</li>
                        <li className="list__item">We speak all language</li>
                        <li className="list__item">Perfect for all languages</li>
                    </ul>
    
                    <div className="recommend">
                        <p className="recommend__count">
                            Lucy and 3 other friends recommend this hotel.
                        </p>
    
                        <div className="recommend__friends">
                            <img src={person1} alt="Friend 1" className="recommend__photo"/>
                            <img src={person4} alt="Friend 2" className="recommend__photo"/>
                            <img src={person2} alt="Friend 3" className="recommend__photo"/>
                            <img src={person3} alt="Friend 4" className="recommend__photo"/>
                        </div>
                    </div>
                </div>
    
                <div className="user-reviews">
                    <figure className="review">
                        <blockquote className="review__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis tenetur laboriosam laudantium dolore expedita magni recusandae? Placeat ipsum qui aliquid, magnam autem quod pariatur tenetur consequuntur voluptate et doloremque?
    
                        </blockquote>
                        <figcaption className="review__user">
                            <img src={person2} alt="" className="review__photo"/>
                            <div className="review__user-box">
                                <p className="review__user-name">Kirb S</p>
                                <p className="review__user-date">Feb 23, 2017</p>
                            </div>
                            <div className="review__rating">7.9</div>
                        </figcaption>
    
                    </figure>
    
                    <figure className="review">
                        <blockquote className="review__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis tenetur laboriosam laudantium dolore expedita magni recusandae? Placeat ipsum qui aliquid, magnam autem quod pariatur tenetur consequuntur voluptate et doloremque?
    
                        </blockquote>
                        <figcaption className="review__user">
                            <img src={person1} alt="" className="review__photo"/>
                            <div className="review__user-box">
                                <p className="review__user-name">Kent E</p>
                                <p className="review__user-date">March 23, 2018</p>
                            </div>
                            <div className="review__rating">9.9</div>
                        </figcaption>
                    </figure>
    
                    <button className="btn-inline">Show all <span>&rarr;</span></button>
                </div>
            </div>
    
            <div className="cta">
                <h2 className="cta__book-now">
                    Good news! We have 4 free rooms for your selected dates!
                </h2>
                <button className="btn">
                    <span className="btn__visible">Book now</span>
                    <span className="btn__invisible">Only 4 rooms left</span>
                </button>
            </div>
        </main>
        )
    }
}


export default Content;