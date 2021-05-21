import React from 'react';
import styled from 'styled-components';
import Highlight from '~/components/Highlight';
import Flex from '~/components/Flex';
import DefaultGray from '~/components/DefaultGray';
import NavBarItem from './component/NavBarItem';

const Nav = styled(Flex)`
    padding: 30px 0;
    align-items: center;
`;

const NavLeft = styled.div`
    Flex: 1;
`;

const NavRight = styled.div`
    display: block;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
`;

const Header = () => (
    <Nav>
        <NavLeft>
            <Logo>
                <DefaultGray>John</DefaultGray> <Highlight>Doe</Highlight>
            </Logo>
        </NavLeft>

        <NavRight>
            <a class="navbar__item active-nav" href="#HOME">Home</a>
            <a class="navbar__item" href="#RESUME">Resume</a>
            <a class="navbar__item" href="#SERVICES">Services</a>
            <a class="navbar__item" href="#CONTACT">Contact</a>
        </NavRight>
    </Nav>
);

export default Header;