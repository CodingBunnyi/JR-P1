import React from 'react';
import styled from 'styled-components';
import Highlight from '~/components/Highlight';

const FooterContainer = styled.footer`
    text-align: center;
    margin-top: 30px;
`;

const Copyrights = styled.div`
    margin-bottom: 12px;
    font-size: 12px;
    color: #9e9e9e;
`;

const Footer = () => (
    <FooterContainer>    
        <Copyrights>
            © 2017 All rights reserved. Designed by <Highlight >Jiangren</Highlight>
        </Copyrights>

        <Copyrights>
            Australia IT Professional Community <Highlight>Melbourne Sydney Brisbane</Highlight>
        </Copyrights>
    </FooterContainer>
);

export default Footer;