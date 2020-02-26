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
            <p className="display-text">
                This is what up to! I'm learning or working on ideas ranging from design work to coding to musings on games.
            </p>
            <p className="display-text">
                It's looking a bit empty right now...
            </p>
        </section>
        <BlogList />
    </Layout>
)

export default Blog
