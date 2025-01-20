"use client"
import type React from "react"
import { ThemeProvider } from "styled-components"
import { Phone, Mail, MapPin, Clock, Calendar, CreditCard, MessageSquare } from "lucide-react"
import {
  ContactWrapper,
  ContactHeader,
  ContactTitle,
  ContactSubtitle,
  ContactInfoGrid,
  ContactInfoItem,
  ContactInfoIcon,
  ContactInfoTitle,
  ContactInfoContent,
  SectionTitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  MapWrapper,
  SectionContainer,
} from "./styles"

// Theme object
const theme = {
  colors: {
    primary: "#007bff",
    text: "#333333",
  },
  fonts: {
    heading: "'Arial', sans-serif",
    body: "'Helvetica', sans-serif",
  },
}

const Contact: React.FC = () => {
  const contactInfo = [
    { icon: <Phone />, title: "Telefone", content: "(11) 99999-9999" },
    { icon: <Mail />, title: "E-mail", content: "contato@draanasilva.com" },
    { icon: <MapPin />, title: "Endereço", content: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100" },
    { icon: <Clock />, title: "Horário de Atendimento", content: "Segunda a Sexta: 8h às 20h" },
  ]

  const services = [
    {
      icon: <MessageSquare />,
      title: "Terapia Individual",
      description: "Sessões personalizadas para suas necessidades específicas.",
    },
    { icon: <Calendar />, title: "Terapia de Casal", description: "Melhore seu relacionamento com sessões guiadas." },
    {
      icon: <CreditCard />,
      title: "Planos Flexíveis",
      description: "Opções de pagamento que se adaptam ao seu orçamento.",
    },
  ]

  return (
    <ThemeProvider theme={theme}>
      <ContactWrapper>
        <ContactHeader>
          <ContactTitle>Entre em Contato</ContactTitle>
          <ContactSubtitle>
            Estamos aqui para ajudar você a dar o primeiro passo em direção ao bem-estar emocional
          </ContactSubtitle>
        </ContactHeader>

        <SectionContainer>
          <SectionTitle>Informações de Contato</SectionTitle>
          <ContactInfoGrid>
            {contactInfo.map((info, index) => (
              <ContactInfoItem key={index}>
                <ContactInfoIcon>{info.icon}</ContactInfoIcon>
                <div>
                  <ContactInfoTitle>{info.title}</ContactInfoTitle>
                  <ContactInfoContent>{info.content}</ContactInfoContent>
                </div>
              </ContactInfoItem>
            ))}
          </ContactInfoGrid>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle>Nossos Serviços</SectionTitle>
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle>Localização</SectionTitle>
          <MapWrapper>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0975636357687!2d-46.65499508502192!3d-23.56150478468041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1sen!2sbr!4v1625097721377!5m2!1sen!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Localização do Consultório"
            ></iframe>
          </MapWrapper>
        </SectionContainer>
      </ContactWrapper>
    </ThemeProvider>
  )
}

export default Contact

