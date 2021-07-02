module.exports = {
    // https://vuepress.vuejs.org/config/#markdown-linenumbers
    lineNumbers: false,
    // options for markdown-it-anchor
    anchor: {
        permalinkBefore: true,
        permalink: true,
        level: [
            // We don't want to include the top-level header, so remove level 1.
            // 1,
            2,
            3,
            4,
            5,
            6,
        ],
        // callback: (args) => {
        //     console.log('markdown:anchor:callback args=', args);
        // },
        // format: (args) => {
        //     console.log('markdown:anchor:format args=', args);
        // },
    },
    // options for markdown-it-toc
    toc: {
        includeLevel: [
            // We don't want to include the top-level header, so remove level 1.
            // 1,
            2,
            3,
            4,
            5,
            6,
        ],
        // If you want to debug this, e.g., to compare it again Confluence, uncomment line below
        // and the table of contents will be numbered (ol=ordered list) instead of being
        // un-numbered (ul=unordered list).
        // 'listType': 'ol',

        // callback: (args) => {
        //     console.log('markdown:toc:callback args=', args);
        // },
        // format: (args) => {
        //     console.log('markdown:toc:formatormat args=', args);
        // },
    },
    // https://vuepress.vuejs.org/plugin/option-api.html#extendmarkdown
    extendMarkdown: (md) => {
        // use more markdown-it plugins!
        // Converts '\n' in paragraphs into <br>
        // md.set({ breaks: true });
        // console.log('markdown:extendMarkdown md=', md);
        return md;
    },
    // https://vuepress.vuejs.org/plugin/option-api.html#chainmarkdown
    chainMarkdown: (config) => {
        // console.log('markdown:chainMarkdown config=', config);
        return config;
    },
};
