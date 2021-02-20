import styled from 'styled-components';

import ImageBanner from '../../assets/ImageBanner4.jpeg';

export const Banner = styled.div`
  display: flex;
  flex: 1;
  background: #000;
  height: 280px;
  margin-top: 64px;
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
  padding: 50px 150px 50px 50px;
  background: #d98e83;
  color: #fff;

  h3 {
    font-size: 30px;
    font-weight: 100;
    line-height: 30px;

    strong {
      font-size: 35px;
    }
  }
  p {
    font-size: 14px;
    margin-top: 8px;
    font-weight: bold;
    line-height: 24px;
  }
`;
