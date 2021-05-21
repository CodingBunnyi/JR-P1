import React from 'react';
import styled from 'styled-components';
import PageTitle from '~/components/PageTitle';
import PageHeader from '~/components/PageHeader';
import PageContent from '~/components/PageContent';
import ContentSection from '~/components/ContentSection';
import SubTitle from '~/components/SubTitle';
import Highlight from '~/components/Highlight';

const ResumeSub = styled.div`
    display: flex;
`;

const TimeLine = styled.div`
    position: relative;
    &::after {
        content: '';
        position: absolute;
        width: 2px;
        background-color: #e0e0e0;
        top: 0;
        bottom: 0;
        margin-left: -3px;
    }
`;

const TimeLineItem = styled.div`
    position: relative;
    padding: 15px 20px 10px;
    margin-left: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 20%);
    border-left: 2px solid #2eca7f;
    transition: all ease-in-out;

    &:hover {
        box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);
    }

    &::before {
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        background-color: #fff;
        border: 2px solid #2eca7f;
        border-radius: 50%;
        z-index: 1;
        left:-30px;
  }

    &::after {
        content: '';
        position: absolute;
        width: 29px;
        height: 2px;
        background-color: #2eca7f;
        z-index: 0;
        left:-30px;
        top:20px;
}
`;

const TimeLineTitle = styled.h4`
    font-size: 16px;
    line-height: 1.2em;
    font-weight: 600;
    margin:5px 0;
`;

const Period = styled(Highlight)`
    display: inline-block;
    font-size: 12px;
    line-height: 1.2em;
    margin-bottom: 8px;
`;

const Company = styled.span`
    display: inline-block;
    color: #9e9e9e;
    font-size: 12px;
    line-height: 1.2em;
    margin-left: 5px;
    padding-left: 8px;
    border-left: 1px solid #e0e0e0;
    margin-bottom: 8px;
`;


const ResumePage = () => (

    <section class="page" id="RESUME">
        <PageHeader>
            <PageTitle>Resume</PageTitle>
        </PageHeader>

        <PageContent>
            <ResumeSub>                   
                <ContentSection>
                    <SubTitle>Education</SubTitle>
                    
                    <TimeLine>
                        <TimeLineItem>
                            <TimeLineTitle>Specialization Course</TimeLineTitle>
                            <Period>2010</Period><Company>Apple Inc.</Company>
                            <p class="item-description">
                                Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
                            </p>
                        </TimeLineItem>

                        <TimeLineItem>
                            <TimeLineTitle>Specialization Course</TimeLineTitle>
                            <Period>2010</Period><Company>Apple Inc.</Company>
                            <p class="item-description">
                                Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
                            </p>
                        </TimeLineItem>

                        <TimeLineItem>
                            <TimeLineTitle>Specialization Course</TimeLineTitle>
                            <Period>2010</Period><Company>Apple Inc.</Company>
                            <p class="item-description">
                                Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
                            </p>
                        </TimeLineItem>  
                    </TimeLine>
                </ContentSection>

                <ContentSection>
                    <SubTitle>Experience</SubTitle>

                    <TimeLine>
                        <TimeLineItem>
                            <TimeLineTitle>Specialization Course</TimeLineTitle>
                            <Period>2010</Period><Company>Apple Inc.</Company>
                            <p class="item-description">
                                Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
                            </p>
                        </TimeLineItem>

                        <TimeLineItem>
                            <TimeLineTitle>Specialization Course</TimeLineTitle>
                            <Period>2010</Period><Company>Apple Inc.</Company>
                            <p class="item-description">
                                Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
                            </p>
                        </TimeLineItem>

                        <TimeLineItem>
                            <TimeLineTitle>Specialization Course</TimeLineTitle>
                            <Period>2010</Period><Company>Apple Inc.</Company>
                            <p class="item-description">
                                Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
                            </p>
                        </TimeLineItem>                       
                    </TimeLine>
                </ContentSection>
            </ResumeSub>

            <ResumeSub> 
                <ContentSection>
                    <div class="block">
                        <div class="block-title">
                            <h3>Design <span class="highlight">Skill</span></h3>
                        </div>

                        <div class="skill-info">
                            <h4>Web Design</h4>
                            <div class="skill-container">
                                <div class="skill-percentage skill-1"></div>
                            </div>

                            <h4>Graphic Design</h4>
                            <div class="skill-container">
                                <div class="skill-percentage skill-2"></div>
                            </div>

                            <h4>Print Design</h4>
                            <div class="skill-container">
                                <div class="skill-percentage skill-3"></div>
                            </div>

                        </div>
                    </div>
                </ContentSection>

                <ContentSection>
                    <div class="block">
                        <div class="block-title">
                            <h3>Coding <span class="highlight">Skill</span></h3>
                        </div>

                        <div class="skill-info">
                            <h4>HTML5</h4>
                            <div class="skill-container">
                                <div class="skill-percentage skill-4"></div>
                            </div>

                            <h4>CSS3/LESS/SASS</h4>
                            <div class="skill-container">
                                <div class="skill-percentage skill-5"></div>
                            </div>

                            <h4>jQuery</h4>
                            <div class="skill-container">
                                <div class="skill-percentage skill-6"></div>
                            </div>
                        </div>
                    </div>
                </ContentSection>
            </ResumeSub>
        </PageContent>  
    </section>
);

export default ResumePage;