import React from 'react';
import BackgroundLine from './background-line';
import { ContactsTable } from './atoms';
import { ContactsForm } from './molecules';

const SectionContacts = () => {
  return (
    <section className='section only center padding-vertical contacts-section'>
      <BackgroundLine type='left-1' positionY='50%' />
      <div className='section-body fixed'>
        <div className='form-container'>
          <h1 className='title main-title'>
            Time to say <span className='text-stroke'>hello</span>
          </h1>
          <div className='form-wrapper'>
            <ContactsForm />
          </div>
        </div>
        <div className='contacts-container'>
          <div className='contacts-wrapper'>
            <h2 className='title'>Contact</h2>
            <p className='text text-description'>
              So, how about a quick call, chat, or just fill the form right here
              to get everything you want to know
            </p>
            <ContactsTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContacts;
