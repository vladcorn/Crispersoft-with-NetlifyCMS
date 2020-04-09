import React from 'react';
import { graphql } from 'gatsby' 
import { Layout } from '@ui/templates';

import SectionMainPortfolio from '../components/section-main-portfolio';
import { SeoBlock } from '@ui/atoms';

const PortfolioPage = ({ data }) => {
  const {
    portfolio: { description, title, link, author },
  } = data.site.siteMetadata;

  return (
    <Layout page='portfolio'>
      <SeoBlock
        title={title}
        description={description}
        author={author}
        link={link}
      />
      <SectionMainPortfolio page='portfolio' />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        portfolio {
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

export default PortfolioPage;
