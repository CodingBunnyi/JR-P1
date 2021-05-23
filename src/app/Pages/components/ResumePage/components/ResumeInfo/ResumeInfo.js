import React from 'react';
import styled from 'styled-components';
import ContentSection from '~/components/ContentSection';
import SubTitle from '~/components/SubTitle';
import Highlight from '~/components/Highlight';


const ResumeInfoContainer = styled.div`
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

const Description = styled.p`
    font-size: 14px;
`;


const ResumeInfo = () => (
    <ResumeInfoContainer>                   
        <ContentSection>
            <SubTitle>Education</SubTitle>
            
            <TimeLine>
                <TimeLineItem>
                    <TimeLineTitle>Specialization Course</TimeLineTitle>
                    <Period>2010</Period><Company>Apple Inc.</Company>
                    <Description>
                        Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
                    </Description>
                </TimeLineItem>

                <TimeLineItem>
                    <TimeLineTitle>Specialization Course</TimeLineTitle>
                    <Period>2010</Period><Company>Apple Inc.</Company>
                    <Description>
                        Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
                    </Description>
                </TimeLineItem>

                <TimeLineItem>
                    <TimeLineTitle>Specialization Course</TimeLineTitle>
                    <Period>2010</Period><Company>Apple Inc.</Company>
                    <Description>
                        Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
                    </Description>
                </TimeLineItem>  
            </TimeLine>
        </ContentSection>

        <ContentSection>
            <SubTitle>Experience</SubTitle>

            <TimeLine>
                <TimeLineItem>
                    <TimeLineTitle>Specialization Course</TimeLineTitle>
                    <Period>2010</Period><Company>Apple Inc.</Company>
                    <Description>
                        Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
                    </Description>
                </TimeLineItem>

                <TimeLineItem>
                    <TimeLineTitle>Specialization Course</TimeLineTitle>
                    <Period>2010</Period><Company>Apple Inc.</Company>
                    <Description>
                        Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
                    </Description>
                </TimeLineItem>

                <TimeLineItem>
                    <TimeLineTitle>Specialization Course</TimeLineTitle>
                    <Period>2010</Period><Company>Apple Inc.</Company>
                    <Description>
                        Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
                    </Description>
                </TimeLineItem>                       
            </TimeLine>
        </ContentSection>
    </ResumeInfoContainer>

);

export default ResumeInfo;