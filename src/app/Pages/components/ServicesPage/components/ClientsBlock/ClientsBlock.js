import React from 'react';
import styled from 'styled-components';
import SubTitle from '~/components/SubTitle';
import BlockContainer from '../BlockContainer';
import ClientIcon from '~/images/clients/client_1.png';

const ClientItem = styled.div`
    opacity: 0.4;
    text-align: center;
    transition:all 0.3s ease-in-out;

    &:hover {
        opacity: 1;
    }
`;

const ClientImage = styled.img`
    max-width: 80px;
`;

const ClientButton = styled.button`
    cursor: pointer;
    border: 0;
    background-color: transparent;
`;

const ClientsBlock = () => (
    <div>
        
        <SubTitle>Clients</SubTitle>
        

        <BlockContainer>
            <ClientItem>
                <ClientButton>
                    <ClientImage src={ClientIcon}></ClientImage>
                </ClientButton>
            </ClientItem>

            <ClientItem>
                <ClientButton>
                    <ClientImage src={ClientIcon}></ClientImage>
                </ClientButton>
            </ClientItem>

            <ClientItem>
                <ClientButton>
                    <ClientImage src={ClientIcon}></ClientImage>
                </ClientButton>
            </ClientItem>

            <ClientItem>
                <ClientButton>
                    <ClientImage src={ClientIcon}></ClientImage>
                </ClientButton>
            </ClientItem>

            <ClientItem>
                <ClientButton>
                    <ClientImage src={ClientIcon}></ClientImage>
                </ClientButton>
            </ClientItem>

            <ClientItem>
                <ClientButton>
                    <ClientImage src={ClientIcon}></ClientImage>
                </ClientButton>
            </ClientItem>
        </BlockContainer>
    </div>
);

export default ClientsBlock;