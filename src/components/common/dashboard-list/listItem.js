import React, { Fragment } from 'react';
import { userdata } from '../../../store';

import './listItem.scss';

const List = () => {
    // console.log(userdata);

    return (
        <Fragment>
            {
                userdata.map( user =>(
                    <div key={user.userID} className="dash-bot__list-item">
                        <div>
                            {user.loginTime}
                        </div>
                        <div className="dash-bot__user-name">
                            {user.userName}
                        </div>
                        <div className="dash-bot__country">
                            {user.country}
                        </div>
                    </div>
                ))
            }
        </Fragment>
    )
}

export default List;