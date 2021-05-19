import React from 'react';

const Nav = () => (
    <nav class="navbar">
        <div class="nav-left">
            <div class="logo">
                <span class="logo__default">John</span> <span class="logo__highlight">Doe</span>
            </div>
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