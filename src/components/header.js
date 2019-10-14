import { Link, graphql, useStaticQuery } from "gatsby"
import "./scss/_partials/header.scss"
import "./scss/_partials/header-large.scss"
import React from "react"

const Header = () => {
  // must be named something from query
  const { allNavItemsJson } = useStaticQuery(
    graphql`
      query navQuery {
        allNavItemsJson {
          edges {
            node {
              id
              menu_item
              href
            }
          }
        }
      }
    `
  )
  // console.log(allNavItemsJson)
  return (
    // Starting to import exisitng header
    <header className="header-bar fullpage-fade-in">
      <div className="wrap-1 sf-1 header-bar_content">
        <Link to="/" className="header-bar_logo">Patrik Lau</Link>
        <nav className="header-bar_nav">
          <ul className="header-bar_nav-list">
            {/* Map info from json file to list items */}
            {allNavItemsJson.edges.map(({ node }) => (
              <li key={node.id}>
                <Link id={node.menu_item} to={node.href} className="header-bar_nav-item">{node.menu_item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
