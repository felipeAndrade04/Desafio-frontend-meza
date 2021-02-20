import React from 'react';

import * as S from './styles';

interface CardProps {
  title: string;
  spacing?: boolean;
}

const Card: React.FC<CardProps> = ({ title, spacing, children }) => {
  return (
    <S.Container isSpacing={spacing}>
      <h2>{title}</h2>
      <span>{children}</span>
    </S.Container>
  );
};

export default Card;
