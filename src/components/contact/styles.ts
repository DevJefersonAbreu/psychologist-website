import styled from "styled-components"

export const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContactHeader = styled.header`
  text-align: center;
  margin-bottom: 4rem;
`

export const ContactTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
`

export const ContactSubtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
  max-width: 600px;
  margin: 0 auto;
`

export const ContactInfoGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 100%;
  justify-content: center;
`

export const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primary}10;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

export const ContactInfoIcon = styled.div`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.primary}15;
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContactInfoTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.25rem;
`

export const ContactInfoContent = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
`

export const SectionTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  justify-content: center;
`

export const ServiceCard = styled.div`
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
  background-color: ${(props) => props.theme.colors.primary}10;
  border-radius: 8px;

  &:hover {
    transform: translateY(-5px);
  }
`

export const ServiceIcon = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

export const ServiceTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;
`

export const ServiceDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
`

export const MapWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`

