import React from 'react';
import { BlogPostTemplatePreview } from '../../pages/blog/blogPostTemplate';

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <BlogPostTemplatePreview
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      featuredimage={entry.getIn(['data', 'featuredimage'])}
      span={entry.getIn(['data', 'title_span'])}
    />
  );
};
export default BlogPostPreview;
