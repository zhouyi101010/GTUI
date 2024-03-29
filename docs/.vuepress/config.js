// 很多时候，我们引入自己的组件库，路径是不对的，
//这时就需要引入path，并在后面的chainWebpack进行配置
// const path = require('path')
// function resolve (dir) {
//   return path.join(__dirname, '../../', dir)
// }


// -------------------！！！重要！！！！-----------------
// 为了更好的理解，以下所有配置，注释，须配合查看页面实际效果！

module.exports = {
    title: 'Genertec Design', //标题
    description: '通用集团信息中心设计规范示例', //描述
    base: '/', //基本url
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }], // 增加一个自定义的 favicon
    ],
    // dest: './dist', //打包位置
    port: 6868, //端口号 谐音流弊流弊

    //主题配置
    themeConfig: {
        //顶部导航栏配置
        nav: [
            { text: '主页', link: '/' }, // 内部链接 以docs为根目录
            { text: '组件', link: '/guide/introduction' },
            {
                text: '文档',
                // 这里是下拉列表展现形式。
                items: [
                    { text: '2.0.0', link: '/components/2.0/catButton' },
                    { text: '1.0.0', link: '/components/1.0/' },
                ]
            }
        ],
        // 这里使用的是多个侧边栏设置
        sidebar: {
            // 如果你不需要文档版本功能，只需去掉2.0，1.0文件夹，将md文件直接放在components文件夹下
            '/components/2.0/': [{
                    title: '基础组件', // 必要的
                    path: '', //如果你不想'基础组件'可点击并有对应说明，就直接设为空，或者不写,并且nav的link也不要指向 '/components/2.0/'而是'/components/2.0/catButton' 
                    collapsable: false, // 可选的, 右侧侧边栏是否展开,默认值是 true
                    // 如果组件很多时，建议将children配置单独放到一个js文件中，然后进行引入
                    children: [{
                        title: 'Button 按钮',
                        path: 'catButton',
                    }]
                },
                {
                    title: '基础组件1',
                    path: './' //和上面的基础组件对应，这里基础组件1则可以点击，展示对应的介绍和说明，则此处设置为'./'，它会默认解析当前文件夹下的README.md。具体效果请查看页面进行对比
                },
            ],
            '/components/1.0/': [{
                title: '基础组件',
                path: '',
                collapsable: false,
                children: [{
                    title: 'Button 按钮',
                    path: 'catButton'
                }]
            }],
            '/guide/': [{
                title: '设计规范示例',
                collapsable: false,
                children: [{
                        title: '颜色字体',
                        path: 'colorAndFont',
                        collapsable: false,
                    },
                    {
                        title: '布局',
                        path: 'quickStart',
                        collapsable: false,
                    },
                    {
                        title: '组件',
                        path: 'tips',
                        collapsable: false,
                    },
                    {
                        title: '图标',
                        path: 'test',
                        collapsable: false,
                    }
                ]
            }]
        },
        sidebarDepth: 1, // 将同时提取markdown中h2，显示在侧边栏上
        lastUpdated: '最后更新于' // 文档更新时间：每个文件git最后提交的时间
    },

    markdown: {
        // lineNumbers: true // 代码块显示行号
    },

    plugins: [
        // 官方回到顶部插件
        '@vuepress/back-to-top',

        //官方图片放大组件 目前是所有img都可以点击放大。具体配置见https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html
        ['@vuepress/medium-zoom', { selector: 'img' }],

        // vssue 一个借助issue的评论插件 具体配置见https://vssue.js.org/zh/
        ['@vssue/vuepress-plugin-vssue', {
            // 设置 `platform` 而不是 `api` 我这里是在github平台
            platform: 'github',

            // owner与repo配置 https://github.com/${owner}/${repo}
            // 例如我的仓库地址为https://github.com/1011cat/shotCat_doc 则owner为1011cat，repo为shotCat_doc
            owner: 'your owner',
            repo: 'your repo',

            // 填写自己的OAuth App 信息。详见https://vssue.js.org/zh/options/#repo
            clientId: 'clientId',
            clientSecret: 'clientSecret',
            locale: 'zh', //使用的语言  这里是简体中文
            baseURL: 'https://github.com'
        }] //平台的 base URL
    ]


    // vuepress里修改webpack配置，使用的是chainWebpack进行链式调用
    // 具体使用可以参考我这个例子和 https://github.com/neutrinojs/webpack-chain/tree/v5
    // chainWebpack: (config, isServer) => {
    //   config.resolve.alias
    //     .set('@',resolve('src'))
    // }
};