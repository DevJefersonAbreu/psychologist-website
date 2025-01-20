import styled, { keyframes } from "styled-components"

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`

export const JourneyWrapper = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.background} 0%, ${(props) => props.theme.colors.white} 100%);
  position: relative;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 6rem 2rem;
  }
`

export const JourneyContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const JourneyTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`

export const JourneyDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.2rem;
    margin-bottom: 4rem;
  }
`

export const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  position: relative;
  z-index: 2;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const StepCard = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 2rem;
  }
`

export const StepIconWrapper = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
  animation: ${float} 3s ease-in-out infinite;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`

export const StepTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`

export const StepDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1rem;
  }
`

export const JourneyPath = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});
    transform: translateY(-50%);
    z-index: 1;
    opacity: 0.3;

    &::before, &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.primary};
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
  }
`

