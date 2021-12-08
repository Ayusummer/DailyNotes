# Vue

## 简介

> [介绍 — Vue.js (vuejs.org)](https://cn.vuejs.org/v2/guide/)

`Vue` 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://cn.vuejs.org/v2/guide/single-file-components.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

---

## Microsoft Learn | 开始使用 Vue.js

> [开始使用 Vue.js - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/paths/vue-first-steps/)
>
> **重要标记: 以下内容为以上述链接(MSLearn)为蓝本的删减, 修改, 扩充, 注释**

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

在一个 JavaScript 文件中创建整个 Vue.js 应用程序，但只能在小型应用程序中管理它。 为了支持将应用程序分解为较小的单元，Vue 使你能够创建组件。 组件是可重用的构建基块，你可以基于组件创建应用程序。

可以将组件创建为 JavaScript 文件，或通过扩展名为 .vue 的单文件组件来创建组件。 单文件组件使用浏览器无法读取的专用语法。 必须将此语法转换为相应的 JavaScript、HTML 和 CSS 语法。 将专用语法转换为浏览器可读取的内容的过程称作“捆绑”，这需要额外的工具，例如 webpack。

幸运的是，Vue 还提供了可用于启动应用程序的命令行接口 (CLI)。 CLI 配置所有必备工具，包括捆绑程序和开发服务器。

本模块介绍如何执行以下操作：

- 使用 Vue CLI 创建应用程序。
- 创建单文件组件。
- 使用属性将值传入组件。

---

#### Vue CLI 入门

Vue CLI 提供了一套开发工具，包括用于项目基架构建和快速原型设计的工具和一个开发服务器。 它帮助你快速创建初始应用程序，以便你可以专注于编码，而不是配置库和其他设置。

---

**启动**

Vue CLI 的核心功能是启动应用程序。 Create 脚本供一个向导，你可以在其中选择一些最常见的配置，包括：
- **Lint 分析选项**：确保所有代码看上去一致。 这些选项还可帮助发现错误。
- **应用程序类型**：选择是否添加渐进式 Web 应用支持。
- **Babel 支持**： Babel 的任务是当需要在较旧版本的浏览器中使用应用时，将较新的 JavaScript 语法转换为旧式 JavaScript 语法。
- **语言**：选择 JavaScript 或 TypeScript。 哪一个都可以，但 TypeScript 除其他功能外还提供类型，在应用程序增长时可能是一个不错的选择。 Vue 本身就是使用 TypeScript 生成的。

---

**生成过程**

Vue CLI 的设计使其能处理单文件 Vue 组件或 .vue 文件。 模块捆绑程序或捆绑程序管理将 .vue 文件中的专用语法转换为相应 JavaScript、HTML 和 CSS 语法的过程，使浏览器可读取这些文件。

Vue CLI 将 [webpack](https://webpack.js.org/) 作为默认捆绑程序。 在大多数情况中，webpack 的默认配置都适用。 使用 Vue CLI 可跳过配置捆绑程序需要的步骤，改用提供的设置。

---

**开发服务器**

开发任何类型的应用程序都需要反复试验。 你需要做一些更改，在浏览器中加载页面，测试该页面，然后再进行更改。 然后重复此过程，直到一切都按照预期工作。

你希望尽量减少此过程涉及的步骤。 为了简化开发，Vue CLI 包含了一个开发服务器。 该开发服务器会在你每次保存文件时检测文件更改，重新生成（或重新捆绑）项目，并使你能在浏览器中测试页面。

---

#### 使用 Vue CLI 创建应用程序

我们要创建一个应用程序，使用户能通过它向虚构公司 Relecloud 预订月球巡航。 我们将使用 Vue CLI 启动应用程序。

---

**安装 Vue CLI**

可通过 [npm](https://www.npmjs.com/)（Node.js 使用的打包工具）获取 Vue CLI。 系统会在你安装 Node.js 时自动安装 npm 工具。 若要确保在系统上安装了 npm 和 Node.js，请打开命令窗口或终端窗口，并运行以下命令：

```bash
node -v
npm -v
```

> **重要**: Vue CLI 往往是通过 npm 全局安装的，如果你已直接安装了 Node.js，这需要提升的权限。 如果使用节点版本管理器 (nvm)，你能以普通用户身份执行安装。 你可以[在 Linux、适用于 Linux 的 Windows 子系统 (WSL) 或 macOS 上安装 nvm](https://github.com/nvm-sh/nvm#installing-and-updating/?azure-portal=true)，也可以[在 Windows 上安装 nvm](https://docs.microsoft.com/zh-cn/windows/nodejs/setup-on-wsl2/)。

如果要安装 Vue CLI，请打开命令窗口或终端窗口，然后运行以下命令：

```bash
npm install -g @vue/cli
```

在系统上安装 Vue CLI 需要几分钟时间。

---

**启动应用程序**

启动 Vue 应用程序最快的方式是使用 Vue CLI。 现在，我们将使用 Vue CLI 创建一个初始应用程序。

1. 在命令窗口或终端窗口中，转到要用于存储应用程序的文件夹。
2. 通过运行以下命令创建一个 Vue 应用程序：

```bash
vue create relecloud
```

3. 出现提示时，使用箭头键移动到“Manually select features”，然后选择 Enter 键。

4. 系统提示项目需要的功能时，使用箭头键移动到“Babel”，然后选择空格键禁用它。 接下来，使用箭头键移动到“Linter / Formatter”，然后选择空格键禁用它。

![image-20211110201523420](http://cdn.ayusummer233.top/img/202111102015574.png)

5. 确保选中“Choose Vue version”。

6. 选择 Enter 键确认功能选择。

   > 对于生产项目，你可能决定添加更多功能。 这些功能超出了本模块的范畴。

7. 系统提示你选择 Vue.js 版本时，使用箭头键移动到“3.x (Preview)”，然后选择 Enter 键。

   ![image-20211110201709497](http://cdn.ayusummer233.top/img/202111102017611.png)

8. 如果系统提示你选择用于放置配置文件的位置，请保留默认位置“In dedicated config files”，然后选择 Enter 键。

   ![image-20211110201906480](http://cdn.ayusummer233.top/img/202111102019568.png)

9. 系统提示你将此信息作为预设保存时，通过选择 Enter 键接受默认值“No”。

   ![image-20211110201946569](http://cdn.ayusummer233.top/img/202111102019645.png)

10. ![image-20211110202334115](http://cdn.ayusummer233.top/img/202111102023213.png)

    Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具 — Yarn，正如[官方文档](https://code.facebook.com/posts/1840075619545360)中写的，Yarn 是为了弥补 npm 的一些缺陷而出现的：

    npm 安装包（packages）的速度不够快，拉取的 packages 可能版本不同

    npm 允许在安装 packages 时执行代码，这就埋下了安全隐患

    > [Yarn vs npm：你需要知道的一切 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/23493436)

---

**浏览代码**

我们来看一看 Vue CLI 已创建的代码。

1. 安装完成后，在 Visual Studio Code 中打开 relecloud 目录：

2. 打开 package.json

   ![image-20211110203822639](http://cdn.ayusummer233.top/img/202111102038751.png)

3. 请注意，`vue` 作为依赖项列出，`@vue/cli-service` 作为 `devDependency` 列出。

   > `@vue/cli-service` 部分负责生成应用程序和运行开发服务器。

4. 请注意两个脚本：
   
   - `serve` 脚本用于启动开发服务器。
   - `build` 脚本用于在你准备好发布项目时，创建 JavaScript、HTML 或 CSS。
   
5. 打开将托管 Vue 应用程序的 `public/index.html`。

   ![image-20211110204149015](http://cdn.ayusummer233.top/img/202111102041133.png)

6. 打开 `src/main.js`，注意从 `App.vue` 导入 `App` 的代码。

   ![image-20211110204221550](http://cdn.ayusummer233.top/img/202111102042637.png)

7. 打开` src/App.vue`，它包含我们将在下一个单元中探讨的核心组件。

   ![image-20211110204252728](http://cdn.ayusummer233.top/img/202111102042834.png)

   > Visual Studio Code 可能会向你提示推荐的扩展。 我们会在未来的某个模块中安装该扩展。

8. 请注意` src/components` 文件夹，所有组件都将存储在其中。

   ![image-20211110204350988](http://cdn.ayusummer233.top/img/202111102043064.png)

---

**运行开发服务器**

我们启动开发服务器并查看默认页面。

1. 通过选择“终端” > “新终端”，在 Visual Studio Code 中打开新终端窗口。

2. 在集成终端中，运行以下命令来启动开发服务器：

   ```bash
   yarn serve
   ```

3. 打开浏览器，然后转到 `http://localhost:8080`。

   此时显示默认的 Vue 应用程序。

   ![image-20211110205351838](http://cdn.ayusummer233.top/img/202111102053069.png)

至此, 达成了用 VUE CLI 创建了一个 APP

---

#### Vue 组件入门

根据定义，组件是“一个较大整体中的一个部分或元素”。 考虑创建应用程序时，你通常是使用较小的部分，然后将它们组合成一个较大的整体：应用程序。 Vue 使你能创建可用于创建完整应用程序的组件。

---

**Vue 组件**

虽然可以使用 JavaScript 文件创建组件，但更常见的方法是使用 `.vue` 文件中的 Vue 语法创建单文件组件。 单文件组件拥有更清晰的结构以及更独立的设置。 你甚至能通过这些组件使用各种预处理器，例如 Pug 或 Stylus。

创建组件时，你实际上是创建可在应用程序中使用的新标记，方式类似于创建普通 HTML 标记。 这种形式的语义标记指明了页面上显示的内容。 像 `<booking-form></booking-form>` 这样的标记可能会显示一个用于创建预订的窗体，而 `<booking-list></booking-list>` 可能会显示一个预订列表。

---

**Vue 组件结构**
Vue 组件包含三个主要部分：`style`、`script` 和 `template`。

---

**样式**

`style` 部分可以包含任何有效的 CSS 或你可能使用的任何预处理器的语法。

你还可以使用 `scoped` 特性将 CSS 的范围设定为该特定组件。 样式只会仅应用于该组件，因此你可以创建类和其他设置，而无需担心会意外修改页面的其他部分。

```HTML
<style>
.demo {
    font-family: Verdana
}
</style>
```

> `Verdana` 是一套无衬线字体, 它在小字上有结构清晰端整、阅读辨识容易等高品质表现，成为许多领域爱用的标准字型之一。

----

**脚本**

`script` 部分存储用于组件的脚本。 和 Vue JavaScript 组件一样，你可以导出各种 Vue 属性和方法，例如 `data()`、`methods` 和 `components`。

```html
<script>
export default {
    data() {
        return {
            product: {
                name: 'Cruise to the moon',
                description: 'A cool cruise to the moon!'
            }
        }
    }
}
</script>
```

---

**template**

`template` 部分包含要用于显示信息并使用户能与数据交互的 HTML 模板。 使用基于 JavaScript 的组件时，`template` 通常位于 `.html` 文件中，或者它是 JavaScript 文件中的字符串字面量。

`template` 中使用的 HTML 语法与基于 JavaScript 的组件中的语法相同，这包括使用 handlebars (`{{}}`) 来显示数据。

```html
<template>
  <div id="product">
    <div>{{ product.name }}</div>
    <div>{{ product.description }}</div>
  </div>
</template>
```

> 模板需要有一个根元素。 也就是说，将 `product` 作为 `id` 的 `div` 元素不能拥有任何同级元素。 它只能拥有子元素，如前面的代码所示。

---

**加载和组件**

如前文所述，保存单文件组件所用的扩展名是 `.vue`。 你可以使用 `import` 语句以类似的方式将这些组件加载到其他模块。 可以使用 `components` 属性注册它们。 组件注册后，可用作 `template` 内的标记。

> 使用 `import` 导入库时，标准做法是使用帕斯卡命名法为这些标记命名，其中每个单词的首字母大写（例如 `PascalCase`）。 但在 HTML 中，标记名的约定是使用短横线隔开式命名法：每个单词均小写，单词之间加一个短横线 `-`。 Vue 自动管理这两种不同的约定。

```html
<template>
<product-display></product-display>
</template>
<script>
import ProductDisplay from './ProductDisplay.vue'
export default {
    components: {
        ProductDisplay
    }
}
```

在前面的代码中，导入了 `ProductDisplay` 组件，并已将它添加到 `components` 属性。 于是，在模板中使用 `ProductDisplay` 时，Vue 的编译器可以判断需要分析的是此组件，而不是常规的 HTML 元素。

---

**分离关注点**

将 HTML、CSS 和 JavaScript 融入一个文件中似乎背离了为每个类型创建独立的文件的最佳做法。 实际上，在这些文件之间切换可能会导致开发速度缓慢，因为它们之间相互依赖。 此外，还有一个认知负载与不得不在文件之间切换有关联。

借助单文件组件，你能使用 `src` 特性为 `script` 和 `style` 部分创建独立的文件。

```html
<template>
    <div>Hello, world</div>
</template>
<script src="./hello.js"></script>
<style src="./style.css"></style>
```

---

#### 创建组件

我们要创建一个应用程序，使用户能预订月球巡航。 在接下来的几个练习中，你将为创建一个组件作为用户为创建预订而填写的窗体；然后创建另一个组件，用于显示创建的预订的列表。 你要创建的第一个组件将托管两个子组件。

----

**安装 Visual Studio Code 扩展**

Visual Studio Code 在 [Visual Studio Marketplace](https://marketplace.visualstudio.com/vscode/) 中有大量可用于帮助开发的扩展。 我们将利用其中两个：

- [Vetur](https://marketplace.visualstudio.com/items/?itemName=octref.vetur) 提供在 Visual Studio Code 中使用 `.vue` 文件的支持。
- 来自 `Sarah Drasner` 的 [Vue VSCode 代码片段](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)支持在 Visual Studio Code 中使用代码片段。

> ![image-20211110210958158](http://cdn.ayusummer233.top/img/202111102109328.png)
>
> ![image-20211110211025138](http://cdn.ayusummer233.top/img/202111102110245.png)

---

**创建 Host 组件**

我们来创建 Host 组件。

1. 在` src/components` 中创建一个名为 `Host.vue` 的文件。

2. 在 `Host.vue` 中键入 `vue`，然后从代码片段菜单选择“`<vue> with default.vue`”。

   ![image-20211110211352021](http://cdn.ayusummer233.top/img/202111102113165.png)

   ![image-20211110211423963](http://cdn.ayusummer233.top/img/202111102114052.png)

---

**更新脚本部分**

此代码片段为我们创建 `script` 元素，其中已创建了 `export default`。 `export default` 命令使 Vue 中的另一个组件能加载此组件。 我们会将需要的代码添加到此部分中。

在 `export default` 的大括号 (`{ }`) 内添加以下代码，用于为组件命名，注册数据并添加两条注释供将来使用：

```js
name: 'Host',
data() {
    return {
        cruise: {
            name: 'Cruise to the moon',
            description: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            cabins: [
                { name: 'Coach', price: 125000 },
                { name: 'Business', price: 275000 },
                { name: 'First', price: 430000 },
            ]
        },
        bookings: [
            { name: 'Sample', price: 0 }
        ]
    }
},

// TODO: Add components

// TODO: Add methods
```

`name` 字段设置组件的名称。 `data()` 部分将 `cruise` 对象注册为组件的数据。 稍后我们将使用 `bookings` 来存储巡航预订列表。 `TODO` 注释充当表示供未来使用的标记。

---

**添加模板**

注册数据后，接下来将 HTML 添加到 `template` 元素以显示核心信息。 我们还将添加两个占位符供将来使用。

在 `Host.vue` 中的 `template` 元素内添加以下 HTML，用于显示巡航的名称和说明。 该 HTML 通过占位符来表示两个我们将于稍后创建的组件。

```html
<section>
<div class="nav-bar"></div>
<h1>Relecloud Galaxy Tours</h1>

<div>
    <h2>{{ cruise.name }}</h2>
    <div>{{ cruise.description }}</div>
    <hr />

    <div class="row">
        <div>
            <!-- TODO: Add booking-form -->

        </div>
        <div>
            <!-- TODO: Add booking-list -->

        </div>
    </div>
</div>
</section>
```

---

**添加样式**

创建 HTML 后，为应用程序添加样式。

在 `Host.vue` 中的 `style` 元素内添加以下 CSS：

```css
body {
    background-color: #f2f2f2;
    margin: 0, 5%;
    font-family: tahoma;
}

.row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    vertical-align: middle;
    margin: 2em;
}

.button {
    background-color: #39495c;
    border-radius: 5px;
    color: white;
    text-align: center;
}

.nav-bar {
    background: linear-gradient(-50deg, #010801, #0d0d60);
    height: 60px;
    margin-bottom: 25px;
}
```

此 CSS 会向应用程序添加一些结构和颜色。

---

**将 Host 组件设置为应用程序的入口点**

Vue CLI 创建一个 `main.js` 文件，该文件将 `App.vue` 作为入口点加载到应用程序中。 为此，我们创建了一个名为 Host 的新组件。 我们会更新 main.js，以使用我们的组件。

打开 `main.js`，然后使用以下代码替换内容：

```js
import { createApp } from 'vue'
import Host from './components/Host.vue'

createApp(Host).mount('#app')
```

---

**测试应用程序**

保存代码后返回 `http://localhost:8080`

![image-20211110212325478](http://cdn.ayusummer233.top/img/202111102123691.png)

到此为止完成了在 Vue.js 中创建了你的第一个单文件组件！

----

#### 组件属性

HTML 元素是用于创建页面的构建基块。 可通过将特性设置为不同的值来配置这些元素的行为。 正如我们前面强调的那样，创建组件与创建自定义 HTML 标记相似。 因此，你可以通过属性传入信息，从而提高组件的可重用性。

---

**定义属性**

属性是一组可传入组件的值。 你通常会向组件添加属性，以传入它应显示或更改其行为的值。

可通过在 `script` 元素内添加 `props` 字段来定义组件的属性。 可以列出组件属性的名称，方式是将它们以数组形式列出：

```html
<!-- UserDisplay component -->
<script>
export default {
    name: 'UserDisplay',
    props: ['name', 'age']
}
</script>
```

组件的调用方使用与 HTML 特性相同的语法来设置属性。 就上一个组件而言，我们可以像下面这样设置 `name` 和 `age`：

```html
<!-- inside parent component -->
<template>
    <user-display name='Cheryl' age='28'></user-display>
</template>
<script>
import UserDisplay from './UserDisplay.vue';
export default {
    components: {
        UserDisplay
    }
}
</script>
```

通过特性绑定，值 `Cheryl` 和 `28` 分别绑定到 `name` 和 `age` 属性。

> Vue.js 会将名为 `UserDisplay` 的组件转换为用短横线分隔的小写形式 `user-display`。

---

**限制类型**

调用方可通过将值作为数组的一部分列出的方式来传入任何类型的值。 这适用于基本应用程序，但你通常需要指出希望为每个属性使用的数据类型。

定义架构可提供有关属性的更可靠的信息。 如果希望指出 `name` 为字符串，`age` 为数字，可以像下面这样定义属性架构：

```html
<!-- UserDisplay component script -->
<script>
export default {
    name: 'UserDisplay',
    props: {
        name: String,
        age: Number
    }
}
</script>
```

请注意，你其实是在创建一个具有 `name` 和 `age` 类型的属性对象。 现在，此组件只接受指定的数据类型。 你还可以像以前那样进行设置：

```html
<!-- inside parent component -->
<user-display name='Cheryl' age='28'></user-display>
```

但是，如果将数据类型设置为与架构不匹配的值（例如向 `name` 传入数字），你会在控制台中收到一条警告。 该警告将要求你采取措施。

---

**复杂对象**

使用 Vue 时，通常是使用对象而不是使用单独的值。 幸运的是，你可以声明具有属性的复杂结构。

如果你使用具有 `name` 和 `age` 属性的 `User` 对象，可以在属性中将这声明为一个完整的构造：

```html
<!-- UserDisplay component script -->
<script>
export default {
    name: 'UserDisplay',
    props: {
        user: {
            name: String,
            age: Number
        }
    }
}
</script>
```

可以像以前那样使用特性设置值。 此外，你可以指定要使用的对象的名称，以通过这样的方式传入动态数据。 在下面的示例中，使用和传递静态值一样的语法传递了一段名为 `user` 的数据：

```html
<!-- parent component -->
<template>
<user-display :user="user"></user-display>
</template>

<script>
import UserInfo from './UserInfo.vue';
export default {
    data() {
        return {
            user: {
                firstName: 'Cheryl',
                age: 28
            }
        }
    },
    components: {
        UserDisplay
    }
}
</script>
```

---

**在组件内使用属性**

在组件内，可以使用读取数据的方式来读取属性。 完整的 `UserDisplay` 组件可能如下所示：

```html
<template>
    <div>Name: {{ user.name }}</div>
    <div>Age: {{ user.age }}</div>
</template>
<script>
export default {
    name: 'UserDisplay',
    props: {
        user: {
            name: String,
            age: Number
        }
    }
}
</script>
```

> 与有状态数据不同，通过属性传递值是单向绑定。 如果对属性进行了更改，这些更新不会扩展到父级。

---

#### 向组件添加属性

接下来，通过创建显示当前预订列表的组件，继续生成应用程序。 你将添加一个窗体，用户可以使用它来添加预订，现在创建一个静态数组吧。

---

**创建组件**

首先创建组件。

1. 使用 Visual Studio Code，在 `src/components` 中创建一个名为 `BookingList.vue` 的文件。
2. 在 `BookingList.vue` 中键入 `vue`，然后从代码片段菜单中选择“`<vue> with default.vue`”。

---

**注册属性和计算出的值**

我们需要一个预订信息数组，所以将属性声明为 `Array` 类型。 你要创建组件，因此还可以利用计算属性自动计算值。 你将添加一个计算属性，用于添加总价并返回可供你使用的显示值。

1. 打开 `src/components/BookingList.vue`
2. 在 `export default` 的大括号 (`{ }`) 内，添加以下代码，以创建一个名为 `bookings` 的属性和 `computed` 属性：

```js
props: {
    bookings: Array
},
computed: {
    totalDisplay() {
        let totalCost = 0;
        if (this.bookings && this.bookings.length > 0) {
            totalCost = 
                this.bookings.map(b => b.price)
                            .reduce((a, b) => a + b);
        }
        return '$ ' + totalCost.toLocaleString('en-US');
    }
}
```

请注意，`totalDisplay` 可以使用 `this` 访问 `bookings` 属性，也就是说我们能访问声明为组件的一部分的数据或其他属性。 我们创建代码，以计算 `bookings` 中列出的所有价格的总价，并创建字符串显示。

---

**为显示信息添加模板**

接下来，添加模板以显示预订信息。 你将使用 `v-for` 循环访问所有预订，并使用我们之前创建的 `totalDisplay` 计算属性。

1. 打开 `src/components/BookingList.vue`
2. 在 `<template>` 元素内部，添加以下 HTML：

```html
<section>
<h2>
    Here's your current bookings:
</h2>

<div class="row" v-for="(booking, index) in bookings" :key="index">
    <div>{{ booking.cabin }} </div>
</div>

<h3 class="row">
    Total: {{ totalDisplay }}
</h3>
</section>
```

1. 我们的代码使用 `v-for` 循环访问所有预订，并显示 `cabin`。 然后，我们调用 `totalDisplay` 来显示所有预订的总费用。

---

**向主页添加组件**

接下来，使用我们创建的组件，然后传入预订列表。

1. 打开 `src/components/Host.vue`。

2. 在 `<script>` 开始标记下、`export default` 前添加一个新行。

3. 添加以下代码（包括注释）以导入 `BookingList` 组件：

   ```js
   import BookingList from './BookingList.vue';
   // TODO: Register next component
   ```

4. 通过在 `TODO: Add components` 注释下添加以下代码（包括注释）来注册组件：

   ```js
   components: {
       BookingList,
       // TODO: Add next component
   
   },
   ```

   > 这两个逗号是必需的，因为我们未来会添加更多值。

---

**使用组件**

注册组件后，在页面中调用它吧。 我们将使用之前创建的 `bookings` 数组在页面上播种预订列表。

1. 打开 `src/components/Host.vue`

2. 在 `TODO: Add booking-list` 注释下，添加以下代码以使用 `booking-list` 组件：

   ```html
   <booking-list :bookings="bookings"></booking-list>
   ```

---

**测试页面**

保存后返回 `http://localhost:8080`

![image-20211110220720738](http://cdn.ayusummer233.top/img/202111102207889.png)

到此为止完成了创建一个具有属性的组件。

---

#### 组件的自定义事件

HTML 元素可基于用户交互引发事件。 使用组件发射事件也能引发事件。 然后，父组件可以使用与添加代码以侦听按钮点击事件相同的方式来处理这些事件。

---

**注册事件**

创建组件时，在 `script` 中的 `emits` 字段中列出组件可能发射的任何事件，从而注册这些事件：

```html
<!-- inside the component's vue file -->
<script>
export default {
    name: 'Demo',
    emits: ['userUpdated']
}
</script>
```

---

**发射事件**

使用 `$emit` 函数发射事件。 如果要发射 HTML 控件直接引发的事件，可使用内联方式执行此操作。 请注意，你可以通过注册按钮的 `click` 事件处理程序来发射 `userUpdated` 事件：

```html
<!-- inside the component's vue file -->
<template>
    <button @click="$emit('userUpdated')">Save user</button>
</template>
```

> 你使用的是快捷方式 `@click`，它通常用于连接 Vue 中的事件处理程序。

有时，可能需要在发射事件前执行更多步骤。 如果组件在返回任何更新的信息之前需要先将值保存到数据库中，你可以通过添加方法来完成此操作。 在方法中，可以使用 `this.$emit` 来引发事件，就像之前一样：

```html
<!-- inside the component's vue file -->
<template>
    <button @click="saveUser">Save user</button>
</template>
<script>
export default {
    name: 'UserDialog',
    emits: ['userUpdated'],
    methods: {
        saveUser() {
            // perform other operations
            this.$emit('userUpdated'); // emits event
        }
    }
}
</script>
```

----

**发射带有数据的事件**

组件可能需要通过事件向父组件返回数据。 可以通过向 `$emit` 传递其他参数来返回任何数据。 如果希望通过返回 `true` 来指示更新成功，可以像下面这样更新调用：

```html
<button @click="$emit('userUpdated', true)">Save user</button>
```

你也可以使用方法:

```js
methods: {
    saveUser() {
        // perform other operations
        this.$emit('userUpdated', true); // emits event
    }
}
```

---

**侦听事件**

侦听组件发射的事件和侦听普通 HTML 控件引发的事件类似。 你往往会在父组件中创建一个方法，然后使用会为 `@click` 或其他事件使用的 `@<event-name>` 语法，将该方法连接到事件。 如果事件返回任何数据，这些数据都会被作为参数传递给函数。

如果要为先前创建的 `userUpdated` 事件添加事件处理程序，可以使用以下代码。 请注意，Vue.js 会将采用骆驼拼写法的名称转换为用短横线分隔的小写名称。

```html
<template>
<user-dialog @user-updated="handleUserUpdated"></user-dialog>
</template>
<script>
import UserDialog from './UserDialog.vue';
export default {
    methods: {
        handleUserUpdated(success) {
            if (success) {
                alert('It worked!!');
            } else {
                alert('Something went wrong');
            }
        }
    },
    components: {
        UserDialog
    }
}
```

---

#### 向组件添加自定义事件

接下来，通过添加一个窗体来完成应用程序的构建。 该窗体有一个供用户选择客舱的下拉列表，还有一个用于预订巡航的按钮。 你会将此窗体设置为新组件，并为该按钮创建一个事件。 最后，通过从 `Host.vue` 调用此新组件。

---

**创建组件**

使用默认模板创建 `BookingForm` 组件

----

**为组件添加代码**

在 `export default` 的大括号 (`{ }`) 内，添加以下代码来配置组件：

```js
props: {
    cabins: Array,
},
emits: ['bookingCreated'],
data() {
    return {
        cabinIndex: -1
    }
},
methods: {
    bookCabin() {
        if(this.cabinIndex < 0) return;
        this.$emit('bookingCreated', this.cabinIndex);
        this.cabinIndex = -1;
    },
}
```

此代码首先创建一个用于显示可用客舱的列表的 `cabins` 属性。 我们使用 `emits` 公开一个名为 `bookingCreated` 的事件。 再创建一个名为 `cabinIndex` 的数据项来存储选定的客舱索引。

最后，创建一个名为 `bookCabin` 的方法。 此方法将检查 `cabinIndex` 的值，并且仅当该值为 0 或更大值（表示用户选择了客舱）时才运行。 如果此验证通过，我们发射返回选定的 `cabinIndex` 的事件，然后将 `cabinIndex` 重置为 -1。

---

**添加显示模板**

在 `<template>` 标记内添加以下代码创建显示内容：

```html
<section>
<h2>Book now!</h2>
<form>
    <div class="row">
        <label for="cruise-cabin">Select class:</label>
        <select id="cruise-cabin" v-model="cabinIndex">
            <option disabled value="-1">Select a cabin</option>
            <option v-for="(cabin, index) in cabins" :value="index" :key="index">
                {{ cabin.name }} $ {{ cabin.price.toLocaleString('en-US') }}
            </option>
        </select>
    </div>
    <div class="row">
        <button class="button" type="button" @click="bookCabin">Book now!</button>
    </div>
</form>
</section>
```

该 HTML 创建窗体。 我们使用 `v-for` 创建下拉列表，从而循环访问 `cabins` 属性。 将 `select` 标记模型绑定到 `cabinIndex`，用户选择客舱并选择该按钮时，会返回该模型。 然后，将按钮设置为在被选定时调用 `bookCabin`。

---

将 `BookingForm` 添加到页面

打开 `Host.vue`

在 `TODO: Register next component` 注释后添加以下代码以导入 `BookingForm`：

```js
import BookingForm from './BookingForm.vue';
```

通过在 `TODO: Add next component` 注释后添加以下代码，将 `BookingForm` 添加到可用组件列表中：

```js
BookingForm
```

通过在 `TODO: Add methods` 注释后添加以下代码来添加用于处理 `bookingCreated` 自定义事件的方法：

```js
methods: {
    addBooking(cabinIndex) {
        const cabin = this.cruise.cabins[cabinIndex];
        const booking = {
            cabin: cabin.name,
            price: cabin.price
        }
        this.bookings.push(booking);
    }
},
```

`addBooking` 函数使用索引检索选定的客舱。 然后，该函数使用 `cabin.name` 和 `cabin.price` 新建一个 `booking` 对象。 接下来，将 `booking` 添加到 `bookings` 数组中。

使用 `booking-form` 组件，使用方法为在 `TODO: Add booking-form` 注释后添加以下代码：

```html
<booking-form @booking-created="addBooking" :cabins="cruise.cabins"></booking-form>
```

我们将 `addBooking` 函数连接到 `booking-created` 事件，并传递要显示的客舱列表。

---

**测试页面**

保存并返回 `http://localhost:8080`

![image-20211110221819293](http://cdn.ayusummer233.top/img/202111102218514.png)

---

## 安装

> [安装 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/guide/installation.html#发布版本说明)

将 `Vue.js` 添加到项目中主要有四种方式：

1. 在页面上以 [CDN 包](https://v3.cn.vuejs.org/guide/installation.html#cdn) 的形式导入。
2. 下载 JavaScript 文件并 [自行托管](https://v3.cn.vuejs.org/guide/installation.html#下载并自托管)。
3. 使用 [npm](https://v3.cn.vuejs.org/guide/installation.html#npm) 安装它。
4. 使用官方的 [CLI](https://v3.cn.vuejs.org/guide/installation.html#命令行工具-cli) 来构建一个项目，它为现代前端工作流程提供了功能齐备的构建设置 (例如，热重载、保存时的提示等等)。

---

### pnpm

```bash
# 最新稳定版
pnpm install vue@next
```

大多数情况下，我们更倾向于使用 Vue CLI 来创建一个配置最小化的 webpack 构建版本

> 本质上，*webpack* 是一个现代 JavaScript 应用程序的 *静态模块打包器(module bundler)*。当 webpack 处理应用程序时，它会递归地构建一个*依赖关系图(dependency graph)*，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 *bundle*。
>
> [概念 | webpack 中文网 (webpackjs.com)](https://www.webpackjs.com/concepts/)

---

### 命令行工具(CLI)

Vue 提供了一个[官方的 CLI](https://github.com/vuejs/vue-cli)，为单页面应用 (SPA) 快速搭建繁杂的脚手架。它为现代前端工作流提供了功能齐备的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。更多详情可查阅 [Vue CLI 的文档](https://cli.vuejs.org/)。

> CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读[指南](https://v3.cn.vuejs.org/guide/introduction.html)，在熟悉 Vue 本身之后再使用 CLI。

对于 Vue 3，你应该使用 `pnpm` 上可用的 `Vue CLI v4.5` 作为 `@vue/cli`。要升级，你应该需要全局重新安装最新版本的 `@vue/cli`：

```bash
pnpm install -g @vue/cli
```

> 使用 `@vue/cli` 可视化创建 Vue 项目
>
> ```bash
> vue ui
> ```
>
> ![image-20211116191439270](http://cdn.ayusummer233.top/img/202111161914501.png)
>
> 选择 `创建` 后根据界面提示完成项目的创建
>
> > [pnpm安装以及安装@vue/cli_cxrlover的博客-CSDN博客_安装pnpm](https://blog.csdn.net/weixin_43852058/article/details/113752494)

然后在 Vue 项目中运行

```bash
vue upgrade --next
```

---

## 工具

### TypeScript 支持

> [Vue CLI](https://cli.vuejs.org/) 提供内置的 TypeScript 工具支持。

---

###  NPM 包中的官方声明

随着应用的增长，静态类型系统可以帮助防止许多潜在的运行时错误，这就是为什么 Vue 3 是用 TypeScript 编写的。这意味着在 Vue 中使用 TypeScript 不需要任何其他工具——它具有一等公民支持。

---

### 推荐配置

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    // 这样就可以对 `this` 上的数据属性进行更严格的推断
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node"
  }
}
```

请注意，必须包含 `strict: true` (或至少包含 `noImplicitThis: true`，它是 `strict` 标志的一部分) 才能在组件方法中利用 `this` 的类型检查，否则它总是被视为 `any` 类型。

参见 [TypeScript 编译选项文档](https://www.typescriptlang.org/docs/handbook/compiler-options.html) 查看更多细节。

---

### 开发工具

#### 项目创建

[Vue CLI](https://github.com/vuejs/vue-cli) 可以生成使用 TypeScript 的新项目，开始：

```sh
# 1. Install Vue CLI, 如果尚未安装
pnpm install --global @vue/cli@next

# 2. 创建一个新项目, 选择 "Manually select features" 选项
vue create my-project-name

# 3. 如果已经有一个不存在TypeScript的 Vue CLI项目，请添加适当的 Vue CLI插件：
vue add typescript
```

请确保组件的 `script` 部分已将语言设置为 TypeScript：

```html
<script lang="ts">
  ...
</script>
```

或者，如果你想将 TypeScript 与 [JSX `render` 函数](https://v3.cn.vuejs.org/guide/render-function.html#jsx)结合起来：

```html
<script lang="tsx">
  ...
</script>
```

---
## Vite

> [开始 | Vite 官方中文文档 (vitejs.dev)](https://cn.vitejs.dev/guide/)
>
> Vite 是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：
>
> - 一个开发服务器，它基于 [原生 ES 模块](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 提供了 [丰富的内建功能](https://cn.vitejs.dev/guide/features.html)，如速度快到惊人的 [模块热更新（HMR）](https://cn.vitejs.dev/guide/features.html#hot-module-replacement)。
> - 一套构建指令，它使用 [Rollup](https://rollupjs.org/) 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。
>
> Vite 意在提供开箱即用的配置，同时它的 [插件 API](https://cn.vitejs.dev/guide/api-plugin.html) 和 [JavaScript API](https://cn.vitejs.dev/guide/api-javascript.html) 带来了高度的可扩展性，并有完整的类型支持。
>
> 你可以在 [为什么选 Vite](https://cn.vitejs.dev/guide/why.html) 中了解更多关于项目的设计初衷。



---

## Router

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

## Vuex

> Vuex 是一个专为 Vue.js 应用程序开发的 **状态管理模式 + 库**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
>
> ### 什么情况下我应该使用 Vuex？
>
> Vuex 可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。
>
> 如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 [store 模式](https://v3.cn.vuejs.org/guide/state-management.html#从零打造简单状态管理)就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。引用 Redux 的作者 Dan Abramov 的话说就是：
>
> > Flux 架构就像眼镜：您自会知道什么时候需要它。
