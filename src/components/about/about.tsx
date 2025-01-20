"use client"

import type React from "react"
import Image from "next/image"
import {
  Award,
  BookOpen,
  Users,
  Star,
  Clock,
  Heart,
  Brain,
  Smile,
  UsersIcon,
  GraduationCap,
  BookIcon,
} from "lucide-react"
import * as S from "./styles"

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Award size={16} />,
      title: "10+ Anos de Experiência",
      description: "Atendendo pacientes com dedicação e empatia",
    },
    {
      icon: <BookOpen size={16} />,
      title: "Formação Especializada",
      description: "Mestrado em Psicologia Clínica pela USP",
    },
    {
      icon: <Users size={16} />,
      title: "1000+ Pacientes Atendidos",
      description: "Histórico comprovado de sucesso terapêutico",
    },
  ]

  const specialties = [
    { icon: <Star size={16} />, title: "Terapia Cognitivo-Comportamental" },
    { icon: <Clock size={16} />, title: "Gestão de Estresse e Ansiedade" },
    { icon: <Heart size={16} />, title: "Terapia de Casal" },
  ]

  const approaches = [
    {
      icon: <Brain size={20} />,
      title: "Terapia Cognitivo-Comportamental",
      description: "Focada em identificar e modificar padrões de pensamento e comportamento negativos.",
    },
    {
      icon: <Smile size={20} />,
      title: "Mindfulness",
      description: "Técnicas de atenção plena para reduzir o estresse e melhorar o bem-estar emocional.",
    },
    {
      icon: <UsersIcon size={20} />,
      title: "Terapia Sistêmica",
      description: "Abordagem que considera o indivíduo no contexto de seus relacionamentos e sistemas sociais.",
    },
  ]

  const education = [
    "Doutorado em Psicologia Clínica - Universidade de São Paulo (USP)",
    "Mestrado em Psicologia da Saúde - Universidade Federal de São Paulo (UNIFESP)",
    "Graduação em Psicologia - Pontifícia Universidade Católica de São Paulo (PUC-SP)",
    "Especialização em Terapia Cognitivo-Comportamental - Instituto de Psiquiatria (IPq-HCFMUSP)",
  ]

  const publications = [
    {
      title: "Eficácia da Terapia Cognitivo-Comportamental no Tratamento da Ansiedade",
      details: "Revista Brasileira de Psicoterapia, 2022",
    },
    {
      title: "Mindfulness como Ferramenta Complementar no Tratamento da Depressão",
      details: "Journal of Clinical Psychology, 2021",
    },
    {
      title: "A Influência dos Relacionamentos na Saúde Mental: Uma Perspectiva Sistêmica",
      details: "Psicologia: Teoria e Prática, 2020",
    },
  ]

  return (
    <S.AboutWrapper>
      <S.AboutContent>
        <S.MainGrid>
          <S.ImageSection>
            <S.ImageWrapper>
              <Image
                src="/assets/imagesHero/client-3.png"
                alt="Dra. Ana Silva"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </S.ImageWrapper>
          </S.ImageSection>
          <S.TextSection>
            <S.AboutTitle>Dra. Ana Silva</S.AboutTitle>
            <S.Subtitle>Psicóloga Clínica | CRP: 06/XXXXX</S.Subtitle>
            <S.AboutText>
              Com mais de uma década de experiência em psicologia clínica, a Dra. Ana Silva tem se dedicado a ajudar
              pessoas a superarem desafios emocionais e alcançarem uma vida mais plena e equilibrada.
            </S.AboutText>
            <S.AboutText>
              Formada pela Universidade de São Paulo (USP), com mestrado em Psicologia da Saúde, a Dra. Ana Silva é
              especialista em Terapia Cognitivo-Comportamental e possui ampla experiência no tratamento de ansiedade,
              depressão e questões relacionadas ao estresse.
            </S.AboutText>
          </S.TextSection>
        </S.MainGrid>

        <S.InfoGrid>
          <S.InfoSection>
            <S.SectionTitle>
              <S.SectionTitleIcon>
                <Star size={18} />
              </S.SectionTitleIcon>
              Especializações
            </S.SectionTitle>
            <S.SpecialtiesGrid>
              {specialties.map((specialty, index) => (
                <S.SpecialtyItem key={index}>
                  <S.SpecialtyIcon>{specialty.icon}</S.SpecialtyIcon>
                  <S.SpecialtyTitle>{specialty.title}</S.SpecialtyTitle>
                </S.SpecialtyItem>
              ))}
            </S.SpecialtiesGrid>
          </S.InfoSection>

          <S.InfoSection>
            <S.SectionTitle>
              <S.SectionTitleIcon>
                <Award size={18} />
              </S.SectionTitleIcon>
              Conquistas e Reconhecimentos
            </S.SectionTitle>
            <S.Achievements>
              {achievements.map((achievement, index) => (
                <S.AchievementItem key={index}>
                  <S.AchievementIcon>{achievement.icon}</S.AchievementIcon>
                  <S.AchievementContent>
                    <S.AchievementTitle>{achievement.title}</S.AchievementTitle>
                    <S.AchievementDescription>{achievement.description}</S.AchievementDescription>
                  </S.AchievementContent>
                </S.AchievementItem>
              ))}
            </S.Achievements>
          </S.InfoSection>
        </S.InfoGrid>

        <S.SectionGrid>
          <S.SectionCard>
            <S.SectionTitle>
              <S.SectionTitleIcon>
                <Brain size={18} />
              </S.SectionTitleIcon>
              Abordagem Terapêutica
            </S.SectionTitle>
            <S.SectionContent>
              <S.List>
                {approaches.map((approach, index) => (
                  <S.ListItem key={index}>
                    <strong>{approach.title}:</strong> {approach.description}
                  </S.ListItem>
                ))}
              </S.List>
            </S.SectionContent>
          </S.SectionCard>

          <S.SectionCard>
            <S.SectionTitle>
              <S.SectionTitleIcon>
                <GraduationCap size={18} />
              </S.SectionTitleIcon>
              Formação Acadêmica
            </S.SectionTitle>
            <S.SectionContent>
              <S.List>
                {education.map((item, index) => (
                  <S.ListItem key={index}>{item}</S.ListItem>
                ))}
              </S.List>
            </S.SectionContent>
          </S.SectionCard>

          <S.SectionCard>
            <S.SectionTitle>
              <S.SectionTitleIcon>
                <BookIcon size={18} />
              </S.SectionTitleIcon>
              Publicações
            </S.SectionTitle>
            <S.SectionContent>
              {publications.map((pub, index) => (
                <S.Publication key={index}>
                  <S.PublicationTitle>{pub.title}</S.PublicationTitle>
                  <S.PublicationDetails>{pub.details}</S.PublicationDetails>
                </S.Publication>
              ))}
            </S.SectionContent>
          </S.SectionCard>
        </S.SectionGrid>

        <S.CTASection>
          <S.CTAText>Pronto para começar sua jornada de transformação?</S.CTAText>
          <S.StyledButton>Agende sua Consulta</S.StyledButton>
        </S.CTASection>
      </S.AboutContent>
    </S.AboutWrapper>
  )
}

export default About;

