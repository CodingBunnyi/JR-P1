import React from 'react';
import styled from 'styled-components';
import Highlight from '~/components/Highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Nav = styled.div`
    padding: 30px 0;
    align-items: center;
    display: flex;
    @media screen and (max-width: 1024px) {
        padding: 0;
        background-color: #2eca7f;
        height: 50px;
        box-shadow: 0px 3px 8px 0px rgb(0 0 0 / 10%);
        position: fixed;
        width: 100%;
        z-index: 1;
    }
`;

const NavLeft = styled.div`
    flex: 1;
    padding: 0 15px;
`;

const NavRight = styled.div`
    display: block;
    padding: 0 15px;
`;

const NavHighlight = styled(Highlight)`
     @media screen and (max-width: 1024px) {
         color: white;
    }
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: #49515d;
    @media screen and (max-width: 1024px) {
        color: white;
        font-size: 18px;
        font-weight: 400;
    }
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
        transition: all 0.15s ease-in-out;
    }

    &:hover {
        opacity: 1;
    }

    &:hover::after {
        width: 25px;
    }

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

const HeaderSideBar = styled.div`
    width: ${({ toggle }) => toggle ? '100%' : '0%'};
    @media screen and (max-width: 1024px) {
        max-width: 320px;
        height: calc(100% - 50px);
        right: 0;
        top: 50px;
        z-index: 1001;
        overflow: auto;
        background-color: #2eca7f;
        box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 20%);
        transition: all 0.44s ease-in-out;
        position: fixed;
    }

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

const SideNav = styled.div`
    display: flex;
    flex-direction: column;
`;

const SideBarItem = styled.button`
    border: 0;
    cursor: pointer;
    padding: 15px 10px;
    text-decoration: none;
    color: white;
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
        background-color: white;
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
        width: 25px;
    }
`;

const SideBarButton = styled.button`
    display: inline-block;
    color: white;
    border: 0;
    cursor: pointer;
    background-color: transparent;
    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        const navBarItems = [
            {key: 'HOME', value: 'Home'},
            {key: 'RESUME', value: 'Resume'},
            {key: 'SERVICES', value: 'Services'},
            {key: 'CONTACT', value: 'Contact'},
        ]
        
        return (
            <div>
                <HeaderSideBar toggle={this.props.toggle}>
                    <SideNav>
                        {navBarItems.map((navBarItem) => (
                            <SideBarItem 
                                onClick={() => this.props.onPageChange(navBarItem.key)}
                                key={navBarItem.key} 
                                active={this.props.page === navBarItem.key} 
                                href={navBarItem.key} 
                            >
                                {navBarItem.value}
                            </SideBarItem>
                        ))}
                    </SideNav>
                </HeaderSideBar>
    
                <Nav>
                    <NavLeft>
                        <Logo>
                            John <NavHighlight>Doe</NavHighlight>
                        </Logo>
                    </NavLeft>
    
                    <NavRight>
                    <SideBarButton onClick={() => this.props.toggleButton()}>
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </SideBarButton>
                        {navBarItems.map((navBarItem) => (
                            <NavbarItem 
                                onClick={() => this.props.onPageChange(navBarItem.key)}
                                key={navBarItem.key} 
                                active={this.props.page === navBarItem.key} 
                                href={navBarItem.key} 
                            >
                                {navBarItem.value}
                            </NavbarItem>
                        ))}
                    </NavRight>
                </Nav>
            </div>
        )
    }
};

export default Header;