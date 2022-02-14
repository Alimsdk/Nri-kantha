import React from 'react';
import LoginModal from '../../Account/LoginModal/LoginModal';
import Navbar from '../../Shared/Navbar/Navbar';
import AllProducts from '../AllProducts/AllProducts';
import Banner from '../Banner/Banner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Topbar from '../Topbar/Topbar';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <LoginModal />
            <Banner/>
            <FeaturedProducts/>
            <AllProducts/>
            <Footer/>
        </div>
    );
};

export default Home;