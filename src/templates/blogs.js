import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Worklist from "../components/worklist"
import Header from "../components/header"
import SEO from "../components/seo"
// import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../components/scss/_partials/blog.scss"
import "../components/scss/_partials/grids.scss"

// turn these into functions instead of strings https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/
export default function BlogTemplate({ data }) {
    let post = data.mdx
    return (
      <>
        <Layout>
          <SEO title={post.frontmatter.title} />
          <Header barName={post.frontmatter.heading} />
          <div className="wrap-1-content">
            <section className="blog-landing">
              <div className="wrap-1 sf-1 fullpage-fade-in">
                <h1 className="blog__title">{post.frontmatter.heading}</h1>
              </div>
            </section>
            <div className="blog-markdown fullpage-fade-in">
              {/* This is where markdown is placed */}
              {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
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
  query BlogQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`