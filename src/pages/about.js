import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Worklist from "../components/worklist"
import "../components/scss/_partials/variables.scss"
import "../components/scss/_partials/about.scss"
import "../components/scss/_partials/about-large.scss"
import "../components/scss/_partials/animations.scss"

const Image = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about/profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return <Img 
        fluid={data.placeholderImage.childImageSharp.fluid} 
        className="about__profile-img"
    />
}

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <Header barType="about" />
        <div className="wrap-1-content fullpage-fade-in">
        <section className="about__intro">
            <div className="wrap-1 sf-2">
                <h2 className="vis-hide">About Intro</h2>
                <p className="about__title center-text highlight">Hi!</p>
                <div className="wrap-2-content">
                    <div className="about__info col-4">
                        <ul>
                            <li>Cooking</li>
                            <li>Streaming</li>
                            <li>Delighting Others</li>
                        </ul>
                    </div>
                    <div className="about__info col-8">
                        <p>I’m <strong>Pat Lau</strong>, a product designer from Vancouver, BC.</p>
                        <p>I believe that good design is effective communication with the people on the other side of my work.</p>
                        <p>My off hours include <a href="https://www.twitch.tv/icytan">streaming on Twitch</a>, <a href="https://www.instagram.com/getpatlau/">baking</a> for my collaborators, and taking car trips to <a href="https://magic.wizards.com/en">Magic the Gathering</a> tournaments with friends.</p>
                        <p>I’m interested in learning to create design systems and producing work in interdisciplinary teams to absorb knowledge through osmosis.</p>
                    </div>
                </div>
                <p className="center-text">
                    <a href="/about/PatrikLauresume2019.pdf" className="btn btn__primary">Resume</a>
                </p>
                <Image />
                <div className="sf-1 wrap-1">
                    <p>This website is built with <a href="https://www.gatsbyjs.org/">Gatsby.js</a>, powered by <a href="https://www.netlify.com">Netlify</a>. You can find my case studies in the wild <a href="https://medium.com/@get.patlau">on Medium</a> and my code work on <a href="https://github.com/icyTan/portfolio2019">Github</a>.</p>
                </div>
                <p className="center-text">
                    <a hhref="mailto:hello@plau.ca" className="btn btn__primary">Get in contact</a>
                </p>
            </div>
        </section>
    </div>
    <Worklist />
    </Layout>
)

export default AboutPage
