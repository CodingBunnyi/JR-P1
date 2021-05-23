import React from 'react';
import HomeContent from './components/HomeContent';
import HomeHeader from './components/HomeHeader';

const HomePage = () => (
    <section className="page" id="HOME">
        <HomeHeader />
        <HomeContent />
    </section>
);

export default HomePage;