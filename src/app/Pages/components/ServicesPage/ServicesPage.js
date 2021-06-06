import React from 'react';
import PageTitle from '~/components/PageTitle';
import PageHeader from '~/components/PageHeader';
import PageContent from '~/components/PageContent';
import ServicesBlock from './components/ServicesBlock';
import ClientsBlock from './components/ClientsBlock';

const ServicesPage = () => (
    <section class="page" id="SERVICES">
        <PageHeader>
            <PageTitle>Services</PageTitle>
        </PageHeader>

        <PageContent>                 
            <ServicesBlock />

            <ClientsBlock />
        </PageContent>
    </section>
);

export default ServicesPage;