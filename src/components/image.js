import React from 'react';
import { StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ query, ...rest }) => {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        return (
          <Img fluid={data.placeholderImage.childImageSharp.fluid} {...rest} />
        );
      }}
    />
  );
};

export default Image;
