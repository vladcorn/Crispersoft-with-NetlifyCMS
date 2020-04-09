import React from 'react';
import { ResourceCard } from '../atoms';

const ResourceList = () => {
  return (
    <ul>
      <li>
        <ResourceCard />
      </li>
      <li>
        <ResourceCard />
      </li>
      <li>
        <ResourceCard />
      </li>
    </ul>
  );
};

export default ResourceList;
