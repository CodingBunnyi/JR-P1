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

const NavbarItem = styled.button`
    border: 0;
    cursor: pointer;
    padding: 8px 16px;
    text-decoration: none;
    color: #49515d;
    font-size: 15px;
    opacity: ${({ active }) => active ? 1 : 0.6};
    display: inline-block;
    position: relative;  
    background-color: transparent;

    &::after {
        content: "";
        position: absolute;
        width: ${({ active }) => active ? '25px' : 0};
        height: 2px;
        background-color: #2eca7f;
        right: 0;
        left: 0;
        bottom: 0;
        margin: 0 auto;
        transition:all 0.15s ease-in-out;
    }

    &:hover {
        opacity: 1;
    }

    &:hover::after {
        width:25px;
    }
`;

const Header = ({onPageChange,page}) => {

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
                    <NavbarItem 
                        onClick={() => onPageChange(navBarItem.key)}
                        key={navBarItem.key} 
                        active={page === navBarItem.key} 
                        href={navBarItem.key} 
                    >
                        {navBarItem.value}
                    </NavbarItem>
                ))}
            
            </NavRight>
        </Nav>
    )
};

export default Header;