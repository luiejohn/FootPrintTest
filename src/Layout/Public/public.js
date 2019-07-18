import React, { Component } from 'react';

import './public.scss';
import { Switch, Route } from 'react-router-dom';

// import TopNavigation from '../../components/common/navigation/navigation';
import HomeNav from './../../components/common/navigation/nav-home';
// import Header from './../../components/common/Header/header';
import Main from '../Public/home/home';
import Footer from '../../components/common/footer/footer';
import Tours from './../../components/Pages/Home-Tours/Tours';
import AboutUs from './../../components/Pages/AboutUs/AboutUs';
import Error404 from './../../components/common/404/404';

class Public extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            homePage: '',
        }
    }

    // handleChange = (name, value) => {
    //     this.setState({[name]: value});
        
    // }

    componentDidMount(){
        //react-router history
        // console.log(this.props);

        //For Navigation transparent or colored background
        // if(this.props.location.pathname === "/"){
        //     this.setState({homePage: true})
        // }
        // else {
        //     this.setState({homePage: false})
        // }
    }

    render() {
        console.log(this.state.homePage);

        return (
            <div className="pc-1">
                <HomeNav homePage={this.state.homePage} route={ {...this.props} } />
                {/* <Header /> */}
                <main>
                    <Switch>
                        <Route exact path='/tours'  component={Tours} />
                        <Route exact path="/about-us"  component={AboutUs} />
                        <Route exact path='/' component={Main} />
                        <Route component={Error404} />
                    </Switch>

                    {/* <Main isLogin={this.state.loggingIn} handleChange={this.handleChange} /> */}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )

    }
}

export default Public;