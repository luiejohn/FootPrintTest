import React, { Fragment } from 'react';
import { hotelSearch } from '../../../store';

import './hotelslist.scss';

const hotelList = () => {
    // console.log(userdata);

    return (
        <Fragment>
            {
                hotelSearch.map( hotel =>(
                    <div key={hotel.hotelID} className="dash-bot__list-item">
                        <div className="dash-bot__hotel-country">
                            {hotel.country}
                        </div>
                        <div className="dash-bot__hotel-ave">
                            {hotel.average}
                        </div>
                        {/* <div className="dash-bot__hotel-search">
                            {hotel.searchTimes}
                        </div> */}
                    </div>
                ))
            }
        </Fragment>
    )
}

export default hotelList;