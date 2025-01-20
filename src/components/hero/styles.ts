import styled from "styled-components"


export const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, 
    ${(props) => props.theme.colors.background} 0%,
    rgba(255, 229, 217, 0.9) 100%
  );
  overflow: hidden;
  padding: 2rem 0;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1rem 0;
  }
`

export const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    padding: 4rem 2rem;
    gap: 4rem;
  }
`

export const TextContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 700px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    text-align: left;
  }
`

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
`

export const Subtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 2.5rem;
  line-height: 1.6;
  opacity: 0.9;
`

export const ButtonWrapper = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    justify-content: flex-start;
  }
`

export const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -1.5rem;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${(props) => props.theme.colors.primary}33,
      transparent
    );
  }
`

export const HighlightItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`

export const HighlightIcon = styled.div`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
  display: inline-flex;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primary}15;
  border-radius: 50%;
  transition: transform 0.3s ease;

  ${HighlightItem}:hover & {
    transform: scale(1.1);
  }
`

export const HighlightText = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.05) 100%
    );
    z-index: 1;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 500px;
    max-width: 500px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 600px;
  }
`

export const FloatingShape = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.colors.primary}15,
    ${(props) => props.theme.colors.secondary}15
  );
  filter: blur(40px);
  z-index: 1;

  &.top-right {
    top: -100px;
    right: -100px;
  }

  &.bottom-left {
    bottom: -100px;
    left: -100px;
    width: 200px;
    height: 200px;
  }
`

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(props) => props.theme.colors.primary}dd;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`

