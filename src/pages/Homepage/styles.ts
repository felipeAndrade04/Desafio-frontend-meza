import styled from 'styled-components';

import ImgContent from '../../assets/ImageContent.jpg';

export const Container = styled.div``;

export const Content = styled.div`
  position: relative;
  max-width: 1150px;
  /* height: 130vh; */
  background: transparent;
  margin: 120px auto;

  display: flex;
  flex-direction: column;
  h2 {
    color: #d98e83;
    font-size: 20px;
  }
  strong {
    font-size: 15px;
    color: #464446;
    margin: 20px 0;
  }

  section {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;

    div {
      width: 100%;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  right: 0;
  top: -120px;
  position: absolute;
`;

export const ImageContent = styled.div`
  width: 50%;
  margin-left: 20px;
  background: url(${ImgContent}) no-repeat center;
  background-size: cover;

  div {
    width: 100%;
    padding: 15px;
    background: #d98e83;
    align-items: center;
    opacity: 0.8;
    a {
      text-decoration: none;
      font-size: 20px;
      font-weight: 100;
      color: #fff;

      &:hover {
        opacity: 0.8;
      }

      strong {
        font-size: 20px;
        color: #fff;
      }

      svg {
        margin-left: 4px;
      }
    }
  }
`;

export const MoreInfo = styled.div`
  padding: 10px;
  width: 100%;
  background: #d98e83;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 200;

  a {
    font-size: 16px;
    color: #fff;
  }
`;

export const Underline = styled.div`
  width: 100%;
  height: 1.8px;
  background: #d98e83;
  margin-top: 20px;
`;
