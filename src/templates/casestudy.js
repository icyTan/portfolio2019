import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Worklist from "../components/worklist"
import Header from "../components/header"
import SEO from "../components/seo"
// import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../components/scss/_partials/variables.scss"
import "../components/scss/_partials/work.scss"
import "../components/scss/_partials/casestudy.scss"
import "../components/scss/_partials/grids.scss"


// turn these into functions instead of strings https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/
export default function CaseStudyTemplate({ data }) {
  console.log(data)
  let post = data.mdx
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  let hasHeroInfo = false;
  // set hasHeroInfo
  if(post.frontmatter.heroRoles === ""){
    hasHeroInfo = false;
  } else {
    hasHeroInfo = true;
  }
  return (
    <>
      <Layout>
        <SEO title={post.frontmatter.title} />
        <Header barName={post.frontmatter.landingTitle} />
        <div className="wrap-1-content">
          <section
            className={
              "work__hero work__hero--" +
              post.frontmatter.landingTitle +
              " hero-1"
            }
          >
            <div className="wrap-1 sf-1 fullpage-fade-in">
              <h1 className="work__title">{post.frontmatter.heroTitle}</h1>
              <p className="work__subtitle">
                {post.frontmatter.heroSubtitle}
              </p>
              <Img alt={featuredImgFluid.name} fluid={featuredImgFluid} />
            </div>
          </section>
          {/* if nothing in hero info, skip rendering it */}
          {hasHeroInfo ? (
            <section className="work__content fullpage-fade-in">
              <div className="wrap-1 sf-2 work_header">
                <h2 className="vis-hide">Information</h2>
                <div className="work__info col-3">
                  <span className="work__info-label">My Roles</span>
                  <span className="work__info-value">
                    {post.frontmatter.heroRoles}
                  </span>
                </div>
                <div className="work__info col-2">
                  <span className="work__info-label">Company</span>
                  <span className="work__info-value">
                    {post.frontmatter.heroCompany}
                  </span>
                </div>
                <div className="work__info col-2">
                  <span className="work__info-label">Timeline</span>
                  <span className="work__info-value">
                    {post.frontmatter.heroTimeline}
                  </span>
                </div>
                <div className="work__info col-5">
                  <span className="work__info-label">Skills</span>
                  <span className="work__info-value">
                    {post.frontmatter.heroSkills}
                  </span>
                </div>
              </div>
            </section>
          ) : (
            <section className="work_header"></section>
          )}
          <div className="markdown fullpage-fade-in">
            {/* This is where markdown is placed */}
            {/* <MDXProvider> */}
              <MDXRenderer>{post.body}</MDXRenderer>
            {/* </MDXProvider> */}
          </div>
        </div>
        <Worklist />
      </Layout>
    </>
  )
}

export const query = graphql`
  query CaseStudyQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
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