// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'vamshi.nl',
  tagline: '🧑🏻‍💻 🧑🏼‍🎨 🧑🏻‍🍳',
  url: 'https://www.vamshi.nl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑🏻‍💻 </text></svg>',
  organizationName: 'pvamshi', // Usually your GitHub org/user name.
  projectName: 'vamshi.nl', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath:'/',
          showReadingTime: true,

          // Please change this to your repo.
          editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '🧑🏻‍💻 vamshi.nl',
      items: [],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
* Required for any multi-instance plugin
*/
        id: 'life',
        /**
* URL route for the blog section of your site.
* *DO NOT* include a trailing slash.
*/
        routeBasePath: '/life',
        /**
* Path to data on filesystem relative to site dir.
*/
        postsPerPage: 2,
        editUrl:
          'https://github.com/facebook/docusaurus/edit/master/website/my-blog',
        path: 'life',
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
        },
      },
    ],
  ],


};
module.exports = config;
