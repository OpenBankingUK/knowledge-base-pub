// https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar

const collapsable = true;
const sidebarDepth = 0;

module.exports = [
    {
        title: 'Conformance Tool',
        path:'/conformance-tools/',
        collapsable: collapsable,
        sidebarDepth,
        children: [
            {
                title: 'Dynamic Client Registration',
                path: '/conformance-tools/dynamic-client-registration-tool/',
            },
            {
                title: 'Functional Conformance Tool',
                path: '/conformance-tools/functional-conformance-tool/',
            },
            {
                title: 'Security Conformance Tool',
                path: '/conformance-tools/security-conformance-tool/',
            }
        ],
    },
    {
        title: 'Standards',
        path:'/standards/',
        collapsable: collapsable,
        sidebarDepth,
        children: [
            {
                title: 'Open Data API Specifications',
                path: '/standards/open-data.md',
            },
            {
                title: 'Read Write Data Specification',
                path: '/standards/read-write.md',
            },
            {
                title: 'Customer Experience Guidelines',
                path: '/standards/ceg.md',
            },
            {
                title: 'Operational Guidelines',
                path: '/standards/og.md',
            },
            {
                title: 'Dynamic Client Registration',
                path: '/standards/dcr.md',
            },
            {
                title: 'MI reporting',
                path: '/standards/mi.md',
            },
            {
                title: 'General',
                path:'/standards/general/',
                collapsable: collapsable,
                sidebarDepth,
                children: [
                    {
                        title: 'New SCA (Art 10A and Art 36(6) changes',
                        path: '/standards/general/90days.md',
                    },
                    {
                        title: 'Company Name',
                        path: '/standards/general/company-name.md',
                    },
                    {
                        title: 'Message Signing',
                        path: '/standards/general/message-sign.md',
                    },
                    {
                        title: 'Variable Recurring Payment',
                        path: '/standards/general/vrp.md',
                    }
                ],
            }
        ],
    },
    {
        title: 'Changelog',
        path:'./',
        collapsable: collapsable,
        sidebarDepth,
        children: [
            {
                title: 'Changelog',
                path: './CHANGELOG.md',
            }
        ],
    },

];
