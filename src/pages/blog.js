import React from 'react';
import { graphql } from 'gatsby' 
import { Layout } from '@ui/templates';

import SectionBlog from '../components/section-blog';
import { SeoBlock } from '@ui/atoms';
// import SectionPagination from '../components/section-pagination';

const BlogPage = ({ data }) => {
  const {
    blog: { description, title, link, author },
  } = data.site.siteMetadata;

  return (
    <Layout page='blog'>
      <SeoBlock
        title={title}
        description={description}
        author={author}
        link={link}
      />
      <SectionBlog />
      {/* <SectionPagination /> */}
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        blog {
          title
          description
          link {
            name
            href
          }
        }
      }
    }
  }
`;

export default BlogPage;
