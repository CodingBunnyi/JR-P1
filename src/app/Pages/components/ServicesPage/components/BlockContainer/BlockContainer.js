import styled from 'styled-components';

const BlockContainer = styled.div`
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;

export default BlockContainer;