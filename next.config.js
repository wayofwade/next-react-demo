/** @type {import('next').NextConfig} */
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin; // 分析文件体积工具
// const ESLintPlugin = require('eslint-webpack-plugin');
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const { generate } = require('@ant-design/colors') //antd颜色梯度算法


const nextConfig = {
  reactStrictMode: true,
  // webpack配置
  webpack: (config, options) => {
    const getAntdSerials = (color) => {
      var lightens = new Array(9).fill().map((t, i) => {
        return ThemeColorReplacer.varyColor.lighten(color, i / 10)
      })
      const colorPalettes = generate(color)
      const rgb = ThemeColorReplacer.varyColor.toNum3(color.replace('#', '')).join(',')
    
      return lightens.concat(colorPalettes).concat(rgb)
    }
    /* config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: pluginOptions.options,
        },
      ],
    }) */
    const pluginList = [
      // new ESLintPlugin()
    ]
    /* config.plugins.push(new BundleAnalyzerPlugin({     
      analyzerHost: "127.0.0.1",
    //  将在“服务器”模式下使用的端口启动HTTP服务器。
    analyzerPort: 8800,
    //  路径捆绑，将在`static`模式下生成的报告文件。
    //  相对于捆绑输出目录。
    // reportFilename: "report.html",
    //  模块大小默认显示在报告中。
    //  应该是`stat`，`parsed`或者`gzip`中的一个。
    //  有关更多信息，请参见“定义”一节。
    // defaultSizes: "parsed",
    // 在默认浏览器中自动打开报告
    openAnalyzer: false})) */
    config.plugins.push(...pluginList)
      //添加主题色，插件具体配置参考对应文档，可以设置抽出来的css是style插入还是文件夹暴漏
      config.plugins.push(
        new ThemeColorReplacer({
          matchColors: getAntdSerials('#5C91F6'), // 设置为当前项目ui规定的主题色
          injectCss: true,
        }),
      )
    return config
  },
}

module.exports = nextConfig
