import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Worklist from "../components/worklist"
import PrimaryButton from "../components/primarybutton"
import ResumeItem from "../components/resumeitem"
import "../components/scss/_partials/variables.scss"
import "../components/scss/_partials/about.scss"
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
            <div className="wrap-1 sf-1">
                <h2 className="vis-hide">About Intro</h2>
                <p className="about__title center-text highlight">Hi!</p>
                <div className="about__info">
                    <p>I'm a graduate of the <a href="https://www.sfu.ca/siat.html">School of Interactive Arts and Technology</a> and recent grad from <a href="https://redacademy.com/">RED Academy</a>.</p>
                    <p>I’m interested in learning to create design systems and producing work in interdisciplinary teams to absorb knowledge through osmosis.</p>
                </div>
                <h2>What I've been up to:</h2>
                <div className="about__resume">
                    <ResumeItem
                            href="www.redacademy.com"
                            title="UX / UI Teaching Assistant at RED Academy"
                            date="Sept 2019 - Present in Vancouver"
                            svgPath="M50.2223,52.1621q-3.8737-5.63-7.7726-11.2431c-.6453-.9329-1.28-1.873-1.9645-2.8749.449-.2341.7784-.4177,1.1175-.5809a12.6561,12.6561,0,0,0,6.0227-5.7553,15.3882,15.3882,0,0,0,1.0974-10.5747A11.9623,11.9623,0,0,0,41.7215,12.7a20.571,20.571,0,0,0-9.0273-1.82q-8.9256-.0009-17.851.0006c-1.1,0-1.2364.14-1.2365,1.2527q-.0016,19.9076,0,39.815c0,.9978.1661,1.1653,1.1839,1.1677q3.5028.0082,7.0057.0012c1.2464-.0009,1.3611-.1129,1.3616-1.332.0013-3.7341.0126-7.4682-.0106-11.2021-.0041-.6637.1925-.9208.8822-.9039,1.6157.0394,3.233.0119,4.85.0118,2.1506,0,2.1142.0235,3.2732,1.8179,2.3618,3.6566,4.7724,7.2816,7.1469,10.93a1.3071,1.3071,0,0,0,1.16.6714c3.0987.0052,6.1973.009,9.2958-.0081a.7884.7884,0,0,0,.61-.285A.81.81,0,0,0,50.2223,52.1621ZM36.59,30.003a9.2964,9.2964,0,0,1-4.7347,1.0464c-2.6026.0247-5.2056.0106-7.8084.006-.8262-.0014-.8854-.0654-.8872-.8813-.0036-1.6409-.0011-3.2818-.0011-4.9228,0-1.6634.0117-3.3269-.0069-4.99-.006-.5469.2069-.7747.7531-.7672,3.2519.0448,6.5051.0385,9.7557.1292a5.7682,5.7682,0,0,1,4.1638,1.7717A5.63,5.63,0,0,1,36.59,30.003Z"
                        >
                            Leading lessons on Sketch and other technical skills. Supporting students during workshop hours by providing design feedback and project management tips.
                    </ResumeItem>
                    <ResumeItem
                        href="www.visier.com"
                        title="User Experience Design Intern at Visier"
                        date="Jan - Sept 2014 in Vancouver"
                        svgPath="M12.4142,6.4313c3.5644,0,7.0426-.0266,10.5188.0445.32.0066.7807.585.9161.9858,2.5878,7.6608,5.1354,15.3352,7.6953,23.0055.2727.8171.57,1.626.9954,2.8344,1.06-3.1781,1.9933-5.97,2.9223-8.7626,1.8905-5.6832,3.7987-11.3606,5.6455-17.058a1.271,1.271,0,0,1,1.4554-1.08c2.961.0508,5.9233.02,9.0228.02C49.532,12.096,47.5489,17.5915,45.5549,23.083c-2.41,6.6363-4.8461,13.2628-7.2215,19.9112a1.4909,1.4909,0,0,1-1.68,1.2114c-3.1629-.064-6.3282-.0441-9.4921-.01a1.2754,1.2754,0,0,1-1.4359-.9634q-6.56-18.0759-13.1672-36.1348A5.9049,5.9049,0,0,1,12.4142,6.4313ZM50.7294,57.6V47.36H13.057V57.6Z"
                    >
                        Supported feature development alongside developers with design specifications and presentations. Paired with an external contractor to begin Visier’s first customer support portal.
                    </ResumeItem>
                </div>
                <PrimaryButton href="/about/PatrikLauresume2019.pdf">Resume</PrimaryButton>
                <Image />
                <div className="about__info">
                    <p>I believe that good design is effective communication with the people on the other side of my work.</p>
                    <p>My off hours include <a href="https://www.twitch.tv/icytan">streaming on Twitch</a>, <a href="https://www.instagram.com/getpatlau/">baking</a> for my collaborators, and taking car trips to <a href="https://magic.wizards.com/en">Magic the Gathering</a> tournaments with friends.</p>
                    <p>I wrote this website with <a href="https://www.gatsbyjs.org/">Gatsby.js</a> and is powered by <a href="https://www.netlify.com">Netlify</a>. You can find my long form case studies in the wild <a href="https://medium.com/@get.patlau">on Medium</a> and my code work on <a href="https://github.com/icyTan/portfolio2019">Github</a>.</p>
                </div>
                    <PrimaryButton
                        href="https://ca.linkedin.com/pub/patrik-lau/77/953/b55"
                        target="_blank"
                        >Connect with me on LinkedIn
                    </PrimaryButton>
            </div>
        </section>
    </div>
    <Worklist />
    </Layout>
)

export default AboutPage
