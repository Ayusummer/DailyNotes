<!--
 * @Author: your name
 * @Date: 2021-07-15 18:30:33
 * @LastEditTime: 2021-07-17 15:11:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\ProgrammingLanguage\TypeScript\TypeScript.md
-->

----

# 目录
- [目录](#目录)
- [安装](#安装)
- [教程](#教程)
- [类型](#类型)
- [Tips](#tips)
  - [VSCode](#vscode)
    - [扩展](#扩展)
  - [在线编译运行](#在线编译运行)




---

# 安装

- 首先要安装 [nodejs](https://nodejs.org/en/download/)
- 命令行执行 `npm install –g typescript` 以全局安装 TypeScript
- `tsc --version` 查看当前 TypeScript 版本


---
# 教程

---

- [Microsoft Learn]([介绍 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/typescript-get-started/1-introduction))
- [B站微软Reactor_SH](https://www.bilibili.com/video/BV1o64y1k7Fp)

- [<官网>起步 · TypeScript——JavaScript的超集 (tslang.cn)](https://www.tslang.cn/samples/index.html)
- [5分钟了解 TypeScript - TypeScript 中文手册 (bootcss.com)](https://typescript.bootcss.com/tutorials/typescript-in-5-minutes.html)
- [TypeScript 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/typescript/ts-tutorial.html)



---

# 类型

![image-20210717150202370](http://cdn.ayusummer233.top/img/20210717150202.png)



---

# 接口

----

## TypeScript 中的接口概述

- [TypeScript 中的接口概述 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/typescript-implement-interfaces/2-interfaces-typescript)

- 可以使用接口来描述对象、命名和参数化对象的类型，以及将现有的命名对象类型组成新的对象类型。

  ```typescript
  interface Employee {
      firstName: string;
      lastName: string;
      fullName(): string;
  }
  ```

  接口的唯一任务是描述类型。 它定义了代码协定所需的内容，而实现接口的变量、函数或类则通过提供所需的实现详细信息来满足协定。

  > TypeScript 编码准则建议接口不应以字母 `I` 开头。

- 定义该接口的属性（或成员）及其类型。 属性可以为必需、可选或只读属性。

  | 属性类型 | 说明                                                         | 示例                          |
  | :------- | :----------------------------------------------------------- | :---------------------------- |
  | 必须     | 除非另行指定，否则所有属性都是必需的。                       | `firstName: string;`          |
  | 可选     | 在属性名称的末尾添加问号 (`?`)。 对于不是必需的属性，请使用此属性。 这可以防止类型系统在省略该属性时引发错误。 | `firstName?: string;`         |
  | 只读     | 在属性名称的前面添加 readonly 关键字。 对于只应在首次创建对象时修改的属性，请使用此属性。 | `readonly firstName: string;` |

  定义接口后，可以将其用作类型，并可享受到类型检查和 Intellisense 的所有好处。

- 此示例通过声明类型 `Employee` 的变量来实现接口。 它通过传入 `firstName` 和 `lastName` 属性的值并指定 `fullName` 方法需结合使用 `firstName` 和 `lastName` 属性并返回结果，来实现协定。

  ```typescript
  let employee: Employee = {
      firstName : "Emil",
      lastName: "Andersson",
      fullName(): string {
          return this.firstName + " " + this.lastName;
      }
  }
  
  employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
  ```

- 接口没有运行时表示形式；它们只是一种编译时构造。 接口对于记录和验证属性的所需形状、作为参数传递的对象以及从函数返回的对象特别有用。 这使你可以捕获错误，并确保在编译时传递正确的参数，而不用等待在运行时发现它们。

---

### 接口与类型别名的区别

- 上述 `Employee` 接口还可以使用 `type` 键字表示为类型别名：

  ```typescript
  type Employee = {
      firstName: string;
      lastName: string;
      fullName(): string;
  }
  ```

  类型别名是数据类型（例如联合、基元、交集、元组或其他任何类型）的定义。 另一方面，接口是描述数据形状（例如对象）的一种方法。 类型别名可以像接口一样使用；但有一些细微的差异。 主要区别在于**，不能重新打开类型别名以添加新属性，而接口始终是可扩展的**。 此外，**只能使用类型别名描述并集或元组**。



---

## 扩展接口

- [练习 - 在 TypeScript 中扩展接口 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/typescript-implement-interfaces/4-extend-interface)

- 接口可以相互扩展。 这使你能够将一个接口的成员复制到另一个接口，从而在将接口分离为可重用组件方面提供了更大的灵活性。

- 当使用一个或多个接口扩展接口时，将适用以下规则：

  - 必须从所有接口实现所有必需的属性。
  - 如果属性具有完全相同的名称和类型，则两个接口可以具有相同的属性。
  - 如果两个接口具有名称相同但类型不同的属性，则必须声明一个新属性，以使生成的属性是这两个接口的子类型。

- ```typescript
  interface IceCream {
     flavor: string;
     scoops: number;
     instructions?: string;
  }
  
  interface Sundae extends IceCream {
      sauce: 'chocolate' | 'caramel' | 'strawberry';
      nuts?: boolean;
      whippedCream?: boolean;
      instructions?: boolean;		// 这里会报错, 因为 IceCream 接口中也有 instructions 属性且类型为 string
      // 正确的做法应当是将这里的 boolean 改为 string 使其与 IceCream 中的 instructions 一致
  }
  ```

---

## 使用接口的其他方法

- [在 Typescript 中使用接口的其他方法 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/typescript-implement-interfaces/5-use-interfaces)

---

### 创建可索引类型

- 你可以使用描述可编制索引的数组类型的接口。

  可编制索引的类型具有“索引签名”，该签名描述可用于在对象中编制索引的类型，以及编制索引时相应的返回类型 。

  例如，`IceCreamArray` 接口将索引签名声明为 `number` 并返回 `string` 类型。 此索引签名声明 `IceCreamArray` 是使用数字编制索引的，它将返回一个字符串。

```typescript
interface IceCreamArray {
    [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr);
```

你还可以使用内置的数组类型或为自定义数组创建类型别名，但通过使用接口，你可以定义自己的数组类型，以便要使用该接口的任何人都可以一致地应用它

---

### 使用接口描述 JavaScript API

- JavaScript 和 TypeScript 开发人员面临一个共同的难点，即使用外部 JavaScript 库。 可以使用接口描述现有的 JavaScript API 并阐明函数参数和返回类型。 接口使你能够清楚地了解 API 的期望值和返回值。

```typescript
const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();
```

> 虽然早期版本的 ECMAScript（如 ES3）不支持 `async` 和 `await`，但 TypeScript 编译器能够生成兼容代码来实现此功能。 这样，你就能够在仍使用旧版浏览器的同时利用较新的功能！

-----

# Tips

---

## VSCode

---

### 扩展

- Live Server

  ![image-20210717150010179](http://cdn.ayusummer233.top/img/20210717150010.png)

  Launch a development local Server with live reload feature for static & dynamic pages

  实时编译运行 JS, 再打开开发者工具, 可以边改动边观察效果

- HTML Boilerplate

  ![image-20210717150127783](http://cdn.ayusummer233.top/img/20210717150127.png)

  自动生成 HTML5 模板

  



----

## 在线编译运行

- [TypeScript: 游乐场 - 一个用于 TypeScript 和 JavaScript 的在线编辑器 (typescriptlang.org)](https://www.typescriptlang.org/zh/play#code/GYVwdgxgLglg9mABAQwCaoHIgLYCMCmATgM4AUAHgFxg4GEA0iAntbUQJQDeAUIn4oXxQQhJOUQBqZgG5uAX24QExOABt8AOlVwA5qTSY2JUgCIoAC0H4T9AGzt2QA)

- [TypeScript: TS Playground - An online editor for exploring TypeScript and JavaScript (typescriptlang.org)](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCoASMFmgY7p7ehCTkVOle4jUMdRLYTqCc8LEZzCZmoNJODPHFZZXVtZYYkAAeRJTInDQS8po+rf40gnjbDKv8LqD2jpbYoACqAEoAMsK7sUmxkGSCc+VVQQuaTwVb1UBrDYULY7PagbgUZLJH6QbYmJAECjuMigZEMVDsJzCFLNXxtajBBCcQQ0MwAUVWDEQNUgADVHBQGNJ3KAALygABEAAkYNAMOB4GRogLFFTBPB3AExcwABT0xnM9zsyhc9wASmCKhwDQ8ZC8iElzhB7Bo3zcZmY7AYzEg-Fg0HUiS58D0Ii8AoZTJZggFSRxAvADlQAHJhAA5SASAVBFQAeW+ZF2gldWkgx1QjgUrmkeFATgtOlGWH0KAQiBhwiudokkuiIgMHBx3RYbC43CCJSAA)

  



----

