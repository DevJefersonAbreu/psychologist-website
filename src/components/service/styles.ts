import styled, { keyframes } from "styled-components"


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 4rem 2rem;
  }
`

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.white} 0%, ${(props) => props.theme.colors.background} 100%);
  border: 1px solid ${(props) => `${props.theme.colors.primary}20`};
  animation: ${fadeIn} 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  &:nth-child(even) {
    animation-delay: 0.2s;
  }
`

export const ServiceIcon = styled.div`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  background-color: ${(props) => `${props.theme.colors.primary}15`};
  padding: 1.5rem;
  border-radius: 50%;
  align-self: center;
  transition: transform 0.3s ease, background-color 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1);
    background-color: ${(props) => `${props.theme.colors.primary}25`};
  }
`

export const ServiceTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export const ServiceDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  text-align: center;
`

export const BenefitsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: auto;
`

export const BenefitItem = styled.li`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;

  &::before {
    content: '✓';
    color: ${(props) => props.theme.colors.primary};
    margin-right: 0.75rem;
    font-weight: bold;
  }
`

export const CTASection = styled.div`
  background: linear-gradient(135deg, ${(props) => `${props.theme.colors.primary}15`} 0%, ${(props) => `${props.theme.colors.secondary}15`} 100%);
  padding: 3rem 2rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 6rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 5rem 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, ${(props) => `${props.theme.colors.primary}10`} 0%, transparent 60%);
    opacity: 0.6;
    animation: pulse 15s linear infinite;
  }

  @keyframes pulse {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-50%, -50%);
    }
  }
`

export const CTATitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 3rem;
  }
`

export const CTADescription = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  position: relative;
  z-index: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.3rem;
  }
`

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary}dd;
  }
`

