import { Link, graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import "./scss/_partials/landing.scss"
import "./scss/_partials/landing-large.scss"
import "./scss/_partials/grids.scss"
import React from "react"

const Landing = () => {
  // must be named something from query
  // fixing https://github.com/gatsbyjs/gatsby/issues/13322
  const { allLandingItemsJson } = useStaticQuery(
    graphql`
      query landingQuery {
        allLandingItemsJson {
          edges {
            node {
              id
              title
              desc
              workbox
              workitem_title
              href
              preview_img{
                name
                src {
                  childImageSharp {
                    fluid{
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  console.log(allLandingItemsJson)
  return (
    <>
      <section className="landing-work_list">
        <h2 className="vis-hide">Work</h2>
        <div className="sf-2 wrap-1">
          <div className="display">
            {/* <p>Returned something</p> */}
            {/* Start generative code here */}
            {allLandingItemsJson.edges.map(({ node }) => (
              <div className="landing-work_item col-6">
                <div className="landing-work_content">
                  <div className={"landing-work_box " + node.workbox}></div>
                  <div className="landing-work_preview-img">
                    <Img
                      fluid={node.preview_img.src.childImageSharp.fluid}
                      alt="preview image"
                    />
                  </div>
                </div>
                <div className="landing-work_meta">
                  <span
                    className={"landing-work_item-title " + node.workitem_title}
                  >
                    {node.title}
                  </span>
                  <span className="landing-work_item-desc">{node.desc}</span>
                </div>
                <a className="overlay" href={node.href}></a>
              </div>
            ))}
            {/* End generative code */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing
