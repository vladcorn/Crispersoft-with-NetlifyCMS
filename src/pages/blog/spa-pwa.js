import React from 'react';
import { graphql } from 'gatsby' 
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
          <h1>Single-page (SPA) and multi-page (PWA) web-applications</h1>
          <span>20.02.19</span>
          <p>
            There are three main approaches to web-application development:
            single-page (SPA), multi-page (MPA) and progressive (PWA). They
            stand out among other approaches by the simplicity of development,
            user friendliness and wide opportunities for business growth.
          </p>
          <p>
            Comparative analysis of MPA, SPA and PWA approaches is given below.
          </p>
          <h2>Single-page applications</h2>
          <p>
            SPA or Single Page Application is a one-page web application that
            loads onto a single HTML page. Thanks to dynamic updating by means
            of JavaScript, during use it is not necessary to reload or load
            additional pages. In practice, this means that the user sees all the
            main content in the browser, and when scrolling or navigating to
            other pages, instead of a full reload, the necessary elements are
            simply loaded.
          </p>
          <p>
            In the process of work, user can think that he didn’t launch a
            website, but a desktop application, as it instantly responds to all
            his actions, without delays or “hangs”.
          </p>
          <p>
            This effect can be achieved with the help of advanced JavaScript
            frameworks:<bold> Angular, React, Ember, Meteor, Knockout.</bold>
          </p>
          <p>
            Examples of dynamic applications: Gmail, Google Maps, Facebok,
            GitHub, Meduza.
          </p>
          <h3>Benefits</h3>
          <ul>
            <li>
              <p>
                Seo optimization requires solutions in the form of server
                rendering - due to the fact that content is loaded using AJAX
                technology, which implies a dynamic change in the content of a
                page, and stability is important for optimization;
              </p>
            </li>
            <li>
              <p>
                Load on the browser - due to the fact that the client frameworks
                are heavy, they load for a rather long time;
              </p>
            </li>
            <li>
              <p>
                JavaScript support is required - without JS you cannot fully use
                the full functionality of the application;
              </p>
            </li>
            <li>
              <p>
                Memory leak in Java Script - due to poor protection, SPA is more
                susceptible to malicious
              </p>
            </li>
          </ul>
          <h2>Multi-page application</h2>
          <p>
            <bold>MPA or Multi Page Application</bold> are multi-page
            applications that work in a traditional way. This means that with
            every minor data change or loading of new information, the page is
            updated. Such applications are heavier than single-page
            applications, so their use is only advisable in cases where you need
            to display a large amount of content.
          </p>
          <img
            src={Blog2Image}
            className='img-responsive'
            alt='Confusing navigation'
          />
          <h3>Benefits</h3>
          <ul>
            <li>
              <p>
                Simple SEO optimization - you can optimize each of the pages of
                the application for the necessary key queries;
              </p>
            </li>
            <li>
              <p>
                Familiarity to users - due to a simple interface and classic
                navigation.
              </p>
            </li>
          </ul>

          <h3>Disadvantages</h3>
          <ul>
            <li>
              <p>
                There is a close connection between the backend and the
                frontend, so they cannot be developed in parallel;
              </p>
            </li>
            <li>
              <p>
                x Complex development - require the use of frameworks both on
                the client side and on the server side, which increases the
                development time and budget.
              </p>
            </li>
          </ul>

          <h2>SPA or MPA, what is your choice?</h2>
          <p>
            When choosing the type of web application, you need to focus on why
            you are creating it. A multi-page website is suitable for an online
            store with a large number of goods and services, and if you, for
            example, have an infobusiness where you can present all the
            information in a compressed web space, a one-page website is
            suitable.
          </p>
          <h3>Choose SPA</h3>
          <p>It is advisable if:</p>
          <ul>
            <li>
              <p>there is a need for a multifunctional, rich user interface</p>
            </li>
            <li>
              <p>
                there is a need for an API - the use of ready-made blocks for
                building an application.
              </p>
            </li>
          </ul>
          <h3>Choose MPA</h3>
          <p>It is advisable if:</p>
          <ul>
            <li>
              <p>Applications are used only for reading information;</p>
            </li>
            <li>
              <p>
                There is a need to use the application in browsers without
                JavaScript support.
              </p>
            </li>
          </ul>

          <h2>Why do you need PWA?</h2>
          <p>
            Progressive Web Application interact with the user as an
            application. They can be installed on the main screen of the
            smartphone, send push notifications and work offline. Example:
            Google Docs.
          </p>

          <h3>Benefits</h3>

          <ul>
            <li>
              <p>
                Cross-platform - can work simultaneously with several operating
                systems;
              </p>
            </li>
            <li>
              <p>
                High speed and the ability to start and display data offline
                with instant loading;
              </p>
            </li>
            <li>
              <p>High installation speed;</p>
            </li>
            <h3>Disadvantages</h3>
            <li>
              <p>
                Rapid development - to create a PWA, you do not need a separate
                site, just change the existing one.
              </p>
            </li>
          </ul>
          <p>
            Not all browsers support the basic functions of such applications
            (for example, Firefox and Edge).
          </p>

          <img
            src={Blog3Image}
            className='img-responsive'
            alt='Mistakes in e-commerce'
          />
          <h2>Conclusion</h2>
          <p>
            SPA and PWA are websites that are gradually displacing classic MPAs.
            This is due to the fact that they are easier to develop, work faster
            and like users. However, they have a weak point - SEO optimization.
            So far, not all browsers can work with them normally, therefore, to
            make such applications friendly for SEO, you need to resort to a
            number of tricks. MPA sites in this regard are simpler and more
            reliable.
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
            prevLink='/blog/website-design-affects/'
            nextLink='/blog/cms/'
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
