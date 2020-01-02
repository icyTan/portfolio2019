import React from "react"
import "../components/scss/_partials/base.scss"
import "../components/scss/_partials/resumeitem.scss"

// Make default values for resume items, look up how to do this

const ResumeItem = ({ children, ...props }) => (
    <p className="resume_item">
        <a
            href={props.href}
            target="_blank"
            rel="noopener"
            className="resume-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path
                    d={props.svgPath}
                >
                </path>
            </svg>
        </a>
        <div className="resume-itemcontent">
            <div className="resume-title">
                {props.title}
            </div>
            <div className="resume-date">
                {props.date}
            </div>
            <p>
                {children}
            </p>
        </div>
    </p>
)

export default ResumeItem