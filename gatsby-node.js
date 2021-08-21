const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blog.js");
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
  const authorTemplate = path.resolve("./src/templates/author.js");
  const resAuthor = await graphql(`
    query {
      allContentfulAuthor {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `);
  resAuthor.data.allContentfulAuthor.edges.forEach((edge) => {
    const pageName = edge.node.name.toLowerCase().replace(" ", "_");
    createPage({
      component: authorTemplate,
      path: `/author/${pageName}`,
      context: {
        name: edge.node.name,
        id: edge.node.id,
      },
    });
  });
};