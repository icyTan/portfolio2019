import { Link, graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "./scss/_partials/worklist.scss"
import "./scss/_partials/worklist-large.scss"
import "./scss/_partials/base.scss"
import "./scss/_partials/base-large.scss"
import "./scss/_partials/grids.scss"
import React from "react"

const Worklist = () => {
    // must be named something from query
    const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query worklistQuery {
        allMarkdownRemark(filter: {frontmatter: {displayOnLanding: {eq: true}}}, limit: 10, sort: {fields: frontmatter___weight, order: ASC}) {
          edges {
            node {
              id
              frontmatter {
                landingDesc
                landingTitle
                workbox
                workitemTitle
                color
                weight
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
    )
    // console.log(allMarkdownRemark)
    return (
        <>
        <section className="section-1">
            <section className="work-list">
                <div className="wrap-1 sf-1">
                    <h2 className="vis-hide">Other Work</h2>
                    <ul className="work-list__list row">
                        {/* Start generative code here */}
                            {allMarkdownRemark.edges.map(({ node }) => (
                            <li key={node.id} className="work-list__item col-6">
                                <div className={"work-list__orb " + node.frontmatter.workbox + " no-flickr"}></div>
                                <div className="work-list__meta">
                                    <span className="work-list__name">{node.frontmatter.landingTitle}</span>
                                    <span className="work-list__desc">{node.frontmatter.landingDesc}</span>
                                </div>
                                {/* <Link className="overlay" to={node.fields.slug}></Link> */}
                                <AniLink
                                  cover
                                  to={node.fields.slug}
                                  direction="down"
                                  bg={node.frontmatter.color}
                                  duration={1.5}
                                  className="overlay"
                                ></AniLink>
                            </li>
                        ))}
                        {/* End generative code */}
                    </ul>
                </div>
            </section>
        </section>
        </>
    )
}

export default Worklist
