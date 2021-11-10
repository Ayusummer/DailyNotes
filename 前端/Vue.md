# Vue

## 简介

> [介绍 — Vue.js (vuejs.org)](https://cn.vuejs.org/v2/guide/)

`Vue` 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://cn.vuejs.org/v2/guide/single-file-components.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

---

## Microsoft Learn | 开始使用 Vue.js

> [开始使用 Vue.js - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/paths/vue-first-steps/)
>
> 以下内容为以上述链接为蓝本的删减, 扩充, 注释

----

### Vue 入门

- 了解 Vue.js 的核心概念。
- 创建基于 web 的功能性应用程序。
- 在页面上显示数据。
- 将数据绑定到 HTML 属性。
- 浏览样式和类绑定。

---

#### 简介

Vue.js（也称为 Vue）由 Evan You 创建，并于 2014 年 2 月首次发布。 开发 Vue 时，他的目标是创建一个渐进式的、轻型版本的 JavaScript。

Vue 最初创建的目的是让开发人员能够通过添加一组将软件组件与数据连接的自定义 HTML 属性来创建用户界面。 为实现此目的，Vue.js 将 HTML 属性解释为指令，这些指令将页面的输入或输出部分绑定到模型。 该模型由标准 JavaScript 变量表示。

可以将 Vue 核心库添加到任何页面，并可以随时开始创建动态 HTML 标记，该标记使用强大的功能进行数据绑定和事件处理。 完成本训练模块后，你将能够使用 Vue.js 框架来创建功能性应用程序。

总而言之，Vue.js 是基于 JavaScript 的一个强大的轻型框架。 它易于使用，并且可用于创建响应式前端应用程序。 可以以增量方式应用 Vue.js，且不会破坏现有应用程序。 还可以使用 Vue CLI 和其他生成器工具来纵向扩展应用的复杂性，添加服务器端功能。

---

#### Vue.js 入门

若要开始使用 Vue.js，需要安装框架，创建 Vue 应用，然后在页面上注册它。 注册过程会告知页面如何使用应用

---

**将 Vue.js 添加到页面**:

将 Vue.js 添加到项目中主要有四种方式：

1. 在页面上以 [CDN 包](https://v3.cn.vuejs.org/guide/installation.html#cdn)的形式导入。
2. 下载 JavaScript 文件并[自行托管](https://v3.cn.vuejs.org/guide/installation.html#下载并自托管)。
3. 使用 [npm](https://v3.cn.vuejs.org/guide/installation.html#npm) 安装它。
4. 使用官方的 [CLI](https://v3.cn.vuejs.org/guide/installation.html#命令行工具-cli) 来构建一个项目，它为现代前端工作流程提供了功能齐备的构建设置 (例如，热重载、保存时的提示等等)。

本次尝试使用的是方式 1: 在页面中添加 `script` 元素

```html
<script src="https://unpkg.com/vue@next"></script>
```

此元素告知浏览器运行 `src` 指令引用的脚本文件。 脚本运行后，Vue API 变为可用状态。

> [安装 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/guide/installation.html#发布版本说明)

---

**创建应用**

所有 Vue.js 应用程序的开发均始于创建应用对象。 该应用是集中操作你的应用程序使用的所有数据和方法的位置。 尽管应用对象遵循一些约定，但其核心是 JavaScript 对象。

要创建 Vue 应用，需调用方法 `createApp()`。

```javascript
const App = Vue.createApp({
    // methods and content go here
});
```

---

**添加数据**
创建了应用后，可以添加属性以使应用具有更多功能。 大多数应用都具有的一个重要方法是 `data()`。 Vue.js 使用此方法访问你需要向应用程序提供的任何信息。

> 整个模块中都会用到 `data()` 方法。

`data()` 返回的对象内的任何属性都是动态的。 Vue.js 自动检测任何值更改。 然后，它将使用更新的信息来更新和刷新所显示内容的相应部分。

---

**创建数据对象**

Vue.js 调用 `data()` 方法。 相应的，Vue.js 需要接收一个 JavaScript 对象。

在下面的示例中，返回的对象包含属性 `firstName` 和 `lastName`。

```javascript
// a sample app object
const App = Vue.createApp({
    data() {
        return {
            firstName: 'Christopher',
            lastName: 'Harrison'
        };
    }
});
```

此时，会公开数据，以便向用户显示。

---

**装载应用**

必须先装载已创建的应用对象，然后 Vue.js 才能使用它。 通过装载应用，可以指示由应用控制的页面部分，使其能够显示信息甚至 HTML。

若要装载应用程序，需引用普通 HTML 元素的 `id`。

```html
<!-- the HTML element which will host our app -->
<div id='app'>
</div>

<script src="https://unpkg.com/vue@next"></script>
<script>
    const App = Vue.createApp({
        data() {
            return {
                firstName: 'Christopher',
                lastName: 'Harrison'
            };
        }
    });
    // Registering and mounting our app
    App.mount('#app');
</script>
```

在运行时，`id= 'app'` 元素的内容将替换为 Vue.js 应用程序的内容。

---

**显示数据**

若要在页面上显示数据，需使用 `{{ }}` 语法，它有时称为“句柄把”。 在 `{{ }}` 语法中，可以提供访问要显示的信息时所需的任何 JavaScript 代码。

前面创建的 `data()` 函数返回一个对象。 Vue.js 自动使对象可用，因此无需调用 `data()`。

如果要显示名字，可使用语法 `{{ firstName }}`。 下面的示例演示了完整的应用程序，它可以显示 `lastName` 和 `firstName`。

```html
<!-- the HTML element which will host our app -->
<div id='app'>
    {{ lastName }} {{ firstName }}
</div>
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://unpkg.com/vue@next"></script>
<script>
    const App = Vue.createApp({
        data() {
            return {
                firstName: '233',
                lastName: 'ayusummer'
            };
        }
    });
    // Registering and mounting our app
    App.mount('#app');
</script>
```

> ![image-20211107145425932](http://cdn.ayusummer233.top/img/202111071454050.png)

> `{{ }}` 语法仅在 Vue 控制的元素内有效。 该语法在组件或 Vue 装载的 HTML 元素内有效。

---

#### 通过使用 Vue.js 创建应用

- 在本单元中，你将使用 HTML 文件创建初学者 Vue 应用程序。 该文件链接到 Vue 核心库和包含应用程序详细信息的外部 JavaScript 文件。 你将定义一个 Vue 数据变量并在 HTML 页中动态显示它。

---

**克隆入门存储库**

应用程序的入门网站包含映像和基本样式。 首先，克隆存储库并在 Visual Studio Code 中打开它。

在终端或命令窗口中，运行以下命令。

```bash
# clone 远程库
git clone https://github.com/MicrosoftDocs/mslearn-vue-get-started/
# 切换到项目根目录
cd mslearn-vue-get-started/start
# 在当前目录打开VSCode
code .
```

----

**链接到 HTML 文件中的 Vue 核心库**

打开 `start/index.html`

从内容分发网络 (CDN) 安装 Vue.js: 通过链接到 Vue 核心库来安装 Vue.js。

![image-20211107153916744](http://cdn.ayusummer233.top/img/202111071539858.png)

> ```html
> <script src="https://unpkg.com/vue@next"></script>
> ```

---

**为 Vue 应用程序创建 JavaScript 文件**

如果需要，可以开始在 HTML 文件中编写 Vue 脚本。 **但通常可将代码放在单独的 JavaScript 文件中，从而更清晰地地管理应用程序。**

1. 创建 `start/index.js`
2. 将以下代码添加到 index.js 以创建应用。

```javascript
const app = Vue.createApp({
    data() {
        return {
            productName: 'Book a Cruise to the Moon',
            productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            // additional properties later


        }
    },
});
```

有一个 `createApp()` 函数可供使用，因为你已将 Vue.js 库导入到 HTML 页的 `<head>` 标记中。 然后将此函数的参数作为具有 `data` 属性的对象传递。 这个对象返回另一个用于存储数据的对象。

---

**导入并装载应用程序**

打开 `start/index.html`

在 `TODO: Import Vue app` 注释下添加以下脚本。

```html
<script src="./index.js"></script>
<script>
    app.mount('#app');
</script>
```

> ![image-20211107155011147](http://cdn.ayusummer233.top/img/202111071550254.png)

---

**使用 Vue 应用程序**

创建并导入 Vue 应用程序后，即可创建信息的显示内容。

在 `start/index.html` 文件的 `TODO: Add information display` 注释下面添加以下 HTML。

```html
<div id="app">
    <h2>{{ productName }}</h2>
    <div>{{ productDescription }}</div>
</div>
```

> ![image-20211107155325602](http://cdn.ayusummer233.top/img/202111071553773.png)
>
> 页面顺序在 Vue.js 的处理中很重要。 在 HTML 页面完全加载之前，无法将应用程序附加到文档对象模型 (DOM)。 因此，在将所有其他 HTML 元素加载到浏览器中之后，需要在页面底部导入 Vue 应用程序。
>
> ![image-20211107155939506](http://cdn.ayusummer233.top/img/202111071559582.png)
>
>  通常，在调用用于更改 DOM 内容或结构的外部脚本文件之前，最好先加载 HTML 页面。

---

**使用 Live Server 打开页面**

安装完 `Live Server` 扩展后 `Ctrl + Shift + P` 呼出命令面板, 输入 `live server` 选择通过 Live Server 打开即可呼出默认浏览器

> 页面托管在 `localhost:5500` 上

> 到此处为止, 学会了将 Vue 代码放在单独的 JavaScript 文件中, 在 HTML 文件中导入 Vue 应用程序并使用 {{}} 获取数据

----

#### 属性绑定

你已经了解如何使用 handlebar (`{{}}`) 在页面上显示数据。 但是页面上的文本并不是唯一需要设为动态的部分。

可以通过使用属性来设置页面上的多个值。 幸运的是，使用 Vue.js 可通过指令绑定到属性。

---

**指令**

指令是供 `Vue.js` 识别的特性。 通过指令可动态设置 HTML 属性的值。 所有指令都以 `v-` 开头。

---

**v-bind**

核心指令是 `v-bind`。 通过它可将数据值绑定到属性。 可以使用该指令动态设置类的名称、图像的源或样式。

若要使用指令，请在要设置的属性前面加上 `v-bind` 和冒号 (`:`)。 因此，要设置图像的 `src` 属性，可以使用 `v-bind:src="value"`。 然后按照使用 `{{ }}` 语法时计算属性值的相同方式计算该值。

下面的代码生成 HTML 元素 `<img src="./media/sample.jpg">`。

```html
<div id="app">
    <img v-bind:src="imageSource" />
</div>

<script src="https://unpkg.com/vue@next"></script>
<script>
    Vue.createApp({
        data() {
            return {
                imageSource: './media/sample.jpg'
            }
        }
    }).mount('#app');
</script>
```

> ![image-20211107161718938](http://cdn.ayusummer233.top/img/202111071617155.png)

`imageSource` 属性可用于模板，因为它是从 `data()` 方法返回的。 然后将其绑定到图像元素的 `src` 属性。

> 不必维护为应用所用对象的引用。 但是可以立即调用 `createApp`，然后再调用 `mount`，这和之前一样。

---

**绑定简写**

现在，你已经了解如何在 Vue 应用中使用 `v-bind` 指令将数据绑定到属性。 你还可以在简写中键入此指令。 例如，可以键入 `:attribute`，而不是键入 `v-bind:attribute`。 这种简写形式为你节省了一些字符。

![image-20211107162649128](http://cdn.ayusummer233.top/img/202111071626322.png)

---

**类和样式**

一般为 HTML 元素设置的最常见属性之一是 `class` 或 `style`。 若要绑定到这些属性，可以使用 `v-bind:class` 和 `v-bind:style`。 或使用简写 `:class` 和 `:style`。

**类对象**

假设有一个具有两个类的应用程序：`centered` 和 `active`。 下面介绍了如何在 HTML 中使用这些类。

```HTML
<div class='centered active'>Hello, Vue!</div>
```

但此示例是静态的。 如果希望能够更改数据，可以使用绑定。 通过 Vue 不仅可以绑定字符串，还可以绑定对象。

下面介绍了如何为不同属性切换静态值 `centered active`：

```HTML
<div id="app">
    <div :class="classObject">Hello, Vue!</div>
</div>

<script src="https://unpkg.com/vue@next"></script>
<script>
    Vue.createApp({
        data() {
            return {
                classObject: {
                    centered: true,
                    active: true
                }
            }
        }
    }).mount('#app');
</script>
```

> ![image-20211107173314403](http://cdn.ayusummer233.top/img/202111071733625.png)

数据属性 `classObject` 有两个值为布尔值的属性。 使用布尔值可以启用或禁用特定的类。 将 `centered` 设置为 `false` 将呈现 `<div class="active">`，因为 `active` 将是唯一仍然为 `true` 的属性。

> JavaScript 命名规则适用于类对象。 因此，如果类名含有破折号，例如 `center-text`，则在添加属性时，需将名称用引号括住 (`'center-text': true`)。

---

**样式对象**

在 CSS 中设置样式涉及创建键/值对的集合。 使用 JavaScript 对象来表示样式要相对自然一些。 在 Vue.js 中，可以创建样式对象来设置样式。

例如，要设置 HTML 元素样式的背景色 (`background-color`)，可以使用以下代码。

```HTML
<div id="app">
    <div :style="styleObject">Hello, Vue!</div>
</div>

<script src="https://unpkg.com/vue@next"></script>
<script>
    Vue.createApp({
        data() {
            return {
                styleObject: {
                    'background-color': 'red'
                }
            }
        }
    }).mount('#app');
</script>
```

> ![image-20211107174109403](http://cdn.ayusummer233.top/img/202111071741592.png)

---

### 通过 Vue.js 动态显示界面

创建基于数据的页面时，可能需要根据特定值更改显示内容，或在数组中显示多个项。

通过使用 Vue.js，可以通过各种指令来完成这些操作。 这样做可以使用 HTML 控制输出，这对许多 Web 开发人员来说是很自然的。

---

#### 目标

- 在数组中呈现所有项。
- 基于变量值显示或隐藏 HTML 元素。
- 在 Vue.js 中使用 if-else/if-else 语句。

---

#### Render lists

使用数据通常需要数组或其他类型的集合。 通常可使用某种形式的循环来遍历集合中的所有项。 Vue.js 支持通过名为 `v-for` 的指令进行循环。

---

**v-for 指令简介**

若要显示列表中的所有项，可以使用指令 `v-for`。 `v-for` 的行为与 JavaScript 中的 `for...of` 循环非常类似。 它循环访问某个集合，通过声明的变量提供对每个项的访问。

`v-for` 的语法如下所示：

```HTML
v-for="itemName in collectionName"
```

`collectionName` 是数据对象中数组的名称。 对于每次迭代，`itemName` 都假定当前项的标识。 若要在模板中使用 `v-for`，请将指令添加到元素声明中。 这样做将重复 HTML 元素，数组中有多少项就重复多少次。

> 如果要创建无序列表 (`ul`)，就不能将 `v-for` 添加到 `ul` 元素中。 可将其添加到 `li` 元素中，因为 `li` 元素将被重复。

---

**在应用中使用 v-for**

若要在应用中使用 `v-for` 指令，需要执行两项操作：

- 通过数据对象公开数组。 若要使用 `v-for` 指令，请确保 `data()` 方法返回的是数组类型的数据。
- 将 `v-for` 指令添加到元素。 将 `v-for` 指令添加到 HTML 元素。 若要显示数组中的数据，请使用双括号 ({{ }}) 语法。

假设你想要在数据对象中公开一个名称数组：

```JavaScript
const app = Vue.createApp({
    data() {
        return {
            names:['Susan', 'Peter', 'Bill']
        }
    },
});
```

显示这些值可以如下操作:

```html
    <ul id="app">
        <li v-for="name in names">{{ name }}</div>
    </ul>
```

> `ul` 标签用于定义无序列表
>
> `<li>`  标签定义列表项目。
>
> `<li>`  标签可用在有序列表 (`<ol>`) 和无序列表 (`<ul>`) 中。

> ![image-20211107200537559](http://cdn.ayusummer233.top/img/202111072005698.png)

---

**键和状态**

如果更改了数据，Vue.js 需要能够刷新显示的相应部分。 使用列表时，最好更新单个项，而不是整个列表。 若要允许 Vue.js 查找单个项，请为每个显示的项指定一个键。 键不需要是数据的一部分；你可以使用数组的索引来生成它。

可以通过更新 `v-for` 声明来获取索引，如以下代码所示：

```html
    <ul id="app">
        <li v-for="(name, index) in names":key="index">{{ name }} {{ index }}</div>
    </ul>
```

`index` 对于数组中的每个项都递增。 `:key` 指令存储 Vue.js 的键，该键允许它在发生更改时更新单个项。

> ![image-20211107200841624](http://cdn.ayusummer233.top/img/202111072008746.png)

---

[练习呈现列表 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/vue-dynamic-rendering/3-render-lists-exercise)

---

#### 使用条件呈现(Use conditional rendering)

使用数据驱动的应用程序时，通常需要具备根据某些值更新显示内容的能力。 可能需要更改颜色以指示警告、停用不可用的选项或仅仅是不显示控件。 Vue.js 提供了若干指令来控制是否显示项以及显示方式。

---

**切换可见性**

可使用 `v-show` 指令控制要显示的项。 `v-show` 检查一个布尔值或表达式，然后确定是否应显示某个组件。 如你所料，`true` 表示将显示它，而 `false` 表示不显示它。

以下示例显示了将 `v-show` 与计算结果为 `true` 或 `false` 的表达式一起使用：

```html
    <div v-if="new Date().getMonth() < 3">当前为第一季度</div>
    <div v-else-if="new Date().getMonth() < 6">当前为第二季度</div>
    <div v-else-if="new Date().getMonth() < 9">当前为第三季度</div>
    <div v-else>当前为第四季度</div>
```

> 你可以在任何指令中或双括号 ({{ }}) 内使用有效的 JavaScript。

> ![image-20211107222809055](http://cdn.ayusummer233.top/img/202111072228189.png)

![image-20211107224015454](http://cdn.ayusummer233.top/img/202111072240733.png)

---

### 处理 Vue.js 中的数据和事件

#### 动态数据和事件概述

用户通常使用窗体修改 Web 应用程序中的数据。 由于 Vue.js 与使用动态数据有关，因此它具有将数据绑定到窗体的强大机制。 你还可以管理事件，在用户选择按钮或与页面交互时执行不同的操作。 甚至可以添加动态计算得出的值，从而最大程度地减少重复的代码量。

学习目标

- 将模型数据绑定到窗体。
- 添加事件处理程序。
- 创建计算值。

在本模块中，你需要了解如何实现用户与 Vue 数据的交互。 首先创建窗体，然后将数据绑定到窗体。 然后，设置一个事件处理程序并对其进行配置，以便通过按钮选择调用它。 最后，添加计算属性以最大程度地减少 HTML 中所需的 JavaScript 代码量。

---

#### 使用窗体

Vue 应用或组件中的 `data()` 函数所返回的数据一般称为“状态”。 状态是应用程序执行必要的操作所需跟踪的任何信息。 用户通常通过 HTML 窗体修改状态。 Vue.js 允许将数据绑定到窗体，以便用户可以更新状态。

---

**v-model**

`v-model` 指令在 HTML 控件和关联的数据之间创建双向绑定。 因此，当窗体中的值更新时，应用程序状态中的值也会更新。 `v-model` 指令支持绑定到任何窗体控件，包括复选框、文本框和下拉列表。

> `v-bind` 指令用于创建单向绑定。 因此，用户在窗体中所做的任何更改都不会存储在状态中。

```js
Vue.createApp({
    data() {
        return {
            name: 'Cheryl',
            status: -1,
            active: true,
            benefitsSelected: 'yes',
            statusList: [
                'full-time',
                'part-time',
                'contractor'
            ]
        }
    }
})
```

---

**绑定到文本框**

```html
<input type="text" v-model="name" />
```

> 每当文本框值发生更改，`name` 属性就会更新。 如果要改为使用 `textarea`，则语法相同；你可以像以前一样使用 `v-model="name"`。

> ![image-20211108165936693](http://cdn.ayusummer233.top/img/202111081659858.png)

---

**绑定到复选框**

通常情况下，布尔值可绑定到复选框。 复选框允许切换选项。 若要绑定 `active` 选项，可以使用之前所用的 `v-model`。

```html
<input type="checkbox" v-model="active" /> Is active
```

> ![image-20211108170022039](http://cdn.ayusummer233.top/img/202111081700221.png)

有时，切换不是布尔值。 相反，你可能有两种选择，如“是”和“否”。 在这种情况下，可以使用 `true-value` 和 `false-value` 来指示所选 (true) 或未选 (false) 复选框的关联值。

```html
<input type="checkbox" v-model="benefitsSelected" true-value="yes" false-value="no"> Benefits selected: {{ benefitsSelected }}
```

> ![image-20211108170153693](http://cdn.ayusummer233.top/img/202111081701888.png)

---

**下拉列表**

在 HTML 中，分两部分创建下拉列表。 使用 `select` 创建列表，使用 `option` 添加选项。 `select` 标记存储下拉列表的选定值，因此可以使用它来绑定到模型。

在 Vue 中，需执行以下操作：

- **创建选项列表**。 若要创建 `option` 列表元素，请使用 `v-for` 循环遍历并为数组中的各项创建一个 option 元素。
- **标识值**。 需要为创建的各选项标识值。 例如，如果列表只是一个字符串数组，则应将字符串或所选索引存储为值。 下面是一个示例：

```html
        <select v-model="selectedIndex">
            <option v-for="(stringItem, index) in statusList" 
            :value="index"> 
            {{stringItem}}
            </option>
         </select>
```

`vue.js` 相应的加上一个下拉列表索引变量

```js
const app = Vue.createApp({
    data() {
        return {
            name: 'Cheryl',
            status: -1,
            active: true,
            benefitsSelected: 'yes',
            statusList: [
                'full-time',
                'part-time',
                'contractor'
            ],
            // 下拉列表索引
            selectedIndex:'0',
        }
    }
});
```

> ![image-20211108173041422](http://cdn.ayusummer233.top/img/202111081730702.png)
>
> ![image-20211108182222900](http://cdn.ayusummer233.top/img/202111081822077.png)
>
> ![image-20211108182251476](http://cdn.ayusummer233.top/img/202111081822633.png)

如果列表存储由对象构成的数组，请指出显示属性以及值所在的位置。

```js
        <select v-model="selectedValue">
            <option v-for="item in items" :value="item.value">
            {{ item.displayProperty }}
            </option>
        </select>
```

> ![image-20211108203830423](http://cdn.ayusummer233.top/img/202111082038689.png)
>
> ![image-20211108203914882](http://cdn.ayusummer233.top/img/202111082039110.png)
>
> ![image-20211108203208179](http://cdn.ayusummer233.top/img/202111082032339.png)

- **跟踪选定的值**。 可使用 `v-model` 将所选值绑定到 `select` 标记。 这样便可跟踪项的索引或值。 这由您自己决定。

若要创建选项列表，请使用 `v-for` 遍历列表。 然后选择将值设置为数组中项的索引。 使用 `v-for(status, index) in statusList` 为每个项提供索引。 然后将每个选项的 `:value` 设置为 `index`，并将 `status` 显示为用户的选项。

```js
        <select v-model="statusIndex">
            <!-- Create a message to select one -->
            <option disabled value="">Please select one</option>
            <!-- Use v-for to create the list of options -->
            <option v-for="(status, index) in statusList" :value="index">
                {{ status }}
            </option>
        </select>
```

> ![image-20211108204746566](http://cdn.ayusummer233.top/img/202111082047895.png)
>
> ![image-20211108204912684](http://cdn.ayusummer233.top/img/202111082049849.png)

最后，添加 `v-model="statusIndex"` 以确保用户选择某项时，`statusIndex` data 属性的值将更新为所选索引。

---

#### 处理事件

在应用程序中，事件是可能发生的操作，但你不一定知道何时发生。 例如，如果页面上有一个按钮，你知道用户可能会选择该按钮。 但不知道何时选择。

创建任何 Web 应用程序都需要了解如何处理事件。 在此，你将了解如何使用 Vue.js 管理事件。

---

**v-on 指令和 @**

Vue.js 提供了一个名为 `v-on` 的指令，你可以将其绑定到任何事件，例如 `v-on:click`。 由于处理事件是一项核心任务，Vue.js 还提供了一个 `@` 快捷方式来处理任何事件。 因此，若要绑定 click 事件，可以使用 `@click` 快捷方式。

---

**事件处理程序**

可通过将函数添加到 Vue 应用程序或组件中的 `methods` 字段来创建事件处理程序。 `methods` 字段类似于 `data()`，但它不返回状态对象，而是保留应用程序的可用函数的列表。 可以采用与引用其他 JavaScript 函数相同的方式在 HTML 中引用这些函数。

> 向 `methods` 字段添加函数的主要原因是函数可以访问任何已注册的数据。

向 Vue 应用或组件添加方法时，`this` 将指向活动实例。 可从 `this` 访问可用于活动实例的任何数据，如以下示例中的 `name` 所示。

---

**创建事件处理程序**

若要创建在调用 `name` data 属性时显示其值的方法，可按照以下示例操作：

```js
const app = Vue.createApp({
    data() {
        return {
            name: 'Cheryl'
        }
    },

    methods: {
        displayName() {
            console.log(this.name);
        }
    }
});
```

由于 `displayName()` 已添加到 `methods` 属性中，因此它可由模板访问，并可绑定到事件。

---

**将事件处理程序绑定到事件**

可使用 `@click` 速记将 `displayName()` 函数绑定到 `click` 事件。 当用户选择该按钮时，将调用 `displayName()` 函数。

```html
<button type="button" @click="displayName">Display name</button>
```

> ![image-20211109222253632](http://cdn.ayusummer233.top/img/202111092223813.png)
>
> ![image-20211109222337364](http://cdn.ayusummer233.top/img/202111092223445.png)

---

#### 了解计算属性

通过使用 handlebars 语法 (`{{ }}`)，可以显示值并将 JavaScript 注入到 HTML 中。 此语法非常强大，但可能导致代码混乱或重复。 可使用 Vue 中的计算属性来卸载计算和其他形式的动态字符串。

---

**创建计算属性**

与在 `methods` 字段下添加方法类似，计算属性将添加到 `computed` 字段中。 计算属性是返回值的函数。 与方法类似，计算属性可使用 `this` 访问 Vue 的活动实例。

你可使用计算属性将 `firstName` 和 `lastName` 合并为 `fullName` 属性，在数组中执行查找以返回正确的值，或执行其他动态任务。

而且，计算属性是响应式的。 如果计算属性中的任何值发生更改，则会更新计算属性以反映所做的更改。

以下示例创建了一个 `fullName`。

```js
const app = Vue.createApp({
    data() {
        return {
            firstName: 'Cheryl',
            lastName: 'Smith',
        }
    },
    computed: {
        fullName(){
            return `${this.lastName} ${this.firstName}`
        }
    }
});

```

字符串字面量将连接 `lastName` 和 `firstName` 字段。

> ![image-20211110080918519](http://cdn.ayusummer233.top/img/202111100809759.png)
>
> ![image-20211110082205487](http://cdn.ayusummer233.top/img/202111100822795.png)

---

### Vue.js 中的 Vue CLI 和单文件组件入门

虽然可以仅使用 JavaScript 来创建 Vue.js 应用程序，但大多数开发人员都需要更多的功能和灵活性。 使用 Vue CLI 和单文件组件，你可以利用更可靠的工具增强开发体验。 我们将了解如何使用 Vue CLI 启动应用程序，以及如何在 Vue 中创建可重用组件。

