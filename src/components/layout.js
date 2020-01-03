/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
// import { useStaticQuery, graphql } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./scss/_partials/variables.scss"
import "./scss/_partials/base.scss"

library.add(fab, faCheckSquare, faEnvelope)

const Layout = ({ children }) => {
  return (
    <>
      <main className="wrap-body">
          {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
