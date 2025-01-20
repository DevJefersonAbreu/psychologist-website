import styled from "styled-components"

export const BlogPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`

export const BlogHeader = styled.header`
  text-align: center;
  margin-bottom: 4rem;
`

export const BlogTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 3.5rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});
  background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export const BlogSubtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
`

export const BlogControls = styled.div`
  margin-bottom: 2rem;
`

export const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`

export const CategoryButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? props.theme.colors.primary : "transparent")};
  color: ${(props) => (props.active ? props.theme.colors.white : props.theme.colors.primary)};
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.primary)}15;
  }
`

