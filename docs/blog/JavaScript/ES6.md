# ES6 语法总结

##### 新的声明方式

```
全局声明：var
局部声明：let const
优点：减少环境污染
区别：
1. var定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。
2.let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。
3.const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改。
```

##### 变量的解构赋值

==数组的解构赋值==

```
letl  [a,b,c]=[1,2,3];
let [a, [b, c], d] = [1, [2, 3], 4]; //两边的结构必须一样
let [foo = true] =[];
console.log(foo); //控制台打印出true
let [a, b = "wgg"] = ["王", undefined]; // b还是取默认值 相当于没有赋值
let [a, b = "wgg"] = ["王", null]; // b是取null 相当于为空 ''
```

==对象的解构赋值==

数组解构是根据位置解构 对象是根据 key 值解构

```
let {foo,bar} = {foo:'JSPang',bar:'技术胖'};
console.log(foo+bar); //控制台打印出了“JSPang技术胖”

let ber;
({ ber } = { ber: "wang" }); // 必须加括号  否则报错
console.log(ber);
```

==字符串解构==

```
let [a, b, c, d, e] = ["wangg"];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
```

##### 扩展运算符和 rest 运算符

==对象扩展运算符（…）==

> 当编写一个方法时，我们允许它传入的参数是不确定的。这时候可以使用对象扩展运算符来作参数

```
function wgg(...arg) {
  console.log(arg[0]); // 1
  console.log(arg[1]); // 2
  console.log(arg[2]); // 3
  console.log(arg[3]); // undefined
}
wgg(1, 2, 3);
```

==扩展运算符的用处==

```
let arr1 = ["www", "jspang", "com"];

let arr2 = arr1;
arr2.push("zhui");
console.log(arr1);  // 此时arr1被改变了["www", "jspang", "com", "zhui"]  因为我们这是对内存堆栈的引用，而不是真正的赋值

let arr2 = [...arr1]; // 只追加arr1里面的元素给arr2 不是把整个数组给arr2
arr2.push("zhui");
console.log(arr1); // ["www", "jspang", "com"]
```

==rest 运算符==

```
function rest(a, ...arg) {
  console.log(a); // b
  console.log(arg.length); // 4  默认取剩余不确定的参数
  for (let val of arg) {
    console.log(val); //  1  12 3  4  不用原始的for in 循环
  }
}
rest("b", 1, 12, 3, 4);
```

##### 字符串模版

```
let a = "我叫";
let b = `${a}王果果呀,<br><b>哈哈哈</b>`;
document.write(b);
document.write("王念念||".repeat(3));
// 支持运算符
let a=1;
let b=2;
let result=`${a+b}`;
document.write(result);
```

==字符串查找==

- includes

```
let jspang='技术胖';
let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
document.write(blog.includes(jspang));
```

> 需要注意的是：starts 和 ends 后边都要加 s

- 判断开头是否存在

```
blog.startsWith(jspang);
```

- 判断结尾是否存在

```
blog.endsWith(jspang);
```

- 复制字符串

```
document.write('jspang|'.repeat(3));
```

##### ES6 中新增的数组知识（1）

==JSON 数组格式转换==

- Array.from
- Array.of()
- find( )实例方法

---

所谓的实例方法就是并不是以 Array 对象开始的，而是必须有一个已经存在的数组，然后使用的方法，这就是实例方法,这里的 find 方法是从数组中查找。在 find 方法中我们需要传入一个匿名函数，函数需要传入三个参数：value：表示当前查找的值。
index：表示当前查找的数组索引。
arr：表示当前数组。

```
 let wgg = {
  "0": "王",
  "1": "年",
  "2": "念",
  length: 3 // 加上这个length属性  就可以转换成数组
};
console.log(Array.from(wgg)); // ["王", "年", "念"]
---------
let arr = Array.of(3, 4, 5, 6);
console.log(arr); // [3, 4, 5, 6]
------------
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr.find(function(value,index,arr){
    return value > 5;
}))  // 控制台输出了6，说明找到了符合条件的值，并进行返回了，如果找不到会显示undefined。
```

##### ES6 中新增的数组知识（2）

- fill( )实例方法 【作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置】

```
let arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr3.fill("jspang", 2, 5);
console.log(arr3); // [0, 1, "jspang", "jspang", "jspang", 5, 6, 7, 8, 9]  索引为2开始 索引为5结束 索引为5就没有了
```

==数组的遍历==

> for…of 的循环可以避免我们开拓内存空间，增加代码运行效率，所以建议大家在以后的工作中使用 for…of 循环。有的小伙伴会说了，反正最后要转换成 ES5，没有什么差别，但是至少从代码量上我们少打了一些单词，这就是开发效率的提高。

```
let arr=['jspang','技术胖','大胖逼逼叨']

for (let item of arr){
    console.log(item);
}
```

> 同时输出数组的内容和索引：我们用 entries()这个实例方法，配合我们的 for…of 循环就可以同时输出内容和索引了。

```
// 此方法可以输出索引加item值
let wggh = ["wang", "nian", "hhh"];
for (let [index, val] of wggh.entries()) {
  console.log(index + ":" + val);
}
--------
// 此方法可以输出index值
for (let index of arr.keys()) {
  console.log(index);
}
```

##### ES6 中的函数和数组补漏

==对象的函数解构==

```
// 对象的解构赋值   免得打 json.a  json.b
let json = {
  a: "王",
  b: "念念"
};
//  fun 里面的形参 必须和json 里面的数据一样  否则报错
function fun({ a, b = 1 }) {
  console.log(a + b);
}
fun(json);
```

==数组的函数解构==

```
let a = [1, 2, 3];
function wgg(a, b, c) {
  console.log(a, b, c); // 1 2 3
}
wgg(...a);
```

==in 的用法==

```
对象判断
// in 判断对象里面是否有这个值
let obj = {
  a: "技术胖",
  b: "王哈哈哈"
};
console.log("a" in obj); // true
console.log("c" in obj); // false

数组判断
// 先来看一下ES5判断的弊端，以前会使用length属性进行判断，为0表示没有数组元素。但是这并不准确，或者说真实开发中有弊端
// 判断空位
let kong = [, , ,];
console.log(1 in kong); // false 表示数组下标为1的地方没有这个值 为空
```

==数组的遍历方法==

1.forEach

```
let arr=['jspang','技术胖','前端教程'];

arr.forEach((val,index)=>console.log(index,val));
```

> forEach 循环的特点是会自动省略为空的数组元素，相当于直接给我们筛空了。当是有时候也会给我们帮倒忙

2.filter

```
let arr=['jspang','技术胖','前端教程'];

arr.filter(x=>console.log(x));
```

3.some

```
let arr=['jspang','技术胖','前端教程'];

arr.some(x=>console.log(x));
```

4.map

```
let arr=['jspang','技术胖','前端教程'];

console.log(arr.map(x=>'web'));  // map在这里起到一个替换的作用
```

5.join()方法

```
let arr=['jspang','技术胖','前端教程'];

console.log(arr.join('|'));
```

> join()方法就是在数组元素中间，加了一些间隔，开发中很有用处。

6.toString()方法

```
let arr=['jspang','技术胖','前端教程'];

console.log(arr.toString());  // 转换时只是是用逗号隔开了
```

##### ES6 中对象

==对象赋值==

```
let skill = "王";
let name = "念念";
let poi = { name, skill };
console.log(poi); // {name: "念念", skill: "王"}
```

==对象 Key 值构建==

```
let wen = "zekun";
let objj = {
  [wen]: "wang"
};
console.log(objj); // {zekun: "wang"}
```

==Object.is( ) 对象比较==

```
// === 同值相等  is严格相等
console.log(+0 === -0); // true  都是0
console.log(NaN === NaN); // false  不知道具体是哪一个对象

console.log(Object.is(+0, -0)); // false  一个正  一个负
console.log(Object.is(NaN, NaN)); // true  都是NaN
```

==Object.assign( )合并对象==

```
let a = { name: "王" };
let b = { sex: "女" };
let c = { age: "22" };
let d = Object.assign(a, b, c);
console.log(d); // {name: "王", sex: "女", age: "22"}
```

##### Symbol 在对象中的作用

==声明 Symbol==

```
var a = new String;
var b = new Number;
var c = new Boolean;
var d = new Array;
var e = new Object;
var f= Symbol();
console.log(typeof(d));
```

==Symbol 的打印==

```
var g = Symbol('jspang');
console.log(g);
console.log(g.toString());  // 没有toString的是红字，toString的是黑字
```

==Symbol 在对象中的应用==

```
var jspang = Symbol();
var obj={
    [jspang]:'技术胖'
}
console.log(obj[jspang]);
obj[jspang]='web';
console.log(obj[jspang]);
```

==Symbol 对象元素的保护作用==

> 在对象中有很多值，但是循环输出时，并不希望全部输出，那我们就可以使用 Symbol 进行保护

```
//没有进行保护的写法：

var obj={name:'jspang',skill:'web',age:18};

for (let item in obj){
    console.log(obj[item]);
}
//现在我不想别人知道我的年龄，这时候我就可以使用Symbol来进行循环保护。

let obj={name:'jspang',skill:'web'};
let age=Symbol();
obj[age]=18;
for (let item in obj){
    console.log(obj[item]);
}
console.log(obj);
```

##### Set 和 WeakSet 数据结构

==Set 的声明==

> set 不是数据类型，而是数据结构。它是 ES6 中新的东西，并且很有用处。Set 的数据结构是以数组的形式构建的。类似后端转给前端的 json 结构

```
let setArry = new Set(["wang", "hha", "heihie"]);
console.log(setArry); // Set(3) {"wang", "hha", "heihie"}
```

==Set 值的增删查==

```
setArry.add("前端"); // 追加方法
console.log(setArry); // Set(4) {"wang", "hha", "heihie", "前端"}
setArry.delete("前端"); // 删除方法
console.log(setArry); // Set(4) {"wang", "hha", "heihie"}
console.log(setArry.has("前端")); // false  // 判断是否有这个字符
setArry.clear(); // 清除所有
console.log(setArry); // Set{}

// set的循环 for…of…循环
let arr = new Set(["1", "2", "34"]);
for (let item of arr) {
  console.log(item); // 1  2 34
}
```

==size 属性==

```
let setArr = new Set(["wgg", "王果果", "web", "jspang"]);
for (let item of setArr) {
  console.log(item); // 最后一个wgg没有打印出来  因为重复了
}
console.log(setArr.size); // 3
```

==WeakSet 的声明==

```
let weakObj = new WeakSet();  // 不能直接在里面面赋值对象  必须通过add的方法添加
let obj = { a: "wgg", b: "wnn" };
// ==
let obj1 = obj;
weakObj.add(obj);
weakObj.add(obj1);
console.log(weakObj);  // WeakSet {a: "wgg", b: "wnn"}
// ====
let obj1 = { a: "wgg", b: "wnn" };  // 开辟了一个新的空间
weakObj.add(obj);
weakObj.add(obj1);
console.log(weakObj);  // WeakSet {a: "wgg", b: "wnn",a: "wgg", b: "wnn"}
```

##### map 数据结构

> Map 的灵活性要更好，你可以把它看成一种特殊的键值对，但你的 key 可以设置成数组/对象，值也可以设置成字符串

==Json 和 map 格式的对比==

```
// 普通的json结构
let json = {
  name: "wgg",
  skill: "web"
};
console.log(json.name);
// map 结构
var map = new Map();
map.set(json, "wgg");
console.log(map); //  Map(1) {{name: "wgg", skill: "web"} => "wgg"}
map.set("wgg2", json);
console.log(map); // Map(2) {{name: "wgg", skill: "web"} => "wgg", "wgg2" => {name: "wgg", skill: "web"}}
```

==map 的增删查==

> get size clear() delete() has

```
// get取值
console.log(map.get(json)); // wgg
console.log(map.get("wgg2")); // {name: "wgg", skill: "web"}
// 删除
map.delete(json);
console.log(map); //  Map(1) {{"wgg2" => {name: "wgg", skill: "web"}}
console.log(map.size); // map里面还剩下的个数 1

map.clear(); // 清除所有
console.log(map.has("wgg2")); // true 查找方法  返回true or false
```

##### 用 Proxy 进行预处理

==声明 Proxy==

```
new Proxy（{},{}）// 两个花括号，第一个花括号就相当于我们方法的主体，后边的花括号就是Proxy代理处理区域，相当于我们写钩子函数的地方
```

==get 属性，set 属性，apply 的使用==

> get 属性是在你得到某对象属性值时预处理的方法，他接受三个参数：target：得到的目标值；key：目标的 key 值，相当于对象的属性；property：这个不太常用，用法还在研究中，还请大神指教。

> set 属性是值你要改变 Proxy 属性值时，进行的预先处理。它接收四个参数。target:目标值；key：目标的 Key 值；value：要改变的值；receiver：改变前的原始值。

> apply 的作用是调用内部的方法，它使用在方法体是一个匿名函数时

```
let pro = new Proxy(
  {
    add: function(val) {
      return val + 1;
    },
    name: "my name is wgg"
  },
  {
    get: function(target, key, property) {
      console.log(target); // {name: "my name is wgg", add: ƒ}
      console.log(key); // name
      return target[key]; // my name is wgg
    },
    set: function(target, key, value, receiver) {
      console.log(`setting ${key} = ${value}`); // setting name = 王果果啊
      return (target[key] = value); // 必须得返回值
    }
  }
);
console.log(pro.name); // my name is wgg
pro.name = "王果果啊";
console.log(pro.name); // 王果果啊

// apply方法
let target = function() {
  return "我叫王果果";
};
let handel = {
  apply(target, ctx, args) {
    console.log("jinlail");
    return Reflect.apply(...arguments); // 需要死记硬背
  }
};
let pRo = new Proxy(target, handel);
console.log(pRo()); // 我叫王果果
```

##### promise 对象的使用

> 这个过程是有一定的顺序的，你必须保证上一步完成，才能顺利进行下一步。

```
let state=1;
function step1(resolve,reject){
    console.log('1.开始-洗菜做饭');
    if(state==1){
        resolve('洗菜做饭--完成');
    }else{
        reject('洗菜做饭--出错');
    }
}


function step2(resolve,reject){
    console.log('2.开始-坐下来吃饭');
    if(state==1){
        resolve('坐下来吃饭--完成');
    }else{
        reject('坐下来吃饭--出错');
    }
}


function step3(resolve,reject){
    console.log('3.开始-收拾桌子洗完');
     if(state==1){
        resolve('收拾桌子洗完--完成');
    }else{
        reject('收拾桌子洗完--出错');
    }
}

new Promise(step1).then(function(val){
    console.log(val);
    return new Promise(step2);

}).then(function(val){
     console.log(val);
    return new Promise(step3);
}).then(function(val){
    console.log(val);
    return val;
});
```

##### class 类的使用

==类的声明==

```
class Code{
    name(val){
        console.log(val);
    }
}
```

==类的使用==

> 我们已经声明了一个类，并在类里声明了 name 方法，现在要实例化类，并使用类中的方法

```
// 实例化类
let wgg = new Code;
wgg.name("王欢欢"); // 王欢欢
```

==类的多方法声明==

---

注意：1.多个函数的时候不用打分号；2.必须加 return 否则下面函数引用的时候会报错 undefined

```
class Code {
  name(val) {
    console.log(val);
    return val; // 必须加return 否则下面函数引用的时候会报错undefined
  }
  skill(val) {
    console.log(this.name("王哈哈哈哈") + val); // 引用类里面的函数 王哈哈哈哈skill
  }
}
let wgg = new Code;
wgg.name("王欢欢"); // 王欢欢
wgg.skill("skill");
```

==类的传参 constructor==

```
class Code {
  //   类传参
  constructor(a, b) {
    this.a = a; //类设置
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }
}
// 实例化类
let wgg = new Code(1, 2);
console.log(wgg.add()); // 3 通过类传参
```

==class 的继承==

> 声明一个 Jichen 的新类并继承 Code 类，Jichen 新类里边为空，这时候我们实例化新类，并调用里边的 name 方法。结果也是可以调用到的。

```
class Code {
  name(val) {
    // console.log(val);
    return val; // 必须加return 否则下面函数引用的时候会报错undefined
  } //多个函数的时候不用打分号
  skill(val) {
    console.log(this.name("王哈哈哈哈") + val); // 引用类里面的函数 王哈哈哈哈skill
  }
}
// 用 extends 方法继承Code里面的函数
class Jichen extends Code {}
let gt = new Jichen();
gt.name("继承"); //  继承
```
