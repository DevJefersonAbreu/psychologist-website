"use client"

import React from 'react';
import * as S from './styles';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: 'As sessões com a Dra. Ana Silva têm sido transformadoras. Sua abordagem acolhedora e profissional me ajudou a superar desafios que eu achava impossíveis.',
      author: 'Maria S.'
    },
    {
      text: 'Graças à terapia com a Dra. Ana, consegui desenvolver ferramentas para lidar melhor com minha ansiedade. Recomendo a todos que buscam crescimento pessoal.',
      author: 'João P.'
    }
  ];

  return (
    <S.TestimonialsWrapper>
      <S.TestimonialsContent>
        <S.Title>O que nossos pacientes dizem</S.Title>
        <S.TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <S.TestimonialCard key={index}>
              <S.TestimonialText>{testimonial.text}</S.TestimonialText>
              <S.TestimonialAuthor>{testimonial.author}</S.TestimonialAuthor>
            </S.TestimonialCard>
          ))}
        </S.TestimonialsGrid>
      </S.TestimonialsContent>
    </S.TestimonialsWrapper>
  );
};

export default Testimonials;

