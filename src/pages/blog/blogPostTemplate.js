import React from 'react';
import { Layout } from '@ui/templates';
import { graphql } from 'gatsby';
import { SeoBlock } from '@ui/atoms';
import { formatBlogSlug } from '../../libs/formatSlug';
import '../../styles/index.scss';

export const BlogPostTemplate = ({
  content,
  date,
  featuredimage,
  title,
  span,
}) => {
  return (
    <section className='section first padding-vertical blog-article-section'>
      <div className='section-body fixed'>
        <img
          src={featuredimage}
          className='img-responsive'
          alt={title + span}
        />
        <h1>
          {title} {span}
        </h1>
        <span>{date}</span>

        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  );
};

export const BlogPostTemplatePreview = ({
  content,
  date,
  featuredimage,
  title,
  span,
}) => {
  return (
    <Layout>
      <section className='section first padding-vertical blog-article-section'>
        <div className='section-body fixed'>
          <img src={featuredimage} className='img-responsive' alt={title} />
          <h1>
            {title} {span}
          </h1>
          <span>{date}</span>

          <div>{content}</div>
        </div>
      </section>
    </Layout>
  );
};

const BlogPost = (props) => {
  const { data, location } = props;
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;
  return (
    <Layout>
      <SeoBlock
        title={frontmatter.title}
        titleSpan={frontmatter.title_span}
        description={frontmatter.description}
        author={'@crispersoft'}
        link={[{ name: 'canonical', href: location.href }]}
      />
      <BlogPostTemplate
        title={frontmatter.title}
        span={frontmatter.title_span}
        date={frontmatter.date}
        content={html}
        featuredimage={frontmatter.featuredimage}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByID($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage
        title_span
      }
    }
  }
`;

export default BlogPost;
