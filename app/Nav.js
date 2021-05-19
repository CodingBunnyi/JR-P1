import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
`;

const DefaultGray = styled.span`
    color: #49515d;
`;

const Highlight = styled.span`
    color: #2eca7f;
`;

const Nav = () => (
    <nav class="navbar">
        <div class="nav-left">
            <Logo class="logo">
                <DefaultGray>John</DefaultGray> <Highlight>Doe</Highlight>
            </Logo>
        </div>

        <div class="nav-right">
            <a class="navbar__item active-nav" href="#HOME">Home</a>
            <a class="navbar__item" href="#RESUME">Resume</a>
            <a class="navbar__item" href="#SERVICES">Services</a>
            <a class="navbar__item" href="#CONTACT">Contact</a>
        </div>
    </nav>
);

export default Nav;