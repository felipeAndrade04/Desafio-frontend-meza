import React, { ButtonHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ComponentType<IconBaseProps>;
};

const Button: React.FC<ButtonProps> = ({ icon: Icon, children }) => (
  <S.Container type="button">
    {Icon && <Icon size={24} />}
    {children}
  </S.Container>
);

export default Button;
