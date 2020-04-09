import React from 'react';
import { graphql } from 'gatsby' 
import { Layout } from '@ui/templates';

import SectionContacts from '../components/section-contacts';
import { SeoBlock } from '@ui/atoms';

const ContactsPage = ({ data }) => {
  const {
    contacts: { description, title, link, author },
  } = data.site.siteMetadata;

  return (
    <Layout page='contacts'>
      <SeoBlock
        title={title}
        description={description}
        author={author}
        link={link}
      />
      <SectionContacts />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        contacts {
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
export default ContactsPage;
