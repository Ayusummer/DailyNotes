# 目录
- [目录](#目录)
- [项目地址](#项目地址)
- [项目文档](#项目文档)
- [开始](#开始)
  - [环境](#环境)
    - [VSCode 插件](#vscode-插件)
  - [npm Script](#npm-script)
  - [目录说明](#目录说明)
- [项目配置](#项目配置)
- [项目规范](#项目规范)
  - [CommitLint](#commitlint)
- [后端路由接入](#后端路由接入)
  - [配置文件中修改权限模式为 BACK](#配置文件中修改权限模式为-back)
  - [后端接口返回路由表](#后端接口返回路由表)
  - [数据库修改](#数据库修改)
- [深入理解之路由、菜单、权限的设计](#深入理解之路由菜单权限的设计)
  - [mark](#mark)
  - [项目初始化](#项目初始化)
  - [路由配置](#路由配置)
  - [登录主体流程](#登录主体流程)
  - [获取用户信息](#获取用户信息)
  - [生成路由](#生成路由)
  - [生成菜单](#生成菜单)
  - [路由守卫](#路由守卫)
- [常见问题](#常见问题)
  - [tab 页切换后页面空白](#tab-页切换后页面空白)

---

# 项目地址

[vbenjs/vue-vben-admin: A modern vue admin. It is based on Vue3, vite and TypeScript. It's fast！ (github.com)](https://github.com/vbenjs/vue-vben-admin)

[vbenjs/vben-admin-thin-next: vue-vben-admin-2.0 mini template.vue3,vite,typescript (github.com)](https://github.com/vbenjs/vben-admin-thin-next)

[vbenjs/vue-vben-admin-doc: vue-vben-admin-doc (github.com)](https://github.com/vbenjs/vue-vben-admin-doc)

---

# 项目文档

> [Home | Vben Admin (vvbin.cn)](https://vvbin.cn/doc-next/)
>
> [构建&部署 | Vben Admin (vvbin.cn)](https://vvbin.cn/doc-next/guide/deploy.html)

---

# 开始

## 环境

`Pnpm(6.32.4)` + `Node.js(16.14.2)` + `Git(2.36.0.windows.1)`

---

### VSCode 插件

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件

- [windicss IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - windicss 提示插件

- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 插件

- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - 官方推荐 Vue3 插件

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化

- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化

- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮

- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) - 颜色代码高亮显示

  ![image-20220423115459335](http://cdn.ayusummer233.top/img/202204231155705.png)

---

## npm Script

```sh
"scripts": {
  # 安装依赖
  "bootstrap": "yarn install",
  # 运行项目
  "serve": "npm run dev",
  # 运行项目
  "dev": "vite",
  # 构建项目
  "build": "vite build && esno ./build/script/postBuild.ts",
  # 清空缓存后构建项目
  "build:no-cache": "yarn clean:cache && npm run build",
  # 生成打包分析，在 `Mac OS` 电脑上执行完成后会自动打开界面，在 `Window` 电脑上执行完成后需要打开 `./build/.cache/stats.html` 查看
  "report": "cross-env REPORT=true npm run build",
  # 类型检查
  "type:check": "vue-tsc --noEmit --skipLibCheck",
  # 预览打包后的内容（先打包在进行预览）
  "preview": "npm run build && vite preview",
  # 直接预览本地 dist 文件目录
  "preview:dist": "vite preview",
  # 生成 ChangeLog
  "log": "conventional-changelog -p angular -i CHANGELOG.md -s",
  # 删除缓存
  "clean:cache": "rimraf node_modules/.cache/ && rimraf node_modules/.vite",
  # 删除 node_modules (`window` 系统手动删除该目录较慢，可以使用该命令来进行删除)
  "clean:lib": "rimraf node_modules",
  # 执行 eslint 校验，并修复部分问题
  "lint:eslint": "eslint \"{src,mock}/**/*.{vue,ts,tsx}\" --fix",
  # 执行 prettier 格式化（该命令会对项目所有代码进行 prettier 格式化，请谨慎执行）
  "lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"",
  # 执行 stylelint 格式化
  "lint:stylelint": "stylelint --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
  "lint:lint-staged": "lint-staged -c ./.husky/lintstagedrc.js",
  "lint:pretty": "pretty-quick --staged",
  # 对打包结果进行 gzip 测试
  "test:gzip": "http-server dist --cors --gzip -c-1",
  # 对打包目录进行 brotli 测试
  "test:br": "http-server dist --cors --brotli -c-1",
  # 重新安装依赖，见下方说明
  "reinstall": "rimraf yarn.lock && rimraf package.lock.json && rimraf node_modules && npm run bootstrap",
  "install:husky": "is-ci || husky install",
  # 生成图标集，见下方说明
  "gen:icon": "esno ./build/generate/icon/index.ts",
  "postinstall": "npm run install:husky"
}
```

- `生成图标集`: 该命令会生成所选择的图标集，提供给图标选择器使用。具体使用方式请查看 [图标集生成](https://vvbin.cn/doc-next/dep/icon.html#图标集预生成)

- `重新安装依赖`: 

  该命令会先删除 `node_modules`、`yarn.lock`、`package.lock.json` 后再进行依赖重新安装（安装速度会明显变慢）。

  接下来你可以修改代码进行业务开发了。我们内建了模拟数据、HMR 实时预览、状态管理、国际化、全局路由等各种实用的功能辅助开发，请阅读其他章节了解更多。

---

## 目录说明

```sh
.
├── build # 打包脚本相关
│   ├── config # 配置文件
│   ├── generate # 生成器
│   ├── script # 脚本
│   └── vite # vite配置
├── mock # mock文件夹
├── public # 公共静态资源目录
├── src # 主目录
│   ├── api # 接口文件
│   ├── assets # 资源文件
│   │   ├── icons # icon sprite 图标文件夹
│   │   ├── images # 项目存放图片的文件夹
│   │   └── svg # 项目存放svg图片的文件夹
│   ├── components # 公共组件
│   ├── design # 样式文件
│   ├── directives # 指令
│   ├── enums # 枚举/常量
│   ├── hooks # hook
│   │   ├── component # 组件相关hook
│   │   ├── core # 基础hook
│   │   ├── event # 事件相关hook
│   │   ├── setting # 配置相关hook
│   │   └── web # web相关hook
│   ├── layouts # 布局文件
│   │   ├── default # 默认布局
│   │   ├── iframe # iframe布局
│   │   └── page # 页面布局
│   ├── locales # 多语言
│   ├── logics # 逻辑
│   ├── main.ts # 主入口
│   ├── router # 路由配置
│   ├── settings # 项目配置
│   │   ├── componentSetting.ts # 组件配置
│   │   ├── designSetting.ts # 样式配置
│   │   ├── encryptionSetting.ts # 加密配置
│   │   ├── localeSetting.ts # 多语言配置
│   │   ├── projectSetting.ts # 项目配置
│   │   └── siteSetting.ts # 站点配置
│   ├── store # 数据仓库
│   ├── utils # 工具类
│   └── views # 页面
├── test # 测试
│   └── server # 测试用到的服务
│       ├── api # 测试服务器
│       ├── upload # 测试上传服务器
│       └── websocket # 测试ws服务器
├── types # 类型文件
├── vite.config.ts # vite配置文件
└── windi.config.ts # windcss配置文件
```

---

# 项目配置

用于修改项目的配色、布局、缓存、多语言、组件默认配置

---

# 项目规范

> [Lint | Vben Admin (vvbin.cn)](https://vvbin.cn/doc-next/dep/lint.html)

---

## CommitLint

commit-lint 的配置位于项目根目录下 `commitlint.config.js`

![image-20220503143453435](http://cdn.ayusummer233.top/img/202205031434826.png)



---

# 后端路由接入

## 配置文件中修改权限模式为 BACK

[src/settings/projectSetting.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/projectSetting.ts)

将系统内权限模式改为 `BACK` 模式开启权限由后台动态获取

![image-20220503073803911](http://cdn.ayusummer233.top/img/202205030738082.png)

> 后台返回角色, 前端根据返回结果显示界面等

配置改完后要清缓存:

![image-20220503071625298](http://cdn.ayusummer233.top/img/202205030716480.png)

最基本的静态路由存放在 `src/router/routes/index.ts` 中, 包含根路由以及登录页面

![image-20220503071246721](http://cdn.ayusummer233.top/img/202205030712969.png)

原本前端路由情况下登入操作的请求及响应如下:

![image-20220503073244809](http://cdn.ayusummer233.top/img/202205030732941.png)

![image-20220503074215472](http://cdn.ayusummer233.top/img/202205030742550.png)

----

## 后端接口返回路由表

---

切换后端路由后登录操作请求资源如下:

![image-20220503074342187](http://cdn.ayusummer233.top/img/202205030743271.png)

---

`login`:

![image-20220503074514748](http://cdn.ayusummer233.top/img/202205030745837.png)

![image-20220503074552655](http://cdn.ayusummer233.top/img/202205030745723.png)

![image-20220503074450395](http://cdn.ayusummer233.top/img/202205030744462.png)

---

`getUserInfo`:

![image-20220503074657195](http://cdn.ayusummer233.top/img/202205030746282.png)

![image-20220503074711295](http://cdn.ayusummer233.top/img/202205030747383.png)

---

登陆成功获取 `权限码(PermCode`, `菜单(MenuList)`

`getPermCode`:

![image-20220503074845976](http://cdn.ayusummer233.top/img/202205030748072.png)

![image-20220503074857618](http://cdn.ayusummer233.top/img/202205030748697.png)

---

`getMenuList`:

![image-20220503074940111](http://cdn.ayusummer233.top/img/202205030749194.png)

![image-20220503075017643](http://cdn.ayusummer233.top/img/202205030750750.png)

---

以及一个图标请求:

![image-20220503075123487](http://cdn.ayusummer233.top/img/202205030751576.png)

![image-20220503075133396](http://cdn.ayusummer233.top/img/202205030751456.png)

![image-20220503075147948](http://cdn.ayusummer233.top/img/202205030751031.png)

> 不过这个请求明显是发往站外的, 就不用写了

---

重点说说 `MenuList`:


![image-20220503074940111](http://cdn.ayusummer233.top/img/202205030749194.png)

![image-20220503075017643](http://cdn.ayusummer233.top/img/202205030750750.png)

![image-20220503075834271](http://cdn.ayusummer233.top/img/202205030758420.png)

![image-20220503081228333](http://cdn.ayusummer233.top/img/202205030812505.png)

---

在 `.env.development` 中关掉 `mock` 后再删除缓存放回登录页面登录, 那么就会

![](http://cdn.ayusummer233.top/img/202205030838782.png)

这个请求地址和之前一致, 那么可以保留 mock, 然后用转发慢慢联调(

## 数据库修改

在数据库中新建一个 `router` 表

字段根据上面的 `menuList` 设置:

![image-20220503082151720](http://cdn.ayusummer233.top/img/202205030821797.png)



![image-20220503082207631](http://cdn.ayusummer233.top/img/202205030822719.png)

> 后续内容未完成, go 接触的不多且当前时间比较紧, 打算自己嗯用 FastAPI 搓

---

# 深入理解之路由、菜单、权限的设计

> [Vben Admin 深入理解之路由、菜单、权限的设计 - 掘金 (juejin.cn)](https://juejin.cn/post/7001851383607459848)

## mark

- 路由是怎么自动加载并生成菜单的？
- 菜单权限模式分别有什么不同，怎么做的区分和处理？
- 权限的认证流程和初始化是怎么完成的？

---

## 项目初始化

`src/main.ts`

```typescript
async function bootstrap() {
  const app = createApp(App);

  // Configure store
  // 使用 pinia
  setupStore(app);

  // Initialize internal system configuration
  // 初始化系统配置: 项目配置, 样式主题, 持久化缓存等
  initAppConfigStore();

  // Register global components
  // 注册全局组件
  registerGlobComp(app);

  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side
  // 多语言配置(国际化配置)
  await setupI18n(app);

  // Configure routing
  // 路由配置
  setupRouter(app);

  // router-guard
  // 路由守卫: 权限判断, 初始化缓存数据等
  setupRouterGuard(router);

  // Register global directive
  // 注册全局指令
  setupGlobDirectives(app);

  // Configure global error handling
  // 配置全局错误处理
  setupErrorHandle(app);

  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();

  app.mount('#app');
}
```

---

## 路由配置

实现自动加载 `modules` 下的路由文件并生成路由配置信息和一些通用的配置。

`src/router/routes/index.ts`:

```typescript
import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '/@/router/routes/basic';

import { mainOutRoutes } from './mainOut';
import { PageEnum } from '/@/enums/pageEnum';
import { t } from '/@/hooks/web/useI18n';

// 自动加载 ./modules 目录下的路由模块
const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// 读取的路由并未立即注册，而是等权限认证完后通过 router.addRoutes 添加到路由实例，实现权限的过滤
export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/sys/login/Login.vue'),
  meta: {
    title: t('routes.basic.login'),
  },
};

// Basic routing without permission
export const basicRoutes = [
  // 登录路由
  LoginRoute,
  // 跟路由
  RootRoute,
  // 新页面 /main-out
  ...mainOutRoutes,
  // 重定向路由
  REDIRECT_ROUTE,
  // 404
  PAGE_NOT_FOUND_ROUTE,
];

```

---

## 登录主体流程

点击登录获取用户信息，存储使用的 `pinia` 实现。

`src\views\sys\login\LoginForm.vue`:

```typescript
// 获取用户信息, 存储使用 pinia
const userInfo = await userStore.login({
  password: data.password,
  username: data.account,
  mode: 'none', //不要默认的错误提示
});
```

`src\store\modules\user.ts`:

```typescript
    /**
     * @description: login
     */
    async login(
      params: LoginParams & {
        goHome?: boolean;
        mode?: ErrorMessageMode;
      },
    ): Promise<GetUserInfoModel | null> {
      try {
        const { goHome = true, mode, ...loginParams } = params;
        // 1. 调用登录接口
        const data = await loginApi(loginParams, mode);
        const { token } = data;

        // save token
        // 2. 设置 token 并存储本地缓存
        this.setToken(token);
        return this.afterLoginAction(goHome);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async afterLoginAction(goHome?: boolean): Promise<GetUserInfoModel | null> {
      if (!this.getToken) return null;
      // get user info
      // 3. 获取用户信息
      const userInfo = await this.getUserInfoAction();

      const sessionTimeout = this.sessionTimeout;
      if (sessionTimeout) {
        this.setSessionTimeout(false);
      } else {
        const permissionStore = usePermissionStore();
        if (!permissionStore.isDynamicAddedRoute) {
          // 4. 获取路由配置并动态添加路由配置
          const routes = await permissionStore.buildRoutesAction();
          routes.forEach((route) => {
            router.addRoute(route as unknown as RouteRecordRaw);
          });
          router.addRoute(PAGE_NOT_FOUND_ROUTE as unknown as RouteRecordRaw);
          permissionStore.setDynamicAddedRoute(true);
        }
        goHome && (await router.replace(userInfo?.homePath || PageEnum.BASE_HOME));
      }
      return userInfo;
    },
    async getUserInfoAction(): Promise<UserInfo | null> {
      if (!this.getToken) return null;
      const userInfo = await getUserInfo();
      const { roles = [] } = userInfo;
      if (isArray(roles)) {
        const roleList = roles.map((item) => item.value) as RoleEnum[];
        this.setRoleList(roleList);
      } else {
        userInfo.roles = [];
        this.setRoleList([]);
      }
      this.setUserInfo(userInfo);
      return userInfo;
    },
```

---

## 获取用户信息

`src\store\modules\user.ts`:

```typescript
    async getUserInfoAction(): Promise<UserInfo | null> {
      if (!this.getToken) return null;
      const userInfo = await getUserInfo();
      const { roles = [] } = userInfo;
      if (isArray(roles)) {
        const roleList = roles.map((item) => item.value) as RoleEnum[];
        // 设置权限列表, 并存储本地缓存
        this.setRoleList(roleList);
      } else {
        userInfo.roles = [];
        this.setRoleList([]);
      }
      // 设置用户信息, 并存储本地缓存
      this.setUserInfo(userInfo);
      return userInfo;
    },
```

---

## 生成路由

登录成功之后调用 `buildRoutesAction` 获取路由配置、生成菜单配置。

`src\store\modules\permission.ts\userPermissionStore/actions/buildRoutesAction()`:

```typescript
    async buildRoutesAction(): Promise<AppRouteRecordRaw[]> {
      const { t } = useI18n();
      const userStore = useUserStore();
      const appStore = useAppStoreWithOut();

      let routes: AppRouteRecordRaw[] = [];
      const roleList = toRaw(userStore.getRoleList) || [];
      // 获取权限模式
      const { permissionMode = projectSetting.permissionMode } = appStore.getProjectConfig;

      const routeFilter = (route: AppRouteRecordRaw) => {
        const { meta } = route;
        const { roles } = meta || {};
        if (!roles) return true;
        return roleList.some((role) => roles.includes(role));
      };

      const routeRemoveIgnoreFilter = (route: AppRouteRecordRaw) => {
        const { meta } = route;
        const { ignoreRoute } = meta || {};
        return !ignoreRoute;
      };

      /**
       * @description 根据设置的首页path，修正routes中的affix标记（固定首页）
       * */
      const patchHomeAffix = (routes: AppRouteRecordRaw[]) => {
        if (!routes || routes.length === 0) return;
        let homePath: string = userStore.getUserInfo.homePath || PageEnum.BASE_HOME;
        function patcher(routes: AppRouteRecordRaw[], parentPath = '') {
          if (parentPath) parentPath = parentPath + '/';
          routes.forEach((route: AppRouteRecordRaw) => {
            const { path, children, redirect } = route;
            const currentPath = path.startsWith('/') ? path : parentPath + path;
            if (currentPath === homePath) {
              if (redirect) {
                homePath = route.redirect! as string;
              } else {
                route.meta = Object.assign({}, route.meta, { affix: true });
                throw new Error('end');
              }
            }
            children && children.length > 0 && patcher(children, currentPath);
          });
        }
        try {
          patcher(routes);
        } catch (e) {
          // 已处理完毕跳出循环
        }
        return;
      };
      // 区分权限模式
      switch (permissionMode) {
        // 前端方式控制(菜单和路由分开配置)
        case PermissionModeEnum.ROLE:
          // 根据权限过滤路由
          routes = filter(asyncRoutes, routeFilter);
          routes = routes.filter(routeFilter);
          // Convert multi-level routing to level 2 routing
          // 将多级路由转换为二级路由
          routes = flatMultiLevelRoutes(routes);
          break;

        // 前端方式控制(菜单和路由配置自动生成)
        case PermissionModeEnum.ROUTE_MAPPING:
          // 根据权限过滤路由
          routes = filter(asyncRoutes, routeFilter);
          routes = routes.filter(routeFilter);
          // 通过转换路由生成菜单
          const menuList = transformRouteToMenu(routes, true);
          routes = filter(routes, routeRemoveIgnoreFilter);
          routes = routes.filter(routeRemoveIgnoreFilter);
          menuList.sort((a, b) => {
            return (a.meta?.orderNo || 0) - (b.meta?.orderNo || 0);
          });

          // 设置保存菜单列表
          this.setFrontMenuList(menuList);
          // Convert multi-level routing to level 2 routing
          // 将多级路由转换为二级路由
          routes = flatMultiLevelRoutes(routes);
          break;

        //  If you are sure that you do not need to do background dynamic permissions, please comment the entire judgment below
        // 后台方式控制
        case PermissionModeEnum.BACK:
          const { createMessage } = useMessage();

          createMessage.loading({
            content: t('sys.app.menuLoading'),
            duration: 1,
          });

          // !Simulate to obtain permission codes from the background,
          // this function may only need to be executed once, and the actual project can be put at the right time by itself
          // 获取后台返回的菜单配置 /mock/sys/menu.ts
          let routeList: AppRouteRecordRaw[] = [];
          try {
            this.changePermissionCode();
            routeList = (await getMenuList()) as AppRouteRecordRaw[];
          } catch (error) {
            console.error(error);
          }

          // Dynamically introduce components
          routeList = transformObjToRoute(routeList);

          //  Background routing to menu structure
          // 通过转换路由生成菜单
          const backMenuList = transformRouteToMenu(routeList);
          // 设置菜单列表
          this.setBackMenuList(backMenuList);

          // remove meta.ignoreRoute item
          routeList = filter(routeList, routeRemoveIgnoreFilter);
          routeList = routeList.filter(routeRemoveIgnoreFilter);

          // 设置保存菜单列表
          routeList = flatMultiLevelRoutes(routeList);
          routes = [PAGE_NOT_FOUND_ROUTE, ...routeList];
          break;
      }

      routes.push(ERROR_LOG_ROUTE);
      patchHomeAffix(routes);
      return routes;
    },
```

---

## 生成菜单

根据不同的权限模式从不同的数据源获取菜单。

`src\router\menus\index.ts`:

```typescript
// 自动加载 `modules` 目录下的菜单模块
const modules = import.meta.globEager('./modules/**/*.ts');

async function getAsyncMenus() {
  const permissionStore = usePermissionStore();
  // 后端模式 BACK
  if (isBackMode()) {
    // 获取 this.setBackMenuList(menuList) 设置的菜单
    return permissionStore.getBackMenuList.filter((item) => !item.meta?.hideMenu && !item.hideMenu);
  }
  // 前端模式(菜单由路由配置自动生成) ROUTE_MAPPING
  if (isRouteMappingMode()) {
    // 获取 this.setFrontMenuList(menuList) 设置的菜单
    return permissionStore.getFrontMenuList.filter((item) => !item.hideMenu);
  }
  // 前端模式(菜单和路由分开配置) ROLE
  return staticMenus;
}
```

在菜单组件中获取菜单配置渲染。

`src\layouts\default\menu\index.vue\scrupt\default\setup\renderMenu()`:

```typescript
      // 在菜单组件中获取菜单配置渲染
      function renderMenu() {
        const { menus, ...menuProps } = unref(getCommonProps);
        // console.log(menus);
        if (!menus || !menus.length) return null;
        return !props.isHorizontal ? (
          <SimpleMenu {...menuProps} isSplitMenu={unref(getSplit)} items={menus} />
        ) : (
          <BasicMenu
            {...(menuProps as any)}
            isHorizontal={props.isHorizontal}
            type={unref(getMenuType)}
            showLogo={unref(getIsShowLogo)}
            mode={unref(getComputedMenuMode as any)}
            items={menus}
          />
        );
      }
```

---

## 路由守卫

判断是否登录以及刷新之后的初始化。

`src\router\guard\permissionGuard.ts`:

```typescript

export function createPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut();
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to, from, next) => {
    if (
      from.path === ROOT_PATH &&
      to.path === PageEnum.BASE_HOME &&
      userStore.getUserInfo.homePath &&
      userStore.getUserInfo.homePath !== PageEnum.BASE_HOME
    ) {
      next(userStore.getUserInfo.homePath);
      return;
    }

    const token = userStore.getToken;

    // Whitelist can be directly entered
    // 白名单可以直接进入
    if (whitePathList.includes(to.path as PageEnum)) {
      if (to.path === LOGIN_PATH && token) {
        const isSessionTimeout = userStore.getSessionTimeout;
        try {
          await userStore.afterLoginAction();
          if (!isSessionTimeout) {
            next((to.query?.redirect as string) || '/');
            return;
          }
        } catch {}
      }
      next();
      return;
    }

    // token does not exist
    // token不存在则重定向到登录页
    if (!token) {
      // You can access without permission. You need to set the routing meta.ignoreAuth to true
      if (to.meta.ignoreAuth) {
        next();
        return;
      }

      // redirect login page
      const redirectData: { path: string; replace: boolean; query?: Recordable<string> } = {
        path: LOGIN_PATH,
        replace: true,
      };
      if (to.path) {
        redirectData.query = {
          ...redirectData.query,
          redirect: to.path,
        };
      }
      next(redirectData);
      return;
    }

    // Jump to the 404 page after processing the login
    // 处理登录后跳转到 404 页面
    if (
      from.path === LOGIN_PATH &&
      to.name === PAGE_NOT_FOUND_ROUTE.name &&
      to.fullPath !== (userStore.getUserInfo.homePath || PageEnum.BASE_HOME)
    ) {
      next(userStore.getUserInfo.homePath || PageEnum.BASE_HOME);
      return;
    }

    // get userinfo while last fetch time is empty
    // 获取用户信息 userinfo / roleList
    if (userStore.getLastUpdateTime === 0) {
      try {
        await userStore.getUserInfoAction();
      } catch (err) {
        next();
        return;
      }
    }

    // 根据判断是否重新获取动态路由
    if (permissionStore.getIsDynamicAddedRoute) {
      next();
      return;
    }

    const routes = await permissionStore.buildRoutesAction();

    routes.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw);
    });

    router.addRoute(PAGE_NOT_FOUND_ROUTE as unknown as RouteRecordRaw);

    permissionStore.setDynamicAddedRoute(true);

    if (to.name === PAGE_NOT_FOUND_ROUTE.name) {
      // 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容
      next({ path: to.fullPath, replace: true, query: to.query });
    } else {
      const redirectPath = (from.query.redirect || to.path) as string;
      const redirect = decodeURIComponent(redirectPath);
      const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
      next(nextData);
    }
  });
}

```

---

# 常见问题

## tab 页切换后页面空白

> [常见问题 | Vben Admin (vvbin.cn)](https://vvbin.cn/doc-next/other/faq.html#tab-页切换后页面空白)

这是由于开启了路由切换动画,且对应的页面组件存在多个根节点导致的，在页面最外层添加`<div></div>`即可

**错误示例**

```html
<template>
  <!-- 注释也算一个节点 -->
  <h1>text h1</h1>
  <h2>text h2</h2>
</template>
```

**正确示例**

```html
<template>
  <div>
    <h1>text h1</h1>
    <h2>text h2</h2>
  </div>
</template>
```

> PS:
>
> - 如果想使用多个根标签，可以禁用路由切换动画
> - template 下面的根注释节点也算一个节点
