import styled from 'styled-components';

import ImageBanner from '../../assets/ImageBanner4.jpeg';

export const Container = styled.div``;

export const Banner = styled.div`
  display: flex;
  flex: 1;
  background: #000;
  height: 370px;
`;

export const BannerImage = styled.div`
  width: 50%;
  height: 100%;
  background: url(${ImageBanner}) no-repeat center;
  background-size: cover;
`;

export const BannerContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 80px 240px 80px 80px;
  background: #d98e83;
  color: #fff;

  h3 {
    font-size: 45px;
    font-weight: 100;
    line-height: 40px;

    strong {
      font-size: 50px;
    }
  }
  p {
    font-size: 18px;
    margin-top: 16px;
    font-weight: bold;
  }
`;
