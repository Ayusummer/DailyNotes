
# ESLint

- [ESLint](#eslint)
  - [安装](#安装)
  - [配置文件](#配置文件)
  - [配置 ignore files](#配置-ignore-files)

---

> [代码检查工具！从 TSLint 到 ESLint - 掘金 (juejin.cn)](https://juejin.cn/post/6955025103507849223)
>
> [Roadmap: TSLint -> ESLint · Issue #4534 · palantir/tslint (github.com)](https://github.com/palantir/tslint/issues/4534)
>
> [typescript-eslint/typescript-eslint: Monorepo for all the tooling which enables ESLint to support TypeScript (github.com)](https://github.com/typescript-eslint/typescript-eslint)
>
> [Linting your TypeScript Codebase | TypeScript ESLint (typescript-eslint.io)](https://typescript-eslint.io/docs/linting/)

2019 年 1 月，`TypeScript` 官方决定全面采用 `ESLint`，之后也发布 `typescript-eslint` 项目，以集中解决 `TypeScript` 和 `ESLint` 兼容性问题。而之前的两个 `lint` 解决方案都将弃用：

- `typescript-eslint-parser` 已停止维护
- 在完成 `ESLint` 功能后，将弃用 `TSLint` 并帮助用户迁移到 `ESLint`

> ![image-20220402133014799](http://cdn.ayusummer233.top/img/202204021330104.png)

## 安装

```shell
pnpm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

> `@typescript-eslint/parser`为 `ESLint` 提供解析器。
>
> `@typescript-eslint/eslint-plugin` 它作为 `ESLint` 默认规则的补充，提供了一些额外的适用于 `ts` 语法的规则。

---

## 配置文件

`.eslintrc.js`

```js
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
};
```

> 如上是最小化的一个配置文件
>
> - `parser: '@typescript-eslint/parser,'`
>
>   告诉 `ESLint` 使用 `@typescript-eslint/parser` 作为 `parser package`
>
>   这可以使 `ESLint` 可以理解 `TypeScript` 语法
>
>   不这样写的话会使 `ESLint` 像往常解析 `JS` 一样解析 `TS`, 自然就会报错
>
> - ```js
>   plugins: [
>       '@typescript-eslint',
>   ],
>   ```
>
>   告诉 `ESLint` 加载安装好的 `@typescript-eslint/eslint-plugin` `plugin package`
>
>   这将允许你在代码库中使用这些 `rules`
>
> - ```js
>       extends: [
>           'eslint:recommended',
>           'plugin:@typescript-eslint/recommended',
>       ],
>   ```
>
>   `extends` 属性告诉 `ESLint` 你的配置 `extends(扩展)` 了给定配置
>
>   - `'eslint:recommended'` 是 `ESLint` 内置的 "推荐配置" ---- 他给出一个小的,合理的 `rules` 集, 这些 `rules` 是众所周知的最佳实践的 `lint`
>   - `'plugin:@typescript-eslint/recommended'` 是官方的 "建议配置" --- 它就像 `eslint:recomment` 一样, 只不过它只针对 `TypeScript-specific` 插件中的 `rules`
>
> ---
>
> `module` 报错: `'module' is not defined. eslint(no-undef)`
>
> ![image-20220402141356618](http://cdn.ayusummer233.top/img/202204021413088.png)
>
> [typescript-eslint config: .eslintrc file 'module' is not defined - Stack Overflow](https://stackoverflow.com/questions/63478122/typescript-eslint-config-eslintrc-file-module-is-not-defined)
>
> `env` 里加上 `node:true` 即可解决
>
> ```js
> module.exports = {
>   root: true,
>   parser: "@typescript-eslint/parser", // Specifies the ESLint parser
>   plugins: ["@typescript-eslint"],
>   extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
>   env: {
>     node: true, // 解决 module 报错
>   },
> };
> ```

---

## 配置 ignore files

在根目录下再创建一个 `.eslintignore` 文件, 它会告诉 `ESLint` 不要 `lint` 哪些文件(夹)

```eslintignore
# don't lint build output (make sure it's set to your correct build folder name)
dist
```

---
