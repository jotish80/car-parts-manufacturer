import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from '../Banner/Banner';
import Product from '../Products/Product';
import BusinessSummary from './BusinessSummary';
import OurNewServices from './OurNewServices';
 
import Reviews from './Reviews';
 

const Home = () => {
    return (
        <div>
            <Banner />
            <Product />
          
            <BusinessSummary />
            <Reviews />
            <OurNewServices />
            <Footer />
        </div>
    );
};

export default Home;