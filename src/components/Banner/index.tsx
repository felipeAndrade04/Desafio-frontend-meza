import React from 'react';

import * as S from './styles';

const Banner: React.FC = () => (
  <S.Banner>
    <S.BannerImage />
    <S.BannerContent>
      <h3>
        CAPILAR <br />
        <strong>FORTALECIMENTO</strong>
      </h3>
      <p>
        Com suas fórmulas especiais, os shampoos dermocosméticos ajudam a <br />
        fortalecer o cabelo, combater a queda e trata a tão indesejada caspa
      </p>
    </S.BannerContent>
  </S.Banner>
);

export default Banner;
