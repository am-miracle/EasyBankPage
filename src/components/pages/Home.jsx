import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import LatestArticleItem from '../LatestArticleItem';
import Footer from '../Footer';

function Home(){
    return(
        <>
            <HeroSection />
            <Cards />
            <LatestArticleItem />
            <Footer />
        </>
    )
}
export default Home;