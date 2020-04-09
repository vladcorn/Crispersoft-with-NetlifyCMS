import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const BackgroundImage = ({ imageFluid }) => {
  return <BgImage fluid={imageFluid} />;
};

const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;

export default BackgroundImage;
