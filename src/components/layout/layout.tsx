"use client"

import type React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "@/styles/theme"
import Header from "../shared/header/header"
import Footer from "../shared/footer/footer"
import * as S from "./styles"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <S.Main>
        <Header />
        <S.Content>{children}</S.Content>
        <Footer />
      </S.Main>
    </ThemeProvider>
  )
}

export default Layout;

