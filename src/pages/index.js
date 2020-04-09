import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '@ui/templates';

import SectionMainHead from '../components/section-main-head';
import SectionMainInfo from '../components/section-main-info';
import SectionMainServices from '../components/section-main-services';
import SectionMainPortfolio from '../components/section-main-portfolio';
import SectionTech from '../components/section-tech';
import SectionNeedProject from '../components/section-need-project';
import SectionTeam from '../components/section-team';
import SectionSeo from '../components/section-seo';
import { SeoBlock } from '@ui/atoms';

const MainPage = ({ data }) => {
  const {
    main: { description, title, link, author },
  } = data.site.siteMetadata;

  return (
    <Layout page='main'>
      <SeoBlock
        title={title}
        description={description}
        author={author}
        link={link}
      />
      <SectionMainHead />
      <SectionMainInfo mainImageFluid={null} />
      <SectionMainServices />
      <SectionMainPortfolio />
      <SectionTeam onlySlider />
      <SectionTech />
      <SectionNeedProject />
      <SectionSeo />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        main {
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

export default MainPage;
