import styled from "styled-components"

export const Section = styled.section`
  padding: 6rem 0;
  background-color: ${(props) => props.theme.colors.background};
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  margin-bottom: 4rem;
`

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  max-width: 1000px;
`

export const PricingCard = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

export const PlanName = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1rem;
`

export const Price = styled.div`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 2rem;
`

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  text-align: left;
`

export const Feature = styled.li`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary}dd;
  }
`

