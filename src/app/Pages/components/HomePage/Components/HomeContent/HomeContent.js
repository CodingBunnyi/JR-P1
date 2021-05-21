import React from 'react';
import styled from 'styled-components';
import Highlight from '~/components/Highlight';
import DefaultGray from '~/components/DefaultGray';
import PageContent from '~/components/PageContent';
import ContentSection from '~/components/ContentSection';
import SubTitle from '~/components/SubTitle';

const InfoTitle = styled.span`
    min-width: 120px;
    display: inline-block;
`;

const InfoValue = styled(DefaultGray)`
    opacity: 0.6;
`;

const Email = styled.a`
    opacity: 1;
    text-decoration: none;
    color: #2eca7f;
`;

const InfoList = styled.ul`
    list-style: none;
`;

const ListItem = styled.li`
    margin: 5px 0;
`;

const Description = styled.p`
    font-size: 15px;
    margin: 0 0 10px;
    font-weight: 400;
`;

const HompageContent = styled(PageContent)`
    display: flex;
`;

const HomeContent = () => (
    <HompageContent>
        <ContentSection>
            <SubTitle>About<Highlight> Me</Highlight></SubTitle>

            <Description>
                Hello! I’m John Doe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.
            </Description>
        </ContentSection>

        <ContentSection>
            <InfoList>
                <ListItem>
                    <InfoTitle>Age</InfoTitle>
                    <InfoValue>29</InfoValue>
                </ListItem>

                <ListItem>
                    <InfoTitle>Residence</InfoTitle>
                    <InfoValue>Australia</InfoValue>
                </ListItem>

                <ListItem>
                    <InfoTitle>Address</InfoTitle>
                    <InfoValue>Level 3 / 57 Coronation, Brisbane</InfoValue>
                </ListItem>

                <ListItem>
                    <InfoTitle>e-mail</InfoTitle>
                    <Email href="#">nfo@jiangren.com.au</Email>
                </ListItem>

                <ListItem>
                    <InfoTitle>Phone</InfoTitle>
                    <InfoValue>+0123 123 456 789</InfoValue>
                </ListItem>
            </InfoList>
        </ContentSection>
    </HompageContent>
);

export default HomeContent;
