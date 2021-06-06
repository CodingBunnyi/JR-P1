import React from 'react';
import styled from 'styled-components';
import PageHeader from '~/components/PageHeader';
import AvatarImage from '~/images/photo.png';
import SpMainBg from '~/images/sp_main_bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const SocialItems = styled.div`
    text-align: center;
    margin-top: 20px;
`;

const SocialItem = styled.button`
    display: inline-block;
    width: 36px;
    height: 36px;
    border-radius: 24px;
    background-color: #fff;
    margin: 0 5px;
    color: #9e9e9e;
    text-align: center;
    box-shadow: 0px 3px 8px 0px rgb(0 0 0 / 10%);
    cursor: pointer;
    border: 0;
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

const HomeHeaderBlock = styled(PageHeader)`
    display: flex;
    background-image: url(${SpMainBg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;


const HomeHeader =  () => (
    <HomeHeaderBlock>
        <Left>
            <AvatarBlock>
                <Avatar src={AvatarImage}></Avatar>
            </AvatarBlock>
        </Left>

        <Right>
            <TitleBlock>
                <MainTitle>John Doe</MainTitle>
                <Occupation>Fronted-developer</Occupation>
            </TitleBlock>

            <SocialItems>
                <SocialItem>
                    <FontAwesomeIcon icon={faTwitter} style={{height:"36px"}}/>
                </SocialItem>

                <SocialItem>
                    <FontAwesomeIcon icon={faFacebook}  style={{height:"36px"}}/>
                </SocialItem>

                <SocialItem>
                    <FontAwesomeIcon icon={faInstagram}  style={{height:"36px"}}/>
                </SocialItem>
            </SocialItems>
        </Right>
    </HomeHeaderBlock>
);

export default HomeHeader;