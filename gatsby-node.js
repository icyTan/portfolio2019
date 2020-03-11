/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // Taken from https://www.gatsbyjs.org/tutorial/part-seven/
 // hacky implementation for multiple types of file from https://github.com/gatsbyjs/gatsby/issues/20159
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

/**
 * Custom Webpack config
 *
 * Adds aliases for paths (like components)
 * so you don't get lost in relative hell -> '../../../'
 */
exports.onCreateWebpackConfig = ({ config, actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.join(__dirname, './src/components'),
                '@images': path.join(__dirname, './src/images'),
                '@templates': path.join(__dirname, './src/components/templates'),
            },
        },
    });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // if it is a case study
  if (node.internal.type === `Mdx` && !node.frontmatter.isBlog) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    // if blog item
  } else if (node.internal.type === `Mdx` && node.frontmatter.isBlog) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

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
  `)

  if (casestudies.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "casestudies createPages" query')
    console.log("🚨  ERROR:", result.errors)
  }

  casestudies.data.allMdx.edges.forEach(({ node }) => {
    reporter.info(`Creating case study page: ${node.fields.slug}`)
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/casestudy.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug
      },
    })
    reporter.info(`Done case study page: ${node.fields.slug}`)
  })

  const blogs = await graphql(`
    query {
      allMdx(
        filter: {
          frontmatter: { isBlog: { eq: true } }
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
  `)

  if (blogs.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "blog createPages" query')
    console.log("🚨  ERROR:", result.errors)
  }

  blogs.data.allMdx.edges.forEach(({ node }) => {
    reporter.info(`Creating blog post page: ${node.fields.slug}`)
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blogs.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug
      },
    })
    reporter.info(`Done blog post page: ${node.fields.slug}`)
  })
}