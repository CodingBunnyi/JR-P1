import React from 'react';
import HomePage from './components/HomePage/HomePage';
import ResumePage from './components/ResumePage/ResumePage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ContactPage from './components/ContactPage/ContactPage';

const Pages = () => (
    <div class="pages">
        <HomePage />

        <ResumePage />

        <ServicesPage />

        <ContactPage />
    </div>
);

export default Pages;