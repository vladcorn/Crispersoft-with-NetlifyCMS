import React from 'react';
import { Link, navigate, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SlickSlider from 'react-slick';

import SliderProgress from '../components/slider-progress';

function getProgressValue(idx, length) {
  return (idx / length) * 100;
}

function getNumberWithPrefix(num) {
  return num < 10 ? `0${num}` : num;
}

function getSliderCountText(idx, length) {
  return `${getNumberWithPrefix(idx)} / ${getNumberWithPrefix(length)}`;
}

const portfolioData = [
  {
    url: '/portfolio/fangio-shop/',
    image: 'fangioShopImage',
    title: {
      firstLine: 'Fangio',
      lastLine: 'Shop',
    },
    description:
      'Authoritative and prestigious site of brand clothing. Site structure is intended to reflect an explosive mix of retro style and boy spirit.',
  },
  {
    name: 'dawid-wadach',
    url: '/portfolio/dawid-wadach/',
    image: 'dawidWadachImage',
    title: {
      firstLine: 'Dawid',
      lastLine: 'Wadach',
    },
    description:
      'The high-tech, modern, credible expert site which suggests service of graphic design. Clean and sophisticated.',
  },
  {
    url: '/portfolio/whitefrontier-brewery/',
    image: 'whitefrontierBreweryImage',
    title: {
      firstLine: 'Whitefrontier',
      lastLine: 'Brewery',
    },
    description:
      'Traditional and respectable site of Czech brewery with integrated online beer store. Variety of taste and time spirit.',
  },
  {
    url: '/portfolio/likimap/',
    image: 'likimapImage',
    title: {
      firstLine: '',
      lastLine: 'Likimap',
    },
    description:
      'Whether  buying, selling, or browsing real estate, Likimap has value for everyone. A huge web-area which main features are mere design and ease of use.',
  },
  {
    url: '/portfolio/house-of-borel/',
    image: 'houseOfBorelImage',
    title: {
      firstLine: 'House',
      lastLine: 'of Borel',
    },
    description:
      'The elegant website which conceptualizes, develop, and design pieces to perfection. Each of us takes great pride in being able to produce collections.',
  },

  // {
  //   url: '/portfolio/cool-food',
  //   imageSrc: CoolFoodCardImage,
  //   title: {
  //     firstLine: 'Cool',
  //     lastLine: 'Food',
  //   },
  //   description:
  //     'Whether  buying, selling, or browsing real estate, Likimap has value for everyone. A huge web-area which main features are mere design and ease of use.',
  // },
];

const SlickPortfolioSlider = React.forwardRef(
  ({ onChange, children }, sliderRef) => {
    const settings = {
      className: 'slider',
      mobileFirst: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      // slidesToScroll: 1,
      adaptiveHeight: true,
      pauseOnHover: true,
      fade: true,
      arrows: false,
      cssEase: 'ease',
      beforeChange: (_, next) => {
        setTimeout(() => {
          onChange(next);
        }, 0);
      },
    };

    return (
      <SlickSlider ref={sliderRef} {...settings}>
        {children}
      </SlickSlider>
    );
  }
);

const SliderPortfolio = ({ data, page }) => {
  const sliderRef = React.useRef(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slideCounter = getSliderCountText(currentSlide + 1, data.length);
  const progressValue = getProgressValue(currentSlide + 1, data.length);

  const { url: itemLink } = data[currentSlide];

  function onClick() {
    navigate(itemLink || '/');
  }

  function onChange(next) {
    if (sliderRef.current) {
      setCurrentSlide(next);
    }
  }

  function nextSlide() {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  }

  const slideList = data.map(({ fluidImage, title, description }, idx) => {
    const cardTitle = React.createElement(
      page === 'portfolio' ? 'h2' : 'h3',
      {
        className: 'title',
        style: { cursor: 'pointer' },
        onClick,
      },
      <>
        <div className='text-stroke'>{title.firstLine}</div>
        {title.lastLine}
      </>
    );

    return (
      <div className='slider-item' key={idx}>
        <div className='card portfolio-card'>
          <div className='card-image'>
            <div role='button' tabIndex='0' onClick={onClick}>
              <Img
                fluid={fluidImage}
                className='img-responsive'
                alt={`Porffolio image ${title.firstLine} ${title.lastLine}`}
              />
            </div>
          </div>
          <div className='card-content'>
            <div className='card-header'>
              <div className='card-title'>
                <span className='slide-counter'>{slideCounter}</span>
                {cardTitle}
              </div>
            </div>
            <div className='card-body'>
              <div className='text-wrapper '>
                <p className='text text-description'>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='portfolio-slider'>
      <SlickPortfolioSlider
        ref={sliderRef}
        onClick={onClick}
        onChange={onChange}
        slideCounter={slideCounter}
        setCurrentSlide={setCurrentSlide}
      >
        {slideList}
      </SlickPortfolioSlider>
      <div className='slick-controls'>
        <SliderProgress value={progressValue} length={100} />
        <Link to={itemLink} className='btn btn-circle'>
          <span>Show me project</span>
        </Link>
        <div className='link-wrapper'>
          <button
            className='link uppercase btn btn-slick-next'
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const SliderContainer = ({ page }) => {
  const imageData = useStaticQuery(porfolioFluidImagesQuery);

  const data = portfolioData.map(({ image, ...params }) => ({
    ...params,
    fluidImage: imageData[image].childImageSharp.fluid,
  }));

  return <SliderPortfolio data={data} page={page} />;
};

export const portfolioFluidImage = graphql`
  fragment portfolioFluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1178, srcSetBreakpoints: [320, 400, 576, 768, 992]) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

const porfolioFluidImagesQuery = graphql`
  query PortfolioFluidImages {
    fangioShopImage: file(
      relativePath: { eq: "portfolio/fangio-shop-card.jpg" }
    ) {
      ...portfolioFluidImage
    }
    dawidWadachImage: file(
      relativePath: { eq: "portfolio/dawid-wadach-card.jpg" }
    ) {
      ...portfolioFluidImage
    }
    whitefrontierBreweryImage: file(
      relativePath: { eq: "portfolio/whitefrontier-brewery-card.jpg" }
    ) {
      ...portfolioFluidImage
    }
    likimapImage: file(relativePath: { eq: "portfolio/likimap-card.jpg" }) {
      ...portfolioFluidImage
    }
    houseOfBorelImage: file(
      relativePath: { eq: "portfolio/house-of-borel-card.jpg" }
    ) {
      ...portfolioFluidImage
    }
  }
`;

export default SliderContainer;
