import React, { Component, Fragment } from 'react';

import './Tours.scss';
import svg from '../../../assets/Icon/sprite.svg';

import List from './Tours-List';
import FilteredList from './FilteredList.js';
import { Tours } from '../../../store';
import Pages from './page';

class ToursList extends Component {

    state = {
        itemPerPage: 12,
        currentPage: 1,
        filter:'All',
        adventure: 'All',
        filteredTours: [],
        isDropDownOpen: false,
        isPageNumDropDown: false
        
    }

    // componentDidMount(){
    //     window.addEventListener('keydown', this.pressEscape, false);
    // }

    // componentWillMount(){
    //     window.removeEventListener('keydown', this.pressEscape, false);
    // }

    // pressEscape = (event) => {
    //     if(event.keyCode === 27) {
    //         this.setState({isDropDownOpen: false});
    //         this.setState({isPageNumDropDown: false});
    //     }
    // }


    filterChangeHandler = (name, value) => {

        this.setState({currentPage: 1});
        
        let dropDownToggle = name === 'adventure' ? 'isDropDownOpen' : 'isPageNumDropDown';
        this.handleDropDown(dropDownToggle, !dropDownToggle);

        this.setState({[name]:value});
    }

    handleDropDown = (dropDownToggle, val) => {
        this.setState({[dropDownToggle]: val});
    }


    selectListContent = () => {
        const { adventure, currentPage, itemPerPage  } = this.state;
        let FilteredTours = [];

        if(adventure === 'All'){
            FilteredTours = [...Tours]
        }
        else{
            FilteredTours = Tours.filter( tour => {
                return adventure === tour.type;
            })
        }

        //FOR PAGINATION CONTENT
        const indexOfLastPost = currentPage * itemPerPage;
        const indexOfFirstPost = indexOfLastPost - itemPerPage;
        const currentPost = FilteredTours.slice(indexOfFirstPost, indexOfLastPost);

        if( adventure === 'All'){

           return <List Tours={currentPost} className="tours-list"></List>
        }
        else {
            return <FilteredList adventure={this.state.adventure} filter={this.state.filter} Tours={currentPost} className="tours-list"/>
        }
    }

    changePage =  (num) => {
        this.setState({currentPage: num});
    }
    

    render() {
        const { isDropDownOpen, currentPage, itemPerPage, adventure, isPageNumDropDown } = this.state;
        
        //FOR PAGINATION NUMBERS
        const pages = [];
        let result = [];

        if(adventure==='All'){
            result = [...Tours];
            for(let i=0; i<Math.ceil(Tours.length / this.state.itemPerPage);i++) {
                pages.push(i+1);
            }
        }
        else {
            result = Tours.filter( tour => {
                return adventure === tour.type;
            });
            for(let i=0; i<Math.ceil(result.length / this.state.itemPerPage);i++) {
                pages.push(i+1);
            }
        }


        
        return(
            <Fragment>
                <div className="home-tours">
                    <div className="home-tours__cat-head">
                        {
                            this.state.adventure + ` Adventures`
                        }
                    </div>

                    <div className="tours-filter">

                        <div className="tours-filter__group">
                            <div className={isDropDownOpen ? "tours-filter__ad-drop-group tours-filter__ad-drop-group-round-corner" : "tours-filter__ad-drop-group" }>
                                <div onClick={() => this.handleDropDown('isDropDownOpen', !isDropDownOpen)} 
                                     className={isDropDownOpen ? "tours-filter__adv-input tours-filter__adv-input-show" : "tours-filter__adv-input" }>

                                    <svg className={ isDropDownOpen ? "tours-filter__adv-icon tours-filter__adv-icon-down" : "tours-filter__adv-icon" }>
                                        <use xlinkHref={`${svg}#icon-chevron-thin-right`}></use>
                                    </svg>

                                   {
                                       this.state.adventure + ` Adventures`
                                   }
                                </div>
                                <div className={ isDropDownOpen ? "tours-filter__ad-select tours-filter__ad-select-show" : "tours-filter__ad-select" }>
                                    <div onClick={() => this.filterChangeHandler('adventure', 'All')}>All Adventures</div>
                                    <div onClick={() => this.filterChangeHandler('adventure', 'sea')}>Sea Adventures</div>
                                    <div onClick={() => this.filterChangeHandler('adventure', 'forest')}>Forest Adventures</div>
                                    <div onClick={() => this.filterChangeHandler('adventure', 'island')}>Island Adventures</div>
                                </div>
                            </div>

                        </div>

                        <div className="tours-filter__display">
                            Displaying {result.length > currentPage*itemPerPage ? currentPage*itemPerPage : result.length} of out {result.length} results
                        </div>


                        <div className="tours-filter__group">
                            <div className={isPageNumDropDown ? "tours-filter__ad-drop-group tours-filter__ad-drop-group-round-corner" : "tours-filter__ad-drop-group" }>
                                <div onClick={() => this.handleDropDown('isPageNumDropDown', !isPageNumDropDown)} 
                                     className={isPageNumDropDown ? "tours-filter__adv-input tours-filter__adv-input-show" : "tours-filter__adv-input" }>

                                    <svg className={ isPageNumDropDown ? "tours-filter__adv-icon tours-filter__adv-icon-down" : "tours-filter__adv-icon" }>
                                        <use xlinkHref={`${svg}#icon-chevron-thin-right`}></use>
                                    </svg>

                                   {
                                       this.state.itemPerPage + ` per page`
                                   }
                                </div>

                                <div className={ isPageNumDropDown ? "tours-filter__ad-select tours-filter__ad-select-show2" : "tours-filter__ad-select" }>
                                    <div onClick={ () => this.filterChangeHandler('itemPerPage', 16) }>16 Per Page</div>
                                    <div onClick={ () => this.filterChangeHandler('itemPerPage', 12) }>12 Per Page</div>
                                    <div onClick={ () => this.filterChangeHandler('itemPerPage', 8) }>8 Per Page</div>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="pagination">
                        <div className="pagination__page-left" onClick={() => this.changePage(currentPage === 1 ?  currentPage : currentPage-1)}>
                            <svg className="pagination__svg">
                                <use xlinkHref={`${svg}#icon-chevron-thin-left`}></use>
                            </svg>
                        </div>
                        {
                            pages.map( num => {
                                return (
                                    <Pages className={num === currentPage ? "pagination__pages pagination__page-active" : "pagination__pages"} paginate={this.changePage} key={num} number={num}/>
                                )
                            })
                        }
                        <div className="pagination__page-right" onClick={() => this.changePage(currentPage === pages.length ?  pages.length : currentPage+1)}>
                            <svg className="pagination__svg">
                                <use xlinkHref={`${svg}#icon-chevron-thin-right`}></use>
                            </svg>
                        </div>
                    </div>

                    {this.selectListContent()} 

                    <div className="pagination">
                        <div className="pagination__page-left" onClick={() => this.changePage(currentPage === 1 ?  currentPage : currentPage-1)}>
                            <svg className="pagination__svg">
                                <use xlinkHref={`${svg}#icon-chevron-thin-left`}></use>
                            </svg>
                        </div>
                        {
                            pages.map( num => {
                                return (
                                    <Pages className={num === currentPage ? "pagination__pages pagination__page-active" : "pagination__pages"} paginate={this.changePage} key={num} number={num}/>
                                )
                            })
                        }
                        <div className="pagination__page-right" onClick={() => this.changePage(currentPage === pages.length ?  pages.length : currentPage+1)}>
                            <svg className="pagination__svg">
                                <use xlinkHref={`${svg}#icon-chevron-thin-right`}></use>
                            </svg>
                        </div>
                    </div>
                    
                </div>
            </Fragment>
        )
    }
}

export default ToursList;