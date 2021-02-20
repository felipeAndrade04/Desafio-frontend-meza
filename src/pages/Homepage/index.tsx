import React from 'react';

import * as S from './styles';

import Header from '../../components/Header';

const Homepage: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Banner>
        <S.BannerImage />
        <S.BannerContent>
          <h3>
            CAPILAR <br />
            <strong>FORTALECIMENTO</strong>
          </h3>
          <p>
            Com suas fórmulas especiais, os shampoos dermocosméticos ajudam a
            fortalecer o cabelo, combater a queda e trata a tão indesejada caspa
          </p>
        </S.BannerContent>
      </S.Banner>
    </S.Container>
  );
};

export default Homepage;
