import React from 'react';
import styled from 'styled-components';
import SubTitle from '~/components/SubTitle';
import Highlight from '~/components/Highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons'

const ContactInfoBlock = styled.div`
    width:50%;
`;

const InfoItemBlock = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const IconContainer = styled.div`
    border-radius: 20px;
    background-color: #fafafa;
    width: 36px;
    height: 36px;
    position: relative;
    text-align: center; 
`;

const TextContainer = styled.div`
    display: flex;
    margin-left: 15px;
    align-items: center;
`;

const ContactText = styled.span`
    font-size: 15px;
    font-weight: bold;
`;

const ContactInfo = () => (
    <ContactInfoBlock>
        <SubTitle>Get in <Highlight>Touch</Highlight></SubTitle>

        <div id="map"></div>

        <InfoItemBlock>
            <IconContainer>
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" style={{height:"36px", color:"#2eca7f"}}/>
            </IconContainer>

            <TextContainer>
                <ContactText>Brisbane, Australia</ContactText>
            </TextContainer>
        </InfoItemBlock>

        <InfoItemBlock>
            <IconContainer>
                <FontAwesomeIcon icon={faEnvelope} size="lg" style={{height:"36px", color:"#2eca7f"}}/>
            </IconContainer>

            <TextContainer>
                <ContactText>info@jiangren.com.au</ContactText>
            </TextContainer>
        </InfoItemBlock>

        <InfoItemBlock>
            <IconContainer>
                <FontAwesomeIcon icon={faPhone} size="lg" style={{height:"36px", color:"#2eca7f"}}/>
            </IconContainer>

            <TextContainer>
                <ContactText>+123 654 78900</ContactText>
            </TextContainer>
        </InfoItemBlock>

        <InfoItemBlock>
            <IconContainer>
                <FontAwesomeIcon icon={faCheck} size="lg" style={{height:"36px", color:"#2eca7f"}}/>
            </IconContainer>

            <TextContainer>
                <ContactText>Freelance Available</ContactText>
            </TextContainer>
        </InfoItemBlock>


    </ContactInfoBlock>
);

export default ContactInfo;