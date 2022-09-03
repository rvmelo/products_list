import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;

  button {
    display: flex;
    flex: 1;
    margin: 20px;
    height: 50px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;

    span {
      font-size: 18;
      font-weight: bold;
      color: purple;
    }
  }

`;
