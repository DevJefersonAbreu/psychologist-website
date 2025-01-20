"use client"

import type React from "react"
import Layout from "../../components/layout/layout"
import Contact from "../../components/contact/contact"
import * as S from "./styles"

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <S.ContactPageWrapper>
        <Contact />
      </S.ContactPageWrapper>
    </Layout>
  )
}

export default ContactPage;



