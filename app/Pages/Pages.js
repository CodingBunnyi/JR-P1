import React from 'react';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';

const Pages = () => (
    <div class="pages">
        <HomePage />

        <ResumePage />

        <ServicesPage />

        <ContactPage />
    </div>
);

export default Pages;