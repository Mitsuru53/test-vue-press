module.exports = {
    themeConfig: {
        // GitHub Setting
        // repo: '',
        // repoLabel: '',
        // editLink:'',
        // editLinkText: '',
        algolia: {
            apikey: '7ed307c8736f4b8719d86db5a2d40733',
            indexName: 'RYCQUKL1GK'
        },
        displayAllHeaders: true,
        sidebar: [
            '/',
            '/about',
            '/coffee'
        ],
        sidebarDepth: 3,
        search: true, // default true
        searchMaxSuggestions: 5, // h1 h2 h3を調べる
        // serviceWorker: {
        //     updatePopup: true
        // },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about' },
            { text: 'Coffee', link: '/coffee' },
            { text: 'GitHub', link: 'https://github.com/packtpublishing/vuepress-quick-start-guide' },
            {
                text: 'SNS',
                items: [
                    { items: [
                        {
                            text: 'GitHub',
                            link: 'https://github.com/packtpublishing/vuepress-quick-start-guide'
                        }
                        ]}
                ]
            }
        ]
    }
}
