import React from 'react';
import HomeContent from './components/HomeContent';
import HomeHeader from './components/HomeHeader';
import Page from '../Page';

const HomePage = () => (
    <Page id="HOME">
        <HomeHeader />
        <HomeContent />
    </Page>
);

export default HomePage;