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
  // console.log(allFile)
  return (
    <>
      <div className="wrap-1 sf-2">
        <section className="landing-work_list">
          <div className="gif-grid">
            {/* <p>Returned something</p> */}
            {/* Start generative code here */}
            {allFile.edges.map(({ node }) => (
              <div key={node.id} className="gif-grid-item">
                <img src={node.publicURL} alt={node.name} />
                <p>{node.name}</p>
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
