# Nodejs

## 包管理工具

> [pnpm/pnpm: Fast, disk space efficient package manager -- 快速的，节省磁盘空间的包管理工具 (github.com)](https://github.com/pnpm/pnpm)
>
> [Fast, disk space efficient package manager | pnpm](https://pnpm.io/zh/)

![image-20211116141412200](http://cdn.ayusummer233.top/img/202111161414336.png)

![image-20211116141430125](http://cdn.ayusummer233.top/img/202111161414317.png)

![img](http://cdn.ayusummer233.top/img/202111161413040.svg+xml)


---

## npm, cnpm, pnpm, yarn 常用操作

> [npm、yarn、cnpm、pnpm 使用操作都在这了 - 掘金 (juejin.cn)](https://juejin.cn/post/7009674584211324964)

cnpm、pnpm 用法类似npm，yarn不一样地方列出来单独说明

|                |              npm               |        cnpm         |        pnpm         |        yarn         | Tips                                                                                                                                                                                                                                                        |
| :------------: | :----------------------------: | :-----------------: | :-----------------: | :-----------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    全局安装    | // 检查是否安装成功 <br>npm -v | npm install -g cnpm | npm install -g pnpm | npm install -g yarn |                                                                                                                                                                                                                                                             |
| 初始化一个项目 |            npm init            |                     |                     |      yarn init      | 通过 -i 可以快速生成 <br>package.json 默认配置                                                                                                                                                                                                              |
|  安装项目依赖  |     npm install [package]      |                     |                     | yarn add [package]  | // 简写 <br>npm i [package] <br>// 安装指定版本 <br>npm i[package]@[version] <br>npm i [package]@[tag]  <br>yarn add [package]@[version]     <br>yarn add [package]@[tag]    <br>// 全局安装依赖    <br>npm i -g [package]    <br>yarn global add [package] |

- 安装报错处理
  - 删除 node_modules` 目录然后重新安装

- `--no-save`: 查看 `package.json`，文件内容不发生改变，在运行项目时能正常运行，当 `npm i` 时候，不会安装该依赖，提示安装该依赖。
- `--save`: 查看 `package.json` 会有一个 `dependencies` 对象，里面就是项目运行需要的依赖。 `dependencies` 代表项目运行所依赖的模块, 简写 `-S`
- `--save-dev`: 查看 `package.json` 会有一个 `devDependencies` 对象，里面就是项目开发时候需要的依赖。 `devDependencies` 代表项目开发所需要的模块, 简写 `-D`; 



