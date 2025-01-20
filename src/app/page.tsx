import type React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Services from "../components/service/service"
import TransformationJourney from "../components/transformationJourney/transformationJourney"
import About from "../components/about/about"
import Pricing from "../components/about/about"
import Testimonials from "../components/testimonials/testimonials"
import Contact from "../components/contact/contact"

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <TransformationJourney />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
    </Layout>
  )
}

export default Home

