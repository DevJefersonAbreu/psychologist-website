import styled from "styled-components"
import Link from "next/link"

export const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.colors.white};
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Logo = styled(Link)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
`

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: block;
  }
`

export const NavLinks = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.white};
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

export const NavLink = styled(Link)`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`

