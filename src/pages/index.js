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
    <section className="landing-work wrap-1 sf-1">
      <div className="landing-fade-in">
        <h2 className="vis-hide">Patrik Lau</h2>
        <h1 className="highlight">I'm Pat!</h1>
        <p className="display-text secondary-color">
          I'm a Product Designer in Vancouver, BC.
        </p>
        <p className="display-text secondary-color">
          I like tinkering with prototyping tools, have an intense curiousity of design systems, and a love for baking.
        </p>
        {/* <p className="display-text secondary-color">
          Currently I am making a timeline component in React for this site to keep track of my reading list for 2020.
        </p> */}
      </div>
    </section>
    <Landing />
  </Layout>
)

export default IndexPage
