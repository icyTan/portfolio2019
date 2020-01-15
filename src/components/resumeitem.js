import React from "react"
import "../components/scss/_partials/base.scss"
import "../components/scss/_partials/resumeitem.scss"

// TODO Make default values for resume items, look up how to do this

// issue in production build where class is only applied for the first item but none of the rest

const ResumeItem = ({ children, ...props }) => (
    <p>
        <a
            href={"https://" + props.href}
            target="_blank"
            rel="noopener noreferrer"
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