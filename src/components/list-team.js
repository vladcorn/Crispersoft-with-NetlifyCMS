import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useCurrentWidth } from 'react-socks';
import SlickSlider from 'react-slick';
import Img from 'gatsby-image';

const ListTeam = ({ onlySlider }) => {
  const {
    dataJson: { team: data },
  } = useStaticQuery(teamQuery);

  const sliderRef = React.useRef(null);
  const width = useCurrentWidth();
  const isSlider = onlySlider || width < 769;

  const items = data.map(({ image, name, position, description }, idx) => {
    return (
      <div className='list-item' key={idx}>
        <div className='card card-team'>
          <div className='card-image'>
            <Img
              fluid={image.childImageSharp.fluid}
              className='img-responsive'
              alt={`Image ${name}`}
            />
          </div>
          <div className='card-content'>
            <div className='card-header'>
              <div className='card-title'>
                <h3 className='secondary-title'>{name}</h3>
                <div className='card-subtitle'>{position}</div>
              </div>
            </div>
            <div className='card-body'>
              <p className='text'>{description}</p>
            </div>
            <div className='card-footer'></div>
          </div>
        </div>
      </div>
    );
  });

  const settings = {
    centerMode: true,
    mobileFirst: true,
    infinite: true,
    slidesToShow: 4,
    slidesToSсroll: 1,

    speed: 300,
    arrows: false,
    cssEase: 'ease',
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          centerPadding: '30px',
          slidesToShow: 1,
          swipeToSlide: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
        },
      },
    ],
  };

  const teamList = isSlider ? (
    <SlickSlider {...settings} ref={sliderRef} className='list-team slider'>
      {items}
    </SlickSlider>
  ) : (
    <div className='list-team list'>{items}</div>
  );

  return <div className='list-team-wrapper'>{teamList}</div>;
};

const teamQuery = graphql`
  query MyQuery {
    dataJson {
      team {
        name
        position
        description
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default ListTeam;
