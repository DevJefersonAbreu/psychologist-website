"use client"

import React from 'react';
import Layout from '../../components/layout/layout';
import Service from '../../components/service/service';
import * as S from './styles';

const ServicosPage: React.FC = () => {
  return (
    <Layout>
      <S.ServicosPageWrapper>
        <S.PageTitle>Nossos Serviços</S.PageTitle>
        <S.PageSubtitle>Descubra como podemos ajudar você a alcançar o bem-estar emocional</S.PageSubtitle>
        <Service />
      </S.ServicosPageWrapper>
    </Layout>
  );
};

export default ServicosPage;

