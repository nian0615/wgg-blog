module.exports = {
    markdown: {
        lineNumbers: true
    },
    base: '/blog/',
    title: '灰熊の博客',
    description: '灰熊的博客',
    head: [
        ['link', { rel: 'icon', href: '/flower.ico' }],
    ],
    themeConfig: {
        nav: [
            { 
                text: "博客",
                link: "/blog/"
            },
            {
                text: "面试题",
                link: "/interview/"
            },
            {
                text: "工作",
                link: "/work/"
            },
            { 
                text: '阅读', 
                link: "/book/"
            },
            { 
                text: 'Github', 
                link: 'https://github.com/huixiongyu/blog'
            }
        ],
        sidebar: {
            '/blog/': [
                '',
                {
                    title: '生活学习',
                    collapsable: false,
                    children: [
                        '/blog/Personal/weekly2019'
                    ]
                },
                {
                    title:'JavaScript',
                    collapsable: true,
                    children:[
                      '/blog/JavaScript/Vue',
                      '/blog/JavaScript/uni-app'
                    ]
                },
                {
                    title:'Python',
                    collapsable: true,
                    children:[
                        '/blog/Python/flask'
                    ]
                },
                {
                    title: '数据库',
                    collapsable: true,
                    children: [
                        '/blog/DB/use-mongodb'
                    ]
                },
                {
                    title: '生活',
                    collapsable: true,
                    children: [
                        '/blog/Life/typecho-migration'
                    ]
                },
                {
                    title: 'Linux',
                    collapsable: true,
                    children: [
                        '/blog/Linux/when-we-use-deepin'
                    ]
                },
                {
                    title: '个人成长',
                    collapsable: true,
                    children: [
                        '/blog/Personal/learn-daily',
                        '/blog/Personal/weekly2019'
                    ]
                }
            ],
            '/interview/': [
                '',
                '00-experiences',
                '01-html-css',
                '02-javascript',
                '03-vue',
                '04-React',
                '05-min-program',
                '06-jquery',
                '07-about-frontend',
                '08-mobile',
                '08-webpack',
                '09-network-principle',
                '10-code',
                '11-algorithm',
                '12-other',
                '99-personal'
            ],
            '/book/': [
                '',
                'plan-and-record',
                {
                    title: 'HTML&CSS',
                    collapsable: false,
                    children: [
                        '/book/HTML&CSS/01-css-world',
                    ]
                },
                {
                    title: 'JavaScript',
                    collapsable: false,
                    children: [
                        '/book/JavaScript/01-Object-Oriented-JavaScript',
                    ]
                },                
                {
                    title:'Vue',
                    collapsable: false,
                    children:[
                      '/book/Vue/01-vue-up-and-running',
                    ]
                },
                {
                    title:'React',
                    children:[
                        '/book/React/01-deep-learning-react-stack'
                    ]
                }                
            ],
            '/work/': [
                '',
                '01-html-css',
                '02-javascript',
                '03-vue',
                '04-chart',
                '05-map',
                '06-tools',
                '07-mini-app'
            ],
            '/': [
                ''
            ]
        },
        sidebarDepth: 2,
        displayAllHeaders: true,
        nextLinks: true,
        prevLinks: true,
        lastUpdated: '更新时间', 
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '帮助我完善这篇内容🙏'
    }    
}