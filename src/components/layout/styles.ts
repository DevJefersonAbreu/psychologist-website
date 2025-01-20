import styled from "styled-components"

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  flex: 1;
  padding: 2rem 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 4rem 2rem;
  }
`

