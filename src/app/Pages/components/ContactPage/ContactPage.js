import React from 'react';
import styled from 'styled-components';
import PageTitle from '~/components/PageTitle';
import PageHeader from '~/components/PageHeader';
import PageContent from '~/components/PageContent';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';

const ContactPageContent = styled(PageContent)`
    display: flex;
`;

const ContactPage = () => (
    <section className="page" id="CONTACT">
        <PageHeader>
            <PageTitle>Contact</PageTitle>
        </PageHeader>

        <ContactPageContent>
            <ContactInfo />

            <ContactForm />
        </ContactPageContent>
    </section>
);

export default ContactPage;