"use client"

import type React from "react"
import { useState } from "react"
import Layout from "../../components/layout/layout"
import Blog from "../../components/blog/blog"
import * as S from "./styeles"

const categories = ["Todos", "Ansiedade", "Bem-estar", "Mindfulness", "Relacionamentos", "Autoconhecimento"]

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos")

  return (
    <Layout>
      <S.BlogPageWrapper>
        <S.BlogHeader>
          <S.BlogTitle>Blog da Dra. Ana Silva</S.BlogTitle>
          <S.BlogSubtitle>Insights e reflexões sobre saúde mental e bem-estar</S.BlogSubtitle>
        </S.BlogHeader>
        <S.BlogControls>
          <S.CategoryFilter>
            {categories.map((category) => (
              <S.CategoryButton
                key={category}
                active={category === activeCategory}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </S.CategoryButton>
            ))}
          </S.CategoryFilter>
        </S.BlogControls>
        <Blog activeCategory={activeCategory} />
      </S.BlogPageWrapper>
    </Layout>
  )
}

export default BlogPage;

