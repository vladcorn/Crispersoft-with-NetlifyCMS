import React from 'react';
import { Link } from 'gatsby';

const PaginationSimple = ({ prevLink, nextLink }) => {
  return (
    <div className='pagination-simple'>
      <Link className='link uppercase h1' to={prevLink}>
        Prev
      </Link>
      <Link className='link uppercase h1' to={nextLink}>
        Next
      </Link>
    </div>
  );
};

export default PaginationSimple;
