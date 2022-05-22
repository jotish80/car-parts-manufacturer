import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from './BusinessSummary';
import OurNewServices from './OurNewServices';
import Parts from './Parts';
import Reviews from './Reviews';
 

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <BusinessSummary />
            <Reviews />
            <OurNewServices />
            <Footer />
        </div>
    );
};

export default Home;