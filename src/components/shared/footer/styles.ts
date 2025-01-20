import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 2rem 0;
`

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

export const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`

