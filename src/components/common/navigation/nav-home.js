import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';


import './nav-home.scss';



class HomeNav extends Component {

    constructor(props) {
        super()
        this.state = {
            isTop: true,
        }
    }


    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop){
                this.setState({ isTop });
            }
        })

        
    }

    render () {
        let { isTop } = this.state;
        // console.log(this.props);

        return (
            <Fragment>
                <div className={isTop ? "home-nav": "home-nav-colored"} id="home-nav">
                    <div className="home-nav__logo">
                        LOGO
                    </div>
                    <ul className="home-nav__navigation">
                        <button  href="#" className="home-nav__link">
                            <li className="home-nav__item">
                                    Tours
                            </li>
                        </button >
                        <button  href="#" className="home-nav__link">
                            <li className="home-nav__item">
                                
                                    About Us
                                
                            </li>
                        </button >
                        <button  href="#" className="home-nav__link">
                            <li className="home-nav__item">
                                
                                    Register
                                
                            </li>
                        </button >
                        <button  onClick={() => this.props.handleChange('loggingIn', true)} className="home-nav__link">
                            <li className="home-nav__item">
                                Login
                            </li>
                        </button>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default HomeNav;