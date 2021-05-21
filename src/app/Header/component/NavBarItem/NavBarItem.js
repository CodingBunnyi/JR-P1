import styled from 'styled-components';

const NavBarItem = styled.a`
    padding: 8px 16px;
    text-decoration: none;
    color: #49515d;
    font-size: 15px;
    opacity: 0.6;
    display: inline-block;
    position: relative; 

    &::after {
        content: "";
        position: absolute;
        width: 0;
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

export default NavBarItem;
