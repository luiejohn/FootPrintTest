import React, { Component, Fragment } from 'react';

import './Dashboard.scss';

import svg from '../../../assets/Icon/sprite.svg';


class Dashboard extends Component {

    render( ) {

        return(
            <Fragment>
                <div className="dash-num">
                    <div className="dash-num__item dash-num__item-01">
                        <figure className="dash-num__icon dash-num__icon-1">
                            <svg className="dash-num__icon-svg">
                                    <use xlinkHref={`${svg}#icon-google-drive`}></use>
                            </svg>
                        </figure>

                        <div className="dash-num__text-main">
                            <span className="dash-num__text-main-1">Used Space</span>
                            <br/>
                            <span className="dash-num__text-main-2">49/50GB</span>
                        </div>

                        <div className="dash-num__text-sub">
                            Get more space
                        </div>

                    </div>

                    <div className="dash-num__item dash-num__item-02">
                        <figure className="dash-num__icon dash-num__icon-2">
                            <svg className="dash-num__icon-svg">
                                    <use xlinkHref={`${svg}#icon-credit`}></use>
                            </svg>
                        </figure>

                        <div className="dash-num__text-main">
                            <span className="dash-num__text-main-1">Revenue</span>
                            <br/>
                            <span className="dash-num__text-main-2">$34,245</span>
                        </div>

                        <div className="dash-num__text-sub">
                            Last 24 hours
                        </div>

                    </div>

                    <div className="dash-num__item dash-num__item-03">
                        <figure className="dash-num__icon dash-num__icon-3">
                            <svg className="dash-num__icon-svg">
                                    <use xlinkHref={`${svg}#icon-info-with-circle`}></use>
                            </svg>
                        </figure>

                        <div className="dash-num__text-main">
                            <span className="dash-num__text-main-1">Fixed Issues</span>
                            <br/>
                            <span className="dash-num__text-main-2">75</span>
                        </div>

                        <div className="dash-num__text-sub">
                            Tracked from Github
                        </div>

                    </div>

                    <div className="dash-num__item dash-num__item-04">
                        <figure className="dash-num__icon dash-num__icon-4">
                            <svg className="dash-num__icon-svg">
                                    <use xlinkHref={`${svg}#icon-twitter`}></use>
                            </svg>
                        </figure>

                        <div className="dash-num__text-main">
                            <span className="dash-num__text-main-1">Followers</span>
                            <br/>
                            <span className="dash-num__text-main-2">+245</span>
                        </div>

                        <div className="dash-num__text-sub">
                            Just Updated
                        </div>

                    </div>

                </div>

                <div className="dash-stat">
                        <figure className="dash-stat__icon">
                            <svg className="dash-stat__icon-svg">
                                    <use xlinkHref={`${svg}#icon-globe`}></use>
                            </svg>
                        </figure>
                        
                        <div className="dash-stat__content">
                            <div className="dash-stat__list">
                                <div className="dash-stat__heading">Global Sales by Top Locations</div>
                                <div className="dash-stat__item">
                                    <div>
                                        Flag
                                    </div>
                                    <div>USA</div>
                                    <div>4.223</div>
                                    <div>58.23%</div>
                                </div>

                                <div className="dash-stat__item">
                                    <div>
                                        Flag
                                    </div>
                                    <div>Germany</div>
                                    <div>2.9723</div>
                                    <div>58.23%</div>
                                </div>

                                <div className="dash-stat__item">
                                    <div>
                                        Flag
                                    </div>
                                    <div>Italy</div>
                                    <div>5.523</div>
                                    <div>58.23%</div>
                                </div>

                                <div className="dash-stat__item">
                                    <div>
                                        Flag
                                    </div>
                                    <div>Australia</div>
                                    <div>1.2683</div>
                                    <div>58.23%</div>
                                </div>

                                <div className="dash-stat__item">
                                    <div>
                                        Flag
                                    </div>
                                    <div>United Kingdom</div>
                                    <div>2.9723</div>
                                    <div>58.23%</div>
                                </div>

                                <div className="dash-stat__item">
                                    <div>
                                        Flag
                                    </div>
                                    <div>Romania</div>
                                    <div>2.6235</div>
                                    <div>58.23%</div>
                                </div>
                            </div>

                            <div className="dash-stat__map">
                                Map
                            </div>
                        </div>
                </div>

                <div className="dash-bot">
                    <div className="dash-bot__item">
                        <div className="dash-bot__item-header dash-bot__item-header-1">
                            <div className="dash-bot__text-1">Active Users</div>
                            <div className="dash-bot__text-2">32142</div>
                        </div>
                    </div>

                    <div className="dash-bot__item">
                        <div className="dash-bot__item-header dash-bot__item-header-2">
                            <div className="dash-bot__text-1">Hotels Search</div>
                            <div className="dash-bot__text-2">52395</div>
                        </div>
                    </div>

                    <div className="dash-bot__item">
                        <div className="dash-bot__item-header dash-bot__item-header-3">
                            <div className="dash-bot__text-1">Flights Search</div>
                            <div className="dash-bot__text-2">765</div>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Dashboard;