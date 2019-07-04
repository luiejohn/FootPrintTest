import React from 'react';

import './public.scss';

import TopNavigation from '../../components/common/navigation/navigation';

const Public = () => {
    return (
        <div className="pc-1">
            <TopNavigation/>
            <div>Main</div>
            <footer>
                Footer
            </footer>
        </div>
    )
}

export default Public;