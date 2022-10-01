import React, { Component } from 'react';
import "./NavBar.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <div className='navbar_component'>
                    <div className='navBar_logo'></div>
                    <div className='navBar_locator'>
                        <div className='map_icon'></div>
                        <div className='navBar_location'>Mumbai</div>
                    </div>
                    <div className='search_functionality'>
                        <div >
                            <select className='ddSeachOptions'>
                                <option value="All">All</option>
                                <option value="Books">Books</option>
                                <option value="Beauty">Beauty</option>
                                <option value="Clothes">Clothes</option>
                                <option value="Alexa">Alexa</option>
                            </select>
                        </div>
                        <div>
                        <input type="text" className='navBar_searchBox' />
                        </div>
                        <div className='searchiconDiv'>
                            <img className='search_icon'/>
                        </div>
                    </div> 
                </div>   
                <div className='navBar_footer'>
                    <div className='navBar_footer_options'>Best Seller</div>
                    <div className='navBar_footer_options'>Mobiles</div>
                    <div className='navBar_footer_options'>Today's Deals</div>
                    <div className='navBar_footer_options'>Books</div>
                    <div className='navBar_footer_options'>Electronics</div>
                    <div className='navBar_footer_options'>Prime</div>
                    <div className='navBar_footer_options'>Fashion</div>
                    <div className='navBar_footer_options'>New Releases</div>
                    <div className='navBar_footer_options'>Sale</div>
                </div>
            </div>
            
        );
    }
}
 
export default Navbar;