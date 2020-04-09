import React from 'react';
import { Marquee } from './atoms';

const technologies = [
  'Javascript',
  'React.js',
  'React Native',
  'Angular.js',
  'Vue.js',
  'Next.js',
  'Gatsby.js',
  'Nuxt.js',
  'Node.js',
  'PHP',
  'Yii2',
  'Laravel',
  'Zend 2',
  'Python',
  'Solidity',
  'C',
  'C#',
  'C++',
  'ASP.NET',
];

const SectionTech = () => {
  return (
    <section className='section tech-section padding-vertical'>
      <div className='section-body'>
        <ul className='list-marquee'>
          <li>
            <Marquee direction='right' list={technologies} />
          </li>
          <li>
            <Marquee direction='left' list={technologies} />
          </li>
          <li>
            <Marquee direction='right' list={technologies} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionTech;
