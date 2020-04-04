import { graphql, useStaticQuery } from "gatsby"
// import {TransitionLink} from 'gatsby-plugin-transition-link'
import "./scss/_partials/grids.scss"
import "./scss/_partials/gifgrid.scss"
import React from "react"

const GifGrid = () => {
  const { allFile } = useStaticQuery(
    graphql`
      {
        allFile(
          filter: {
            extension: { eq: "gif" }
            relativeDirectory: { eq: "blogs/dailyui" }
          }
          sort: { fields: name, order: ASC }
        ) {
          edges {
            node {
              id
              name
              extension
              publicURL
            }
          }
        }
      }
    `
  )
  return (
    <>
      <div className="wrap-1 sf-2">
        <section className="landing-work_list">
          <div className="gif-grid">
            {/* Start generative code here */}
            {allFile.edges.map(({ node }) => (
              // check for portrait or landscape based on file name
              <div key={node.id} className="gif-grid-container">
                <div className="gif-grid-box">
                  <img
                    className={` gif-grid-img gif-grid-${node.name.slice(-1)} `}
                    src={node.publicURL}
                    alt={node.name.slice(0, -4)}
                  />
                  <p>{node.name.slice(0, -4)}</p>
                </div>
              </div>
            ))}
            {/* End generative code */}
          </div>
        </section>
      </div>
    </>
  )
}

export default GifGrid
