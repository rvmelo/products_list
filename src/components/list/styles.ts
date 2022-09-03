import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    border: 1px solid purple;
    margin-top: 20px;

    h1 {
        font-size: 24px;
        color: purple;
    }

    p {
        font-size: 18px;
    }

    img {
        width: 200px;
        height: 200px;
    }
  
`;
