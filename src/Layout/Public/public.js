import React, { Component } from 'react';

import './public.scss';

// import TopNavigation from '../../components/common/navigation/navigation';
import HomeNav from './../../components/common/navigation/nav-home';
import Header from './../../components/common/Header/header';
import Main from '../Public/home/home';
import Footer from '../../components/common/footer/footer';


class Public extends Component {
    
    state = {
        loggingIn: false
    }

    handleChange = (name, value) => {
        this.setState({[name]: value});
        
    }

    render() {
        // console.log(this.state.loggingIn);
        return (
            <div className="pc-1">
                {/* <TopNavigation/> */}
                <HomeNav handleChange={this.handleChange}/>
                <Header />
                <main>
                    <Main isLogin={this.state.loggingIn} handleChange={this.handleChange} />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )

    }
}

export default Public;