import React from 'react';
import ListTeam from './list-team';

const SectionTeam = ({ onlySlider }) => {
  return (
    <section className='section team-section about-team-section padding-vertical'>
      <div className='section-body'>
        <h2 className='title vertical-padding'>Dreamteam</h2>
        <ListTeam onlySlider={onlySlider} />
      </div>
    </section>
  );
};

export default SectionTeam;
