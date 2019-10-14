import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"
import "../components/scss/_partials/landing.scss"
import "../components/scss/_partials/landing-large.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Landing Page" />
    <section className="landing-work wrap-1 sf-1">
      <h2 className="vis-hide">Patrik Lau</h2>
      <h1 className="highlight">I'm Pat,</h1>
      <p className="display-text highlight">
        a product designer from Vancouver, BC.
      </p>
      <p className="display-text secondary-color">
        I believe that good design is effective communication with the people on
        the other side of my work.
      </p>
    </section>
    <Landing />
  </Layout>
)

export default IndexPage
