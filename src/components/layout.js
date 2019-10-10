/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./scss/_partials/variables.scss"
import "./scss/_partials/base.scss"
import "./scss/_partials/base-large.scss"
import "./scss/_partials/footer.scss"
import "./scss/_partials/footer-large.scss"


const Layout = ({ children }) => {
  return (
    <>
      <main className="wrap-body">
        <Header />
        <div className="wrap-1-content fullpage-fade-in">
          {children}
        </div>
      </main>
      <footer id="footer" className="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
