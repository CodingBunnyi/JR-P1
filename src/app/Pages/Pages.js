import React from 'react';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';

const Pages = ({page}) => {

    const currentPage = {
        HOME: (<HomePage />),
        RESUME: (<ResumePage />),
        SERVICES: (<ServicesPage />),
        CONTACT: (<ContactPage />)
    }[page];

    return (
    <div>
        {currentPage}
    </div>

    // 或者
    // <div>
    //     {page === 'HOME' && (<HomePage />)}
    //     {page === 'RESUME' && (<ResumePage />)}
    //     {page === 'SERVICES' && (<ServicesPage />)}
    //     {page === 'CONTACT' && (<ContactPage />)}
    // </div>
    );
};

export default Pages;