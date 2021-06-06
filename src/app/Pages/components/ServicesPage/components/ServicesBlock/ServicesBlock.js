import React from 'react';
import styled from 'styled-components';
import SubTitle from '~/components/SubTitle';
import Highlight from '~/components/Highlight';
import BlockContainer from '../BlockContainer';
import DesignIcon from '~/images/service/web_design_icon.png';
import PhotographyIcon from '~/images/service/photography_icon.png';
import CreativityIcon from '~/images/service/creativity_icon.png';
import AdvetisingIcon from '~/images/service/advetising_icon.png';

const ServicesItem = styled.div`
    text-align: center;
    margin-bottom: 30px;
`;

const ServiceInfo = styled.div`
    padding:0 15px;
`;

const ServiceImageContainer = styled.div`
    width: 120px;
    height: 120px;
    background-color: #fafafa;
    border-radius: 100px;
    margin: 0 auto;
    transition:all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-7px);
        box-shadow: 0 7px 12px rgba(0, 0, 0, 0.15);
    }
`;

const ServiceTitle = styled.h4`
    font-size: 17px;
    padding: 20px 0 0;
`;

const ServiceImage = styled.img`
    max-width: 100px;
    height: 64px;
    margin: 28px 0;
`;

const ServicesBlock = () => (
    <div>
        <SubTitle>My <Highlight>Services</Highlight></SubTitle>
        
        <BlockContainer>                  
            <ServicesItem>
                <ServiceInfo>
                    <ServiceImageContainer>
                        <ServiceImage src={DesignIcon}></ServiceImage>
                    </ServiceImageContainer>
                    <ServiceTitle>Web Design</ServiceTitle>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                </ServiceInfo>
            </ServicesItem>

            <ServicesItem>
                <ServiceInfo>
                    <ServiceImageContainer>
                        <ServiceImage src={PhotographyIcon}></ServiceImage>
                    </ServiceImageContainer>
                    <ServiceTitle>Photography</ServiceTitle>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                </ServiceInfo>
            </ServicesItem>

            <ServicesItem>
                <ServiceInfo>
                    <ServiceImageContainer>
                        <ServiceImage src={CreativityIcon}></ServiceImage>
                    </ServiceImageContainer>
                    <ServiceTitle>Management</ServiceTitle>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                </ServiceInfo>
            </ServicesItem>

            <ServicesItem>
                <ServiceInfo>
                    <ServiceImageContainer>
                        <ServiceImage src={AdvetisingIcon}></ServiceImage>
                    </ServiceImageContainer>
                    <ServiceTitle>Advetising</ServiceTitle>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                </ServiceInfo>
            </ServicesItem>
        </BlockContainer>
    </div>
);

export default ServicesBlock;