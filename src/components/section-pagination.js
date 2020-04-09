import React from 'react'

const SectionPagination = () => {
  return (
    <section className='section center pagination-section'>
      <div className='section-body fixed'>
        <div className='pagination'>
          <a className='pagination-prev' href='#'>
            <i className='i-minus'></i>
          </a>
          <span className='pagination-counter'>01 / 04</span>
          <a className='pagination-next' href='#'>
            <i className='i-right-open'></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default SectionPagination
