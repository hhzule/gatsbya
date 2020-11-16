const path = require("path");


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
  query MyQuery {
  allContentfulBlogPost {
    edges {
      node {
        title
        timestamp
        image {
          file {
            url
          }
        }
        content {
          raw
        }
      }
    }
  }
}`)


  result.data.allContentfulBlogPost.edges.forEach((node) => {
    const pp = node.node.title


    // data.allContentfulBlogPost.edges.map((node) => node.node.title),
    createPage({
      path: `/post/${pp}`,
      component: path.resolve(`./src/templates/posttemplate.js`),
      context: {
        data: node
      }
    })
  })



};