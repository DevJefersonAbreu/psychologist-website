"use client"

import type React from "react"
import Image from "next/image"
import { Clock, Heart, Shield } from "lucide-react"
import * as S from "./styles"

const Hero: React.FC = () => {
  const highlights = [
    {
      icon: <Clock size={32} />,
      text: "Horários flexíveis para sua conveniência",
    },
    {
      icon: <Heart size={32} />,
      text: "Ambiente acolhedor e seguro",
    },
    {
      icon: <Shield size={32} />,
      text: "Sigilo profissional garantido",
    },
  ]

  return (
    <S.HeroWrapper>
      <S.FloatingShape className="top-right" />
      <S.FloatingShape className="bottom-left" />

      <S.HeroContent>
        <S.TextContent>
          <S.Title>Transforme sua vida através da psicoterapia</S.Title>
          <S.Subtitle>
            Ajudo você a encontrar clareza e equilíbrio emocional para uma vida mais plena e significativa. Comece sua
            jornada de autoconhecimento hoje.
          </S.Subtitle>

          <S.ButtonWrapper>
            <S.StyledButton>Agende sua Consulta</S.StyledButton>
          </S.ButtonWrapper>

          <S.HighlightsGrid>
            {highlights.map((highlight, index) => (
              <S.HighlightItem key={index}>
                <S.HighlightIcon>{highlight.icon}</S.HighlightIcon>
                <S.HighlightText>{highlight.text}</S.HighlightText>
              </S.HighlightItem>
            ))}
          </S.HighlightsGrid>
        </S.TextContent>

        <S.ImageWrapper>
          <Image
            src="/assets/imagesHero/client-3.png"
            alt="Dra. Ana Silva - Psicóloga"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
        </S.ImageWrapper>
      </S.HeroContent>
    </S.HeroWrapper>
  )
}

export default Hero;

