import React from 'react';
import styled from 'styled-components';
import Highlight from '~/components/Highlight';
import Flex from '~/components/Flex';
import DefaultGray from '~/components/DefaultGray';


const Nav = styled(Flex)`
    padding: 30px 0;
    align-items: center;
`;

const NavLeft = styled.div`
    flex: 1;
`;

const NavRight = styled.div`
    display: block;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
`;

const Header = ({page}) => {

    const getNavBarItem = (key) => `navbar__item ${page === key && 'active-nav'}`

    const navBarItems = [
        {key: 'HOME', value: 'Home'},
        {key: 'RESUME', value: 'Resume'},
        {key: 'SERVICES', value: 'Services'},
        {key: 'CONTACT', value: 'Contact'},
    ]

    return (
        <Nav>
            <NavLeft>
                <Logo>
                    <DefaultGray>John</DefaultGray> <Highlight>Doe</Highlight>
                </Logo>
            </NavLeft>

            <NavRight>
                {navBarItems.map((navBarItem) => (
                    <a key={navBarItem.key} className={getNavBarItem(navBarItem.key)} href={navBarItem.value}>{navBarItem.value}</a>
                ))}
            
            </NavRight>
        </Nav>
    )
};

export default Header;