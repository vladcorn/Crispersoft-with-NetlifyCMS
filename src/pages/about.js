import React from 'react';
import { Layout } from '@ui/templates';
import { graphql } from 'gatsby' 
import SectionTeam from '../components/section-team';
import SectionAboutHead from '../components/section-about-head';
import SectionAboutAsk from '../components/section-about-ask';
import SectionMilestones from '../components/section-milestones';
import { SeoBlock } from '@ui/atoms';

const AboutPage = ({ data }) => {
  const {
    about: { description, title, link, author },
  } = data.site.siteMetadata;

  return (
    <Layout page='about'>
      <SeoBlock
        title={title}
        description={description}
        author={author}
        link={link}
      />
      <SectionAboutHead />
      <SectionMilestones />
      <SectionTeam />
      <SectionAboutAsk />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        about {
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

export default AboutPage;
