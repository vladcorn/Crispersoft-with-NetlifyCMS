const formatBlogSlug = require('./src/libs/formatSlug').formatBlogSlug;
const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/pages/blog/blogPostTemplate.js`);

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD.MM.YYYY")
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const id = node.id;
    const slug = formatBlogSlug(node.frontmatter.title, node.frontmatter.date);
    createPage({
      path: `blog/${encodeURIComponent(slug)}/`,
      component: blogPostTemplate,
      context: { id, slug }, // additional data can be passed via context
    });
  });
};
