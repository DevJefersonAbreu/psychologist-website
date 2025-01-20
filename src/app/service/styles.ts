import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ServicosPageWrapper = styled.div`
  padding: 8rem 0;
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`;

export const PageTitle = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 4rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: 1rem;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

export const PageSubtitle = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.4rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: 6rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${fadeIn} 0.8s ease-out 0.2s forwards;
  opacity: 0;
`;

