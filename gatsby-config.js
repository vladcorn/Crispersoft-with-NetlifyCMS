var host = 'crispersoft.com';
var protocol = 'https';

function resolveHref(path) {
  return `${protocol}://${host}${path || ''}`;
}

module.exports = {
  siteMetadata: {
    author: '@crispersoft',
    main: {
      title: 'Web and mobile application development company',
      description:
        'We create intuitive and appealing web and mobile apps. Years of experience and an experienced team will help you achieve your goals.',
      link: [{ name: 'canonical', href: resolveHref() }],
    },
    about: {
      title: 'About our development team',
      description:
        'Crisper Soft is a full-cycle web development and design company. We do the most convenient mobile and web apps since 2010.',
      link: [{ name: 'canonical', href: resolveHref('/about/') }],
    },
    contacts: {
      title: `Contact our team`,
      description: `Have questions or suggestions? Fill out the feedback form, let's discuss your project.`,
      link: [{ name: 'canonical', href: resolveHref('/contacts/') }],
    },
    portfolio: {
      title: `Portfolio - our best projects`,
      description: `We have interesting projects in  UI/UX design, web and mobile development, startup rising, e-commerce solutions. Let's enjoy our cases.`,
      link: [{ name: 'canonical', href: resolveHref('/portfolio/') }],
    },
    dawidWadach: {
      title: `Our project Dawid Wadach`,
      description: `The site was created without overloading with extra information. The visitor has the opportunity to view the designer's portfolio, get acquainted with information about him.`,
      link: [
        { name: 'canonical', href: resolveHref('/portfolio/dawid-wadach/') },
      ],
    },
    fangioShop: {
      title: `Our project Fangio-Shop`,
      description: `Project a shop with a minimalist addition of vintage blending, looking like an attractive showcase with a Swiss quality mark.`,
      link: [
        { name: 'canonical', href: resolveHref('/portfolio/fangio-shop/') },
      ],
    },
    houseOfBorel: {
      title: `Our project House of Borel`,
      description: `"Perfection in every seam" - this is the slogan of House of Borel and we embodied this slogan in the website.`,
      link: [
        { name: 'canonical', href: resolveHref('/portfolio/house-of-borel/') },
      ],
    },
    likimap: {
      title: `Our project Likimap`,
      description: `Project Likimap are platform for the possibility of selling real estate by action and multifunctional and intuitive search with convenient filters.`,
      link: [{ name: 'canonical', href: resolveHref('/portfolio/likimap/') }],
    },
    whitefrontierBrewery: {
      title: `Our project Whitefrontier Brewery`,
      description: `Traditional and respectable site of Czech brewery with integrated online beer store.`,
      link: [
        {
          name: 'canonical',
          href: resolveHref('/portfolio/whitefrontier-brewery/'),
        },
      ],
    },
    blog: {
      title: 'CrisperSoft Blog: About Web Design and Web Development',
      description:
        'CrisperSoft Company Blog. About UI/UX design, new technologies in web and mobile development. Guide articles, video tutorials, interviews with famous personalities.',
      link: [{ name: 'canonical', href: resolveHref('/blog/') }],
    },
    websiteDesignAffects: {
      title: `Website redesign. How to increase your sales`,
      description: `A site is one of the links that form the complete business model of a company. Most owners of commercial websites often underestimate design. In this article, we’ll look at how design affects sales.`,
      link: [
        {
          name: 'canonical',
          href: resolveHref('/blog/website-design-affects/'),
        },
      ],
    },
    eCommerceDesign: {
      title: `The most common UX- design errors in E-Commerce`,
      description: `User Experience is an important factor for the success of any online store. In the pursuit of the best, there are often a lot of mistakes that can become fatal. We talk about the most common of them.`,
      link: [
        {
          name: 'canonical',
          href: resolveHref('/blog/e-commerce-design/'),
        },
      ],
    },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `@images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WLCRWZD',
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://mc.webvisor.org'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Crispersoft`,
        short_name: `Crispersoft`,
        description: `Crispersoft Site best of the best`,
        start_url: `/`,
        background_color: `#1F1F1F`,
        theme_color: `#1F1F1F`,
        display: `minimal-ui`,
        icon: `src/assets/images/crispersoft-icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: 'fav-icons/icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'fav-icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'fav-icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'fav-icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'fav-icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'fav-icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'fav-icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'fav-icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('autoprefixer')],
        implementation: require('sass'),
        includePaths: [`${__dirname}/src/styles`],
        useResolveUrlLoader: {
          options: {
            sourceMap: true,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src', // <- will be used as a root dir
        aliases: {
          '@images': './assets/images', // <- will become ./src/components
          '@ui': './components', // <- will become ./src/components
          '@styles': './design-system', // <- will become ./src/components
          '@hooks': './hooks', // <- will become ./src/components
          '@contexts': './contexts', // <- will become ./src/components
          static: {
            root: './public', // <- will used as this alias' root dir
            alias: './static', // <- will become ./public/static
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
        svgoConfig: {
          removeViewBox: false,
        },
      },
    },
    'gatsby-plugin-linaria',
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-brotli',
    //   options: {
    //     extensions: ['css', 'html', 'js', 'svg'],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'server',
        analyzerPort: '8888',
        analyzerHost: 'localhost',
        defaultSizes: 'gzip',
      },
    },
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {},
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/src/styles/index.scss'],
      },
    },
    `gatsby-plugin-netlify`,
    // {
    //   resolve: 'gatsby-plugin-load-script',
    //   options: {
    //     src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js',
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
