import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from '../Banner/Banner';
import Product from '../Products/Product';
import BusinessSummary from './BusinessSummary';
import OurNewServices from './OurNewServices';
 
import Reviews from './Reviews';
import TopProducts from './TopProducts';
 

const Home = () => {
    return (
        <div>
            <Banner />
            <Product />
            <BusinessSummary />
            <Reviews />
            <TopProducts />
            <OurNewServices />
            <Footer />
        </div>
    );
};

export default Home;