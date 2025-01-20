"use client"

import type React from "react"
import { useState } from "react"
import Layout from "../../components/layout/layout"
import About from "../../components/about/about"
import * as S from "./styles"

const SobrePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("approach")

  return (
    <Layout>
      <S.SobrePageWrapper>
        <S.SobrePageContent>
          <About />

          <S.AdditionalInfoSection>
            <S.TabsList>
              <S.TabsTrigger active={activeTab === "approach"} onClick={() => setActiveTab("approach")}>
                Abordagem Terapêutica
              </S.TabsTrigger>
              <S.TabsTrigger active={activeTab === "education"} onClick={() => setActiveTab("education")}>
                Formação Acadêmica
              </S.TabsTrigger>
              <S.TabsTrigger active={activeTab === "publications"} onClick={() => setActiveTab("publications")}>
                Publicações
              </S.TabsTrigger>
            </S.TabsList>
            <S.TabsContent active={activeTab === "approach"}>
              <S.TabContent>
                <h3>Abordagem Terapêutica</h3>
                <p>
                  A Dra. Ana Silva utiliza principalmente a Terapia Cognitivo-Comportamental (TCC), uma abordagem
                  baseada em evidências que se concentra na identificação e mudança de padrões de pensamento e
                  comportamento negativos. Ela também incorpora elementos de Mindfulness e Terapia de Aceitação e
                  Compromisso (ACT) quando apropriado para cada paciente.
                </p>
                <p>
                  Sua filosofia de tratamento é centrada no cliente, focando na colaboração ativa entre terapeuta e
                  paciente para alcançar objetivos terapêuticos específicos.
                </p>
              </S.TabContent>
            </S.TabsContent>
            <S.TabsContent active={activeTab === "education"}>
              <S.TabContent>
                <h3>Formação Acadêmica</h3>
                <ul>
                  <li>Doutorado em Psicologia Clínica - Universidade de São Paulo (USP), 2015</li>
                  <li>Mestrado em Psicologia da Saúde - Universidade de São Paulo (USP), 2010</li>
                  <li>Graduação em Psicologia - Universidade Estadual de Campinas (UNICAMP), 2007</li>
                  <li>
                    Especialização em Terapia Cognitivo-Comportamental - Instituto de Psiquiatria (IPq-HCFMUSP), 2009
                  </li>
                </ul>
              </S.TabContent>
            </S.TabsContent>
            <S.TabsContent active={activeTab === "publications"}>
              <S.TabContent>
                <h3>Publicações e Pesquisas</h3>
                <ul>
                  <li>
                   Eficácia da TCC no tratamento de transtornos de ansiedade: uma meta-análise - Revista Brasileira
                    de Psiquiatria, 2018
                  </li>
                  <li>
                    Mindfulness como ferramenta complementar na psicoterapia: um estudo de caso - Psicologia: Teoria e
                    Prática, 2020
                  </li>
                  <li>
                    O impacto da pandemia na saúde mental: estratégias de enfrentamento - Capítulo de livro em
                    Desafios da Psicologia no Século XXI, Ed. Atlas, 2021
                  </li>
                </ul>
              </S.TabContent>
            </S.TabsContent>
          </S.AdditionalInfoSection>
        </S.SobrePageContent>
      </S.SobrePageWrapper>
    </Layout>
  )
}

export default SobrePage;

