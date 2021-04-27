import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Landing from "../components/landing"
import "../components/scss/_partials/landing.scss"
// import "../components/scss/_partials/landing-large.scss"
import "../components/scss/_partials/animations.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Header/>
    <section className="landing-work wrap-1 sf-1">
      <div className="landing-fade-in">
        <h2 className="vis-hide">Patrik Lau</h2>
        <h1 className="highlight">I'm Pat!</h1>
        <p className="display-text secondary-color">
          I'm a UX/UI Designer in Vancouver, BC.
        </p>
        <p className="display-text secondary-color">
          I like pushing the limits of prototyping tools, have an intense curiosity of design systems, and a love for baking.
        </p>
        <p className="display-text secondary-color">
          New look coming soon, sneak a peek on <a href="https://www.figma.com/file/piwAnT5na723DST6ByogNp/portfolio-draft-2020" target="_blank" rel="noopener noreferrer">Figma</a>
        </p>
      </div>
    </section>
    <Landing />
  </Layout>
)

export default IndexPage
