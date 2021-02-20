import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { CgMenuGridO } from 'react-icons/cg';
import { BsArrowLeftRight } from 'react-icons/bs';

import * as S from './styles';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Homepage: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <Banner />
      <S.Content>
        <S.ButtonsContainer>
          <Button icon={CgMenuGridO}>Quantidade</Button>
          <Button icon={BsArrowLeftRight}>Ordenar</Button>
        </S.ButtonsContainer>
        <h2>SHAMPOOS E DERMOCOSMÉTICOS</h2>
        <strong>
          Os shampoos dermocosméticos possuem fórmulas especiais que, além de
          tratas os fios, fortalecem a saúde do couro cabeludo - a pele sensível
          onde está a raiz dos cabelos. Eles regulam a oleosidade, hidratam e
          ajudam a combater a caspa e a queda dos fios.
        </strong>
        <section>
          <div>
            <Card title="COMO ESCOLHER O MELHOR SHAMPOO">
              O cabelo pode ser oleosa, seco, misto ou quimicamente tratado.
              Cada caso exige um tipo de sharmpod especial. Tào importante
              quante levar em conta as caracteristicas dos fios e considerar as
              necessidades da raiz O ideal e procurar a orientação de um
              dermatologista para a indicação do produto mais adequado.
              Geraimente, a recomendaçao e usar produtos que não contêm sulfato
              e, por isso, tratam o couro cabeludo sem remover a sua hidratação
              natural, Considere também producos com ácido salicilico, que ajuda
              a regular a descamação piroctona olamina, que evita a praliferação
              de fungos, e bisabolol, um ativo anti- inflamatorio.
            </Card>
            <Card title="QUEDA DE CABELO NUCA MAIS" spacing>
              Surpreende-se com a quantidade de fios soltos no travesseiro aa
              acordar, ou que ficam presos no pente ao se arrumar? Os shampoos
              dermocosméticos antiqueda têm na sus composição ativos como as
              vitaminas do complexo B. essencials para evitar os cabelos opacos
              e frágeis. Tratamentos com laser e medicamentos topicos tarmbém
              podem ajudar a diminuir a queda e estimular. o crescimento dos
              fios. Mas só devem ser usados a partir da orientação de um
              dermatologista. Lembre-se que a má alimentação eo estresse estão
              entre as possiveis causas da queda de cabelo, entãa procure rever
              seus habitos,
            </Card>
          </div>
          <S.ImageContent>
            <div>
              <a href="#">
                CONHEÇA NOSSOS <strong>SHAMPOOS</strong>
                <FiChevronRight color="#fff" size={16} />
              </a>
            </div>
          </S.ImageContent>
        </section>

        <Card title="ANTICASPA">
          Os mais procurados shampoos da categoria dos dermocosméticos são
          aqueles que tém ação anticaspa. Procure um que possua propriedades
          antimicrobianas, como o dissulfeto de selenio. E- de riovo-que não
          contenham sulfato, caso contrário seu cabelo pode ficar ressecado e
          sem a proteção natural. A aplicação do produto deve ser apenas no
          couro cabeluda, com movimentos de massagem, deixando agir por alguns
          minutos. Evite banhas com agua muito quente e ao usar condicionadores
          e máscaras capilares, cuide para não aplica-los na raz do cabelo -
          assim, não ficarão residuos acumulados estimulando a oleosidade.
        </Card>
        <S.MoreInfo>
          <span>
            Para mais informações sobre o combate à caspa, acesse o{' '}
            <strong>
              <a href="">Dermaclub</a>
            </strong>
          </span>
        </S.MoreInfo>
        <S.Underline />
      </S.Content>
    </S.Container>
  );
};

export default Homepage;
