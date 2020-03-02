/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // Taken from https://www.gatsbyjs.org/tutorial/part-seven/
 // hacky implementation for multiple types of file from https://github.com/gatsbyjs/gatsby/issues/20159
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const casestudies = await graphql(`
    query {
      allMdx(
        filter: {
          frontmatter: { isBlog: { eq: false }, displayOnLanding: { eq: true } }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => res.data)

  if (casestudies.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "casestudies createPages" query')
  }

  casestudies.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/casestudy.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        id: node.id
      },
    })
  })

  const blogs = await graphql(`
    query {
      allMdx(filter: { frontmatter: { isBlog: { eq: true } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => res.data)

  if (blogs.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "blog createPages" query')
  }

  blogs.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blogs.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        id: node.id
      },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // if it is a case study
  if (node.internal.type === `Mdx` && !node.frontmatter.isBlog) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    // if blog item
  } else if (node.internal.type === `Mdx` && node.frontmatter.isBlog) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}