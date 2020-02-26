import { graphql, useStaticQuery } from "gatsby"
// import {TransitionLink} from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./scss/_partials/grids.scss"
import React from "react"

const BlogList = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
      query bloglistQuery {
        allMarkdownRemark(filter: {frontmatter: {isBlog: {eq: true}}}) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        blogTitle
                        blogSubtitle
                        title
                        date
                    }
                    id
                    excerpt(pruneLength: 50, truncate: false)
                }
            }
        }
    }
    `
    )
    // console.log(allMarkdownRemark)
    return (
        <>
            <div className="wrap-1 sf-1">
                <section className="landing-work_list">
                    <h2 className="vis-hide">Work</h2>
                    <div className="display">
                        {/* <p>Returned something</p> */}
                        {/* Start generative code here */}
                        {allMarkdownRemark.edges.map(({ node }) => (
                            <div key={node.id} class="blog-item">
                                <AniLink
                                    cover
                                    to={node.fields.slug}
                                    direction="down"
                                    bg="#ffffff"
                                    duration={1.5}
                                    className="blog-link"
                                >
                                    <h3 className="blog-title">
                                        {node.frontmatter.title}{" "}
                                    </h3>
                                    <span class="blog-date">
                                        - {node.frontmatter.date}
                                    </span>
                                    <p>{node.excerpt}</p>
                                </AniLink>
                            </div>
                        ))}
                        {/* End generative code */}
                    </div>
                </section>
            </div>
        </>
    )
}

export default BlogList
