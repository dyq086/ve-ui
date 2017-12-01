webpackJsonp([1],{"25yB":function(s,a,t){s.exports=t("Jakf")},Ihs5:function(s,a,t){"use strict";var n=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0,!1,!1)},l=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("快速上手")]),s._v(" "),t("h3",[s._v("使用 vue-cli")]),s._v(" "),t("p",[s._v("首先安装vue-cli 脚手架，详情可以参考vue 文档 "),t("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/installation.html"}},[s._v("vue")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-shell"}},[t("span",{attrs:{class:"hljs-meta"}},[s._v("$")]),t("span",{attrs:{class:"bash"}},[s._v(" npm install -g vue-cli")]),s._v("\n"),t("span",{attrs:{class:"hljs-meta"}},[s._v("\n$")]),t("span",{attrs:{class:"bash"}},[s._v(" vue init webpack projectname")]),s._v("\n")])]),s._v(" "),t("h3",[s._v("安装")]),s._v(" "),t("h4",[s._v("NPM")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-shell"}},[t("span",{attrs:{class:"hljs-meta"}},[s._v("$")]),t("span",{attrs:{class:"bash"}},[s._v(" npm install vue-etc-ui --save-dev")]),s._v("\n")])]),s._v(" "),t("h3",[s._v("引入组件（2种方式）")]),s._v(" "),t("h4",[s._v("全局引入")]),s._v(" "),t("p",[s._v("在 main.js 中写入以下内容：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-js"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" etcui "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'etc-ui'")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue-etc-ui/lib/etc-ui.css'")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" App "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'./App.vue'")]),s._v("\n\nVue.use(etcui)\n\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": { App }\n})\n")])]),s._v(" "),t("h4",[s._v("按需引入")]),s._v(" "),t("p",[s._v("借助 "),t("a",{attrs:{href:"https://github.com/etc-ui/babel-plugin-component"}},[s._v("babel-plugin-component")]),s._v("，我们可以只引入需要的组件，以达到减小项目体积的目的。\n首先，安装 babel-plugin-component：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-shell"}},[t("span",{attrs:{class:"hljs-meta"}},[s._v(" $")]),t("span",{attrs:{class:"bash"}},[s._v(" npm install babel-plugin-component --save-dev")]),s._v("\n\n")])]),s._v(" "),t("p",[s._v("然后，将 .babelrc 中的 plugins 修改为：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-js"}},[t("span",{attrs:{class:"hljs-string"}},[s._v('"plugins"')]),s._v(": [\n      ["),t("span",{attrs:{class:"hljs-string"}},[s._v('"component"')]),s._v(", [\n\n          {\n              "),t("span",{attrs:{class:"hljs-string"}},[s._v('"libraryName"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"vue-etc-ui"')]),s._v(",\n              "),t("span",{attrs:{class:"hljs-string"}},[s._v('"styleLibraryName"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"styles"')]),s._v("\n\n          }\n      ]]\n    ]\n")])]),s._v(" "),t("p",[s._v("然后再文件中是这样取引入：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-js"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v('"vue"')]),s._v(";\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'../../lib/rem'")]),s._v(";\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Base,Button, } "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue-etc-ui'")]),s._v(";\nVue.component(Button.name, Button);\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"#app"')]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("render")]),s._v(": "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("xx")]),s._v(" =>")]),s._v(" xx(index)\n});\n")])]),s._v(" "),t("p",[s._v("其中Base是基础样式,css 单位为rem 此处默认单位20px=1rem 默认比例尺寸iphone6分辨率")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-js"}},[s._v("  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Base,Button} "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue-etc-ui'")]),s._v(";\n\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//等价于：")]),s._v("\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'components/lib/styles/base.css'")]),s._v(")\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" button = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'components/lib/button'")]),s._v(")\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'components/lib/styles/button.css'")]),s._v(")\n")])]),s._v(" "),t("p",[s._v("引入rem 代码：")]),s._v(" "),t("p",[t("strong",[s._v("注意：")]),s._v(" 按需引入的话是不会将rem 自适应方法打包进去的，需要手动引入 rem js 代码，一般在main.js 引入，或script 方式插入,代码")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-js"}},[s._v("  ("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("doc, win")]),s._v(") ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" docEl = doc.documentElement,\n        resizeEvt = "),t("span",{attrs:{class:"hljs-string"}},[s._v("'orientationchange'")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("in")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(" ? "),t("span",{attrs:{class:"hljs-string"}},[s._v("'orientationchange'")]),s._v(" : "),t("span",{attrs:{class:"hljs-string"}},[s._v("'resize'")]),s._v(",\n        recalc = "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" clientWidth = docEl.clientWidth;\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!clientWidth) "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(";\n            docEl.style.fontSize = "),t("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v(" * (clientWidth / "),t("span",{attrs:{class:"hljs-number"}},[s._v("375")]),s._v(") + "),t("span",{attrs:{class:"hljs-string"}},[s._v("'px'")]),s._v(";\n        };\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!doc.addEventListener) "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(";\n    win.addEventListener(resizeEvt, recalc, "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(");\n    doc.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'DOMContentLoaded'")]),s._v(", recalc, "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(");\n})("),t("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(", "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(");\n")])]),s._v(" "),t("p",[s._v("此处默认单位20px=1rem 默认比例尺寸iphone6分辨率")]),s._v(" "),t("h4",[s._v("CDN")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[s._v("\n"),t("span",{attrs:{class:"hljs-meta"}},[s._v("<!DOCTYPE html>")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("html")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("meta")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("charset")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"utf-8"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("meta")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewport"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("title")]),s._v(">")]),s._v("vue-etc-ui"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("title")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("link")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue-etc-ui/lib/etc-ui.css"')]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"app"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"https://cdn.jsdelivr.net/npm/vue"')]),s._v(">")]),t("span",{attrs:{class:"undefined"}}),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue-etc-ui/lib/etc-ui.js"')]),s._v(">")]),t("span",{attrs:{class:"undefined"}}),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("html")]),s._v(">")]),s._v("\n\n")])])])}],v={render:n,staticRenderFns:l};a.a=v},Jakf:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("Ihs5"),l=t("VU/8"),v=l(null,n.a,!1,null,null,null);a.default=v.exports}});