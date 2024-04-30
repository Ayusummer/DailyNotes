
# Router

- [Router](#router)
  - [安装](#安装)
  - [入门](#入门)
  - [路由模式](#路由模式)
  - [Hash 模式](#hash-模式)
  - [HTML5 模式](#html5-模式)
  - [命名路由](#命名路由)
  - [编程式导航](#编程式导航)
  - [导航到不同位置](#导航到不同位置)
  - [历史记录](#历史记录)
  - [路由传参](#路由传参)
  - [query 路由传参](#query-路由传参)
  - [使用 Params 传参](#使用-params-传参)
  - [动态路由](#动态路由)
  - [嵌套路由](#嵌套路由)
  - [命名视图](#命名视图)
  - [重定向和别名](#重定向和别名)
  - [重定向](#重定向)
  - [别名](#别名)
  - [导航守卫](#导航守卫)
  - [全局前置守卫](#全局前置守卫)
  - [全局后置钩子](#全局后置钩子)
  - [路由元信息](#路由元信息)
  - [过渡动效](#过渡动效)
  - [滚动行为](#滚动行为)
  - [动态路由](#动态路由-1)

---

> [介绍 | Vue Router (vuejs.org)](https://next.router.vuejs.org/zh/introduction.html)
>
> Vue Router 是 [Vue.js](http://v3.vuejs.org/) 的官方路由。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。功能包括：
>
> - 嵌套路由映射
> - 动态路由选择
> - 模块化、基于组件的路由配置
> - 路由参数、查询、通配符
> - 展示由 Vue.js 的过渡系统提供的过渡效果
> - 细致的导航控制
> - 自动激活 CSS 类的链接
> - HTML5 history 模式或 hash 模式
> - 可定制的滚动行为
> - URL 的正确编码

---

## 安装

```shell
pnpm install vue-router@4
```

> vue3 装 router4
>
> vue2 装 router3

![image-20220408220637494](http://cdn.ayusummer233.top/img/202204082206720.png)

---

## 入门

用 Vue + Vue Router 创建单页应用非常简单：通过 Vue.js，我们已经用组件组成了我们的应用。当加入 Vue Router 时，我们需要做的就是将我们的组件映射到路由上，让 Vue Router 知道在哪里渲染它们。下面是一个基本的例子：

在 `src` 目录下新建一个 `router` 文件夹, 新建一个 `index.ts` 文件

`src/router/index.ts`:

```typescript
//引入路由对象
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  createMemoryHistory,
  RouteRecordRaw,
} from "vue-router";

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    path: "/marquee",
    component: () => import("../components/Marquee.vue"),
  },
];

// 创建 router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//导出router
export default router;
```

在 `main.ts` 中引入并使用:

```typescript
// 引入 vue-router
import router from "./router";
// 使用 router
app.use(router);
```

在 `App,vue` 中展示

```html
<router-view></router-view>
```

可以使用 `<router-link>` 添加跳转链接

```html
<router-link to="/marquee">跑马灯组件跳转</router-link>
```

> 请注意，我们没有使用常规的 `a` 标签，而是使用一个自定义组件 `router-link` 来创建链接。这使得 Vue Router 可以在不重新加载页面的情况下更改 URL，处理 URL 的生成以及编码。我们将在后面看到如何从这些功能中获益。
>
> ![msedge_ClbRzoAsDK](http://cdn.ayusummer233.top/img/202204082247577.gif)

---

## 路由模式

> [不同的历史模式 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/history-mode.html)
>
> [小满 Router(第一章入门) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123585949?spm=1001.2014.3001.5502)

在创建路由器实例时，`history` 配置允许我们在不同的历史模式中进行选择。

```typescript
// 创建 router
const router = createRouter({
  history: createWebHistory(),
  routes,
});
```

`Vue2 -> Vue3` 路由模式名称变化

|  Vue2   |         Vue3         |
| :-----: | :------------------: |
| history |   createWebHistory   |
|  hash   | createWebHashHistory |
| abstact | createMemoryHistory  |

---

## Hash 模式

它在内部传递的实际 URL 之前使用了一个哈希字符(`#`) 。由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。不过，**它在 SEO 中确实有不好的影响**。如果你担心这个问题，可以使用 HTML5 模式。

> [搜索引擎优化(搜索优化) \_百度百科 (baidu.com)](https://baike.baidu.com/item/搜索引擎优化/3132)

---

## HTML5 模式

用 `createWebHistory()` 创建 HTML5 模式，**官方推荐使用这个模式**

当使用这种历史模式时，URL 会看起来很 "正常"，例如 `https://example.com/user/id`。漂亮!

不过，问题来了。由于我们的应用是一个单页的客户端应用，如果没有适当的服务器配置，用户在浏览器中直接访问 `https://example.com/user/id`，就会得到一个 404 错误。这就丑了。

不用担心：要解决这个问题，你需要做的就是在你的服务器上添加一个简单的回退路由。如果 URL 不匹配任何静态资源，它应提供与你的应用程序中的 `index.html` 相同的页面。漂亮依旧!

---

## 命名路由

> [命名路由 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/named-routes.html)
>
> [小满 Router(第二章-命名路由-编程式导航) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123589648)

除了 `path` 之外，你还可以为任何路由提供 `name`。这有以下优点：

- 没有硬编码的 URL
- `params` 的自动编码/解码。
- 防止你在 url 中出现打字错误。
- 绕过路径排序(如显示一个) 

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "helloWorld",
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    path: "/marquee",
    name: "marquee",
    component: () => import("../components/Marquee.vue"),
  },
];
```

官方示例:

```typescript
const routes = [
  {
    path: "/user/:username",
    name: "user",
    component: User,
  },
];
```

要链接到一个命名的路由，可以向 `router-link` 组件的 `to` 属性传递一个对象：

```html
<el-button>
  <router-link
    :to="{
      name: 'marquee'
    }"
    >跑马灯组件跳转</router-link
  >
</el-button>
```

```html
<router-link :to="{ name: 'user', params: { username: 'erina' }}">
  User
</router-link>
```

这跟代码调用 `router.push()` 是一回事：

```js
router.push({ name: "user", params: { username: "erina" } });
```

在这两种情况下，路由将导航到路径 `/user/erina`。

> 还可以使用 a 标签进行跳转
>
> ```html
> <!-- 使用 a 标签跳转 -->
> <el-button>
>   <a href="/marquee">使用a标签跳转到跑马灯</a>
> </el-button>
> ```
>
> 使用 `router.push` 进行跳转
>
> ```html
> <!-- 使用 router.push 跳转 -->
> <el-button @click="switchToMarquee">使用router.push跳转到跑马灯</el-button>
> ```
>
> ```typescript
> // 引入 vue-router
> import router from "@/router";
> // 使用 router.push 跳转到跑马灯页面
> const switchToMarquee = (): void => {
>   router.push("/marquee");
> };
> ```
>
> 三种跳转方式中只有使用 a 标签进行跳转是在重新加载界面的情况下更改 URL
>
> ![image-20220409211757607](http://cdn.ayusummer233.top/img/202204092118935.png)

---

## 编程式导航

> [编程式导航 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/navigation.html#编程式导航)
>
> [小满 Router(第二章-命名路由-编程式导航) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123589648)

---

## 导航到不同位置

**注意：在 Vue 实例中，你可以通过 `$router` 访问路由实例。因此你可以调用 `this.$router.push`。**

想要导航到不同的 URL，可以使用 `router.push` 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，会回到之前的 URL。

当你点击 `<router-link>` 时，内部会调用这个方法，所以点击 `<router-link :to="...">` 相当于调用 `router.push(...)` ：

|          声明式           |       编程式       |
| :-----------------------: | :----------------: |
| `<router-link :to="...">` | `router.push(...)` |

该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：

```js
// 字符串路径
router.push("/users/eduardo");

// 带有路径的对象
router.push({ path: "/users/eduardo" });

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: "user", params: { username: "eduardo" } });

// 带查询参数，结果是 /register?plan=private
router.push({ path: "/register", query: { plan: "private" } });

// 带 hash，结果是 /about#team
router.push({ path: "/about", hash: "#team" });
```

**注意**：如果提供了 `path`，`params` 会被忽略，上述例子中的 `query` 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 `name` 或手写完整的带有参数的 `path` ：

```js
const username = "eduardo";
// 我们可以手动建立 url，但我们必须自己处理编码
router.push(`/user/${username}`); // -> /user/eduardo
// 同样
router.push({ path: `/user/${username}` }); // -> /user/eduardo
// 如果可能的话，使用 `name` 和 `params` 从自动 URL 编码中获益
router.push({ name: "user", params: { username } }); // -> /user/eduardo
// `params` 不能与 `path` 一起使用
router.push({ path: "/user", params: { username } }); // -> /user
```

由于属性 `to` 与 `router.push` 接受的对象种类相同，所以两者的规则完全相同。

`router.push` 和所有其他导航方法都会返回一个 _Promise_，让我们可以等到导航完成后才知道是成功还是失败。在官方文档的 [Navigation Handling](https://router.vuejs.org/zh/guide/advanced/navigation-failures.html) 中有详细介绍。

---

## 历史记录

> [小满 Router(第三章-历史记录) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123590884)

使用 `replace` 可以在不留下历史记录的情况下跳转页面

> 就是不支持前进回退了, 当不需要用户回退上个界面的时候可以使用这个, 比如登录后不需要再返回登录界面

```typescript
// 不留示例记录跳转
const switchToMarquee_no_record = (): void => {
  router.replace("/marquee");
};
```

```html
<!-- 不留历史记录跳转 -->
<el-button @click="switchToMarquee_no_record"
  >不留历史记录跳转到跑马灯</el-button
>
```

> ![msedge_cSoLw6uzxb](http://cdn.ayusummer233.top/img/202204100815795.gif)

当然, 同样的`前进` 和 `回退` 操作也是支持自定义按钮及层级的

```typescript
// 前进 1 级界面
const forward = (): void => {
  router.forward();
  // 或者 router.go(1)
};

// 回退 1 级界面
const back = (): void => {
  router.back();
  // 或者 router.go(-1)
};
```

```html
<!-- 前进 1 级界面 -->
<el-button @click="forward">前进 1 级界面</el-button>
<!-- 回退 1 级界面 -->
<el-button @click="back">回退 1 级界面</el-button>
```

> ![msedge_3pZIvCuV6y](http://cdn.ayusummer233.top/img/202204100824354.gif)

---

## 路由传参

> [小满 Router(第四章-路由传参) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123613595)
>
> [将 props 传递给路由组件 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/passing-props.html)

query 传参和 params 传参的区别

- query 传参配置的是 path，而 params 传参配置的是 name，在 params 中配置 path 无效
- query 在路由配置不需要设置参数，而 params 必须设置
- query 传递的参数会显示在地址栏中
- params 传参刷新会无效，但是 query 会保存传递过来的值，刷新不变 ;
- 路由配置

---

## query 路由传参

`GoodsWarehouse.vue`:

```vue
<script setup lang="ts">
import router from "@/router";
import { data } from "./goods.json";

type good = {
  id: number;
  name: string;
  price: number;
};

// 转到商品详情页_path+query
const toGoodsDetail = (good: good) => {
  router.push({
    path: "/goodInfo",
    query: good,
  });
};
</script>

<template>
  <div>
    <el-table :data="data">
      <el-table-column label="商品名称" prop="name" width="180">
      </el-table-column>
      <el-table-column label="商品价格" prop="price" width="180">
      </el-table-column>
      <!-- 商品id -->
      <el-table-column label="商品id" prop="id" width="180"> </el-table-column>
      <el-table-column label="操作" width="180">
        <!-- 跳转到商品详情页 -->
        <template #default="scope">
          <el-button @click="toGoodsDetail(scope.row)" type="text"
            >查看详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="less" scoped></style>
```

> `el-table` 中可以使用插槽来获取单行数据

`GoodInfo.vue`:

```vue
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div>
    <!-- 返回商品货仓界面 -->
    <el-button @click="router.push('/goodsWarehouse')"
      >返回商品货仓界面</el-button
    >
    <el-row> id: {{ route.query.id }} </el-row>
    <el-row> 商品名称 {{ route.query.name }} </el-row>
    <el-row> 商品价格: {{ route.query.price }} </el-row>
  </div>
</template>

<style lang="less" scoped></style>
```

> 子界面使用 `useRoute().query.xx`获取传入数据

> ![msedge_gJMiVwzXow](http://cdn.ayusummer233.top/img/202204132052730.gif)

---

## 使用 Params 传参

```typescript
// 转到商品详情页_name+params
const toGoodsDetail_params = (good: good) => {
  router.push({
    name: "goodInfo",
    params: good,
  });
};
```

```html
<!-- params 传参, route.params 接收参数 -->
<el-card>
  <template #header>
    <div class="card-header">params 传参, route.params 接收参数</div>
  </template>
  <div>
    <el-row> id: {{ route.params?.id }} </el-row>
    <el-row> 商品名称 {{ route.params?.name }} </el-row>
    <el-row> 商品价格: {{ route.params?.price }} </el-row>
  </div>
</el-card>
```

> ![msedge_6mAt4yKKUJ](http://cdn.ayusummer233.top/img/202204132106174.gif)

---

## 动态路由

> [带参数的动态路由匹配 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#带参数的动态路由匹配)

设置动态路由:

```typescript
    {
        path: '/goodInfo/:id',
        name: 'goodInfo',
        component: () => import('@/components/GoodsWarehouse/GoodInfo.vue')
    }
```

```typescript
// 转到商品详情页_动态路由传id
const toGoodsDetail_dynamic = (good: good) => {
  router.push({
    name: "goodInfo",
    params: {
      id: good.id,
    },
  });
};
```

```typescript
import { useRoute, useRouter } from "vue-router";
import { data } from "./goods.json";

const route = useRoute();
const router = useRouter();

const item = data.find((v) => v.id === Number(route.params.id));
```

```html
<!-- 动态路由传参, 导入数据结合传入id提取目标数据 -->
<el-card>
  <template #header>
    <div class="card-header">动态路由传参, 导入数据结合传入id提取目标数据</div>
  </template>
  <div>
    <el-row> id: {{ item?.id }} </el-row>
    <el-row> 商品名称 {{ item?.name }} </el-row>
    <el-row> 商品价格: {{ item?.price }} </el-row>
  </div>
</el-card>
```

> ![msedge_CVTuOI2ofJ](http://cdn.ayusummer233.top/img/202204132143962.gif)

> 动态路由传参也是通过 Params, 因此除了根据 id 定位 data 中的相应条目数据
>
> params 直接传一个 good 对象即可(good 对象中有 id 属性, 默认会赋给 id)
>
> > 只传 id 然后结合 data 取值可以通过网址直接访问具体商品的详情(网址里传了 id)

---

## 嵌套路由

> [小满 Router(第五章-嵌套路由) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123618719)

比如导航菜单栏做成父路由, 具体内容做成子路由

![image-20220415202911435](http://cdn.ayusummer233.top/img/202204152029712.png)

首先在路由表里把子路由嵌套进父路由的 `children` 属性中:

```typescript
    {
        path: '/goodsWarehouse',
        name: 'goodsWarehouse',
        component: () => import('@/components/GoodsWarehouse/footer.vue'),
        children: [
            {
                // path 设为空默认显示该子路由页面
                path: '',
                name: 'goodsWarehouseMain',
                component: () => import('@/components/GoodsWarehouse/GoodsWarehouse.vue')
            },
            {
                path: '/goodInfo/:id',
                name: 'goodInfo',
                component: () => import('@/components/GoodsWarehouse/GoodInfo.vue')
            }
        ]
    },
```

然后在组件中使用 `<router-view>` 展示子路由

`footer`:

```vue
<script setup lang="ts">
import router from "@/router";
</script>

<template>
  <el-card>
    <template #header>
      <div class="card-header">我是父路由</div>
      <div class="card-header">
        <!-- 跳转到货仓主界面 -->
        <el-button @click="router.push('/goodsWarehouse')"
          >返回货仓主界面</el-button
        >
        <!-- 前往商品1详情页 -->
        <el-button @click="router.push('/goodInfo/1')"
          >前往商品1详情页</el-button
        >
      </div>
    </template>
    <router-view></router-view>
  </el-card>
</template>

<style lang="less" scoped>
.card-header {
  // 文字居中
  text-align: center;
}
</style>
```

> ![image-20220415214306409](http://cdn.ayusummer233.top/img/202204152143958.png)
>
> ![msedge_69jPqzIooD](http://cdn.ayusummer233.top/img/202204152144041.gif)

---

## 命名视图

> [小满 Router(第六章-命名视图) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123671069)
>
> [命名路由 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/named-routes.html)

命名视图和插槽比较像

有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 `sidebar` (侧导航) 和 `main` (主内容) 两个视图，这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 `router-view` 没有设置名字，那么默认为 `default`。

```html
<router-view class="view left-sidebar" name="LeftSidebar"></router-view>
<router-view class="view main-content"></router-view>
<router-view class="view right-sidebar" name="RightSidebar"></router-view>
```

一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 `components` 配置 (带上 **s**)：

```js
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      components: {
        default: Home,
        // LeftSidebar: LeftSidebar 的缩写
        LeftSidebar,
        // 它们与 `<router-view>` 上的 `name` 属性匹配
        RightSidebar,
      },
    },
  ],
});
```

---

在路由表上进行相关配置:

```typescript
    {
        path: '/namedVIew',
        name: 'namedView',
        component: () => import('@/components/NamedViewsTest/root.vue'),
        children: [{
            path: "user1",
            components: {
                default: () => import('@/components/NamedViewsTest/A.vue'),
            }
        },
            {
                path: "user2",
                components: {
                    b: () => import('@/components/NamedViewsTest/B.vue'),
                    c: () => import('@/components/NamedViewsTest/C.vue')
                }
            }
        ]
    }
```

> 这是由一组嵌套路由和两组命名视图组成的(

`A B C 组件` 中只有象征性的 `Component X` 字符串

`root.vue`:

```vue
<script setup lang="ts"></script>

<template>
  <!-- 返回主界面 -->
  <el-button @click="$router.push('/')">返回主界面</el-button>
  <!-- 跳转到 user1 -->
  <el-button @click="$router.push('/namedView/user1')">跳转到 user1</el-button>
  <!-- 跳转到 user2 -->
  <el-button @click="$router.push('/namedView/user2')">跳转到 user2</el-button>
  <router-view></router-view>
  <router-view name="b"></router-view>
  <router-view name="c"></router-view>
</template>

<style lang="less" scoped></style>
```

> ![image-20220416095535247](http://cdn.ayusummer233.top/img/202204160955467.png)
>
> ![msedge_P5oKJvTUy9](http://cdn.ayusummer233.top/img/202204160955336.gif)
>
> `root.vue` 中的三个 `router-view` 第一个其实就是指 `default`, 如果在路由表的 `user2` 中加上 `default` 组件那么跳转到 `user2` 界面时就能看到三个组件界面了
>
> ```typescript
>             {
>                 path: "user2",
>                 components: {
>                     default: () => import('@/components/NamedViewsTest/A.vue'),
>                     b: () => import('@/components/NamedViewsTest/B.vue'),
>                     c: () => import('@/components/NamedViewsTest/C.vue')
>                 }
>             }
> ```
>
> ![image-20220416100053450](http://cdn.ayusummer233.top/img/202204161000639.png)

---

## 重定向和别名

> [小满 Router(第七章-重定向-别名) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123697904)
>
> [重定向和别名 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html)
>
> [Redirect and Alias | Vue Router (vuejs.org)](https://router.vuejs.org/guide/essentials/redirect-and-alias.html)

---

## 重定向

重定向可以用于将主页面路由重定向到想要作为默认页面的子页面路由上, 以 [命名视图](#命名视图) 中的例子为基准, 其主页面路由为 `/namedView`:

![image-20220416173721210](http://cdn.ayusummer233.top/img/202204161737466.png)

想要将 `namedView 主页面` 重定向到 `user1` 的话可以在路由表中加个 `redirect`:

```typescript
    {
        path: '/namedVIew',
        name: 'namedView',
        redirect:'/namedView/user1',
        component: () => import('@/components/NamedViewsTest/root.vue'),
        children: [{
            path: "user1",
            components: {
                default: () => import('@/components/NamedViewsTest/A.vue'),
            }
        },
            {
                path: "user2",
                components: {
                    b: () => import('@/components/NamedViewsTest/B.vue'),
                    c: () => import('@/components/NamedViewsTest/C.vue')
                }
            }
        ]
    }
```

> ![msedge_1NBz7cHtPj](http://cdn.ayusummer233.top/img/202204161803114.gif)

---

`redirect` 除了可以写路径字符串外还可以使用对象形式配置:

```typescript
redirect:{path:'/namedView/user1'},
```

以及函数形式(可以传参):

```typescript
redirect: to => {
    // console.log("函数形式重定向")
    return {
        path: '/namedView/user1',
        query: {
            name: '233'
        }
    }
},
```

---

## 别名

顾名思义可以给路由定义别名, 比如给 `namedView` 定义两个别名 `namedView1, namedView2` 可以在路由表中使用 `alias` 属性进行定义:

```typescript
path: '/namedVIew',
name: 'namedView',
// 别名
alias: ['/namedView1', '/namedView2'],
```

```html
<!-- 跳转到 namedView1 -->
<el-button @click="$router.push('/namedView1')">跳转到 namedView1</el-button>
<!-- 跳转到 namedView2 -->
<el-button @click="$router.push('/namedView2')">跳转到 namedView2</el-button>
```

> ![msedge_oDYgxZLJHR](http://cdn.ayusummer233.top/img/202204161821462.gif)

---

## 导航守卫

> [导航守卫 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)
>
> [小满 Router(第八章-导航守卫) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123699583)
>
> [Navigation Guards | Vue Router (vuejs.org)](https://router.vuejs.org/guide/advanced/navigation-guards.html)

vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。这里有很多方式植入路由导航中：全局的，单个路由独享的，或者组件级的。

所有的跳转和前进后退都会走导航守卫函数, 因此做路由权限用得比较多

## 全局前置守卫

比如在登录时存一个 `token`, 当直接通过路由访问界面时先判断当前路由是否在路由白名单中或者当前已登录(存了 token, 或者其他复杂的加密算法) 则放通路由, 否则重定位回登录界面

`main.ts`:

```typescript
// 定义路由白名单
const whiteList = ["/login", "/404", "/401", "/lock"];

//  使用导航守卫
router.beforeEach((to, from, next) => {
  // 若路由在白名单内或者已经登录(有token), 则放通
  if (whiteList.indexOf(to.path) !== -1 || localStorage.getItem("token")) {
    next();
  } else {
    // 否则跳转到登录页面
    next("/login");
  }
});
```

路由表:

```typescript
// 导航守卫测试页面
{
    path: '/',
    name: 'login',
    alias: '/login',
    component: () => import('@/views/NavigationGuardTest/login.vue'),
},
// 导航守卫测试主页面(需要登录才能访问)(导航界面)
{
    path: "/navigation",
    name: "navigation",
    component: () => import("@/components/Navigation/Navigation.vue")
},
```

`login.vue`:

```vue
<script setup lang="ts">
import { reactive, ref, Ref } from "vue";
import type { FormInstance, FormItemRule } from "element-plus";
import { ElMessage } from "element-plus";
import router from "@/router";

// 定义表单数据类型
type FormData = {
  account: string;
  password: string;
};

// 定义表单验证规则
const form = ref<FormInstance>();

// 定义规则类型
type Rules = {
  [K in keyof FormData]?: Array<FormItemRule>;
};

// 定义表单数据
const formLabelAlign = reactive<FormData>({
  // 账号
  account: "",
  // 密码
  password: "",
});

// 定义规则
const rules = reactive<Rules>({
  account: [
    {
      required: true,
      message: "请输入账号",
      type: "string",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      type: "string",
    },
  ],
});

// 密码输入框的显示状态
const showPassword: Ref<boolean> = ref(false);

//  登录函数
const login = (): void => {
  form.value?.validate((validate) => {
    if (validate) {
      // 跳转到首页
      router.push("/navigation");
      // 设置token
      localStorage.setItem("token", "1");
    } else {
      // 提示错误
      ElMessage.error("请检查表单错误");
    }
  });
};
</script>

<template>
  <div class="login">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <!-- 返回主界面 -->
          <el-button @click="$router.push('/')">返回主界面</el-button>
          Login
        </div>
      </template>
      <el-form :model="formLabelAlign" :rules="rules" ref="form">
        <el-form-item label="账号:" prop="account">
          <el-input
            v-model="formLabelAlign.account"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <!-- <el-input type="password" v-model="formLabelAlign.password" /> -->
          <el-input
            v-model="formLabelAlign.password"
            type="password"
            show-password
            show-password-icon
            @click="showPassword = !showPassword"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <!-- 登录按钮 -->
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.box-card {
  width: 480px;
}
</style>
```

> 这里使用了 `ElementPlus` 的表单控件并配了示例性质的表单校验
>
> ![msedge_qXVOGjzrg4](http://cdn.ayusummer233.top/img/202204171003267.gif)

---

## 全局后置钩子

和守卫不同的是，钩子不会接受 `next` 函数也不会改变导航本身：

```js
router.afterEach((to, from) => {
  sendToAnalytics(to.fullPath);
});
```

它们对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用。

它们也反映了 [navigation failures](https://router.vuejs.org/zh/guide/advanced/navigation-failures.html) 作为第三个参数：

```js
router.afterEach((to, from, failure) => {
  if (!failure) sendToAnalytics(to.fullPath);
});
```

---

## 路由元信息

> [路由元信息 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/meta.html)
>
> [小满 Router(第九章-路由元信息) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123766639)

通过路由记录的 `meta` 属性可以定义路由的**元信息**。使用路由元信息可以在路由中附加自定义的数据，例如：

- 权限校验标识。
- 路由组件的过渡名称。
- 路由组件持久化缓存 (keep-alive) 的相关配置。
- 标题名称

我们可以在**导航守卫**或者是**路由对象**中访问路由的元信息数据。

比如我们给每个页面路由加一个 `meta` 属性, 其中包含一个 `title` 字段, 并在 `beforeEach` 中读取 `title` 并赋给当前界面标题:

`路由表`:

```typescript
// 导航守卫测试页面
{
    path: '/',
    name: 'login',
    alias: '/login',
    // 路由元信息
    meta: {
        title: '登录页面',
    },
    component: () => import('@/views/NavigationGuardTest/login.vue'),
},
// 导航守卫测试主页面(需要登录才能访问)(导航界面)
{
    path: "/navigation",
    name: "navigation",
    meta: {
        title: '组件导航页面'
    },
    component: () => import("@/components/Navigation/Navigation.vue")
},

// .....其他路由meta

// 定义 meta 中的属性类型, 以免后面使用时报类型错误
declare module 'vue-router' {
    interface RouteMeta {
        title: string
    }
}

//  使用导航守卫(前置守卫)
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    // 挂载 LoadingBar 到 body 上(折中做法)
    render(LoadingBarVNode, document.body)
    LoadingBarVNode.component?.exposed?.startLoading()
    // 若路由在白名单内或者已经登录(有token), 则放通
    if (whiteList.indexOf(to.path) !== -1 || localStorage.getItem('token')) {
        next()
    } else {
        // 否则跳转到登录页面
        next('/login')
    }
})
```

> ![msedge_DOQ8qIlolX](http://cdn.ayusummer233.top/img/202204172206956.gif)

---

## 过渡动效

> [过渡动效 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/transitions.html)
>
> [小满 Router(第十章-路由过渡动效) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123767240)

想要在路径组件上使用转场，并对导航进行动画处理，你需要使用 [v-slot API](https://router.vuejs.org/zh/api/#router-view-s-v-slot)：

```html
<router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
```

比如结合 [Animate.css](https://animate.style/#usage) 来做一些路由入场动效:

首先在路由表里给每个路由的 `meta` 加上一个 `transition` 字段:

```typescript
// 导航守卫测试页面
{
    path: '/',
    name: 'login',
    alias: '/login',
    // 路由元信息
    meta: {
        title: '登录页面',
        transition: 'animate__fadeIn',
    },
    component: () => import('@/views/NavigationGuardTest/login.vue'),
},
// 导航守卫测试主页面(需要登录才能访问)(导航界面)
{
    path: "/navigation",
    name: "navigation",
    meta: {
        title: '组件导航页面',
        transition: 'animate__fadeIn',
    },
    component: () => import("@/components/Navigation/Navigation.vue")
},

    // ... 其他路由 transition.....
```

> 图省事每个路由的 `transition` 都填的淡入效果

然后在使用 `router-view` 时通过插槽解出 `route(当前路由信息)` 和 `Component(当前VNode)` 并使用过渡效果

```typescript
<script setup lang="ts">
  import 'animate.css'
</script>
```

```html
<template>
  <!-- route 即路由信息, Component 即当前 VNode -->
  <router-view #default="{ route, Component }">
    <transition
      :enter-active-class="`animate__animated ${route.meta.transition}`"
    >
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
```

> ![msedge_L6Sb0mpZNj](http://cdn.ayusummer233.top/img/202204180919633.gif)

---

## 滚动行为

> [滚动行为 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#滚动行为)
>
> [小满 Router(第十一章-滚动行为) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123770440)

使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。

> **注意: 这个功能只在支持 history.pushState 的浏览器中可用。**

当创建一个 Router 实例，你可以提供一个 `scrollBehavior` 方法:

```js
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
})
```

比如想让路由跳转时记住当前页面滚动条位置并在下次回到当前页面时保持此位置(若无则默认滚动到顶部) 可以如下操作:

在路由表 `router` 创建时:

```typescript
// 创建 router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log("savaPosition", savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
```

> ![msedge_QUnJhZJs4x](http://cdn.ayusummer233.top/img/202204181005323.gif)

---

## 动态路由

> [小满 Router(第十二章-动态路由) \_小满 zs 的博客-CSDN 博客](https://blog.csdn.net/qq1195566313/article/details/123783173)
>
> [动态路由 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/dynamic-routing.html)

对路由的添加通常是通过 [`routes` 选项](https://router.vuejs.org/zh/api/#routes)来完成的，但是在某些情况下，你可能想在应用程序已经运行的时候添加或删除路由。具有可扩展接口(如 [Vue CLI UI](https://cli.vuejs.org/dev-guide/ui-api.html) )这样的应用程序可以使用它来扩展应用程序。

> 常用于分权限, 比如不同用户看到的页面功能不同

---
