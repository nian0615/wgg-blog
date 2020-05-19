# 使用 Mongo DB 教程记录

> MongoDB 是非关系型数据库

## 1.安装及启动

1.默认安装在 C 盘目录下，配置系统环境变量 -->点击 Path-->点击编辑

-->C:\Program Files\MongoDB\Server\4.2\bin-->添加到变量中点击确定

2.在 C 盘的根目录建立一个 data 文件夹，在 data 文件夹下建立一个 db 文件夹(一般是安装盘的根目录，建立 data/db,这两个文件夹)

3.运行服务端-->打开 cmd 输入命令 Mongod,这时候服务就可以开启了，链接默认端口是 27017。链接服务-->再打开新命令，输入 mongo 【注意的是：在此过程中，mongod 这个命令中一定不要 ctr+c 否则会报错！！！！！因为这个操作关闭了服务器】如下图就是正确的

<img src="C:\Users\wang\Desktop\study\md\1585545792.jpg" style="zoom: 150%;" />

4.在新打开的命令方输入 show dbs,可以知道有多少个数据库，再输入 db.version(),可以查看版本号

## 2.Mongo 基本命令-1

- 打开 mongod 命令和 mongo 命令后，可以执行以下代码

- ```javascript
  var x = "Hello World";
  print(x);
  // 也可以输入函数
  function wgg() {
    return "wgg";
  }
  print(wgg());
  ```

- 查看数据库输入的命令是 show dbs，windows 系统下默认三个数据库 admin config local 三个数据库，所以之后起名不要在重复起这三个的名字

- 进入数据库的命令是 use admin

- 显示数据库中的集合 show collections （关系型中叫表，我们要逐渐熟悉）

- 查看自己所在的库 db [用得最多]

## 3.Mongo 基本命令-2

use db（建立数据库）：use 不仅可以进入一个数据库，如果你敲入的库不存在，它还可以帮你建立一个库。但是在没有集合前，它还是默认为空

**增加** use user 建（一个名为 user 的）数据库 --> db 查看 -->show dbs 查看无 user 这个表 因为里面没有集合 --> db.loo.insert({"name":"wgg"}) [*db.集合.insert( ):新建数据集合和插入文件（数据），当集合没有时，这时候就可以新建一个集合，并向里边插入数据]\*[loo 就相当于是 user 库里面的一个集合]

**查看** db.loo.find()查看 loo 这个集合里面的所有数据

如果里面有很多条数据，想要查找第一条数据，遵循小驼峰命名法输入命令 db.loo.findOne()

**修改** 数据：例如修改第一条数据 db.loo.update({"name":"wgg"},{"name":"wnn","age":"18"})，修改后查看到数据为{ "\_id" : ObjectId("5e7da21d3b3fe14bb3b002c3"), "name" : "wnn", "age" : "18" }

**删除** 指定 loo 集合里的指定数据 db.loo.remove({"name":"wgg"})

**删除整个 user 库** 1.执行命令 db.user.drop();控制台返回 true，再输入命令 show dbs 就没有这个 user 库 // 2.或者保证在 user 这个库下面 执行 db.dropDatabase()也可以删除整个库

## 4.用 js 文件写 mongo 命令

> 一定一定要在 cmd 下面打开 mongod mongo 服务器，否则链接不成功，报错

1. 新建一个 js 文件，如下

2. ```javascript
   var userName = "wgg";
   var time = Date.parse(new Date());
   var jsonDatabase = { loginName: userName, loginTime: time };
   var db = connect("log"); // 创建库名为log  此处声明db必须是var 不能用let 前面的声明可以用let 可能是mongo DB 对es6语法的支持不够  所以建议都用var
   db.login.insert(jsonDatabase); // 新建了一个login集合在log库里面
   print("successful");
   ```

3. 再在终端输入命令 mongo goTask.js（文件名），控制台就会打印 print 里面的信息

4. 在 cmd 中输入 show dbs 可查看到库

5. 如果新增数据的话，可以直接在终端继续执行命令 mongo goTask.js（文件名），再在 cmd 中查看，db.login.find()

## 5.批量插入的正确方法

1. cmd 中批量插入的话是用数组，如：db.loo.insert([{"name":"wgg"},{"name":"wgg2"},{"name":"wgg3"}])

2. 做了如下对比，批量导入和循环导入的耗时计算，结果，批量导入是非常快的，性能也提高很多，代码如下

   ```javascript
   var time = new Date().getTime(); // 初始时间
   var db = connect("log"); // 链接log数据库

   // 循环导入到数据库
   for (let i = 0; i < 1000; i++) {
     db.test.insert({ name: 1 }); // 446ms
   }
   // 批量到数据库中
   let temp = [];
   for (let i = 0; i < 1000; i++) {
     temp.push({ num: 1 });
   } // 20ms
   db.test.insert(temp);

   var end = new Date().getTime() - time;
   print("scecc" + end);
   ```

## 6.修改：Update 常见错误（最基本的，但是最易犯错的）

> 在 vscode 可以执行命令 mongo demo2.js（文件名）,再在 cmd 里面查看命令；也可以在 vscode 的终端执行命令 mongo,然后 load('./demo.js'),之后在终端就可以执行 mongo 命令了，show dbs 也可以查看库了

1. 新建一个 demo.js 代码如下

   ```js
   var work1 = {
     name: "wgg",
     age: "20",
     sex: "女",
     job: "web",
     skill: {
       one: "html",
       two: "css",
       three: "js",
     },
     reginedTime: new Date(),
   };
   var work2 = {
     name: "wnn",
     age: "21",
     sex: "女",
     job: "web1",
     skill: {
       one: "html1",
       two: "css1",
       three: "js1",
     },
     reginedTime: new Date(),
   };
   var work3 = {
     name: "wzq",
     age: "23",
     sex: "男",
     job: "web2",
     skill: {
       one: "html2",
       two: "css2",
       three: "js2",
     },
     reginedTime: new Date(),
   };
   var db = connect("company");
   var workMat = [work1, work2, work3];
   db.workmet.insert(workMat); // 插入到workmet的集合里
   ```

2. 如想修改 work3 里面的数据，就得新建一个 demo2.js 代码如下

   ```js
   var db = connect("company");
   var work3 = {
     name: "wzq",
     age: "4", // 修改
     sex: "女", // 修改
     job: "web2",
     skill: {
       one: "html2",
       two: "css2",
       three: "js2",
     },
     reginedTime: new Date(),
   };
   db.workmet.update({ name: "wzq" }, work3);
   print("123");
   ```

3. 这时候你需要删除（db.workmate.drop()）表中的数据，因为 wzq 这个用户已经不在数据库中了，然后重新使用 load 方法载入插入数据再进行修改

   ```js
   //执行命令如下:
   db.workmate.drop();
   load("./demo.js");
   load("./demo2.js");
   ```

4. 执行上面的命令后，db.workmet.find()查看数据库正常

## 7.修改：初识 update 修改器

1. ###### **\$set** 还是第六节下面的原始代码，新建一个 demo2.js,代码如下,使用**\$set**修改，在控制台执行 load("./demo2.js"),再执行 db.workmet.find(),查看集合，修改成功

   ```js
   var db = connect("company");
   db.workmet.update({ name: "wzq" }, { $set: { name: "yxw22", age: "56" } });
   print("123");
   ```

2. 修改嵌套数据，代码如下：在控制台执行命令 load('./demo2.js')-->db.workmet.find()可查看数据修改成功

   ```js
   var db = connect("company"); // 注意的是上面的操作已经将名字改成了yxw22,所以这里也要改名字的键值，否则修改不成功
   db.workmet.update({ name: "yxw22" }, { $set: { "skill.one": "PPt" } });
   print("123");
   ```

3. **\$unset** 若想隐藏某个字段或者删除，执行如下命令

   ```js
   db.workmet.update({ name: "yxw22" }, { $unset: { age: "" } }); // 可以填空值或者其他值，unset只关注key值
   --------db.workmet.update({ name: "yxw22" }, { $set: { age: "23" } }); //  age加回去  但是age的位置放在最后了，不再是原来的name下面了
   ```

4. **\$inc 对数字进行计算**,它是对 value 值的修改，但是<u>修改的必须是数字，字符串是不起效果的</u>。我们现在要对 yxw22 的年龄减去 2 岁，就可以直接用\$inc 来操作。

   ```js
   db.workmet.update({ name: "yxw22" }, { $inc: { age: -2 } });
   ```

5. **multi** 假如要给**每个**人都添加一个兴趣属性，则要配合\$set 属性，代码如下：（修改所有的值的时候或者添加项的时候均可使用此方法）

   ```js
   db.workmet.update({}, { $set: { interset: [] } }, { multi: true }); // 注意的是，第一个括号为空，第二个括号为新增的变量，可以是数组也可以是字符，第三个变量multi默认为false,只给第一组添加这个属性，所以要将它修改为true
   ```

6. **upsert**查找指定值，有就修改，没有就添加，默认为 false(没有不作任何操作),若为 true，则会对数据库查找，有此值，则修改，没有此值，则添加，代码如下

   ```javascript
   db.workmet.update(
     { name: "yxw22" },
     { $set: { age: 16 } },
     { upsert: true }
   ); // 修改yxw22的年龄为16
   db.workmet.update(
     { name: "xiaowang" },
     { $set: { age: 16 } },
     { upsert: true }
   ); // 新增了一个叫xiaowang的年龄为16的数据
   ```

## 8.update 数组修改器

##### \$push 追加数组/内嵌文档值

> 注意的是，数据库里必须有这个数据，否则不成功，执行 upsert 操作后，再执行此操作

```js
db.workmet.update({ name: "xiaowang" }, { $push: { inserts: "sing" } });
// 新增技能  看（6.1里面的代码）
db.workmet.update({ name: "wzq" }, { $push: { "skill.four": "sing" } });
```

##### **\$ne 查找是否存在**（**没有则修改，有则不修改。**）

```js
// 查找 小王的inserts 属性里面有没有 game这个字段，有就不管  没有就添加PlayGame这个字段
db.workmet.update(
  { name: "xiaowang", inserts: { $ne: "game" } },
  { $push: { inserts: "PlayGame" } }
);
// 结果
{ "_id" : ObjectId("5e7f38ce546411839bfcbfea"), "name" : "xiaowang", "age" : 16, "inserts" : [ "sing", "PlayGame" ] }
```

##### **$addToSet（s也要大写） 升级版的$ne**

```js
db.workmet.update({ name: "xiaowang" }, { $addToSet: { inserts: "draw" } });
```

##### **\$each 批量追加**

```js
var newSkill = ["sing", "dance", "play"];
db.workmet.update(
  { name: "xiaowang" },
  { $addToSet: { inserts: { $each: newSkill } } } // 通常和$addToSet 一起合用  代表追加中 有的则不管  没有的则追加
);
```

##### **\$pop 删除数组值**

\$pop 只删除一次，并不是删除所有数组中的值。而且它有两个选项，一个是 1 和-1。

- 1：从数组末端进行删除
- -1：从数组开端进行删除

例子：现在要删除 xiaoWang 的编码爱好（code）。

```js
db.workmate.update({ name: "xiaoWang" }, { $pop: { interest: 1 } });
```

##### **数组定位修改**

```js
db.workmet.update({ name: "xiaowang" }, { $set: { "inserts.1": "game" } }); // inserts数组 .1 是数组里面想要修改的值的下标  "game"想要从原来的值修改成game
```

## 9.修改：状态返回与安全

##### **db.runCommand( )**

它是数据库运行命令的执行器，执行命令首选就要使用它，因为它在 Shell 和驱动程序间提供了一致的接口。（几乎操作数据库的所有操作，都可以使用 runCommand 来执行）现在我们试着用 runCommand 来修改数据库，看看结果和直接用 db.collections.update（非应答式操作）有什么不同。

- false：第一句末尾的 false 是 upsert 的简写，代表没有此条数据时不增加;
- true：true 是 multi 的简写，代表修改所有。
- getLastError:1 :表示返回功能错误，这里的参数很多。
- printjson：表示以 json 对象的格式输出到控制台。
- db.listCommands( ):查看所有的 Commad 命令，内容很多

```js
// 查找 sex 为男的条件
db.workmet.update({ sex: "男" }, { $set: { money: 1000 } }, false, true); // false占得位置是upsert 代表数据库中若没有  也不进行添加  true占的位置是multi 查找每个为男  并且都进行修改
var result = db.runCommand({ getLastError: 1 }); // getLastError表示返回功能性错误
// 也可以这样写条件语句
/* if (result.updatedExisting) {
} else {
} */
printjson(result); // 让打印出来是json格式  主要看的是updatedExisting这个值
```

> db.runCommand({ping:1}) 控制台输入这个命令 可以知道是否连接成功 控制台返回{ "ok" : 1 }

##### **findAndModify**

```js
var mar = {
  findAndModify: "workmet", // workmet 集合
  query: { name: "wgg" }, // 查找wgg的键值
  update: { $set: { age: 18 } }, // 修改年龄为18
  new: true, //更新完成，需要查看结果，如果为false不进行查看结果
};
var result = db.runCommand(mar);
printjson(result); // 让打印出来是json格式  主要看的是updatedExisting这个值
```

> findAndModify 的性能是没有直接使用 db.collections.update 的性能好，但是在实际工作中都是使用它，毕竟要商用的程序安全性还是比较重要的。工作中尽量使用 findAndModify 来进行更新数据，这样会更安全和直观，这点性能的损失是值得的。

##### **findAndModify 属性值**

> remove 和 update 两个参数只能有一个

- query：需要查询的条件/文档
- sort: 进行排序
- remove：[boolean]是否删除查找到的文档，值填写 true，可以删除。
- new:[boolean]返回更新前的文档还是更新后的文档。
- fields：需要返回的字段
- upsert：没有这个值是否增加。

## 10.查询：find 的不等修饰符

想要查询指定数据，在控制台输入

```js
db.workmet.find({ "skill.one": "html" });
```

可以查找到 skill.one 的技能为 html 的所有人员的信息，若只想显示名字和技能则可以执行下面的代码

```js
db.workmet.find(
  { "skill.one": "html" },
  { name: true, "skill.one": 1, _id: 0 } // true 1 都是显示的意思  0 false 都是不显示的意思
);
```

##### **不等修饰符**

- 小于(\$lt):英文全称 less-than
- 小于等于(\$lte)：英文全称 less-than-equal
- 大于(\$gt):英文全称 greater-than
- 大于等于(\$gte):英文全称 greater-than-equal
- 不等于(\$ne):英文全称 not-equal 我们现在要查找一下，公司内年龄小于 30 大于 25 岁的人员。看下面的代码。

```js
// 查找age小于等于30 大于23的信息
db.workmet.find(
  { age: { $lte: 30, $gte: 23 } },
  { name: true, "skill.one": 1, age: 1, _id: 0 }
);
```

## 11.查询：find 的多条件查询

##### **\$in 修饰符**

in 修饰符可以轻松解决一键多值的查询情况

```js
// 查询年龄大于等于20 小于等于23的人的信息
db.workmet.find(
  { age: { $in: [20, 23] } },
  { name: true, "skill.one": 1, age: 1, _id: 0 }
);
// 向对应的  不是20 到23 之间的人的信息
db.workmet.find(
  { age: { $nin: [20, 23] } },
  { name: true, "skill.one": 1, age: 1, _id: 0 }
);
```

##### **\$or 修饰符**

它用来查询多个键值的情况，就比如查询同事中大于 30 岁或者会做 PHP 的信息。主要区别是两个 Key 值。\$in 修饰符是一个 Key 值，这个需要去比较记忆。

```js
// 查询年龄大于23 或者技能第三项是写PHP的  相对应的有$nor
db.workmet.find(
  { $or: [{ age: { $gt: 23 } }, { "skill.three": "PHP" }] },
  { name: true, "skill.three": 1, age: 1, _id: 0 }
);
```

##### **\$and 修饰符**

\$and 用来查找几个 key 值都满足的情况，比如要查询同事中大于 30 岁并且会做 PHP 的信息，这时需要注意的是这两项必须全部满足。当然写法还是比较简单的。只要把上面代码中的 or 换成 and 就可以了。

```js
// 查询年龄大于23并且技能第三项是写PHP的  相对应的有$nor
db.workmet.find(
  { $and: [{ age: { $gt: 23 } }, { "skill.three": "PHP" }] },
  { name: true, "skill.three": 1, age: 1, _id: 0 }
);
```

##### **\$not 修饰符**

```js
// 年龄除了大于20小于25的所有人的信息
db.workmet.find(
  { age: { $not: { $gt: 20, $lt: 25 } } },
  { name: true, "skill.three": 1, age: 1, _id: 0 }
);
```

## 12.查询：find 的数组查询

##### **基本数组查询**

```js
db.workmet.find(
  { interest: ["玩游戏", "美食", "篮球"] },
  {
    name: true,
    age: true,
    interest: true,
    _id: false,
  }
);
// 查找 interest: ["玩游戏", "美食", "篮球"] 这个条件的人
```

如果只知道某一个条件，如何查找

```js
db.workmet.find(
  { interest: "画画" },
  {
    name: true,
    age: true,
    interest: true,
    _id: false,
  }
);
//   { interest: "画画" }  这个地方里面不能写成   { interest:[ "画画" ]},中括号[]就相当于完全匹配
```

##### **\$all-数组多项查询**

```js
// 查找 interest 满足画画和写代码两个条件的
db.workmet.find(
  { interest: { $all: ["画画", "写代码"] } },
  {
    name: true,
    age: true,
    interest: true,
    _id: false,
  }
);
```

##### **\$in-数组的或者查询**

```js
db.workmate.find(
  { interest: { $in: ["看电影", "看书"] } },
  { name: 1, interest: 1, age: 1, _id: 0 }
);
// 查找满足任意一项的或者两个都满足的就可以
```

##### **\$size-数组个数查询**

**size 个数**

```js
db.workmet.find(
  { interest: { $size: 5 } },
  {
    name: true,
    age: true,
    interest: true,
    _id: false,
  }
);
// 查找兴趣个数是 5 的条件
```

##### **\$slice-显示选项**

```js
db.workmet.find(
  { interest: { $size: 3 } },
  {
    name: true,
    age: true,
    interest: { $slice: 1 },
    _id: false,
  }
);
// $slice  表示显示出来的结果interest只显示第一个 2则表示第二个 -1 则表示最后一个  { "name" : "LiJia", "age" : 26, "interest" : [ "玩游戏" ] }
```

## 13.查询：find 的参数使用方法

##### find 参数：

- query：这个就是查询条件，MongoDB 默认的第一个参数。
- fields：（返回内容）查询出来后显示的结果样式，可以用 true 和 false 控制是否显示。
- limit：返回的数量，后边跟数字，控制每次查询返回的结果数量。
- skip:跳过多少个显示，和 limit 结合可以实现分页。
- sort：排序方式，从小到大排序使用 1，从大到小排序使用-1。

##### **分页 Demo**

```js
db.workmet
  .find({}, { name: true, age: true, _id: false })
  .limit(2)
  .skip(2)
  .sort({ age: 1 });
// 按照每页两个显示limit(2)  skip(2)跳过2条数据 sort({ age: 1 }) 按照年龄从小到大的排序
```

##### **\$where 修饰符**

它是一个非常强大的修饰符，但强大的背后也意味着有风险存在。它可以让我们在条件里使用 javascript 的方法来进行复杂查询。我们先来看一个最简单的例子，现在要查询年龄大于 30 岁的人员。

```js
db.workmate.find(
  { $where: "this.age>30" }, // 条件得加上引号
  { name: true, age: true, _id: false }
);
```

这里的 this 指向的是 workmate（查询集合）本身。这样我们就可以在程序中随意调用。虽然强大和灵活，但是这种查询对于数据库的压力和安全性都会变重，所以在工作中尽量减少\$where 修饰符的使用。

## 14.查询：find 如何在 js 文本中使用

##### **hasNext 循环结果**

```js
var db = connect("company"); //进行链接对应的集合collections
var result = db.workmate.find(); //声明变量result，并把查询结果赋值给result
//利用游标的hasNext()进行循环输出结果。
while (result.hasNext()) {
  printjson(result.next()); //用json格式打印结果
}
```

再在控制台直接加载这个文件即可（load('./demmo6.js')

##### **forEach 循环**

```js
var db = connect("company");
var result = db.workmet.find();
result.forEach((result) => {
  printjson(result);
});
```

以上两种方法均可打印，自行挑选

## 15.索引:构造百万级数据

##### **制作随机数方法**

```js
//生成随机数
function GetRandomNum(min, max) {
  let range = max - min; //得到随机数区间
  let rand = Math.random(); //得到随机值
  return min + Math.round(rand * range); //最小值+随机数取整
}

console.log(GetRandomNum(10000, 99999));
```

##### **制作随机用户名**

```js
//生成随机用户名
function GetRadomUserName(min, max) {
  let tempStringArray = "123456789qwertyuiopasdfghjklzxcvbnm".split(""); //构造生成时的字母库数组
  let outPuttext = ""; //最后输出的变量
  //进行循环，随机生产用户名的长度，这里需要生成随机数方法的配合
  for (let i = 1; i < GetRandomNum(min, max); i++) {
    //随机抽取字母，拼装成需要的用户名
    outPuttext =
      outPuttext + tempStringArray[GetRandomNum(0, tempStringArray.length)];
  }
  return outPuttext;
}
```

##### **插入 20 万数据**

```js
function getRander(min, max) {
  let range = max - min;
  let rand = Math.random();
  return min + Math.round(rand * range);
}

//生成随机用户名
function GetRadomUserName(min, max) {
  let tempStringArray = "123456789qwertyuiopasdfghjklzxcvbnm".split(""); //构造生成时的字母库数组
  let outPuttext = ""; //最后输出的变量
  //进行循环，随机生产用户名的长度，这里需要生成随机数方法的配合
  for (let i = 1; i < getRander(min, max); i++) {
    //随机抽取字母，拼装成需要的用户名
    outPuttext =
      outPuttext + tempStringArray[getRander(0, tempStringArray.length)];
  }
  return outPuttext;
}
// console.log(GetRadomUserName(7, 16));

var startTime = new Date().getTime();
var db = connect("company");
var arr = [];
for (let i = 0; i < 200000; i++) {
  arr.push({
    userName: GetRadomUserName(7, 16),
    randTime: new Date(),
    rand0: getRander(1000, 99999),
    rand1: getRander(1000, 99999),
    rand2: getRander(1000, 99999),
    rand3: getRander(1000, 99999),
    rand4: getRander(1000, 99999),
    rand5: getRander(1000, 99999),
    rand6: getRander(1000, 99999),
    rand7: getRander(1000, 99999),
    rand8: getRander(1000, 99999),
    rand9: getRander(1000, 99999),
  });
}
db.randInfo.insert(arr);
var endTime = new Date().getTime() - startTime;
print("demo------>" + endTime + "ms");
```

插入完成后,可以使用 db.randInfo.stats() 这个命令查看数据中的数据条数(count)。

## 16.索引：索引入门

##### **普通查询性能**

```js
var db = connect("company");
var startTime = new Date().getTime();
var re = db.randInfo.find({ userName: "4b8kzwju" });
re.forEach((re) => {
  printjson(re);
});
var end = new Date().getTime() - startTime;
print("time----->" + end + "ms");
```

##### **建立索引**（ensureIndex）

> 代码在下面 ，值得注意的是，建立的索引一定要是 15 章节 arr 里面的键，刚开始我随便设置的键加索引，虽然成功了，但是代码上面的效率并没任何提升，例如这里是给 userName 加索引，那么这个 userName 一定不要变在下面的代码中，包括第 17 章节中的给 rand0 加索引，不要随便起名字，否则没有任何效率改变，这个坑我找了老半天了，切记~~~

###### 查看现有索引

```
db.randInfo.getIndexes()
```

终端的结果，现在只有一个索引值:

```js
[
  {
    v: 2,
    key: {
      _id: 1,
    },
    name: "_id_",
    ns: "company.randInfo",
  },
];
```

试着为用户名（username）建立索引。建立索引只需要一句话就可以了。

```js
db.randInfo.ensureIndex({ userName: 1 });
```

```js
// 建立索引完成后再查看 如下结果
[
  {
    v: 2,
    key: {
      _id: 1,
    },
    name: "_id_",
    ns: "company.randInfo",
  },
  {
    v: 2,
    key: {
      userName: 1,
    },
    name: "userName_1",
    ns: "company.randInfo",
  },
];
```

> 无论是在关系型数据库还是文档数据库，建立索引都是非常重要的。但是索引这东西是要消耗硬盘和内存资源的，所以还是要根据程序需要进行建立了。MongoDB 也给我们进行了限制，只允许我们建立 64 个索引值。

## 17.索引：复合索引

##### **索引中的小坑**

- 数据不超万条时，不需要使用索引。性能的提升并不明显，而大大增加了内存和硬盘的消耗。
- 查询数据超过表数据量 30%时，不要使用索引字段查询。实际证明会比不使用索引更慢，因为它大量检索了索引表和我们原表。
- 数字索引，要比字符串索引快的多，在百万级甚至千万级数据量面前，使用数字索引是个明确的选择。
- 把你经常查询的数据做成一个内嵌数据（对象型的数据），然后集体进行索引。

##### **复合索引**

复合索引就是两条以上的索引。16 章节已经把 username 字段建立了索引，现在把 randNum0，这个字段也设置成索引。

```js
db.randInfo.ensureIndex({ rand0: 1 });
```

建立好后，再用查询索引状态命令进行查询。

```js
db.randInfo.getIndexes();
```

这时候已经是两个自建索引了，一共有三个索引。

```js
[
  {
    v: 2,
    key: {
      _id: 1,
    },
    name: "_id_",
    ns: "company.randInfo",
  },
  {
    v: 2,
    key: {
      userName: 1,
    },
    name: "userName_1",
    ns: "company.randInfo",
  },
  {
    v: 2,
    key: {
      rand0: 1,
    },
    name: "rand0_1",
    ns: "company.randInfo",
  },
];
```

##### **两个索引同时查询**

```js
var db = connect("company");
var startTime = new Date().getTime();
var re = db.randInfo.find({ userName: "3hvx2ia", rand0: 47450 });
re.forEach((re) => {
  printjson(re);
});
var end = new Date().getTime() - startTime;
print("time----->" + end + "ms");
```

##### **指定索引查询（hint）**

上面提到数字的索引要比字符串的索引快，这就需要一个方法来打破索引表的查询顺序，用我们自己指定的索引优先查询，这个方法就是 hint().

```js
var re = db.randInfo
  .find({ userName: "3hvx2ia", rand0: 47450 })
  .hint({ rand0: 1 }); // 1 代表 true
```

##### **删除索引**

当索引性能不佳或起不到作用时，需要删除索引，删除索引的命令是 dropIndex().

```js
db.randInfo.dropIndex("rand0_1")[ //通过这个命令db.randInfo.getIndexes()  查看应该删除的名字
  ({
    v: 2,
    key: {
      _id: 1,
    },
    name: "_id_",
    ns: "company.randInfo",
  },
  {
    v: 2,
    key: {
      userName: 1,
    },
    name: "userName_1",
    ns: "company.randInfo",
  },
  {
    v: 2,
    key: {
      rand0: 1, //不是这个
    },
    name: "rand0_1", // 是这个名字
    ns: "company.randInfo",
  })
];
```

**_这里需要注意的是删除时填写的值，并不是我们的字段名称（key），而是我们索引查询表中的 name 值。这是一个小坑，希望小伙伴们不要踩中。_**

## 18.索引：全文索引

##### **准备工作**

```js
// 新建一个文件  建立如下代码
var db = connect("company");
db.info.insert({
  contextInfo:
    "I am a programmer, I love life, love family. Every day after work, I write a diary.",
});
db.info.insert({
  contextInfo:
    "I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink.",
});
```

##### 建立全文索引

```js
db.info.ensureIndex({ contextInfo: "text" });
```

##### **全文索引查找**

查找时需要两个关键修饰符:

- \$text:表示要在全文索引中查东西。
- \$search:后边跟查找的内容。

```js
db.info.find({ $text: { $search: "programmer" } });
```

##### 查找多个词

全文索引是支持多个次查找的，比如希望查找数据中有 programmer，family，diary，drink 的数据（这是或的关系），所以两条数据都会出现。

```js
db.info.find({ $text: { $search: "programmer family diary drink" } }); // 或的关系  并非 和 的关系
```

如果这时候希望不查找出来有 drink 这个单词的记录，可以使用“-”减号来取消。

```js
db.info.find({ $text: { $search: "programmer family diary -drink" } });
```

##### **转义符**

全文搜索中是支持转义符的，比如我们想搜索的是两个词（love PlayGame 和 drink），这时候需要使用\斜杠来转意。

```js
db.info.find({ $text: { $search: '"love PlayGame" drink' } });
```

全文索引在工作还是经常使用的，比如博客文章的搜索，长文件的关键词搜索，这些都需要使用全文索引来进行

## 19.管理:用户的创建、删除与修改

##### **创建用户**db.createUser

内置角色：

1. 数据库用户角色：read、readWrite；
2. 数据库管理角色：dbAdmin、dbOwner、userAdmin;
3. 集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManage；
4. 备份恢复角色：backup、restore；
5. 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
6. 超级用户角色：root
7. 内部角色：\_\_system

首先要进入 admin 库中，进入方法是直接使用 use admin 就可以。进入后可以使用 show collections 来查看数据库中的集合。默认是只有一个集合的（system.version）

```js
db.createUser({
  user: "wgg", //用户名
  pwd: "123456", // 密码
  customData: {
    // 有事联系
    name: "果果",
    email: "1528406176@qq.com",
    age: 18,
  },
  roles: [
    {
      role: "readWrite", // 权限为读写
      db: "company", // 库
    },
    "read", // 其他库权限为只读
  ],
});
```

控制台输入以上代码，会返回 Successfully added user.......表示创建成功

##### **查找用户信息**

在控制台输入：

```js
db.system.users.find();
```

##### **删除用户**(不建议修改而直接删除用户)

删除名利也是非常简单，直接用 remove 就可以删除这个用户的信息和权限。

```js
db.system.users.remove({ user: "wgg" });
```

##### **建权**

有时候我们要验证用户的用户名密码是否正确，就需要用到 MongoDB 提供的健全操作。也算是一种登录操作，不过 MongoDB 把这叫做建权。

```
db.auth("wgg","123456")
```

如果正确返回 1，如果错误返回 0。（Error：Authentication failed。）

##### **启动建权**

重启 MongoDB 服务器，然后设置必须使用建权登录。 mongod(相当于最高权限)

```
mongod --auth
```

启动后，用户登录只能用用户名和密码进行登录，原来直接输入 mongo 形式链接已经不起作用,控制台如下

<img src="C:\Users\wang\Desktop\study\md\mongo (2).jpg" style="zoom:200%;" />

需要在控制台输入如下代码

```js
 mongo -u wgg -p 123456 127.0.0.1:27017/admin
// 名字  密码 ...如上
```

## 20.数据库的备份和还原

##### mongodump 参数 // 备份

```js
   --host 127.0.0.1  //ip地址
   --port 27017    // 端口
   --out D:\Shuju\backup  // 备份到哪里
   --collection myCollections //备份那个集合
   --db test   // 备份那个数据库
   --username username  // 用户名
   --password password  //密码
```

在 D 盘新建文件夹 backup，重新打开终端 不需要输入 mongo，直接输入

```js
 mongodump  --host  127.0.0.1 --port 27017 --out D:\Shuju\backup   // 备份所有数据库
```

看文件夹 即可以看到备份成功

##### mongorestore 还原

误删某个库还原：例如删除了 company 下面的 randInfo 这个集合，先 ctr+c 退出，再打开终端输入下面的命令

```js
mongorestore  --host 127.0.0.1  --port 27017  D:\Shuju\backup // 不需要加out

mongorestore
      --host 127.0.0.1
      --port 27017
      --username username
      --password password
      <path to the backup>
```
