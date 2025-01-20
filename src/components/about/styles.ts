import styled, { keyframes, css } from "styled-components"

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const responsiveStyles = css`
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 90%;
  }
`

export const AboutWrapper = styled.section`
  padding: 1.5rem 0;
  background-color: ${(props) => props.theme.colors.background};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 3rem 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 5rem 0;
  }
`

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0 2rem;
  }
`

export const MainGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    gap: 3.5rem;
    margin-bottom: 3.5rem;
  }
`

export const ImageSection = styled.div`
  animation: ${fadeIn} 1s ease-out;
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    height: 300px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 350px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 400px;
  }
`

export const TextSection = styled.div`
  animation: ${fadeIn} 1s ease-out 0.3s;
  animation-fill-mode: both;
`

export const AboutTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 2.4rem;
  }

  ${responsiveStyles}
`

export const Subtitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.75rem;
  font-weight: 500;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.1rem;
  }

  ${responsiveStyles}
`

export const AboutText = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.6;
  margin-bottom: 0.75rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  ${responsiveStyles}
`

export const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    gap: 2.5rem;
    margin-bottom: 3.5rem;
  }
`

export const InfoSection = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 15px;
  padding: 1.25rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1.5rem;
  }
`

export const SectionTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.3rem;
  }

  ${responsiveStyles}
`

export const SectionTitleIcon = styled.span`
  color: ${(props) => props.theme.colors.primary};
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary}15;
  padding: 0.4rem;
  border-radius: 50%;
`

export const SpecialtiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`

export const SpecialtyItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }
`

export const SpecialtyIcon = styled.div`
  color: ${(props) => props.theme.colors.primary};
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary}15;
  padding: 0.4rem;
  border-radius: 50%;
`

export const SpecialtyTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 0.95rem;
  }

  ${responsiveStyles}
`

export const Achievements = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`

export const AchievementItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0.75rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }
`

export const AchievementIcon = styled.div`
  color: ${(props) => props.theme.colors.primary};
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary}15;
  padding: 0.4rem;
  border-radius: 50%;
`

export const AchievementContent = styled.div`
  flex: 1;
`

export const AchievementTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.25rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 0.95rem;
  }

  ${responsiveStyles}
`

export const AchievementDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.4;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 0.85rem;
  }

  ${responsiveStyles}
`

export const ApproachSection = styled.div`
  margin-top: 1.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 2.5rem;
  }
`

export const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ApproachItem = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  padding: 1.25rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

export const ApproachIcon = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
`

export const ApproachTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;

  ${responsiveStyles}
`

export const ApproachDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.5;

  ${responsiveStyles}
`

export const CTASection = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary}15;
  padding: 1.5rem 1rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 2.5rem 2rem;
  }
`

export const CTAText = styled.p`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1.25rem;
  line-height: 1.4;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.3rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 1.5rem;
  }

  ${responsiveStyles}
`

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary}dd;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1rem;
    padding: 0.875rem 1.5rem;
  }

  ${responsiveStyles}
`

export const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const SectionCard = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  padding: 1.25rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

export const SectionContent = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.6;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1rem;
  }

  ${responsiveStyles}
`

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;

  &:before {
    content: "•";
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 0.5em;
  }
`

export const Publication = styled.div`
  margin-bottom: 1rem;
`

export const PublicationTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.25rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.1rem;
  }

  ${responsiveStyles}
`

export const PublicationDetails = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.textLight};
  font-style: italic;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 0.9rem;
  }

  ${responsiveStyles}
`

