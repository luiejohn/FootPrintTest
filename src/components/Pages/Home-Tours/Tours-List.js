import React from 'react';

import './Tours-List.scss';
// import svg from '../../../assets/Icon/sprite.svg';
import Card from './Card';


const ToursList = ({ Tours, className }) => {

    return (
        <div className={className}>
            {
                Tours.map( tour => {
                    return(
                        <Card key={tour.tourID} tour={tour} />
                    )
                })
            }

            
        </div>
    )
}

export default ToursList;