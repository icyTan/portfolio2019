import React from "react"
import "../components/scss/_partials/buttons.scss"
import "../components/scss/_partials/base.scss"

const PrimaryButton = ({ children, ...props }) => (
    <div className="center-text">
        <a
            href={props.href}
            target={props.target}
            className="btn btn__primary">
            {children}
        </a>
    </div>
)

export default PrimaryButton