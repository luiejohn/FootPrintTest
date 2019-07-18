import React, { Fragment } from 'react';

const number = (props) => {

    return(
        <Fragment>
            <div className={props.className} onClick={() => props.paginate(props.number)}>
                {props.number}
            </div>
        </Fragment>
    )
}

export default number;