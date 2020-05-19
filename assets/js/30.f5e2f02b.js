(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{376:function(s,a,e){"use strict";e.r(a);var n=e(43),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"《精通python怕红框架scrapy》"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#《精通python怕红框架scrapy》"}},[s._v("#")]),s._v(" 《精通Python怕红框架Scrapy》")]),s._v(" "),e("ol",[e("li",[s._v("Scrapy简介")]),s._v(" "),e("li",[s._v("理解HTML和XPath")]),s._v(" "),e("li",[s._v("爬虫基础")]),s._v(" "),e("li",[s._v("从Scrapy到移动应用")]),s._v(" "),e("li",[s._v("迅速的爬虫技巧")]),s._v(" "),e("li",[s._v("部署到Scrapinghub")]),s._v(" "),e("li",[s._v("配置与管理")]),s._v(" "),e("li",[s._v("Scrapy编程")]),s._v(" "),e("li",[s._v("管道秘诀")]),s._v(" "),e("li",[s._v("理解Scrapy性能")]),s._v(" "),e("li",[s._v("使用Scrapyd与实时分析进行分布式爬取")])]),s._v(" "),e("h2",{attrs:{id:"_1-scrapy简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-scrapy简介"}},[s._v("#")]),s._v(" 1.Scrapy简介")]),s._v(" "),e("p",[s._v("Scrapy还提供了一种在lxml之上更高级的XPath接口——selectors,它能够更高效地处理残缺的HTML代码和混乱的编码。")]),s._v(" "),e("p",[s._v("请使用流量限速将你产生的流量减少到可以接受的普通用户的水平。此外，还应该监控响应时间，如果发现响应时间增加了，就需要降低爬虫的强度。好消息是Scrapy对于这些功能都提供了开箱即用的实现。")]),s._v(" "),e("h2",{attrs:{id:"_2-理解html和xpath"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-理解html和xpath"}},[s._v("#")]),s._v(" 2.理解HTML和XPath")]),s._v(" "),e("p",[s._v("DNS--\x3eIP--\x3e网页")]),s._v(" "),e("p",[s._v("Ctrl+U显示网页源码")]),s._v(" "),e("p",[s._v("XPath选择并抽取元素、属性和文本。")]),s._v(" "),e("ul",[e("li",[s._v("用单斜杠区分层次")]),s._v(" "),e("li",[s._v("p[1]是获取第一个p标签")]),s._v(" "),e("li",[s._v("双斜杠选择所有的相同标签")]),s._v(" "),e("li",[s._v("使用符号@来访问属性")]),s._v(" "),e("li",[s._v("text()函数只选取文本")]),s._v(" "),e("li",[s._v("使用*符号来选择指定层级的所有元素")]),s._v(" "),e("li",[s._v("a[@href]获取包含href属性的链接，如果=有值那么获取特定值的")]),s._v(" "),e("li",[s._v("还有特定的函数")])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.w3school.com.cn/xpath/index.asp",target:"_blank",rel:"noopener noreferrer"}},[s._v("XPath教程"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("这个语法学好会比bs4方便")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("response.xpath('/html').extract()\nresponse.xpath('//a').extract()\n\n# 获取id为“toc”的div标签内的无序列表(ul)中所有链接URL。\n//div[@id=“toc”]/ul//a/@href\n\n\n# 获取class属性包含“ltr”以及class属性包含“skin-vector”的任意元素内所有标题元素(h1)中的文本。这两个字符串可能在同一个class中，也可能在不同的class中。\n//-*[contains(@class,“ltr”)and contains(@class,“skin-vector”)]//h1//text()\n\n# 选择class属性值为“infobox”的表格中第一张图片的URL。\n//table[@class=“infobox”]//img[1]/@src\n\n# 选择class属性以“reflist”开头的div标签中所有链接的URL。\n//div[starts-with(@class,“reflist”)]//a/@href\n\n# 选择子元素包含文本“References”的元素之后的div元素中所有链接的URL。\n//-*[text()=“References”]/../following-sibling::div//a\n\n# 获取页面中每张图片的URL\n/img/@src\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("p",[s._v("实践推荐：")]),s._v(" "),e("ol",[e("li",[s._v("避免使用数组索引（数值）")]),s._v(" "),e("li",[s._v("类并不靠谱，尽可能找有意义得类名")]),s._v(" "),e("li",[s._v("ID通常是最可靠的")])]),s._v(" "),e("h2",{attrs:{id:"_3-爬虫基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-爬虫基础"}},[s._v("#")]),s._v(" 3.爬虫基础")]),s._v(" "),e("p",[s._v("安装"),e("a",{attrs:{href:"https://scrapy.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Scrapy"),e("OutboundLink")],1),s._v("。。。")]),s._v(" "),e("p",[s._v("本书项目"),e("a",{attrs:{href:"https://github.com/scalingexcellence/scrapybook.git",target:"_blank",rel:"noopener noreferrer"}},[s._v("代码"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("scrapy shell下按Ctrl + D退出")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("scrapy shell --pdb https://gumtree.com\n# 获取页面的前50个字符\nresponse.body[:50] \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("a",{attrs:{href:"http://doc.scrapy.org/en/latest/topics/selectors.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Scrapy Selectors"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("xpath()和css()返回的Selector对象可以被串联使用，为了获取真实的值可以用extract()和re()。")]),s._v(" "),e("p",[s._v("创建项目")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("scrapy startproject [name]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("三个文件： items.py、pipelines.py、settings.py")]),s._v(" "),e("p",[s._v("items.py:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("from scrapy.item import Item, Field\n\n\nclass PropertiesItem(Item):\n    # Primary fields\n    title = Field()\n    price = Field()\n    description = Field()\n    address = Field()\n    image_urls = Field()\n\n    # Calculated fields\n    images = Field()\n    location = Field()\n\n    # Housekeeping fields\n    url = Field()\n    project = Field()\n    spider = Field()\n    server = Field()\n    date = Field()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("p",[s._v("创建爬虫："),e("code",[s._v("scrapy genspider basic web")])]),s._v(" "),e("p",[s._v("运行爬虫： "),e("code",[s._v("scrapy crawl basic")])]),s._v(" "),e("p",[s._v("Scrapy是围绕着Item的概念构建的。")]),s._v(" "),e("p",[s._v("ItemLoader提供了许多有趣的结合数据及对数据进行格式化和清洗的方式。")])])}),[],!1,null,null,null);a.default=t.exports}}]);