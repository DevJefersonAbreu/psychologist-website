import styled from 'styled-components';


export const TestimonialsWrapper = styled.section`
  padding: 4rem 0;
`;

export const TestimonialsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: 2rem;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const TestimonialCard = styled.div`
  padding: 2rem;
`;

export const TestimonialText = styled.p`
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.text};
  font-style: italic;
  margin-bottom: 1rem;
`;

export const TestimonialAuthor = styled.p`
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`;

