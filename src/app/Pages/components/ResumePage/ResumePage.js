import React from 'react';
import PageTitle from '~/components/PageTitle';
import PageHeader from '~/components/PageHeader';
import PageContent from '~/components/PageContent';
import ResumeInfo from './components/ResumeInfo';
import ResumeSkills from './components/ResumeSkills';

const ResumePage = () => (
    <section className="page" id="RESUME">
        <PageHeader>
            <PageTitle>Resume</PageTitle>
        </PageHeader>

        <PageContent>
            <ResumeInfo />
            
            <ResumeSkills />
        </PageContent>  
    </section>
);

export default ResumePage;