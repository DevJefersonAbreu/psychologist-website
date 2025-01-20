"use client"

import type React from "react"
import Image from "next/image"
import { CalendarIcon, Clock, User, ArrowRight, Mail } from "lucide-react"
import * as S from "./styles"

const blogPosts = [
  {
    id: 1,
    title: "Como lidar com a ansiedade no dia a dia",
    excerpt:
      "Descubra técnicas práticas para gerenciar a ansiedade e melhorar sua qualidade de vida. Aprenda a identificar gatilhos e desenvolver estratégias de enfrentamento eficazes.",
    author: "Dra. Ana Silva",
    date: "15 de Maio, 2023",
    readTime: "5 min",
    category: "Ansiedade",
    image: "/assets/imagesBlog/blog.png",
    featured: true,
  },
  {
    id: 2,
    title: "A importância do sono para a saúde mental",
    excerpt:
      "Entenda como uma boa noite de sono pode impactar positivamente sua saúde mental e emocional. Descubra dicas para melhorar a qualidade do seu sono e estabelecer uma rotina saudável.",
    author: "Dra. Ana Silva",
    date: "2 de Junho, 2023",
    readTime: "7 min",
    category: "Bem-estar",
    image: "/assets/imagesBlog/blog.png",
  },
  {
    id: 3,
    title: "Mindfulness: prática para o equilíbrio emocional",
    excerpt:
      "Aprenda como a prática de mindfulness pode ajudar a reduzir o estresse e promover o equilíbrio emocional. Conheça exercícios simples que você pode incorporar à sua rotina diária.",
    author: "Dra. Ana Silva",
    date: "20 de Junho, 2023",
    readTime: "6 min",
    category: "Mindfulness",
    image: "/assets/imagesBlog/blog.png",
  },
  {
    id: 4,
    title: "Relacionamentos saudáveis: a base para o bem-estar",
    excerpt:
      "Explore como cultivar relacionamentos saudáveis pode contribuir para sua saúde mental e emocional. Aprenda estratégias para melhorar a comunicação e fortalecer laços afetivos.",
    author: "Dra. Ana Silva",
    date: "5 de Julho, 2023",
    readTime: "8 min",
    category: "Relacionamentos",
    image: "/assets/imagesBlog/blog.png",
  },
  {
    id: 5,
    title: "Autocompaixão: o caminho para a autoaceitação",
    excerpt:
      "Descubra como praticar a autocompaixão pode transformar sua relação consigo mesmo e impactar positivamente sua saúde mental. Aprenda exercícios práticos para cultivar mais gentileza interior.",
    author: "Dra. Ana Silva",
    date: "18 de Julho, 2023",
    readTime: "6 min",
    category: "Autoconhecimento",
    image: "/assets/imagesBlog/blog.png",
  },
]

interface BlogProps {
  activeCategory: string
}

const Blog: React.FC<BlogProps> = ({ activeCategory }) => {
  const filteredPosts =
    activeCategory === "Todos" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  const featuredPost = filteredPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <S.BlogWrapper>
      {featuredPost && (
        <S.FeaturedPostWrapper>
          <S.FeaturedPostContent>
            <S.FeaturedPostImage>
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </S.FeaturedPostImage>
            <S.FeaturedPostText>
              <S.CardCategory>{featuredPost.category}</S.CardCategory>
              <S.CardTitle>{featuredPost.title}</S.CardTitle>
              <S.CardExcerpt>{featuredPost.excerpt}</S.CardExcerpt>
              <S.PostMeta>
                <S.MetaItem>
                  <User size={16} />
                  <span>{featuredPost.author}</span>
                </S.MetaItem>
                <S.MetaItem>
                  <CalendarIcon size={16} />
                  <span>{featuredPost.date}</span>
                </S.MetaItem>
                <S.MetaItem>
                  <Clock size={16} />
                  <span>{featuredPost.readTime}</span>
                </S.MetaItem>
              </S.PostMeta>
              <S.StyledButton>
                Ler artigo completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </S.StyledButton>
            </S.FeaturedPostText>
          </S.FeaturedPostContent>
        </S.FeaturedPostWrapper>
      )}

      <S.BlogGrid>
        {regularPosts.map((post) => (
          <S.BlogCard key={post.id}>
            <S.CardImageWrapper>
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </S.CardImageWrapper>
            <S.CardHeader>
              <S.CardCategory>{post.category}</S.CardCategory>
              <S.CardTitle>{post.title}</S.CardTitle>
            </S.CardHeader>
            <S.CardContent>
              <S.CardExcerpt>{post.excerpt}</S.CardExcerpt>
            </S.CardContent>
            <S.CardFooter>
              <S.PostMeta>
                <S.MetaItem>
                  <User size={16} />
                  <span>{post.author}</span>
                </S.MetaItem>
                <S.MetaItem>
                  <CalendarIcon size={16} />
                  <span>{post.date}</span>
                </S.MetaItem>
                <S.MetaItem>
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </S.MetaItem>
              </S.PostMeta>
              <S.StyledButton variant="outline">
                Ler mais
                <ArrowRight className="ml-2 h-4 w-4" />
              </S.StyledButton>
            </S.CardFooter>
          </S.BlogCard>
        ))}
      </S.BlogGrid>

      <S.NewsletterSection>
        <S.NewsletterCard>
          <S.NewsletterCardHeader>
            <S.NewsletterCardTitle>Inscreva-se na nossa newsletter</S.NewsletterCardTitle>
          </S.NewsletterCardHeader>
          <S.NewsletterCardContent>
            <p>Receba as últimas novidades e artigos sobre saúde mental diretamente na sua caixa de entrada.</p>
            <S.NewsletterForm>
              <S.NewsletterInput type="email" placeholder="Seu e-mail" />
              <S.StyledButton>
                <Mail className="mr-2 h-4 w-4" />
                Inscrever-se
              </S.StyledButton>
            </S.NewsletterForm>
          </S.NewsletterCardContent>
        </S.NewsletterCard>
      </S.NewsletterSection>
    </S.BlogWrapper>
  )
}

export default Blog;

