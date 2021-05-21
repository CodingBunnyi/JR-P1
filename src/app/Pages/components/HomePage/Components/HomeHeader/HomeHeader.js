import React from 'react';
import styled from 'styled-components';
import PageHeader from '~/components/PageHeader';
import Flex from '~/components/Flex';

const SocialItems = styled.div`
    text-align: center;
    margin-top: 20px;
`;

const SocialItem = styled.a`
    display: inline-block;
    width: 36px;
    height: 36px;
    border-radius: 24px;
    background-color: #fff;
    margin: 0 1px;
    color: #9e9e9e;
    text-align: center;
    box-shadow: 0px 3px 8px 0px rgb(0 0 0 / 10%);
`;

const MainTitle = styled.h1`
    font-size: 54px;
    font-weight: 700;
    margin: 30px 0 0;
`;

const Occupation = styled.div`
    font-size: 18px;
    margin: 0;
`;

const TitleBlock = styled.div`
    text-align: center;
    color: #fff;
`

const Left = styled.div`
    width:30%;
`;

const Right = styled.div`
    width:70%;
`;

const Avatar = styled.img`
    max-width: 100%;
`;

const AvatarBlock  =  styled.div`
    max-width: 280px;
    margin-bottom: -75px;
    border: 3px solid $default_white;
    background-color: $default_white;
    box-shadow: 0px 3px 8px 0px rgb(0 0 0 / 10%);
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
        transform:translateY(-7px);
    }
`;

const Header = styled(PageHeader)`
    display: flex;
`;

const HomeHeader =  () => (
    <Header>
        <Left>
            <AvatarBlock>
                <Avatar src="images/photo.png"></Avatar>
            </AvatarBlock>
        </Left>

        <Right>
            <TitleBlock>
                <MainTitle>John Doe</MainTitle>
                <Occupation>Fronted-developer</Occupation>
            </TitleBlock>

            <SocialItems>
                <SocialItem href="#">
                    <i class="fab fa-twitter">
                        
                    </i>
                </SocialItem>

                <SocialItem href="#">
                    <i class="fab fa-facebook">
                        
                    </i>
                </SocialItem>

                <SocialItem href="#">
                    <i class="fab fa-instagram">
                        
                    </i>
                </SocialItem>
            </SocialItems>
        </Right>
    </Header>
);

export default HomeHeader;