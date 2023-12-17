import * as React from "react"
import Layout from "../components/layout/Layout"
import HeroSection from "../components/sections/HeroSection"
import AboutSection from "../components/sections/AboutSection"
import ProjectsSection from "../components/sections/ProjectsSection"

export default function IndexPage() {
  return (
   <Layout>
    <HeroSection/>
    <AboutSection/>
    <ProjectsSection/>
   </Layout>
  )
}