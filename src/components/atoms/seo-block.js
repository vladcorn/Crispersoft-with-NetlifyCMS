import React from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';

const SeoBlock = ({
  description,
  title,
  lang,
  author,
  meta,
  link,
  titleSpan,
}) => {
  // console.log('DESC', description);
  // console.log('TITLE', title);
  let titlePage = title;
  if (titleSpan) {
    titlePage = title + titleSpan;
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${titlePage} | Crispersoft`}
      meta={[
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=5.0,minimal-ui,shrink-to-fit=no',
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: 'google-site-verification',
          content: 'd2Q1sizdU0qs003uBHATHLJOytJhGzik4ckx2m0XJ4A',
        },
      ].concat(meta)}
    >
      {link.map(({ name, href }, idx) => (
        <link key={idx} rel={name} href={href} />
      ))}
    </Helmet>
  );
};

SeoBlock.defaultProps = {
  lang: 'en',
  meta: [],
  link: [],
  title: '',
  description: ``,
  author: '@crispersoft',
};

SeoBlock.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.arrayOf(PropTypes.object),
  lang: PropTypes.string,
  author: PropTypes.string,
};

export default SeoBlock;
