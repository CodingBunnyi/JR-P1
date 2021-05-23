import React from 'react';
import styled from 'styled-components';
import SubTitle from '~/components/SubTitle';
import Highlight from '~/components/Highlight';

const ContactFormBlock = styled.div`
    width: 50%;
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
    left:54px;
    opacity: 0.4;
    position: absolute;
    top: 9px;
    font-size: 15px;
    font-weight: 400;
`;

const ContactInput = styled.input`
    position: relative;
    background: transparent;
    height:42px;
    border: 0;
    border-radius: 0;
    &:focus {
        background: transparent;
        box-shadow: none;
        outline: none;
    
    }
`;

const TextArea = styled.textarea`
    border: 0;
    border-radius: 0;
`;

const SubmitButton = styled.input`
    border:0;
    background-color: #2eca7f;
    color: #fff;
    padding: 0.5em 1.5em;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%), 0 2px 4px rgb(0 0 0 / 30%);
    font-weight: 500;
`;


const ContactForm = () => (
    <ContactFormBlock>
        <SubTitle>Contact <Highlight>Form</Highlight></SubTitle>

        <form class="contact-from">
            <FormGroup>
                <i class="fa fa-user"></i>
                <Label>Full Name</Label>
                <ContactInput id="form_name" type="text" name="name" class="form-control" placeholder required="required" />
            </FormGroup>
            
            <FormGroup>
                <i class="fa fa-envelope"></i>
                <Label>Email Address</Label>
                <ContactInput id="form_email" type="text" name="email" class="form-control" placeholder required="required" />
            </FormGroup>

            <FormGroup>
                <i class="fa fa-comment"></i>
                <Label>Message for Me</Label>
                <TextArea id="form_comment" type="text" name="comment" class="form-control" placeholder required="required"></TextArea>
            </FormGroup>

            <SubmitButton class="submit-btn" type="submit" value="SEND MESSAGE" />
        </form>
    </ContactFormBlock>        
);

export default ContactForm;
