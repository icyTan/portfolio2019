import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./scss/_partials/footer.scss"
import "./scss/_partials/footer-large.scss"

const Footer = () => (
    <footer id="footer" className="footer">
        {/* Fix footer icons */}
        <ul class="footer-content sf-1 wrap-1">
            <li>
                <a id="footer-email" href="mailto:hello@plau.ca" target="_blank" rel="noopener noreferrer" class="footer-link">
                    <FontAwesomeIcon icon="envelope" size="2x" className="btn-social-media"/>
                </a>
            </li>
            <li>
                <a id="footer-twitter" href="https://twitter.com/patrik_lau" target="_blank" rel="noopener noreferrer" class="footer-link">
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" className="btn-social-media"/>
                </a>
            </li>
            <li>
                <a id="footer-linkedin" href="https://ca.linkedin.com/pub/patrik-lau/77/953/b55" target="_blank" rel="noopener noreferrer" class="footer-link">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="btn-social-media"/>
                </a>
            </li>
            <li>
                <a id="footer-github" href="https://github.com/icyTan" target="_blank" rel="noopener noreferrer" class="footer-link">
                    <FontAwesomeIcon icon={['fab', 'github']} size="2x" className="btn-social-media"/>
                </a>
            </li>
        </ul>
        <div className="footer-copyright">
            © Patrik Lau {new Date().getFullYear()}, Built with
                {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
    </footer>
)

export default Footer