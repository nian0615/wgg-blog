module.exports = {
    markdown: {
        lineNumbers: true
    },
    base: '/wgg-blog/',
    title: '王果果 の博客',
    description: '王果果的博客',
    head: [
        ['link', {
            rel: 'icon',
            href: '/flower.ico'
        }],
    ],
    themeConfig: {
        nav: [{
                text: "博客",
                link: "/blog/"
            },
            {
                text: "面试题",
                link: "/interview/"
            },
            /*  {
                 text: "工作",
                 link: "/work/"
             }, */
            /*   {
                  text: '阅读',
                  link: "/book/"
              }, */
            {
                text: 'Github',
                link: 'https://github.com/nian0615'
            }
        ],
        sidebar: {
            '/blog/': [{
                    title: 'Css',
                    collapsable: true,
                    children: [
                        '/blog/Css/css'
                    ]
                }, {
                    title: 'JavaScript',
                    collapsable: true,
                    children: [
                        '/blog/JavaScript/JsUp'
                    ]
                },
                {
                    title: 'Uniapp',
                    collapsable: true,
                    children: [
                        '/blog/Uniapp/uni-app'
                    ]
                },
                {
                    title: 'Vue',
                    collapsable: true,
                    children: [
                        '/blog/Vue/vue'
                    ]
                },
                {
                    title: '数据库',
                    collapsable: true,
                    children: [
                        '/blog/DB/Learnmongodb',
                        '/blog/DB/koa'
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
                    title: 'Vue',
                    collapsable: false,
                    children: [
                        '/book/Vue/01-vue-up-and-running',
                    ]
                },
                {
                    title: 'React',
                    children: [
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