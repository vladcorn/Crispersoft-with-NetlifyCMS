import React from 'react';
import { ResourceList } from '@ui/molecules';

const ResourceSection = () => {
  return (
    <section className='section fixed padding-vertical resource-section'>
      <div className='section-header'>
        <h2 className='title section-title'>
          "Доставка" предлагает новый, современный подход к решению вопроса
          доставки готовой еды и продуктов питания в реалиях современных рынков.
          Для этого у комплекса есть все необходимые ресурсы:
        </h2>
      </div>
      <div className='section-body'>
        <ResourceList />
      </div>
    </section>
  );
};

export default ResourceSection;
