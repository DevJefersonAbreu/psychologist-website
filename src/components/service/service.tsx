"use client"

import type React from "react"
import { Users, Brain, Heart, Smile, Zap, Coffee } from "lucide-react"
import * as S from "./styles"

const Service: React.FC = () => {
  const services = [
    {
      icon: <Brain size={40} />,
      title: "Terapia Cognitivo-Comportamental",
      description:
        "Abordagem baseada em evidências que ajuda a identificar e mudar padrões de pensamento e comportamento negativos.",
      benefits: [
        "Tratamento eficaz para ansiedade e depressão",
        "Desenvolvimento de habilidades de enfrentamento",
        "Resultados em curto prazo",
      ],
    },
    {
      icon: <Users size={40} />,
      title: "Terapia de Casal",
      description:
        "Auxílio para casais que desejam melhorar sua comunicação, resolver conflitos e fortalecer seu relacionamento.",
      benefits: ["Melhoria na comunicação", "Resolução de conflitos", "Reconstrução da intimidade e confiança"],
    },
    {
      icon: <Heart size={40} />,
      title: "Aconselhamento Individual",
      description:
        "Suporte personalizado para ajudar você a lidar com desafios pessoais, emocionais e de desenvolvimento.",
      benefits: [
        "Autoconhecimento aprofundado",
        "Desenvolvimento de estratégias de coping",
        "Melhoria na qualidade de vida",
      ],
    },
    {
      icon: <Smile size={40} />,
      title: "Terapia para Autoestima",
      description: "Trabalho focado em desenvolver uma autoimagem positiva e aumentar a confiança pessoal.",
      benefits: ["Aumento da autoconfiança", "Melhoria nas relações interpessoais", "Desenvolvimento de autoaceitação"],
    },
    {
      icon: <Zap size={40} />,
      title: "Gestão de Estresse e Ansiedade",
      description: "Técnicas e estratégias para lidar com o estresse diário e reduzir os sintomas de ansiedade.",
      benefits: ["Redução dos sintomas de ansiedade", "Melhoria na qualidade do sono", "Aumento da produtividade"],
    },
    {
      icon: <Coffee size={40} />,
      title: "Mindfulness e Relaxamento",
      description: "Práticas de atenção plena e técnicas de relaxamento para promover bem-estar e redução do estresse.",
      benefits: ["Redução do estresse", "Aumento da concentração", "Melhoria do bem-estar geral"],
    },
  ]

  return (
    <S.ServicesWrapper>
      <S.ServicesGrid>
        {services.map((service, index) => (
          <S.ServiceCard key={index}>
            <S.ServiceIcon>{service.icon}</S.ServiceIcon>
            <S.ServiceTitle>{service.title}</S.ServiceTitle>
            <S.ServiceDescription>{service.description}</S.ServiceDescription>
            <S.BenefitsList>
              {service.benefits.map((benefit, benefitIndex) => (
                <S.BenefitItem key={benefitIndex}>{benefit}</S.BenefitItem>
              ))}
            </S.BenefitsList>
          </S.ServiceCard>
        ))}
      </S.ServicesGrid>
      <S.CTASection>
        <S.CTATitle>Pronto para dar o primeiro passo?</S.CTATitle>
        <S.CTADescription>
          Agende uma consulta hoje e comece sua jornada para uma vida mais equilibrada e satisfatória.
        </S.CTADescription>
        <S.StyledButton>Agende sua Consulta</S.StyledButton>
      </S.CTASection>
    </S.ServicesWrapper>
  )
}

export default Service;

