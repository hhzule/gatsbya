const path = require("path");


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
     query MyQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          content {
            raw
          }
        }
      }
    }
  }`);


  const pp = result.data.allContentfulBlogPost.edges[0].node.title
  console.log(pp, "pp")
  createPage({
    path: `/post/${pp}`,
    component: path.resolve(`./src/templates/posttemplate.js`),
    context: {
      data: result
    }
  })


};