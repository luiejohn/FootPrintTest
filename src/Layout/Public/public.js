import React from 'react';

import './public.scss';

// import TopNavigation from '../../components/common/navigation/navigation';
import HomeNav from './../../components/common/navigation/nav-home';
import Header from './../../components/common/Header/header';
import Main from '../Public/home/home';

const Public = () => {
    return (
        <div className="pc-1">
            {/* <TopNavigation/> */}
            <HomeNav />
            <Header />
            <main>
                <Main />
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}

export default Public;