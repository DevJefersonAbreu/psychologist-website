import styled from "styled-components"

export const SobrePageWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: calc(100vh - 80px); 
`

export const SobrePageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const AdditionalInfoSection = styled.section`
  margin-top: 6rem;
  margin-bottom: 6rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 2rem;
`

export const TabsList = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary}30;
  margin-bottom: 2rem;
`

export const TabsTrigger = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: 1rem 2rem;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1rem;
  color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 2px solid ${(props) => (props.active ? props.theme.colors.primary : "transparent")};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const TabsContent = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "block" : "none")};
`

export const TabContent = styled.div`
  padding: 2rem;

  h3 {
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 1.5rem;
  }

  p, li {
    font-family: ${(props) => props.theme.fonts.body};
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.text};
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 2rem;
  }
`

