import * as React from "react"
import Layout from "../components/layout/Layout"
import AboutSection from "../components/sections/AboutSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import ProjectScroller from "../components/sections/InfiniteHorizontalScroller"

export default function IndexPage() {
  return (
   <Layout>
    <AboutSection/>
    <ProjectsSection/>
    <ProjectScroller/>
   </Layout>
  )
}