# nuxt-juejin

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


# nuxt-juejin
#/**************配置文件nuxt.config.js******************/
#head: 配置应用的meta信息
#loading: 进度条，可以自定义，加载组件可以放置于componnets
#plugins: 插件配置，像element-ui，axios等
#transition： 页面切换效果
#build: 构建配置，（extend：为客户端和服务端的构建配置进行手工的扩展处理），如：
#module.exports = {                                                      
#  build: {
    extend (config, { isClient }) {
      // 为 客户端打包 进行扩展配置
      if (isClient) {
        config.devtool = 'eval-source-map'
      }
    }，
    filenames: {
      vendor: 'vendor.[hash].js',
      app: 'app.[chunkhash].js'
    }
  }
}  
#css: 设置公共样式，本项目采用sass，只需安装sass-loader，和node-sass即可使用
#generate： 配置 Nuxt.js 应用生成静态站点的具体方式， 如：
#const axios = require('axios')
#module.exports = {
#  generate: {
    routes: function () {
      return axios.get('https://my-api/users')
      .then((res) => {
        return res.data.map((user) => {
          return '/users/' + user.id
        })
      })      
    }
  }
}
#/********************组件异步数据的预获取************************/
#export default {
#  asyncData ({ context, params }, callback) {
    axios.get(`https://my-api/posts/${params.id}`)
    .then((res) => {
      callback(null, { title: res.data.title })
    })
    .catch((e) => {
      callback({ statusCode: 404, message: 'Post not found' })
    })
  }
}
#context: 参考：https://zh.nuxtjs.org/api#上下文对象
#Fetch方法，与 asyncData 方法类似，不同的是它不会设置组件的数据
#<script>
#export default {
  fetch ({ store, params }) {
    return axios.get('http://my-api/stars')
    .then((res) => {
      store.commit('setStars', res.data)
    })
  }
}
</script>
#/*******************数据通信库axios***********************/
#axios在api中配置axios的baseURL，timeout以及GET，POST和DELETE方法等再导出
#/******************状态树vuex***************************/
#nuxt内置引用了vuex，不需要额外安装，只需按照指定的格式去操作：
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    counter: 0
  },
  mutations: {
    increment (state) {
      state.counter++
    }
  }
})

export default store
#/***************************公共组件*************************/
#如头部导航栏header组件，就引用在component文件里default.vue中，子组件显示<nuxt-child />

##/*********************难点*********************************/
#服务端渲染nuxt相较于vue客户端渲染主要在于数据的获取过程，以及nuxt封装了很多插件，开发者不需要再去安装和配置，只需按指定的格式去应用
#全局自定义事件directives：
{
  bind: function (el, binding, vnode) {},
  update: function (el, binding) {},
  unbind: function (el) {}
}
