import React, { Component } from 'react';
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import AdvertisementFour from './Advertisementfour/AdvertisementFour';
import "./mainPage.css"
class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='main_page'>
                <div style={{paddingTop:"260px", display:"flex"}}>
                    <AdvertisementOne />
                    <AdvertisementOne />
                    <AdvertisementOne />
                    <AdvertisementOne /> 
                </div>
                <div style={{display:"flex"}}>
                    <AdvertisementFour />
                    <AdvertisementFour />
                    <AdvertisementFour />
                    <AdvertisementFour /> 
                </div>
            </div>
        );
    }
}
 
export default MainPage;