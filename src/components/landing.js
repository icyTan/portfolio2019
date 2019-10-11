import { Link, graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import "./scss/_partials/landing.scss"
import "./scss/_partials/landing-large.scss"
import "./scss/_partials/grids.scss"
import React from "react"

// Code snippet from https://github.com/gatsbyjs/gatsby/issues/14988
// we only care about `aspectRatio`, the rest will be passed directly to `Img`
const ImgWithOrient = ({ aspectRatio, ...props }) => {
  let orientation;
  if (aspectRatio >= 1.2) orientation = "landscape";
  if (aspectRatio <= 0.8) orientation = "portrait";
  if (aspectRatio > 0.8 && aspectRatio < 1.2) orientation = "square";

  return <Img className={`${orientation} landing-work_preview-img`} {...props} />;
};

const Landing = () => {
  // must be named something from query
  // fixing https://github.com/gatsbyjs/gatsby/issues/13322
  // https://stackoverflow.com/questions/52574783/gatsby-image-path-from-json <-- reference for getting image paths from json
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
                      aspectRatio
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
                    <ImgWithOrient
                      aspectRatio={node.preview_img.src.childImageSharp.fluid.aspectRatio}
                      alt={node.name}
                      fluid={node.preview_img.src.childImageSharp.fluid}
                      style={{position: `absolute`}}
                    />
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
