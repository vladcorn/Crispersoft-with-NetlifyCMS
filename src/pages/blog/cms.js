import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '@ui/templates';
import Blog1Image from '@images/blog/e-commerce-design/1.jpg';
import Blog2Image from '@images/blog/e-commerce-design/2.jpg';
import Blog3Image from '@images/blog/e-commerce-design/3.jpg';

import PaginationSimple from '@ui/pagination-simple';
import { Link } from 'gatsby';
import { SeoBlock } from '@ui/atoms';

const BlogItem = ({ data }) => {
  const {
    eCommerceDesign: { description, title, link, author },
  } = data.site.siteMetadata;

  return (
    <Layout>
      <SeoBlock
        title={title}
        description={description}
        author={author}
        link={link}
      />
      <section className='section first padding-vertical blog-article-section'>
        <div className='section-body fixed'>
          <img
            src={Blog1Image}
            className='img-responsive'
            alt='E-commerce design'
          />
          <h1>Choosing a CMS: Things to Look For</h1>
          <span>20.02.19</span>
          <p>
            To promote your company, you need the target audience to know about
            your project, be it an online store or a simple website. For this, a
            page on the Internet is best suited. But first you need to create
            it. CMS (Content Management System) can help with this. If
            translated into Russian, it turns out: "content management system."
            A business card site can be created by any average Internet user.
            But what if you need a corporate website, an online store or a
            serious blog? You can contact the company which specializes on web
            development and website design. But even in this case, you need to
            have a basic understanding of content management. In this article,
            we will examine what Content Management System is.
          </p>
          <h2>What is a CMS?</h2>
          <p>
            In general, Content Management System is a script-based software. It
            allows you to easily manage, change and control the contents of your
            site. Recent CMS have a wide range of features. Therefore, each
            person will be able to choose a content management system for their
            needs.
          </p>
          <h3>Most popular CMS</h3>
          <p>
            For 2019, the most popular website development and management system
            is WordPress which used by more than 50% of all people who manage
            their sites through CMS. Moreover, WordPress leads by a wide margin.
            The closest competitor - Joomla - is distributed only on 9% of
            sites. Next in popularity are: Drupal, vBulletin, Typo3
          </p>
          <p>
            All of them differ in their capabilities, interface, prices and so
            on. It is recommended to start with WordPress, and if you do not
            like it, choose another CMS.
          </p>
          <h3>The basic principles of work. Advantages and disadvantages</h3>
          <p>
            As mentioned above, the Content Management System was created to
            simplify the creation and management of the site. Conventionally,
            this system can be divided into two information stores. The first
            database contains content for the site. And in the second component
            of visualization, which demonstrate the site visitors posted data.
          </p>
          <p>
            For the convenience of working with the data posted on the page,
            most CMS engines are equipped with HTML code editors. These editors
            can help a person create code from simplified markup. This allows
            ordinary users to easily format text without much knowledge of HTML.
          </p>
          <img
            src={Blog2Image}
            className='img-responsive'
            alt='Confusing navigation'
          />
          <p>
            From all this information, the main advantages and disadvantages of
            the content management system can be derived. So, the advantages
            include:
          </p>
          <ul>
            <li>
              <p>Only the most basic programming knowledge is required;</p>
            </li>
            <li>
              <p>Allows you to create sites much faster;</p>
            </li>
            <li>
              <p>Conveniently manage and modify web pages;</p>
            </li>
            <li>
              <p>
                You can quickly and easily make a bright and attractive web
                design
              </p>
            </li>
          </ul>
          <p>
            CMS is also attractive because it has a sufficient number of
            benefits and only one disadvantage. So, using this software, it is
            quite difficult to create a unique page with unusual functionality.
            After all, the Content Management System is based on templates.
          </p>

          <h3>Practical use</h3>
          <p>
            As mentioned above, the Content Management System must be applied if
            you need to create a site and manage it without special programming
            knowledge. Also, the content management system is perfect for
            graphic design of the page. Although it is worth the effort to
            master any CMS, even the simplest.
          </p>

          <h2>Paid or free content management system. What to choose?</h2>
          <p>
            Conventionally, CMS engines can be divided into two categories:
            those that fit your project, and those that do not fit. Both groups
            have both free and paid software. If you can use the free engine
            without harm to the project, then it is better to use it. Otherwise,
            you have to fork out for a suitable Content Management System.
          </p>
          <h3>How to choose a functional engine?</h3>
          <p>
            Choosing a CMS is only necessary based on your needs. Do not forget
            that each individual content management system is very different
            from the others and is able to realize those ideas that others are
            not capable of. For example:
          </p>
          <ul>
            <li>
              <p>
                WordPress was originally created for blogs, but now its
                application is more diverse
              </p>
            </li>
            <li>
              <p>
                Joomla is free and easy to use, it is perfect for a simple site
              </p>
            </li>
            <li>
              <p> vBulletin is often used to create a forum;</p>
            </li>
            <li>
              <p>
                Drupal is a fairly universal system, but it is rather difficult
                to understand, it is better to use it for "heavy" sites.
              </p>
            </li>
          </ul>

          <p>
            In addition to the ability to implement a particular project, it is
            worth considering other software capabilities. For example, editor’s
            convenience, customization, productivity, SEO capabilities,
            Russification (for those who do not know English well).
          </p>

          <img
            src={Blog3Image}
            className='img-responsive'
            alt='Mistakes in e-commerce'
          />
          <h2>Conclusion</h2>
          <p>
            A properly selected content management system will allow you to
            create a high-quality website with an attractive design. This will
            help attract new visitors and even future customers. Moreover,
            building a page using the Content Management System is quite easy
            and fast. It’s better to choose free software, and buy only when
            free CMS do not fit the project.
          </p>
          <p>
            Our CrisperSoft team specializes in the development and
            implementation of design projects of any complexity and is ready to
            offer our help - <Link to='/contacts/'>write to us</Link>, we will
            discuss your project).
          </p>
        </div>
      </section>
      <section className='section center pagination-section'>
        <div className='section-body fixed'>
          <PaginationSimple
            prevLink='/blog/e-commerce-design/'
            nextLink='/blog/spa-pwa/'
          />
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        eCommerceDesign {
          title
          description
          link {
            name
            href
          }
        }
      }
    }
  }
`;

export default BlogItem;
