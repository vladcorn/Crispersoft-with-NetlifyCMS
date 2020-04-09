import React from 'react';
// import Blog1Image from '@images/blog/e-commerce-design/1.jpg';
// import Blog2Image from '@images/blog/website-design-affects/1.jpg';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { formatBlogSlug } from '../libs/formatSlug';

// const data = [
//   {
//     link: '/blog/e-commerce-design/',
//     src: Blog1Image,
//     title: 'E-COMMERCE DESIGN. ERRORS IN',
//     title_span: 'UX',
//     date: '20.01.19',
//     description:
//       'UI / UX web design is a combination of solutions that are based  on the behavioral factors of users and are designed to adapt an interaction with the site. Creating a convenient and harmonious interface involves the development of every detail, so novice designers often make mistakes in their work. Consider the most common examples of failed UX.',
//   },
//   {
//     link: 'blog/website-design-affects/',
//     src: Blog1Image,
//     title: 'HOW THE WEBSITE DESIGN AFFECTS SALES AND WHY THE REDESIGN IS ',
//     title_span: 'NECESSARY',
//     date: '20.01.19',
//     description:
//       'Large commercial sites located on the top lines of search engines, as well as eminent market leaders, carry out a complete redesign of their resources at least 1 time in 3 years! This approach allows them not only to hold positions but also to increase the volume and loyalty of the user audience every month.',
//   },
//   {
//     link: 'blog/spa-pwa/',
//     src: Blog2Image,
//     title: 'Single-page and Multi-page',
//     title_span: 'web applications',
//     date: '20.02.19',
//     description:
//       'What are the differences between MPA, SPA and PWA and for which purposes they can be applied.',
//   },
//   {
//     link: 'blog/cms/',
//     src: Blog2Image,
//     title: 'Choosing a CMS: Things to',
//     title_span: 'Looking for',
//     date: '20.02.19',
//     description:
//       'Creating a website from scratch is difficult, because for this you need to know HTML hype-markup. To solve this problem, special engines were created that greatly facilitate the creation and management of the site. And they are called Content Management System, or simply CMS.',
//   },
// ];

const ListItem = ({ data }) => {
  const slug = formatBlogSlug(data.frontmatter.title, data.frontmatter.date);

  const link = `blog/${encodeURIComponent(slug)}/`,
    src = data.frontmatter.featuredimage,
    title = data.frontmatter.title,
    title_span = data.frontmatter.title_span,
    date = data.frontmatter.date,
    description = data.excerpt;
  return (
    <li className='item-blog'>
      <Link to={link}>
        <div className='card card-blog'>
          <div className='card-image'>
            <img src={src} className='img-responsive' alt={title} />
          </div>
          <div className='card-content'>
            <div className='card-header'>
              <div className='card-title'>
                <h2>
                  {title}&nbsp;
                  <span className='text-stroke'>{title_span}</span>
                </h2>
                <span className='card-date'>{date}</span>
              </div>
              <div className='card-subtitle text'></div>
            </div>
            <div className='card-body'>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

const SectionBlog = () => {
  const dataList = useStaticQuery(graphql`
    query GetAllPosts {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              date(formatString: "DD.MM.YYYY")
              description
              featuredimage
              templateKey
              title
              title_span
            }
          }
        }
      }
    }
  `);
  const { edges } = dataList.allMarkdownRemark;
  return (
    <section className='section first padding-vertical blog-section'>
      <div className='section-body fixed'>
        <h1 className='title-section'>blog</h1>
        <ul className='list list-blog'>
          {edges.map((item) => (
            <ListItem data={item.node} key={item.node.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionBlog;
