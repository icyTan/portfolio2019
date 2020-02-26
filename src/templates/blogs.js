import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Worklist from "../components/worklist"
import Header from "../components/header"
import SEO from "../components/seo"
import "../components/scss/_partials/blog.scss"
import "../components/scss/_partials/grids.scss"

export default ({ data }) => {
    let post = data.markdownRemark
    return (
        <>
            <Layout>
                <SEO title={post.frontmatter.title} />
                <Header barName={post.frontmatter.blogTitle} />
                <div className="wrap-1-content">
                    <section className="blog-landing">
                        <div className="wrap-1 sf-1 fullpage-fade-in">
                            <h1 className="blog__title">{post.frontmatter.blogTitle}</h1>
                        </div>
                    </section>
                    <div className="blog-markdown fullpage-fade-in">
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