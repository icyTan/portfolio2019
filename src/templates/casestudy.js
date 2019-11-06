import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Worklist from "../components/worklist"
import Header from "../components/header"
import "../components/scss/_partials/variables.scss"
import "../components/scss/_partials/work.scss"
import "../components/scss/_partials/work-large.scss"
export default ({ data }) => {
    let post = data.markdownRemark
    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
    return (
        <>
        <Layout>
          <Header barName={post.frontmatter.landingTitle} />
            <div className="wrap-1-content">
                <section className={"work__hero work__hero--" + post.frontmatter.landingTitle + " hero-1"}>
                    <div className="wrap-1 sf-1">
                        <h1 className="work__title">{post.frontmatter.heroTitle}</h1>
                        <p className="work__subtitle">{post.frontmatter.heroSubtitle}</p>
                        <Img
                            alt={featuredImgFluid.name}
                            fluid={featuredImgFluid}
                        />
                    </div>
                </section>
                <section className="work__content fullpage-fade-in">
                    <div className="wrap-1 sf-2 work_header">
                        <h2 className="vis-hide">Information</h2>
                        <div className="work__info col-3">
                            <span className="work__info-label">My Roles</span>
                                <span className="work__info-value">{post.frontmatter.heroRoles}</span>
                        </div>
                        <div className="work__info col-2">
                            <span className="work__info-label">Company</span>
                                <span className="work__info-value">{post.frontmatter.heroCompany}</span>
                        </div>
                        <div className="work__info col-2">
                            <span className="work__info-label">Timeline</span>
                                <span className="work__info-value">{post.frontmatter.heroTimeline}</span>
                        </div>
                        <div className="work__info col-5">
                            <span className="work__info-label">Skills</span>
                                <span className="work__info-value">{post.frontmatter.heroSkills}</span>
                        </div>
                    </div>
                </section>
                <div className="wrap-1 sf-1">
                  {/* This is where markdown is placed */}
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </div>
          <Worklist />
        </Layout>
        </>
    )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        landingTitle
        heroCompany
        heroRoles
        heroSkills
        heroSubtitle
        heroTimeline
        heroTitle
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`