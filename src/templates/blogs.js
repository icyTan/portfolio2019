import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Worklist from "../components/worklist"
import Header from "../components/header"
import SEO from "../components/seo"
import "../components/scss/_partials/variables.scss"
import "../components/scss/_partials/work.scss"
import "../components/scss/_partials/casestudy.scss"
import "../components/scss/_partials/grids.scss"

export default ({ data }) => {
    let post = data.markdownRemark
    return (
        <>
            <Layout>
                <SEO title={post.frontmatter.title} />
                <Header barName={post.frontmatter.landingTitle} />
                <div className="wrap-1-content">
                    <section className={"work__hero work__hero--" + post.frontmatter.landingTitle + " hero-1"}>
                        <div className="wrap-1 sf-1 fullpage-fade-in">
                            <h1 className="work__title">{post.frontmatter.heroTitle}</h1>
                        </div>
                    </section>
                    <div className="markdown fullpage-fade-in">
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
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        blogTitle
        blogSubtitle
      }
    }
  }
`