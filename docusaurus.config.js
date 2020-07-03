module.exports = {
    title: 'Platformer Cloud Documentation',
    tagline: 'Platformer Docs',
    url: 'https://docs.dev.x.platformer.com',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'platformer-com', // Usually your GitHub org/user name.
    projectName: 'platformer-docs', // Usually your repo name.
    themeConfig: {
        defaultDarkMode: true,
        image: 'opengraph/platformer-documentation.jpg',
        navbar: {
            logo: {
                alt: 'Platformer Cloud',
                src: 'img/platformer-logo.png',
                srcDark: 'img/platformer-logo-dark.png',
            },
            links: [
                {
                    to: 'docs/getting-started/01-introduction',
                    activeBasePath: 'docs/getting-started/',
                    label: 'Getting Started',
                    position: 'left',
                },
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            // links: footerLinks,
            copyright: `Copyright © ${new Date().getFullYear()} Platformer Cloud Pty Ltd`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    homePageId: 'styleguide',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/platformer-com/platformer-docs',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
            },
        ],
    ],
    plugins: ['docusaurus-plugin-sass'],
};

const footerLinks = [
    {
        title: 'Docs',
        items: [
            {
                label: 'Style Guide',
                to: 'docs/',
            },
            {
                label: 'Second Doc',
                to: 'docs/doc2/',
            },
        ],
    },
    {
        title: 'Community',
        items: [
            {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
            },
            {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
            },
        ],
    },
    {
        title: 'More',
        items: [
            {
                label: 'Blog',
                to: 'blog',
            },
            {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
            },
        ],
    },
];
