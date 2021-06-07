import React from 'react';
import styled from 'styled-components';
import SubTitle from '~/components/SubTitle';
import Highlight from '~/components/Highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'


const ContactFormBlock = styled.div`
    width: 50%;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;

const FormGroup = styled.div`
    position: relative;
    padding-left: 40px;
    border-bottom: 1px solid #e0e0e0;
    margin: 0 0 25px;
`;

const Label = styled.label`
    position: absolute;
    top:0;
    left: 54px;
    opacity: 0.4;
    position: absolute;
    top: 9px;
    font-size: 15px;
    font-weight: 400;
`;

const ContactInput = styled.input`
    position: relative;
    background: transparent;
    height: 42px;
    border: 0;
    border-radius: 0;
    &:focus {
        background: transparent;
        box-shadow: none;
        outline: none;
    
    }
`;

const TextArea = styled.textarea`
    position: relative;
    background: transparent;
    border: 0;
    border-radius: 0;
    height: 37px;
    &:focus {
        background: transparent;
        box-shadow: none;
        outline: none;
    
    }

    
`;

const SubmitButton = styled.input`
    border: 0;
    background-color: #2eca7f;
    color: #fff;
    padding: 1rem 1.5rem;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-7px);
        box-shadow: 0 7px 12px rgba(0, 0, 0, 0.15);
    }
`;

const IconContainer = styled.div`
    background-color: #fafafa;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center; 
    width: 40px;
    height: 44px;
`;


const ContactForm = () => (
    <ContactFormBlock>
        <SubTitle>Contact <Highlight>Form</Highlight></SubTitle>

        <form>
            <FormGroup>
                <IconContainer>
                    <FontAwesomeIcon icon={faUser} size="lg" style={{height:"44px", color:"#bdbdbd"}}/>
                </IconContainer>
                <Label>Full Name</Label>
                <ContactInput id="form_name" type="text" name="name" />
            </FormGroup>
            
            <FormGroup>
                <IconContainer>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" style={{height:"44px", color:"#bdbdbd"}}/>
                </IconContainer>
                <Label>Email Address</Label>
                <ContactInput id="form_email" type="text" name="email" />
            </FormGroup>

            <FormGroup>             
            <IconContainer>
                    <FontAwesomeIcon icon={faComment} size="lg" style={{height:"44px", color:"#bdbdbd"}}/>
                </IconContainer>
                <Label>Message for Me</Label>
                <TextArea id="form_comment" type="text" name="comment"></TextArea>
            </FormGroup>

            <SubmitButton type="submit" value="SEND MESSAGE" />
        </form>
    </ContactFormBlock>        
);

export default ContactForm;
