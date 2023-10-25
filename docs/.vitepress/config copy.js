// 头部导航
const navConfig = require("./config/navConfig");
const sidebarConfig = require("./config/sideBarConfig");

export default {
  title: "zmx的前端日志",
  description: "zmx2321",

  // 打包目录
  outDir: "../dist",

  base: "/vitepress_empty/",

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],

  // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  lastUpdated: true, // string | boolean

  // 代码块显示行号
  markdown: {
    lineNumbers: true,
  },

  // 主题配置
  themeConfig: {
    // 导航上的logo
    logo: "/logo.png",

    // 隐藏logo右边的标题
    siteTitle: false,

    // 导航栏配置
    nav: navConfig,

    // 左侧导航栏
    sidebar: sidebarConfig,

    /**
     * 0 禁用header
     * 默认的深度是 1，它将提取到 h2 的标题
     * 最大的深度为 2，它将同时提取 h2 和 h3 标题
     */
    sidebarDepth: 2,

    // 右侧边栏配置，默认值是"In hac pagina"
    outlineTitle: "本页目录",

    // 编辑链接
    editLink: {
      pattern: "https://github.com/zmx2321/vitepress_empty",
      text: "在 github 上编辑此页",
    },

    // 站点页脚配置
    footer: {
      // message: "Released under the MIT License",
      copyright: "MIT Licensed | Copyright © 2020-present zmx2321@gmail.com",
    },

    // 社交和项目链接地址配置
    socialLinks: [
      { icon: "github", link: "https://github.com/zmx2321/vitepress_empty" },
      // 也可以自定义svg的icon:
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
      //   },
      //   link: "...",
      // },
    ],
    // 搜索
    algolia: {
      apiKey: "your_api_key",
      indexName: "index_name",
    },
    // returnToTopLabel: "返回顶部",
    lastUpdatedText: "最后更新", // string

    // 默认情况下，当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新
    activeHeaderLinks: true,

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    // 当你提供了 themeConfig.repo 选项，将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 "Edit this page" 链接
    repo: "zmx2321/vitepress_empty",

    // 假如文档不是放在仓库的根目录下
    docsDir: "docs",

    // 启用页面滚动效果
    smoothScroll: true,

    // 是否开启 PWA
    serviceWorker: true,
  },

  // 插件
  plugins: [
    "@vuepress/active-header-links", // 页面滚动时自动激活侧边栏链接的插件
    "@vuepress/back-to-top", // 返回顶部插件
    "@vuepress/medium-zoom", // 图片预览插件
    "@vuepress/nprogress", //页面顶部进度条
    /* [
      "vuepress-plugin-comment",
      {
        choosen: "valine",
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: "#valine-vuepress-comment",
          appId: "PzBRAo1U271H7HJLjo1z72Nd-gzGzoHsz",
          appKey: "8eVX45J8i5VFTlkejnfBMuhh",
          visitor: false, // 阅读量统计
        },
      },
    ], */

    // 移除console
    // drop_console和pure_funcs的区别，drop_console是把console.log()注释掉了，而pure_funcs是把console.log()移除掉了
    /* new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
              warnings: false,
              drop_debugger: true, //debugger
              drop_console: true,// console
              pure_funcs:['console.log'] // 移除console
          },
        },
        sourceMap: false,
        parallel: true,
    }), */
  ],
};
