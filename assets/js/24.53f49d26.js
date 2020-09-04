(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{459:function(s,t,a){"use strict";a.r(t);var n=a(29),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zsh"}},[s._v("#")]),s._v(" zsh")]),s._v(" "),a("h2",{attrs:{id:"oh-my-zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh"}},[s._v("#")]),s._v(" oh-my-zsh")]),s._v(" "),a("p",[s._v("用于自定义 zsh 的配置")]),s._v(" "),a("ol",[a("li",[s._v("主题配置")]),s._v(" "),a("li",[s._v("插件安装")])]),s._v(" "),a("p",[s._v("安装")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"zsh"}},[s._v("zsh 插件")])]),s._v(" "),a("h2",{attrs:{id:"zsh-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zsh-插件"}},[s._v("#")]),s._v(" zsh 插件")]),s._v(" "),a("h3",{attrs:{id:"autojump"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autojump"}},[s._v("#")]),s._v(" autojump")]),s._v(" "),a("p",[s._v("用于常用目录间的快速跳转(通过维护命令行中最常用的目录的数据库来工作)")]),s._v(" "),a("p",[s._v("安装")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推荐")]),s._v("\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" autojump\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git://github.com/joelthelion/autojump.git\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" autojump\n\n./install.py or ./uninstall.py\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/wting/autojump",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"z"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#z"}},[s._v("#")]),s._v(" z")]),s._v(" "),a("p",[s._v("和 "),a("code",[s._v("autojump")]),s._v(" 功能一致，是 "),a("code",[s._v("oh-my-zsh")]),s._v(" 内置插件")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/rupa/z",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"zsh-syntax-highlighting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zsh-syntax-highlighting"}},[s._v("#")]),s._v(" zsh-syntax-highlighting")]),s._v(" "),a("p",[s._v("终端语法高亮显示")]),s._v(" "),a("p",[s._v("安装")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clone")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/zsh-users/zsh-syntax-highlighting.git "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("~"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(".oh-my-zsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("custom}")]),s._v("/plugins/zsh-syntax-highlighting\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 ~/.zshrc 中配置(在 plugins 的最后面加上 zsh-syntax-highlighting )")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("其他插件 zsh-syntax-highlighting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使配置生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/zsh-users/zsh-syntax-highlighting",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"zsh-autosuggestions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zsh-autosuggestions"}},[s._v("#")]),s._v(" zsh-autosuggestions")]),s._v(" "),a("p",[s._v("根据您的历史记录和完成情况建议您键入的命令")]),s._v(" "),a("p",[s._v("安装")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clone")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git://github.com/zsh-users/zsh-autosuggestions "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH_CUSTOM")]),s._v("/plugins/zsh-autosuggestions\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 ~/.zshrc 中配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("其他插件 zsh-syntax-highlighting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使配置生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/zsh-users/zsh-autosuggestions",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);