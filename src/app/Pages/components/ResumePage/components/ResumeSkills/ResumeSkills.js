import React from 'react';
import styled from 'styled-components';
import ContentSection from '~/components/ContentSection';
import SubTitle from '~/components/SubTitle';
import Highlight from '~/components/Highlight';

const ResumeSkillsContainer = styled.div`
    display: flex;
`;

const SkillName = styled.h4`
    font-size: 0.8em;
    margin: 0 0 5px;
`;

const SkillContainer = styled.div`
    background-color: #f5f5f5;
    border: 1px solid #e0e0e0;
    height: 10px;
    margin-bottom: 12px;
    width: 100%;
`;

const SkillPercentage = styled.div `
    background-color: #2eca7f;
    height: 10px;
`;

const Skill1 = styled(SkillPercentage)`
    width: 88%;
`;

const Skill2 = styled(SkillPercentage)`
    width: 75%;
`;

const Skill3 = styled(SkillPercentage)`
    width: 60%;
`;

const Skill4 = styled(SkillPercentage)`
    width: 95%;
`;

const Skill5 = styled(SkillPercentage)`
    width: 75%;
`;

const Skill6 = styled(SkillPercentage)`
    width: 92%;
`;

const ResumeSkills = () => (
    <ResumeSkillsContainer> 
        <ContentSection>
            <div>
                <div>
                    <SubTitle>Design <Highlight>Skill</Highlight></SubTitle>
                </div>

                <div>
                    <SkillName>Web Design</SkillName>
                    <SkillContainer>
                        <Skill1></Skill1>
                    </SkillContainer>

                    <SkillName>Graphic Design</SkillName>
                    <SkillContainer>
                        <Skill2></Skill2>
                    </SkillContainer>

                    <SkillName>Print Design</SkillName>
                    <SkillContainer>
                        <Skill3></Skill3>
                    </SkillContainer>
                </div>
            </div>
        </ContentSection>

        <ContentSection>
            <div>
                <div>
                    <SubTitle>Coding <Highlight>Skill</Highlight></SubTitle>
                </div>

                <div>
                    <SkillName>HTML5</SkillName>
                    <SkillContainer>
                        <Skill4></Skill4>
                    </SkillContainer>

                    <SkillName>CSS3/LESS/SASS</SkillName>
                    <SkillContainer>
                        <Skill5></Skill5>
                    </SkillContainer>

                    <SkillName>jQuery</SkillName>
                    <SkillContainer>
                        <Skill6></Skill6>
                    </SkillContainer>
                </div>
            </div>
        </ContentSection>
    </ResumeSkillsContainer>
);

export default ResumeSkills;