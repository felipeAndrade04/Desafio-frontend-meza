import styled, { css } from 'styled-components';

interface ContainerProps {
  isSpacing?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  -webkit-box-shadow: 10px 8px 6px -5px rgba(0, 0, 0, 0.39);
  box-shadow: 10px 8px 6px -5px rgba(0, 0, 0, 0.39);

  ${props =>
    props.isSpacing &&
    css`
      margin-top: 20px;
    `}

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  span {
    font-size: 15px;
  }
`;
