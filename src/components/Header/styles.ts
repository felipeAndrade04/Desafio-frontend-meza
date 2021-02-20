import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  z-index: 1020;
  width: 100%;
  padding: 12px 0;
  background: #143c8d;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 35px;
    }

    a {
      text-decoration: none;
      color: #fff;
      font-size: 15px;
      font-weight: 500;

      &:hover {
        opacity: 0.8;
      }

      svg {
        margin: 0 8px 0 24px;
      }
    }
  }

  label {
    height: 40px;
    width: 600px;
    padding: 16px;
    background: #fff;
    border-radius: 4px;

    display: flex;
    align-items: center;

    input {
      flex: 1;
      font-size: 16px;
      color: #a8a8a8;
      font-weight: 100;
      background: transparent;
      border: 0;
    }
  }

  div {
    display: flex;

    a {
      text-decoration: none;
      color: #fff;
      font-size: 15px;
      font-weight: 500;

      display: flex;

      align-items: center;

      &:hover {
        opacity: 0.8;
      }

      p {
        margin: 0 32px 0 8px;
      }
    }
  }
`;
