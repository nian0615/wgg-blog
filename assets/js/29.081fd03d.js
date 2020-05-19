(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{375:function(t,s,e){"use strict";e.r(s);var n=e(43),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"《python网络爬虫从入门到实践（第2版）》-唐松"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#《python网络爬虫从入门到实践（第2版）》-唐松"}},[t._v("#")]),t._v(" 《Python网络爬虫从入门到实践（第2版）》——唐松")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://oss.hackslog.cn/blog/Snipaste_2019-11-09_11-48-47.png",alt:"image"}})]),t._v(" "),e("h2",{attrs:{id:"_1-入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-入门"}},[t._v("#")]),t._v(" 1. 入门")]),t._v(" "),e("p",[t._v("爬虫：实现实时自动化获取数据")]),t._v(" "),e("p",[t._v("在爬取网站的时候需要限制自己的爬虫，遵守Robots协议和约束网络爬虫程序的速度；在使用数据的时候必须遵守网站的知识产权。")]),t._v(" "),e("p",[t._v("Python爬虫流程：")]),t._v(" "),e("ol",[e("li",[t._v("获取网页：request、urllib和selenium")]),t._v(" "),e("li",[t._v("解析网页: re正则表达式、BeautifulSoup和lxml")]),t._v(" "),e("li",[t._v("存储数据: 存入txt、csv，存入MySQL和MongoDB")])]),t._v(" "),e("h2",{attrs:{id:"_2-编写第一个网络爬虫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-编写第一个网络爬虫"}},[t._v("#")]),t._v(" 2.编写第一个网络爬虫")]),t._v(" "),e("p",[t._v("安装"),e("a",{attrs:{href:"https://www.anaconda.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Anaconda"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("使用pip安装BeautifulSoup: "),e("code",[t._v("pip install bs4")])]),t._v(" "),e("p",[t._v("使用jupyter, cmd输入 "),e("code",[t._v("jupyter notebook")])]),t._v(" "),e("p",[t._v("安装Pycharm")]),t._v(" "),e("p",[t._v("基础知识：")]),t._v(" "),e("ul",[e("li",[t._v("print和严格缩进")]),t._v(" "),e("li",[t._v("数据类型\n"),e("ul",[e("li",[t._v("字符串")]),t._v(" "),e("li",[t._v("数字")]),t._v(" "),e("li",[t._v("列表")]),t._v(" "),e("li",[t._v("字典")])])]),t._v(" "),e("li",[t._v("条件语句和循环语句")]),t._v(" "),e("li",[t._v("函数")]),t._v(" "),e("li",[t._v("面向对象编程")]),t._v(" "),e("li",[t._v("错误处理")])]),t._v(" "),e("p",[e("strong",[t._v("如何选择函数式编程和面向对象编程呢？可以这样进行选择，如果各个函数之间独立且无共用的数据，就选用函数式编程；如果各个函数之间有一定的关联性，那么选用面向对象编程比较好。")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import requests\nfrom bs4 import BeautifulSoup\nlink = "http://www.santostang.com/"\nheaders = {\'User-Agent\': \'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv;1.9.1.6) Gecko/20091201 Firefox/3.5.6\'}\n\nr = requests.get(link, headers= headers)\nsoup = BeautifulSoup(r.text, "html.parser")\ntitle = soup.find("h1", class_="post-title").a.text.strip()\nprint(title)\nwith open(\'title_test.txt\', "a+") as f:\n    f.write(title)\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("p",[t._v("基础巩固，建议练习："),e("a",{attrs:{href:"https://www.runoob.com/python/python-100-examples.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 100例"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);