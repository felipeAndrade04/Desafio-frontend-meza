import styled from 'styled-components';

export const Header = styled.div`
  padding: 16px 0;
  background: #143c8d;
`;

export const HeaderContent = styled.div`
  max-width: 1580px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div:first-child {
    display: flex;
    align-items: center;

    img {
      height: 40px;
    }

    a {
      text-decoration: none;
      color: #fff;
      font-size: 18px;
      font-weight: 500;

      display: flex;
      align-items: center;

      &:hover {
        opacity: 0.8;
      }

      svg {
        margin: 0 8px 0 32px;
      }
    }
  }

  label {
    height: 48px;
    width: 700px;
    padding: 16px;
    background: #fff;
    border-radius: 4px;

    display: flex;
    align-items: center;

    input {
      flex: 1;
      font-size: 20px;
      color: #909090;
      background: transparent;
      border: 0;
    }
  }

  div {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      color: #fff;
      font-size: 18px;
      font-weight: 500;

      display: flex;

      align-items: center;

      &:hover {
        opacity: 0.8;
      }
      svg {
        margin: 8px;
      }
      p {
        margin-right: 32px;
      }
    }
  }
`;
