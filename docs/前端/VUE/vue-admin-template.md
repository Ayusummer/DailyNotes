# vue-admin-template

> [尚硅谷VUE项目实战，前端项目-尚品汇(大型\重磅)_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Vf4y1T7bw?p=122&spm_id_from=pageDriver)   
> [PanJiaChen/vue-admin-template: a vue2.0 minimal admin template (github.com)](https://github.com/PanJiaChen/vue-admin-template)  

---

- [vue-admin-template](#vue-admin-template)
  - [模板介绍](#模板介绍)
  - [登录业务](#登录业务)
    - [添加背景图](#添加背景图)


---

## 模板介绍
- [简洁版](https://github.com/PanJiachen/vue-admin-template)
- [加强版](https://github.com/PanJiachen/vue-element-admin)

- 简洁版模板文件认知
- `build`
  - `index.js`: `webpack`配置文件【很少修改这个文件】
- `mock`: `mock` 数据的文件夹【模拟一些假的数据 `mockjs` 实现的】，实际开发的时候，利用的是真是接口
- `node_modules`: 项目依赖的模块
- `public`: 静态资源文件夹; ico图标，静态页面, `public` 文件夹里面经常放置一些静态资源，而且在项目打包的时候 `webpack` 不会编译这个文件夹，原封不动的打包到 `dist` 文件夹里面
- `src`: 源码文件夹;
  - `api`: 请求相关的接口文件夹
  - `assets`: 里面放置一些静态资源(一般共享的), 不同于 `public`, 放在 `aseets` 文件夹里面静态资源，在 `webpack` 打包的时候，会进行编译
  - `components`: 一般放置非路由组件获取全局组件
  - `icons`: 放置一些 `svg` 矢量图
  - `layout`: 放置一些组件与混入
  - `router`: 路由相关
  - `store`: vuex 相关
  - `styles`: 样式相关
  - `utils`
    - `requests.js`: axios 二次封装文件
  - `views`: 放置一些路由组件
  - `APP.vue`: 根组件
  - `main.js`: 入口文件
  - `permission.js`: 导航守卫相关
  - `setting.js`: 项目配置项
- `.editorconfig`: 编辑器配置文件
- `.env.development`: 开发环境配置文件
- `.env.production`: 生产环境配置文件
- `.env.staging`: 预发环境配置文件

---
## 登录业务
- 静态组件完成
- 书写 API(换成真实接口)


### 添加背景图

在 scss 中的 `.login-container` 元素中添加背景图

```scss
  // 背景图片拉伸显示
  background: url(~@/assets/login/mapleleaves.png) no-repeat;
  background-size: cover;
  background-position: center;
```
