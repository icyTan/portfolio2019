import { graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
// import {TransitionLink} from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./scss/_partials/landing.scss"
import "./scss/_partials/grids.scss"
import React from "react"

// Code snippet from https://github.com/gatsbyjs/gatsby/issues/14988
// we only care about `aspectRatio`, the rest will be passed directly to `Img`
const ImgWithOrient = ({ aspectRatio, ...props }) => {
  let orientation;
  if (aspectRatio >= 1.2) orientation = "landscape";
  if (aspectRatio <= 0.8) orientation = "portrait";
  if (aspectRatio > 0.8 && aspectRatio < 1.2) orientation = "square";

  return <Img className={`landing-${orientation} landing-work_preview-img`} {...props} />;
};

const Landing = () => {
  // must be named something from query
  // fixing https://github.com/gatsbyjs/gatsby/issues/13322
  // https://stackoverflow.com/questions/52574783/gatsby-image-path-from-json <-- reference for getting image paths from json
  const { allMdx } = useStaticQuery(
    graphql`
      query landingQuery {
        allMdx(
          filter: { frontmatter: { displayOnLanding: { eq: true } } }
          limit: 10
          sort: { fields: frontmatter___weight, order: ASC }
        ) {
          edges {
            node {
              id
              frontmatter {
                landingDesc
                landingTitle
                title
                workbox
                workitemTitle
                color
                weight
                landingImage {
                  childImageSharp {
                    fluid {
                      aspectRatio
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
  // console.log(allMdx)
  return (
    <>
      <div className="wrap-1-content">
        <section className="landing-work_list">
          <h2 className="vis-hide">Work</h2>
          <div className="sf-2 wrap-1">
            <div className="display">
              {/* <p>Returned something</p> */}
              {/* Start generative code here */}
              {allMdx.edges.map(({ node }) => (
                <div key={node.id} className="landing-work_item col-6 landing-stagger-fade-in">
                  <div className="landing-work_content">
                    <div className={"landing-work_box " + node.frontmatter.workbox}></div>
                      <ImgWithOrient
                        aspectRatio={node.frontmatter.landingImage.childImageSharp.fluid.aspectRatio}
                        alt={node.name}
                        fluid={node.frontmatter.landingImage.childImageSharp.fluid}
                        style={{position: `absolute`}}
                      />
                  </div>
                  <div className="landing-work_meta">
                    <span
                      className={"landing-work_item-title " + node.frontmatter.workitemTitle}
                    >
                      {node.frontmatter.landingTitle}
                    </span>
                    <span className="landing-work_item-desc">{" " + node.frontmatter.landingDesc}</span>
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
                </div>
              ))}
              {/* End generative code */}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Landing
