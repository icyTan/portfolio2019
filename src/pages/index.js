import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Landing from "../components/landing"
import "../components/scss/_partials/landing.scss"
import "../components/scss/_partials/landing-large.scss"
import "../components/scss/_partials/animations.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Header barType="index"/>
    <section className="landing-work wrap-1 sf-1 fullpage-fade-in">
      <h2 className="vis-hide">Patrik Lau</h2>
      <h1 className="highlight">I'm Pat,</h1>
      <p className="display-text highlight">
        a growing product designer in Vancouver, BC.
      </p>
      <p className="display-text secondary-color">
       I like to tinker with prototyping tools, have an intense curiousity of design systems, and a love for baking.
      </p>
      {/* <p className="display-text secondary-color">
        I believe that good design is effective communication with the people on the other side of my work.
      </p> */}
      <p className="display-text">
        This portfolio is built with <a href="https://www.gatsbyjs.org/">Gatsby.js</a> and is powered by <a href="https://www.netlify.com">Netlify</a>.
      </p>
    </section>
    <Landing />
  </Layout>
)

export default IndexPage
