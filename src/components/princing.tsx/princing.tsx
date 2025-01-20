"use client"

import type React from "react"
import { Check } from "lucide-react"
import * as S from "./styles"

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Sessão Individual",
      price: "R$ 150",
      features: ["Sessão de 50 minutos", "Atendimento personalizado", "Horários flexíveis", "Online ou Presencial"],
    },
    {
      name: "Pacote Mensal",
      price: "R$ 500",
      features: ["4 sessões por mês", "Economia de R$ 100", "Horário fixo", "Suporte por WhatsApp"],
    },
    {
      name: "Terapia de Casal",
      price: "R$ 200",
      features: ["Sessão de 60 minutos", "Atendimento para casais", "Abordagem sistêmica", "Exercícios práticos"],
    },
  ]

  return (
    <S.Section>
      <S.Container>
        <S.Title>Investimento</S.Title>
        <S.PricingGrid>
          {plans.map((plan, index) => (
            <S.PricingCard key={index}>
              <S.PlanName>{plan.name}</S.PlanName>
              <S.Price>{plan.price}</S.Price>
              <S.FeaturesList>
                {plan.features.map((feature, featureIndex) => (
                  <S.Feature key={featureIndex}>
                    <Check size={20} className="text-primary" />
                    {feature}
                  </S.Feature>
                ))}
              </S.FeaturesList>
              <S.StyledButton>Agendar Agora</S.StyledButton>
            </S.PricingCard>
          ))}
        </S.PricingGrid>
      </S.Container>
    </S.Section>
  )
}

export default Pricing;

