"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import * as S from "./styles"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <S.HeaderWrapper>
      <S.Nav>
        <S.Logo href="/">Dra. Ana Silva</S.Logo>
        <S.MenuToggle onClick={toggleMenu}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</S.MenuToggle>
        <S.NavLinks $isOpen={isMenuOpen}>
          <li>
            <S.NavLink href="/">Início</S.NavLink>
          </li>
          <li>
            <S.NavLink href="/about">Sobre</S.NavLink>
          </li>
          <li>
            <S.NavLink href="/service">Serviços</S.NavLink>
          </li>
          <li>
            <S.NavLink href="/blog">Blog</S.NavLink>
          </li>
          <li>
            <S.NavLink href="/contact">Contato</S.NavLink>
          </li>
        </S.NavLinks>
      </S.Nav>
    </S.HeaderWrapper>
  )
}

export default Header;

