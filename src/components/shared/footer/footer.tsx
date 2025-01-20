"use client"

import type React from "react"
import { Instagram, Linkedin, Mail } from "lucide-react"
import * as S from "./styles"

const Footer: React.FC = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <S.FooterInfo>
          <p>&copy; 2023 Dra. Ana Silva. Todos os direitos reservados.</p>
          <p>CRP: 06/XXXXX</p>
        </S.FooterInfo>
        <S.SocialLinks>
          <S.SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </S.SocialLink>
          <S.SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </S.SocialLink>
          <S.SocialLink href="mailto:contato@draanasilva.com">
            <Mail />
          </S.SocialLink>
        </S.SocialLinks>
      </S.FooterContent>
    </S.FooterWrapper>
  )
}

export default Footer

