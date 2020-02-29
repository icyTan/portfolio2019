// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "layout"
// import Worklist from "worklist"
// import Header from "header"
// import SEO from "seo"
// import { MDXProvider } from "@mdx-js/react"
// import { MDXRenderer } from "gatsby-plugin-mdx"
// import "scss/_partials/blog.scss"
// import "scss/_partials/grids.scss"

// export default ({ data }) => {
//   let post = data.mdx
//   return (
//     <>
//       <Layout>
//         <SEO title={post.frontmatter.title} />
//         <Header barName={post.frontmatter.blogTitle} />
//         <div className="wrap-1-content">
//           <section className="blog-landing">
//             <div className="wrap-1 sf-1 fullpage-fade-in">
//               <h1 className="blog__title">{post.frontmatter.blogTitle}</h1>
//             </div>
//           </section>
//           <div className="blog-markdown fullpage-fade-in">
//             {/* This is where mdx is rendered */}
//             <MDXProvider>
//               <MDXRenderer>{post.body}</MDXRenderer>
//             </MDXProvider>
//           </div>
//         </div>
//         <Worklist />
//       </Layout>
//     </>
//   )
// }

// export const query = graphql`
//   query Blog2Query($slug: String!) {
//     mdx(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         blogTitle
//         blogSubtitle
//       }
//     }
//   }
// `
