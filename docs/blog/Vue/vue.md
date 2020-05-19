# Vue 的一些知识

##### vue 引入方式

css 引入方式

```
@import "~@/assets/styles/Variables";
@import "~@/assets//styles//mixins";
```

组件引入

```
<template>
  <div>
    <home-header :cityList="city"></home-header>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
export default {
  name: "Home",
  components: {
    HomeHeader,
  },
```

> ==子组件不能更改父组件传过来的参数==

> config 文件夹---》基本信息放在 index.js 中，生产环境 dev.env，线上 prod.env

> computed 监听属性 有缓存机制，如下：如果 name forth 两个变量不变化（就算 text 和 arrText 变化的话）的话 console.log('执行了 1 次')只会输出一次，

```
<template>
  <div>
    {{fullName}}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      text: [],
      arrText: [],
      name:"haha",
      forth:"heiehi",
    };
  },
  // 运用了computed属性，所以不用在上面定义fullName变量
  computed:{
      fullName(){
        console.log('执行了1次');
        return  this.name + this.forth
      }
  },
 </script>
```

> css 变量引入 一般@符号是代表 src 文件夹，css 引入前加~

```
@import '~@/assets/styles/Variables.less';
```

> 如果这个路径（assets/styles）大部分相同可以更改，看 webpack.base.conf 文件下的

```
 resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      <!--下面的是自定义的-->
      'styles': resolve('src/assets/styles'),
      'common': resolve('src/common'),
    }
  }
```

> 就可以简写为

```
<!-------------------------------Variables.less------------------------->
@bgColor: #00bcd4;
@fontColor: #333;
@headerHeight: 0.86rem;
<!-------------------------------mixins.less---------------------------->
.ellipsis(){
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}
<!-----------------------使用----------------------->
<style lang="less" scoped>
@import "~@/assets/styles/Variables";
@import "~@/assets//styles//mixins";
.header {
  position: relative;
  overflow: hidden;
  height: @headerHeight;
  line-height: @headerHeight;
  text-align: center;
  color: #fff;
  background: @bgColor;
  font-size: 0.32rem;
  .header-back {
    position: absolute;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
    // 文字
  .icon-text {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: @fontColor;
    .ellipsis;
  }
}
</style>
```

###### scss 简写

```
<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    background: #ffffff;
    z-index: 99;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - #{$hideSidebarWidth})
  }
</style>
<!-------------------------------mixins.scss---------------------------->
@mixin clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

@mixin scrollBar {
  &::-webkit-scrollbar-track-piece {
    background: #d3dce6;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #99a9bf;
    border-radius: 20px;
  }
}

@mixin relative {
  position: relative;
  width: 100%;
  height: 100%;
}
<!-----------------------variables.scss------------------------------->
//sidebar
$menuText:#bfcbd9;
$menuActiveText:#409EFF;
$subMenuActiveText:#f4f4f5; // https://github.com/ElemeFE/element/issues/12951

$menuBg:#304156;
$menuHover:#263445;

$subMenuBg:#1f2d3d;
$subMenuHover:#001528;

$sideBarWidth: 180px;

$hideSidebarWidth: 38px;

// the :export directive is the magic sauce for webpack
// https://www.bluematador.com/blog/how-to-share-variables-between-js-and-sass
:export {
  menuText: $menuText;
  menuActiveText: $menuActiveText;
  subMenuActiveText: $subMenuActiveText;
  menuBg: $menuBg;
  menuHover: $menuHover;
  subMenuBg: $subMenuBg;
  subMenuHover: $subMenuHover;
  sideBarWidth: $sideBarWidth;
}
```

#### 分离 axios 地址

新建一个 js 文件 service.js,代码如下

```
const BASEURL = "http://rap2.taobao.org:38080/app/mock";
const URL = {
  getHome: BASEURL + "/data/1510940"
};
module.exports = URL;
```

在有请求的文件中引入

```
<script>
import service from "../service";
export default {
  name: "Home",
  data() {
    return {
    };
  },
  created() {},
  mounted() {
    this.$axios
      .get(service.getHome)
      .then(res => {
        console.log(res);
        if (res.status == 200) {
          this.category = res.data.data.category;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },

};
</script>
```

#### 使用 filter

新建 filter 文件

```
export function toMoney(money = 0) {
  return money.toFixed(2);
}

```

在需要引入的文件中这样写

```
<!--html-->
 <div>
   ￥{{ item.price | moneyFilter }}(￥{{item.mallPrice | moneyFilter}})
  </div>
  <!--js-->
import { toMoney } from "../Filter/filter";
export default {
  name: "Home",
  components: {},
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  data() {
    return {
    };
  },

};
```

##### vue 传参 params 和 query

1. query 传参要用 path,params 传参要用 name
2. query 传递的参数会在地址栏显示，params 并不会
3. query 传递的参数刷新后不会消失，params 传参页面刷新会消失

```
  this.$router.push({
        name: "Goods",
        params: {
          goodsId: item.goodsId
        }
      });
   this.$route.params.goodsId;
   <!----------->
     this.$router.push({
        path: "/goods",
        query: {
          goodsId: item.goodsId
        }
      });
   this.$route.query.goodsId;
```

### 封装 axios

> 如果忘记了就看 el-admin 这个项目

1. util 文件夹下建立一个 request.js 文件

```
import axios from 'axios'
import router from '@/router/routers'
import { Notification, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'
import Config from '@/config'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url，这里是config文件夹下面prod.env文件的api
  timeout: Config.timeout // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Content-Type'] = 'application/json'  //正常设置的请求头
    config.headers['Content-Type'] = config.headers['Content-Type'] == 'multipart/form-data' ? 'multipart/form-data' : 'application/json'// 我的项目里有上传图片  所以请求头我加了判断
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.status
    if (code < 200 || code > 300) {
      Notification.error({
        title: response.message
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    let code = 0
    try {
      code = error.response.data.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        Notification.error({
          title: '网络请求超时',
          duration: 2500
        })
        return Promise.reject(error)
      }
      if (error.toString().indexOf('Error: Network Error') !== -1) {
        Notification.error({
          title: '网络请求错误',
          duration: 2500
        })
        return Promise.reject(error)
      }
    }
    if (code === 401) {
      MessageBox.confirm(
        '登录状态已过期，您可以继续留在该页面，或者重新登录',
        '系统提示',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      })
    } else if (code === 403) {
      router.push({ path: '/401' })
    } else {
      const errorMsg = error.response.data.message
      if (errorMsg !== undefined) {
        Notification.error({
          title: errorMsg,
          duration: 2500
        })
      }
    }
    return Promise.reject(error)
  }
)
export default service

```

2. api 文件夹下建立对应的文件例如 treatment.js

```
import request from '@/utils/request'
// 图片接口！！！！！！
export function imageUpload(formData) {
  return request({
    url: 'imageUpload/upload',
    method: 'post',
    /*   data: {
        formData
      },  */ // 错误的   不能这样写  否则传值的时候是  {formData: {}}
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}
<!-get 请求--->
export function imageDelete(imageId) {
  const params = {
    imageId: imageId,
  }
  return request({
    url: 'imageUpload/delete',
    method: 'get',
    params
  })
 <!--post请求-->
  export function usernameAxios(name) {
  return request({
    url: 'api/username',
    method: 'post',
    data: {
      name
    }
  })
}
```

3.再在文件中引入使用

```
import { queryTreatments } from "@/MdtApi/treatment";
    getTreatList() {
      /* this.$axios
        .get(service.queryTreatments, {
          params: {}
        }) */
      queryTreatments()
        .then(res => {
          this.$message({
            message: "治疗方式列表更新成功",
            type: "success"
          });
          res.length > 0 && (this.therapyMethod = res);
        })
        .catch(err => {
          console.log(err);
        });
    },
```
