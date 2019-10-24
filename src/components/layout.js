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
          {children}
      </main>
      <footer id="footer" className="footer">
        {/* Fix footer icons */}
        {/* <ul class="footer-content sf-1 wrap-1">
          <li>
            <a id="footer-email" href="mailto:get.patlau@gmail.com" target="_blank" class="footer-link"><i class="fas fa-envelope fa-2x btn-social-media" ></i></a>
          </li>
          <li>
            <a id="footer-twitter" href="https://twitter.com/patrik_lau" target="_blank" class="footer-link"><i class="fab fa-twitter fa-2x btn-social-media" ></i></a>
          </li>
          <li>
            <a id="footer-linkedin" href="https://ca.linkedin.com/pub/patrik-lau/77/953/b55" target="_blank" class="footer-link"><i class="fab fa-linkedin-in fa-2x btn-social-media" ></i></a>
          </li>
          <li>
            <a id="footer-github" href="https://github.com/icyTan" target="_blank" class="footer-link"><i class="fab fa-github fa-2x btn-social-media" ></i></a>
          </li>
        </ul> */}
        <div className="sf-1 wrap-1">
          © Patrik Lau {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>

      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
