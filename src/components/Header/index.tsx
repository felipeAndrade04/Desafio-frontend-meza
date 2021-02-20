import React from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdBasket } from 'react-icons/io';

import * as S from './styles';

import logoImg from '../../assets/logo.svg';

const Header: React.FC = () => (
  <S.Header>
    <S.HeaderContent>
      <div>
        <img src={logoImg} alt="Logo" />
        <a href="/">
          <FiMenu color="#fff" size={24} />
          CATEGORIAS
        </a>
      </div>

      <label htmlFor="search">
        <input id="search" type="text" placeholder="O que você procura?" />
        <FiSearch color="#909090" size={24} />
      </label>

      <div>
        <a href="/">
          <FaUserCircle color="#fff" size={24} />
          <p>ENTRAR</p>
        </a>
        <a href="/">
          <IoMdBasket color="#68B9DC" size={32} />
        </a>
      </div>
    </S.HeaderContent>
  </S.Header>
);

export default Header;
