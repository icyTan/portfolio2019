/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // Taken from https://www.gatsbyjs.org/tutorial/part-seven/
 // hacky implementation for multiple types of file from https://github.com/gatsbyjs/gatsby/issues/20159
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    // if it is a case study
    if (node.internal.type === `MarkdownRemark` && !node.frontmatter.isBlog) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    } else if (node.internal.type === `MarkdownRemark` && node.frontmatter.isBlog){
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }

    // if it is a blog post
}
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const casestudies = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {isBlog: {eq: false}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    casestudies.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`src/templates/casestudy.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        })
    })

  const blogs = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {isBlog: {eq: true}}})  {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  blogs.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/blogs.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}