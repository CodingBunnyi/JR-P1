import React from 'react';
import PageTitle from '~/components/PageTitle';
import PageHeader from '~/components/PageHeader';
import PageContent from '~/components/PageContent';
import ResumeInfo from './components/ResumeInfo';
import ResumeSkills from './components/ResumeSkills';
import Page from '../Page';

const ResumePage = () => (
    <Page id="RESUME">
        <PageHeader>
            <PageTitle>Resume</PageTitle>
        </PageHeader>

        <PageContent>
            <ResumeInfo />
            
            <ResumeSkills />
        </PageContent>  
    </Page>
);

export default ResumePage;