import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './private.scss';

import TopNavigation from '../../components/common/navigation/navigation';
import SideNav from '../../components/common/sidenav/sidenav';
import Modal from '../../components/common/modal/modal';

import Dashboard from './../../components/Pages/Dashboard/Dashboard';
import Content from '../../components/Pages/content-admin/content';
import Flight from '../../components/Pages/Flight/Flight';
import Messages from '../../components/Pages/Messages/Messages';
import Tours from '../../components/Pages/Tours/Tours';
import CarRental from '../../components/Pages/CarRental/CarRental';
import Error404 from './../../components/common/404/404';

class Private extends Component {

    state = {
        activeContent: 0
    }


    componentDidMount() {
        //scroll to top of the page
        window.scrollTo(0, 0);

        console.log(this.props);
    }

    handleChanges = (name, value) => {
        this.setState({[name]:value});
    }

    render() {
        let { activeContent } = this.state;

        return (
            <div className="pc-1">
                <TopNavigation content={ activeContent } pageChange={this.handleChanges}/>
    
                <div className="admin-content">
                    <SideNav route={{...this.props}} content={ activeContent } pageChange={this.handleChanges} />
                    <main className="main-content">
                        
                            <Switch>
                                <Route exact path="/admin" component={ Dashboard }/>
                                <Route exact path="/admin/flight" component={ Flight } />
                                <Route exact path="/admin/messages" component={ Messages } />
                                <Route exact path="/admin/car-rental" component={ CarRental } />
                                {/* <Route exact path="/admin/content" component={ Content } /> */}
                                <Route exact path="/admin/tours" component={ Tours } />
                                <Route component={Error404} />
                            </Switch>
                        
                    </main>
                </div>
                <Modal />


            </div>
        )
    }
}

export default Private;