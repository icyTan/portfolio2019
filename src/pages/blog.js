import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import BlogList from "../components/bloglist"
import "../components/scss/_partials/animations.scss"
import "../components/scss/_partials/blog.scss"

const Blog = () => (
    <Layout>
        <SEO title="Blog" />
        <Header/>
        <section className="blog-landing wrap-1 sf-1">
            <h2 className="vis-hide">Blog</h2>
            <h3 className="display-text">
                This is what I'm up to!
            </h3>
            <p className="display-text">
                Here's my ongoing design ideas, concept work, coding issues, and sometimes musings on games.
            </p>
        </section>
        <BlogList />
    </Layout>
)

export default Blog
