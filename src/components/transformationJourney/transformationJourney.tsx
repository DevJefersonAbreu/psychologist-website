"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Lightbulb, Heart, Zap, Star } from "lucide-react"
import * as S from "./styles"

const TransformationJourney: React.FC = () => {
  const steps = [
    { icon: <Lightbulb />, title: "Descoberta", description: "Identificação de padrões e desafios" },
    { icon: <Heart />, title: "Conexão", description: "Desenvolvimento de empatia e compreensão" },
    { icon: <Zap />, title: "Transformação", description: "Implementação de mudanças positivas" },
    { icon: <Star />, title: "Crescimento", description: "Celebração do progresso e evolução contínua" },
  ]

  return (
    <S.JourneyWrapper>
      <S.JourneyContent>
        <S.JourneyTitle>Sua Jornada de Transformação</S.JourneyTitle>
        <S.JourneyDescription>
          Embarque em uma jornada de autodescoberta e crescimento pessoal, guiada por abordagens terapêuticas
          inovadoras.
        </S.JourneyDescription>
        <S.StepsContainer>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <S.StepCard>
                <S.StepIconWrapper>{step.icon}</S.StepIconWrapper>
                <S.StepTitle>{step.title}</S.StepTitle>
                <S.StepDescription>{step.description}</S.StepDescription>
              </S.StepCard>
            </motion.div>
          ))}
        </S.StepsContainer>
        <S.JourneyPath />
      </S.JourneyContent>
    </S.JourneyWrapper>
  )
}

export default TransformationJourney;

