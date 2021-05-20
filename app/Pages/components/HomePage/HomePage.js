import React from 'react';
import HomeContent from './Components/HomeContent';
import HomeHeader from './Components/HomeHeader';

// const Home = styled.section`

// `;
const HomePage = () => (
    <section class="page active-page" id="HOME">
        <HomeHeader />
        <HomeContent />
    </section>
);

export default HomePage;