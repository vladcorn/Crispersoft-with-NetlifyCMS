import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import BackgroundLine from './background-line';
import Img from 'gatsby-image';
// import { useSpring } from 'react-spring';

// import Fade from 'react-reveal/Fade';

// const calc = (x, y) => [
//   -(y - window.innerHeight / 2) / 20,
//   (x - window.innerWidth / 2) / 20,
//   1.1,
// ];
// const trans = (x, y, s) =>
//   `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

// const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
//   const [entry, updateEntry] = React.useState({});
//   const [node, setNode] = React.useState(null);
//   const observer = React.useRef(null);

//   React.useEffect(() => {
//     if (observer.current) {
//       observer.current.disconnect();
//     }

//     observer.current = new window.IntersectionObserver(
//       ([entry]) => {
//         updateEntry(entry);
//       },
//       {
//         root,
//         rootMargin,
//         threshold,
//       }
//     );

//     const { current: currentObserver } = observer;

//     if (node) {
//       currentObserver.observe(node);
//     }

//     return () => {
//       currentObserver.disconnect();
//     };
//   }, [node, root, rootMargin, threshold]);

//   return [setNode, entry];
// };

const SectionMainInfo = () => {
  // const [props, set] = useSpring(() => ({
  //   xys: [0, 0, 1],
  //   config: { mass: 5, tension: 350, friction: 40 },
  // }));

  const {
    image: { childImageSharp },
  } = useStaticQuery(infoFluidImageQuery);

  return (
    <section className='section info-section padding-vertical'>
      <BackgroundLine type='left-1-reverse' positionY='92%' />
      <div className='section-body fixed'>
        {/* <Fade left> */}
        <div className='image-wrapper'>
          <Img fluid={childImageSharp.fluid} alt='Info photo' />
        </div>
        {/* <animated.div
          className='image-wrapper'
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <Img fluid={childImageSharp.fluid} alt='Info photo' />
        </animated.div> */}
        {/* </Fade> */}
        <div className='info'>
          {/* <Fade right> */}
          <div className='title-wrapper'>
            <h2 className='title'>
              Who we <span className='text-stroke'>are</span>
            </h2>
          </div>
          {/* </Fade> */}
          {/* <Fade right> */}
          <div>
            <p className='text text-description'>
              CrisperSoft is skillful Ukrainian crew. We have a terrific
              experience in websites, mobile apps, software development in any
              programming languages, testing and UI/UX design. Our team are
              staffed by the best engineers that are highly competent. Surfing
              the Internet maybe you don't even guess, that platform you visit
              are developed by CrisperSoft.
            </p>
          </div>
          {/* </Fade> */}
          <div className='link-wrapper'>
            <span className='link-line'></span>
            <Link className='link uppercase' to='/about/'>
              More&nbsp;info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const infoFluidImage = graphql`
  fragment infoFluidImageFragment on File {
    childImageSharp {
      fluid(maxWidth: 850, srcSetBreakpoints: [400, 576, 768]) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

const infoFluidImageQuery = graphql`
  query InfoFluidImage {
    image: file(relativePath: { eq: "team/team-main.png" }) {
      ...infoFluidImageFragment
    }
  }
`;

export default SectionMainInfo;
