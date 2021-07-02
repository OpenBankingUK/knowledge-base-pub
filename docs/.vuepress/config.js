const sidebar = require('./sidebar.js');
const nav = require('./nav.js');
const head = require('./head.js');
const devServer = require('./devServer.js');
const markdown = require('./markdown.js');

module.exports = {
    base: '/knowledge-base-pub/',
    description: 'OBIE Knowledge Base',
    head,
    themeConfig: {
        logo: '/assets/img/logo-dark.svg',
        sidebar,
        nav,
        sidebarDepth: 0,
        searchMaxSuggestions: 20,
        smoothScroll: true,
        lastUpdated: false,
    },
    markdown,
    extendMarkdown: (md) => {
        return md;
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        [
            '@vuepress/search',
            {
                searchMaxSuggestions: 30,
            },
        ],
    ],
    devServer,
    css: {
        sourceMap: true,
    },
    runtimeCompiler: true,
    chainWebpack: (config, isServer) => {
        return config;
    },
    evergreen: true,
    extraWatchFiles: [
        '.vuepress/devServer.js',
        '.vuepress/enhanceApp.js',
        '.vuepress/head.js',
        '.vuepress/markdown.js',
        '.vuepress/nav.js',
        '.vuepress/sidebar.js',
    ],
};
