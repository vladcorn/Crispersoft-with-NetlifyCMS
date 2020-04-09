import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const SectionAboutHead = () => {
  const {
    image: { childImageSharp },
  } = useStaticQuery(infoFluidImageQuery);

  return (
    <section className='section about-head-section padding-vertical'>
      <div className='section-body fixed'>
        <div className='about-head'>
          <div className='head-image'>
            <div className='image-wrapper'>
              <Img
                fluid={childImageSharp.fluid}
                className='img-responsive'
                alt='head image'
              />
            </div>
          </div>
          <div className='head-content'>
            <div className='head-body'>
              <h1 className='title main-title section-title'>
                Philosophy of our <span className='text-stroke'>company</span>
              </h1>
              <p className='text text-description'>
                CrisperSoft is skillful Ukrainian crew. We have a terrific
                experience in websites, mobile apps, software development in any
                programming languages, testing and UI/UX design. Our team are
                staffed by the best engineers that are highly competent. Surfing
                the Internet maybe you don’t even guess, that platform you
                visit are developed by CrisperSoft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const infoFluidImageQuery = graphql`
  query InfoAboutFluidImage {
    image: file(relativePath: { eq: "team/team-about.jpg" }) {
      ...infoFluidImageFragment
    }
  }
`;

export default SectionAboutHead;
