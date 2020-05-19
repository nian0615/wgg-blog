# Koa2 基本学习

## Koa 环境配置

1. 新建一个文件夹 Koa,执行以下命令

   ```javascript
   npm init -y  //生成package.json 文件
   npm install --save koa
   ```

2. 在文件夹下新建 index.js 文件，输入以下代码

   ```js
   const Koa = require("koa"); // 引入koa
   const app = new Koa(); // 实例化
   app.use(async (ctx) => {
     // ctx参数
     ctx.body = "Hello wang";
   });
   app.listen(3000); // 监听
   console.log("77");
   ```

3. 在终端输入 node index.js，然后在浏览器中输入：[http://127.0.0.1:3000](http://127.0.0.1:3000/) 就可以看到结果了。

## async/await 的使用方法

###### **什么是 async 和 await**

> ##### 可以先从两个单词的基本意思来进行了解.async 是异步的简写，而 await 可以堪称 async wait 的简写。明白了两个单词，就很好理解了 async 是声明一个方法是异步的，await 是等待异步方法完成。注意的是 await 必须在 async 方法中才可以使用因为 await 访问本身就会造成程序停止堵塞，所以必须在异步方法中才可以使用。

###### **async 到底起什么作用？**

async 是让方法变成异步，这个很好理解，关键是他的返回值是什么？我们得到后如何处理？根据以前的经验，我们希望用 return 直接返回 async 函数的值，但是如果真是这样，还有 await 什么作用，我们写段代码测试一下。

```javascript
async function testAsync() {
  return "Hello async";
}
const result = testAsync();
console.log(result);
```

在终端里用 node 执行这段代码，会发现输出了 Promise { ‘Hello async’ }，这时候会发现它返回的是 Promise。

```javascript
PS E:\code\BXShop> node test.js
Promise { 'Hello async' }
```

###### **await 在等什么？**

await 一般在等待 async 方法执行完毕，但是其实 await 等待的只是一个表达式，这个表达式在官方文档里说的是 Promise 对象，可是它也可以接受普通值。我们写一段代码来验证一下这个结果。在程序中我们有用 async 的方法，也有普通的方法。最后在控制台输出时，你会发现都可以直接输出。

```javascript
function getSomething() {
  return "something";
}

async function testAsync() {
  return "Hello async";
}

async function test() {
  const v1 = await getSomething();
  const v2 = await testAsync();
  console.log(v1, v2);
}

test();
```

###### async/await 同时使用

通过前面两个例子已经分别了解 async 和 await，我们来作个虚假的例子，看一下等待问题。这只是一个虚假的，实际项目中多是去后台请求数据，等数据回来后进行执行。

```javascript
function takeLongTime() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("long_time_value"), 1000);
  });
}

async function test() {
  const v = await takeLongTime();
  console.log(v);
}

test();
```

## Get 请求的接收

###### **query 和 querystring 区别**

在 koa2 中 GET 请求通过 request 接收，但是接受的方法有两种：query 和 querystring。

- query：返回的是格式化好的参数对象。
- querystring：返回的是请求字符串。

```js
const Koa = require("koa");
const app = new Koa();
app.use(async (ctx) => {
  let url = ctx.url;
  //从request中获取GET请求
  let request = ctx.request;
  let requestQuery = request.query;
  let requestQueryStr = request.querystring;
  //从上下文中直接获取
  let ctxQuery = ctx.query;
  let ctxQueryStr = ctx.querystring;
  ctx.body = {
    url,
    requestQuery,
    requestQueryStr,
    ctxQuery,
    ctxQueryStr,
  };
});
// 重新更改后一定要重启服务器
app.listen(3000, () => {
  console.log("1");
});
```

编写好后，在终端中使用 node demo1.js 启动服务。启动一切正常可在浏览器中使用http://127.0.0.1:3000?user=wgg&age=18来进行访问,用谷歌浏览器下载开发者工具-->iFormatTool,可以格式化页面的代码更清晰

###### **运行服务，在浏览器查看结果。**

总结：获得 GET 请求的方式有两种，一种是从 request 中获得，一种是一直从上下文中获得。获得的格式也有两种：query 和 querystring。要区分记忆，并根据实际需求进行灵活变换。

## POST 请求如何接收以及转换成 json 的原理

###### **获取 Post 请求的步骤：**

1. 解析上下文 ctx 中的原生 nodex.js 对象 req。
2. 将 POST 表单数据解析成 query string-字符串.(例如:user=jspang&age=18)
3. 将字符串转换成 JSON 格式。

###### **ctx.request 和 ctx.req 的区别**

- ctx.request:是 Koa2 中 context 经过封装的请求对象，它用起来更直观和简单。
- ctx.req:是 context 提供的 node.js 原生 HTTP 请求对象。这个虽然不那么直观，但是可以得到更多的内容，适合我们深度编程。

```js
const Koa = require("koa");
const app = new Koa();
app.use(async (ctx) => {
  if (ctx.url === "/" && ctx.method === "GET") {
    let html = `
    <h1>王果果的KOA呀</h1>
    <form method="POST" action="/">
    <p>userName</p>
    <input type="text" name="name" id="">
    <p>age</p>
    <input type="text" name="age" id="">
    <p>websit</p>
    <input type="text" name="websit" id="">
    <br>
    <br>
    <button type="submit">submit</button>
    </form>
    `;
    ctx.body = html;
  } else if (ctx.url === "/" && ctx.method === "POST") {
    ctx.body = "post请求";
    // 一定要加await
    let postDa = await getPost(ctx);
    ctx.body = postDa;
  } else {
    ctx.body = "请求崩溃了";
  }
});
// 获取表单提交的数据
function getPost(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = "";
      ctx.req.addListener("data", (data) => {
        postData += data;
      });
      ctx.req.on("end", () => {
        let postJs = postQuer(postData);
        resolve(postJs);
      });
    } catch (err) {
      // 扑捉到错误则返回
      reject(err);
    }
  });
}
// 把字符转换成json对象
function postQuer(querStr) {
  let queryData = {};
  let queryList = querStr.split("&");
  // console.log(queryList); // [ 'name=%E7%8E%8B%E5%BF%B5%E5%BF%B5', 'age=21', 'websit=123.com' ]
  for (const [index, item] of queryList.entries()) {
    // console.log(item, "item"); // websit=123.com item
    let itemList = item.split("=");
    // console.log(itemList, "itemlist"); // [ 'websit', '123.com' ] itemlist
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }
  return queryData;
}
app.listen(3000, () => {
  console.log("服务器启动了");
});
```

## koa-bodyparser 中间件

###### 安装中间件

```js
npm install --save koa-bodyparser
```

###### **引入使用**

安装完成后，需要在代码中引入并使用。我们在代码顶部用 require 进行引入。

```js
const bodyParser = require("koa-bodyparser");
```

然后进行使用，如果不使用是没办法调用的，使用代码如下。

```js
app.use(bodyParser());
```

在代码中使用后，直接可以用 ctx.request.body 进行获取 POST 请求参数，中间件自动给我们作了解析。

```js
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const app = new Koa();
app.use(bodyParser());
app.use(async (ctx) => {
  if (ctx.url === "/" && ctx.method === "GET") {
    let html = `
    <h1>王果果的KOA呀</h1>
    <form method="POST" action="/">
    <p>userName</p>
    <input type="text" name="name" id="">
    <p>age</p>
    <input type="text" name="age" id="">
    <p>websit</p>
    <input type="text" name="websit" id="">
    <br>
    <br>
    <button type="submit">submit</button>
    </form>
    `;
    ctx.body = html;
  } else if (ctx.url === "/" && ctx.method === "POST") {
    ctx.body = "post请求";
    let postDa = ctx.request.body;
    ctx.body = postDa;
  } else {
    ctx.body = "请求崩溃了";
  }
});

app.listen(3000, () => {
  console.log("服务器启动了");
});
```

## Koa2 原生路由实现

```js
const Koa = require("koa");
const fs = require("fs");
const app = new Koa();
app.use(async (ctx) => {
  // 获取输入的路由
  let url = ctx.request.url;
  //   ctx.body = url;
  // 根据路由返回相对应的页面
  let html = await route(url);
  ctx.body = html;
});
// 首先获取路径
async function route(url) {
  let page = "404.html";
  switch (url) {
    case "/":
      page = "index.html";
      break;
    case "/index":
      page = "index.html";
      break;
    case "/body":
      page = "body.html";
      break;
    case "/404":
      page = "404.html";
      break;
    default:
      break;
  }
  //  渲染页面
  let html = await render(page);
  return html;
}
// 获取路径对应的页面
async function render(page) {
  return new Promise((resolve, reject) => {
    let pageUrl = `./page/${page}`;
    // console.log(pageUrl);
    // 视频中‘binary’就会乱码
    fs.readFile(pageUrl, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
app.listen(3000, () => {
  console.log("摇摆ing");
});
```

## Koa-router 中间件（1）入门

###### 安装 koa-router 中间件

```js
npm install --save koa-router
```

```js
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
router
  .get("/", (ctx, next) => {
    ctx.body = "hello  header";
  })
  .get("/todo", (ctx, next) => {
    ctx.body = "todo页面";
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("router启动");
});
```

## Koa-router 中间件（2）层级

###### 设置前缀:地址变成http://127.0.0.1:3000/wgg/todo

```js
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router({
  // 全部增加wgg前缀层级
  prefix: "/wgg",
});
router
  .get("/", (ctx, next) => {
    ctx.body = "hello  header";
  })
  .get("/todo", (ctx, next) => {
    ctx.body = "todo页面";
  });
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("router启动2");
});
```

###### **路由层级**

```js
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();

// 子级路由
let page = new Router();
page
  .get("/index", async (ctx) => {
    ctx.body = "这是index页面";
  })
  .get("/header", async (ctx) => {
    ctx.body = "这是header页面";
  });

// 子级路由
let home = new Router();
home
  .get("/index", async (ctx) => {
    ctx.body = "这是home页面";
  })
  .get("/body", async (ctx) => {
    ctx.body = "这是body页面";
  });
// 父级路由
let router = new Router();
// 装载子路由 分别是 定义子路由名  装载子路由  指定路由
router
  .use("/page", page.routes(), page.allowedMethods())
  .use("/home", home.routes(), home.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("router启动8");
});
```

## Koa-router 中间件（3）参数

###### _ctx_.query 接收参数

```js
const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", function (ctx, next) {
  ctx.body = ctx.query;
});

// 一定是app.use
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("启动吧");
});
```

## Koa2 中使用 cookie

- ctx.cookies.get(name,[optins]):读取上下文请求中的 cookie。
- ctx.cookies.set(name,value,[options])：在上下文中写入 cookie。

###### **Cookie 选项**

比如我们要存储用户名，保留用户登录状态时，你可以选择 7 天内不用登录，也可以选择 30 天内不用登录。这就需要在写入是配置一些选项：

- domain：写入 cookie 所在的域名
- path：写入 cookie 所在的路径
- maxAge：Cookie 最大有效时长
- expires：cookie 失效时间
- httpOnly:是否只用 http 请求中获得
- overwirte：是否允许重写

```js
const Koa = require("koa");
const app = new Koa();
app.use(async (ctx) => {
  if (ctx.url === "/index") {
    ctx.cookies.set("name", "wgg", {
      domain: "127.0.0.1", // 写cookie所在的域名
      //   path: "/index", // 写cookie所在的路径   就是说只能指定在index路径下才能读出cookie
      maxAge: 1000 * 60 * 60 * 24, // cookie有效时长 一天 毫秒*60*60 一小时 再*24  一天
      expires: new Date("2020-4-1"), // cookie失效时间
      httpOnly: false, // 是否只用于http请求中获取
      overwrite: false, // 是否允许重写
    });
    ctx.body = "cookie is ok";
  } else {
    if (ctx.cookies.get("name")) {
      ctx.body = ctx.cookies.get("name");
    } else {
      ctx.body = "byebye";
    }
  }
});
// 重新更改后一定要重启服务器
app.listen(3000, () => {
  console.log("cookie");
});
```

## Koa2 的模板初识（ejs）

开发中不可能把所有的 html 代码全部写在 JS 里，这显然不现实，也没办法完成大型 web 开发。必须借用模板机制来帮助开发

###### **安装中间件**

在 koa2 中使用模板机制必须依靠中间件，这里选择 koa-views 中间件，先使用 npm 来进行安装。

```js
cnpm install --save koa-views
```

###### **安装 ejs 模板引擎**

ejs 是个著名并强大的模板引擎，可以单独安装。很多开源软件都采用了 ejs 模板引擎。

```js
npm install --save ejs
```

###### 编写模板

安装好 ejs 模板引擎后，就可以编写模板了，为了模板统一管理，新建一个 view 的文件夹，并在它下面新建 index.ejs 文件。

views/index.ejs 代码如下

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= title %></title>
  </head>
  <body>
    <h2>
      <%= title %>
    </h2>
  </body>
</html>
```

###### **编写 koa 文件**

```js
const Koa = require("koa");
const view = require("koa-views");
const path = require("path");
const app = new Koa();

// 指定当前项目的根目录
app.use(
  view(path.join(__dirname, "./view"), {
    extension: "ejs", //指定模板
  })
);
app.use(async (ctx) => {
  let title = "hello wgg";
  //   模板名称   传过去的变量title
  await ctx.render("index", { title });
});
app.listen(3000, () => {
  console.log("demo11");
});
```

## koa-static 静态资源中间件

在后台开发中不仅有需要代码处理的业务逻辑请求，也会有很多的静态资源请求。比如请求 js，css，jpg，png 这些静态资源请求。也非常的多，有些时候还会访问静态资源路径。用 koa2 自己些这些静态资源访问是完全可以的，但是代码会雍长一些。

###### 安装 koa-static

使用 npm 进行安装中间件,讲课时使用的是 4.0.2 版本。

```js
npm install --save koa-static
```

**新建 static 文件夹** 然后在 static 文件中放入图片，css 和 js 文件。使用 koa-static 中间件 ，新建一个 demo12.js 文件，引入 koa-static 中间件，并用 app.use 方法进行使用。

```js
const Koa = require("koa");
const path = require("path");
const static = require("koa-static");

const app = new Koa();
const staticPath = "./static";
app.use(static(path.join(__dirname, staticPath)));
app.use(async (ctx) => {
  ctx.body = "哈哈哈";
});

app.listen(3000, () => {
  console.log("开始");
});
```

在控制台直接输入http://127.0.0.1:3000/index.css即可查看。
