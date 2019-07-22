import React from 'react';

// import svg from '../../../assets/Icon/sprite.svg';
import Card from './Card';

const FilteredList = ({Tours,className, adventure}) => {
    let filtered = Tours.filter( tour => {
        return adventure === tour.type;
    });

    return(
        <div className={className}>
            {
                filtered.map(tour => {
                    return (
                        <Card key={tour.tourID} tour={tour}/>
                    )
                })
            }
        </div>
    )
}

export default FilteredList;