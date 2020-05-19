(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{389:function(a,t,_){"use strict";_.r(t);var v=_(43),e=Object(v.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"小程序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小程序"}},[a._v("#")]),a._v(" 小程序")]),a._v(" "),_("h2",{attrs:{id:"_1-小程序的生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-小程序的生命周期"}},[a._v("#")]),a._v(" 1.小程序的生命周期")]),a._v(" "),_("ul",[_("li",[a._v("onLoad() 页面加载时触发，只会调用一次，可获取当前页面路径中的参数。")]),a._v(" "),_("li",[a._v("onShow() 页面显示/切入前台时触发，一般用来发送数据请求；")]),a._v(" "),_("li",[a._v("onReady() 页面初次渲染完成时触发, 只会调用一次，代表页面已可和视图层进行交互。")]),a._v(" "),_("li",[a._v("onHide() 页面隐藏/切入后台时触发, 如底部 tab 切换到其他页面或小程序切入后台等。")]),a._v(" "),_("li",[a._v("onUnload() 页面卸载时触发，如redirectTo或navigateBack到其他页面时。\n"),_("img",{attrs:{src:"http://qiniu.hackslog.cn/blog/20190528/UmXblGKmf9pu.png?imageslim",alt:"mark"}})])]),a._v(" "),_("p",[a._v("小程序分为webview(展现UI)和jsCore(处理业务逻辑、数据及接口调用)\n两个部分在两个进程同时运行，通过系统曾JSBridge实现通信、实现UI的渲染、事件的处理等。")]),a._v(" "),_("h2",{attrs:{id:"_2-小程序文件类型和用途"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-小程序文件类型和用途"}},[a._v("#")]),a._v(" 2.小程序文件类型和用途")]),a._v(" "),_("ul",[_("li",[a._v("app.json: 包括文件路径、界面表现、网络超时、底部tab的设置等")]),a._v(" "),_("li",[a._v("app.js：监听并处理生命周期函数、声明全局变量")]),a._v(" "),_("li",[a._v("project.config.json： 界面颜色、编辑配置")]),a._v(" "),_("li",[a._v("wxml: 跟HTML很像，不过不能直接用HTML的标签，取而代之是view、button、text和wx:if、{{}}等")]),a._v(" "),_("li",[a._v("wxss: 具有大部分CSS特征， app.wxss作为全局样式，page.wxss会覆盖全局样式。 1rpx = 0.5px = 1物理像素")]),a._v(" "),_("li",[a._v("page的js文件进行交互逻辑，比如响应点击事件、获取用户位置、获取页面数据等")]),a._v(" "),_("li",[a._v("page.json: 独立页的一些属性")])]),a._v(" "),_("h2",{attrs:{id:"_3-小程序的事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-小程序的事件"}},[a._v("#")]),a._v(" 3.小程序的事件")]),a._v(" "),_("ol",[_("li",[a._v("事件分类：")])]),a._v(" "),_("ul",[_("li",[a._v("冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递")]),a._v(" "),_("li",[a._v("非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递")])]),a._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[a._v("事件绑定：绑定key和value")])]),a._v(" "),_("ul",[_("li",[a._v("对key，bindtap或者catchtab，bind不阻止冒泡，catch可以阻止冒泡")]),a._v(" "),_("li",[a._v("key，在js文件可以找到对应")])]),a._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[a._v("实现下拉刷新")])]),a._v(" "),_("ul",[_("li",[a._v("app.json的window选项设置enablePullDownRefresh")]),a._v(" "),_("li",[a._v("wx.startPullDownRefresh触发刷新")])]),a._v(" "),_("h2",{attrs:{id:"_4-小程序路由"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-小程序路由"}},[a._v("#")]),a._v(" 4.小程序路由")]),a._v(" "),_("ul",[_("li",[a._v('打开页面：wx.navigateTo或者<navigator open-type="navigateTo" />')]),a._v(" "),_("li",[a._v('页面重定向： wx.redirectTo或者<navigator open-type="redirectTo" />')]),a._v(" "),_("li",[a._v('页面返回： wx.navigateBack或者<navigator open-type="navigateBack" />,可以通过getCurrentPages()决定返回的层数')]),a._v(" "),_("li",[a._v('Tab切换： wx.switchTab或者<navigator open-type="switchTo" />')]),a._v(" "),_("li",[a._v('重启动：wx.reLaunch或者<navigator open-type="reLaunch" /> 可以打开任何页面\n可以通过路由携带参数\nwx.navigateTo和wx.redirectTo'),_("strong",[a._v("不允许")]),a._v("跳转到tab所包含的页面\nonLoad只执行一次，在这里获取页面参数")])]),a._v(" "),_("h2",{attrs:{id:"_5-数据请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-数据请求"}},[a._v("#")]),a._v(" 5.数据请求")]),a._v(" "),_("ul",[_("li",[a._v("HTTPS： wx.request")]),a._v(" "),_("li",[a._v("上传文件：wx.uploadFile")]),a._v(" "),_("li",[a._v("下载文件：wx.downloadFile")]),a._v(" "),_("li",[a._v("WebSocket通信： wx.connectSocket")])]),a._v(" "),_("p",[a._v("可以将所有接口放在同一个js文件，封装get、put和upload等，设置请求体和带上token、异常处理等，然后导出，实现数据请求的封装")]),a._v(" "),_("h2",{attrs:{id:"_6-小程序的wxss和css有哪些不一样的地方："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-小程序的wxss和css有哪些不一样的地方："}},[a._v("#")]),a._v(" 6.小程序的wxss和css有哪些不一样的地方：")]),a._v(" "),_("p",[a._v("相似，wxss在css上做了写修改和补充\n尺寸到位rpx:响应式像素，可以根据屏幕宽度进行自适应。规定屏幕宽度未750rpx\n在iphone6上，屏幕宽度375px,有750个物理像素，750rpx=375px=750物理像素")]),a._v(" "),_("p",[a._v("@import导入外联样式")]),a._v(" "),_("h2",{attrs:{id:"_7-如何提高微信小程序的相应速度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-如何提高微信小程序的相应速度"}},[a._v("#")]),a._v(" 7.如何提高微信小程序的相应速度")]),a._v(" "),_("ol",[_("li",[a._v("提高页面加载速度")]),a._v(" "),_("li",[a._v("用户行为预测")]),a._v(" "),_("li",[a._v("减少默认data的大小")]),a._v(" "),_("li",[a._v("组件化方案")])]),a._v(" "),_("h2",{attrs:{id:"_8-说说常用的一些api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-说说常用的一些api"}},[a._v("#")]),a._v(" 8.说说常用的一些API")]),a._v(" "),_("ul",[_("li",[a._v("wx.getLocation 获取地理位置")]),a._v(" "),_("li",[a._v("wx.scanCode 扫码")]),a._v(" "),_("li",[a._v("wx.getCurrentPages获取当前页面栈")]),a._v(" "),_("li",[a._v("getApp()获取唯一APP实例")]),a._v(" "),_("li",[a._v("wx.getStorageSync")]),a._v(" "),_("li",[a._v("wx.login")])]),a._v(" "),_("h2",{attrs:{id:"_9-小程序登录流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-小程序登录流程"}},[a._v("#")]),a._v(" 9.小程序登录流程")]),a._v(" "),_("p",[_("img",{attrs:{src:"http://qiniu.hackslog.cn/blog/20190528/QhX8Uuz63ydx.jpg?imageslim",alt:"mark"}})]),a._v(" "),_("h2",{attrs:{id:"_10-自定义组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-自定义组件"}},[a._v("#")]),a._v(" 10.自定义组件")]),a._v(" "),_("p",[a._v("组件生命周期：")]),a._v(" "),_("ul",[_("li",[a._v("created")]),a._v(" "),_("li",[a._v("attached")]),a._v(" "),_("li",[a._v("detached")])]),a._v(" "),_("p",[a._v("页面内的生命周期：")]),a._v(" "),_("ul",[_("li",[a._v("show")]),a._v(" "),_("li",[a._v("hide")]),a._v(" "),_("li",[a._v("resize")])])])}),[],!1,null,null,null);t.default=e.exports}}]);