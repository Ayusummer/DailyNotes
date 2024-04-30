
# AnimateCSS

- [AnimateCSS](#animatecss)
  - [安装与使用](#安装与使用)
  - [结合 `vue3 transition` 使用](#结合-vue3-transition-使用)

---

> [Animate.css | A cross-browser library of CSS animations.](https://animate.style/)

## 安装与使用

```shell
pnpm install webpack
pnpm install animate.css
```

使用 `pnpm` 安装在组建中导入 `css` 即可使用

```typescript
import "animate.css";
```

---

## 结合 `vue3 transition` 使用

安装了依赖并在组建中导入后在使用 `<transition>` 时指定 `enter-active-class` 与 `leave-active-class` 来使用 `animate.css` 的动效, 如:

```html
<transition
  enter-active-class="animate__animated animate__bounce"
  leave-active-class="animate__animated animate__fadeOut"
>
  <div v-if="flag" class="box"></div>
</transition>
```

> 完整代码详见 [内置组件-transition 中的相关内容](#结合 Animate.css 使用)
>
> ![](http://cdn.ayusummer233.top/img/202203291950307.gif)

---
