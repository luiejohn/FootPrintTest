import React, { Fragment } from 'react';
import { flightSearch } from '../../../store';

import './flightslist.scss';

const flightList = () => {
    // console.log(userdata);

    return (
        <Fragment>
            {
                flightSearch.map( entry =>(
                    <div key={entry.flightID} className="dash-bot__list-item">
                        <div className="dash-bot__hotel-country">
                            {entry.country}
                        </div>
                        <div className="dash-bot__hotel-ave">
                            {entry.average}
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

export default flightList;