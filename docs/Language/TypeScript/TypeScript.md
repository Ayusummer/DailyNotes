# TypeScript

- [TypeScript](#typescript)
  - [安装](#安装)
  - [教程](#教程)
  - [类型](#类型)
    - [关键字](#关键字)
      - [var, let 与 const](#var-let-与-const)
    - [模板字符串](#模板字符串)
    - [枚举](#枚举)
    - [unknown 类型](#unknown-类型)
    - [类型断言](#类型断言)
    - [类型保护](#类型保护)
    - [联合类型](#联合类型)
    - [交叉类型](#交叉类型)
    - [对象类型](#对象类型)
      - [数组](#数组)
      - [元组](#元组)
  - [接口](#接口)
    - [TypeScript 中的接口概述](#typescript-中的接口概述)
      - [接口与类型别名的区别](#接口与类型别名的区别)
    - [扩展接口](#扩展接口)
      - [使用接口描述 JavaScript API](#使用接口描述-javascript-api)
  - [函数](#函数)
    - [命名函数](#命名函数)
    - [匿名函数](#匿名函数)
    - [箭头函数](#箭头函数)
    - [参数](#参数)
    - [定义函数类型](#定义函数类型)
  - [Tips](#tips)
    - [VSCode](#vscode)
      - [扩展](#扩展)
    - [在线编译运行](#在线编译运行)
  - [Promise](#promise)
    - [创建 Promise](#创建-promise)


---

## 安装

- 首先要安装 [nodejs](https://nodejs.org/en/download/)

- 在命令行执行如下命令以全局安装 TypeScript

  ```bash
  # 安装 typescript
  npm install –g typescript
  # 查看当前 typescript 版本
  tsc --version
  ```


---
## 教程

---

- [介绍 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/typescript-get-started/1-introduction)
- [B站微软Reactor_SH](https://www.bilibili.com/video/BV1o64y1k7Fp)

- [<官网>起步 · TypeScript——JavaScript的超集 (tslang.cn)](https://www.tslang.cn/samples/index.html)
- [5分钟了解 TypeScript - TypeScript 中文手册 (bootcss.com)](https://typescript.bootcss.com/tutorials/typescript-in-5-minutes.html)
- [TypeScript 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/typescript/ts-tutorial.html)



---

## 类型

> [基础类型 - TypeScript 中文手册 (bootcss.com)](https://typescript.bootcss.com/basic-types.html)
>
> [在 TypeScript 中声明变量类型 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/typescript-declare-variable-types/)

![image-20210717150202370](http://cdn.ayusummer233.top/img/20210717150202.png)

<img src="http://cdn.ayusummer233.top/img/202202161538943.png" alt="image-20220216153825753" style="zoom: 67%;" />

- `void` 类型的存在纯粹是为了指示不存在值，例如存在于没有返回值的函数中
- `null` 和 `undefined` 类型是所有其他类型的子类型。 无法显式引用 null 和 undefined 类型。 使用 `null` 和 `undefined` 字面量只能引用这些类型的值。

---

### 关键字

#### var, let 与 const

> [TypeScript 使用let和const声明变量 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/396435904)

使用 `var` 声明变量的时候，可以同时声明某个变量多次，但是只有最后一个生效。

而 `let` 不支持这样做，使用 `let` 声明变量，一个变量同时只能声明一次，否则会报错。

```typescript
// var 重复声明
var a = 1;
var a = 2;
console.log(a);

// let 尝试重复声明
let b = 1;
let b = 2;
console.log(b);
```

![image-20220301084125051](http://cdn.ayusummer233.top/img/202203010841228.png)

let 的作用域在其所在块内, const 也是如此

const 与 let 的不同之处在于其声明的变量只能在声明时被赋值, 也即使用 const 生命的变量被赋值后无法再改变变量所指向的内存地址(指针)

> const 声明常量后无法改变值, 但是使用 const 声明一个对象后, 虽然对象变量锁指向的内存地址不改变, 但是对象的属性是可变的
>
> ```typescript
> // const 声明常量后尝试改变常量值
> const c = 1;
> c = 2;
> 
> // const 声明对象后改变对象属性
> const d = {
>     name: '咸鱼型233'
> };
> d.name = '233';
> ```
>
> ![image-20220301084824328](http://cdn.ayusummer233.top/img/202203010848443.png)

---

### 模板字符串

在 TypeScript 中，还可以使用模板字符串，该模板字符串可以跨越多行并具有嵌入式表达式。 这些字符串由反撇号/反引号 (\`) 字符括起，并且嵌入式表达式的形式为 `${ expr }`。

![image-20220216154826496](http://cdn.ayusummer233.top/img/202202161548682.png)

---

### 枚举

> [练习 - 枚举 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/typescript-declare-variable-types/4-enums)
>
> [TS入门篇 | 详解 TypeScript 枚举类型 - 掘金 (juejin.cn)](https://juejin.cn/post/6998318291420708900)

枚举提供了一种处理相关常量集的简单方法。 `enum` 是一组值的符号名。 枚举被视为数据类型，你可以使用它们来创建用于变量和属性的常量集。

每当过程接受一组有限的变量时，请考虑使用枚举。 枚举使代码更清晰、可读性更好，尤其是在使用有意义的名称时。

使用枚举：

- 帮助减少由于转置或错误输入数字而导致的错误。
- 使将来更改值变得容易。
- 使代码更易于阅读，这意味着不太可能出现错误。
- 确保向前兼容性。 通过使用枚举，将来有人更改与成员名称对应的值时，代码失败的可能性更小。

```typescript
// 枚举
enum Grade {
    freshman,   // 0-大一
    sophomore,  // 1-大二
    junior,     // 2-大三
    senior,     // 3-大四
}
let ayusummer: Grade = Grade.senior;
console.log("233:" + ayusummer);

// 更改序列起始值为 2
enum Grade2 {
    freshman = 2,   // 2-大一
    sophomore,  // 3-大二
    junior,     // 4-大三
    senior,     // 5-大四
}
let ayusummer2: Grade2 = Grade2.senior;
console.log("233:" + ayusummer2);
console.log("233:" + Grade2[ayusummer2]);   // 根据枚举值获取枚举名称
```

![image-20220216161042912](http://cdn.ayusummer233.top/img/202202161610085.png)

---

### unknown 类型

> [TypeScript 中的任何 any 和 unknown 类型 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/typescript-declare-variable-types/5-any-unknown)

`any` 类型虽然很灵活，但可能会导致意外错误。 为了解决这个问题，TypeScript 引入了 `unknown` 类型。

`unknown` 类型与 `any` 类型的相似之处在于，可以将任何值赋予类型 `unknown`。 但无法访问 `unknown` 类型的任何属性，也不能调用或构造它们。

```typescript
// unknown 类型
let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

console.log(randomValue.name);  // Error: Object is of type unknown
randomValue();                  // Error: Object is of type unknown
randomValue.toUpperCase();      // Error: Object is of type unknown
```

![image-20220216162129265](http://cdn.ayusummer233.top/img/202202161621455.png)

> `any` 和 `unknown` 之间的核心区别在于你无法与 `unknown` 类型的变量进行交互；这样做会产生“编译器”错误。 `any` 将绕过所有编译时检查，并且在运行时评估对象；如果该方法或属性存在，它将表现出预期的效果。

---

### 类型断言

如果需要将变量视为其他数据类型，则可以使用类型断言。

类型断言有两种形式。 一种是 `as` 语法：

```typescript
(randomValue as string).toUpperCase();
```

另一个版本是“尖括号”语法：

```typescript
(<string>randomValue).toUpperCase();
```

> `as` 是首选语法。 使用 `< >` 进行类型转换时，某些 TypeScript 应用程序（例如 JSX）可能会发生混淆。

```typescript
let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}
```

![image-20220216171526602](http://cdn.ayusummer233.top/img/202202161715802.png)

----

### 类型保护

前面的示例演示了在 `if` 块中使用 `typeof` 在运行时检查表达式的类型。 这称为“类型保护”。

你可能熟悉在 JavaScript 中使用 `typeof` 和 `instanceof` 来测试这些条件。 TypeScript 了解这些条件，并在 `if` 块中使用时会相应地更改类型推理。

可以使用以下条件来了解变量的类型：

|    类型     |             Predicate              |
| :---------: | :--------------------------------: |
|  `string`   |      `typeof s === "string"`       |
|  `number`   |      `typeof n === "number"`       |
|  `boolean`  |      `typeof b === "boolean"`      |
| `undefined` | `typeof undefined === "undefined"` |
| `function`  |     `typeof f === "function"`      |
|   `array`   |         `Array.isArray(a)`         |

---

### 联合类型

> [TypeScript 中的联合类型和交叉类型 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/typescript-declare-variable-types/6-unions-intersections)

联合类型描述的值可以是几种类型之一。 当值不受控制时（例如，来自库、API 或用户输入的值），这将很有帮助。

联合类型使用竖线 (`|`) 分隔每种类型。

```typescript
// 联合类型
let age: number | string;
let age1: number | string;
age = 20;
age1 = "二十";
console.log(age);
console.log(age1);
```

![image-20220216172315488](http://cdn.ayusummer233.top/img/202202161723882.png)

---

### 交叉类型

> [TypeScript 中的联合类型和交叉类型 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/typescript-declare-variable-types/6-unions-intersections)

交叉类型与联合类型密切相关，但它们的使用方式完全不同。 交叉类型组合两个或多个类型以创建具有现有类型的所有属性的新类型。 这使你可以将现有类型加在一起，以获得具有所需所有功能的单个类型。

交叉类型使用与号 (`&`) 分隔每种类型。

```typescript
type ManagementEmployee = Employee & Manager;
```

交叉类型最常与接口一起使用。 以下示例定义了两个接口 `Employee` 和 `Manager`，然后创建了一个称为 `ManagementEmployee` 的新交叉类型，该交叉类型将两个接口中的属性组合在一起。

```typescript
interface Employee {
    employeeID: number;
    age: number;
}
interface Manager {
    stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
console.log(newManager);
console.log(newManager.stockPlan);
console.log(newManager.age);
console.log(newManager.employeeID);
```

![image-20220216175452073](http://cdn.ayusummer233.top/img/202202161754268.png)

---

### 对象类型

> [TypeScript 中的集合类型 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/typescript-declare-variable-types/7-collection-types)

对象类型是所有类、接口、数组和字面量类型（不是基元类型的任何类型）

---

#### 数组

- 使用元素类型后跟方括号 (`[ ]`) 来表示该元素类型的数组：

  ```typescript
  let list: number[] = [1, 2, 3];
  console.log(list);
  ```

- 第二种方式，通过语法 `Array<type>` 使用泛型 `Array` 类型：

  ```typescript
  let list2: Array<number> = [4, 5, 6];
  console.log(list2);
  ```

  ![image-20220221204920271](http://cdn.ayusummer233.top/img/202202212049743.png)

两种方法混合使用并没有好处，所以要决定使用哪种语法。

个人更倾向于泛型写法, 因为字面上含义比较明确

---

#### 元组

拥有相同值类型的数组很有用，但有时一个数组可能包含混合类型的值。 为此，TypeScript 提供了元组类型。 若要声明元组，请使用语法 `variableName: [type, type, ...]`。

```typescript
// 创建一个包含字符串和数字的元组
let person1: [string, number] = ['Marcia', 35];
console.log(person1);
```

![image-20220221205029006](http://cdn.ayusummer233.top/img/202202212050285.png)

![image-20220221205240167](http://cdn.ayusummer233.top/img/202202212052339.png)



---
## 接口

----

### TypeScript 中的接口概述

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

  | 属性类型 | 说明                                                                                                           | 示例                          |
  | :------- | :------------------------------------------------------------------------------------------------------------- | :---------------------------- |
  | 必须     | 除非另行指定，否则所有属性都是必需的。                                                                         | `firstName: string;`          |
  | 可选     | 在属性名称的末尾添加问号 (`?`)。 对于不是必需的属性，请使用此属性。 这可以防止类型系统在省略该属性时引发错误。 | `firstName?: string;`         |
  | 只读     | 在属性名称的前面添加 readonly 关键字。 对于只应在首次创建对象时修改的属性，请使用此属性。                      | `readonly firstName: string;` |

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

#### 接口与类型别名的区别

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

### 扩展接口

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

### 使用接口的其他方法

- [在 Typescript 中使用接口的其他方法 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/typescript-implement-interfaces/5-use-interfaces)

---

#### 创建可索引类型

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

#### 使用接口描述 JavaScript API

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

## 函数

> [在 TypeScript 中创建函数 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/typescript-develop-typed-functions/2-create-functions-typescript)

`TypeScript` 简化了函数开发，通过允许键入参数和返回值，使它们更易于进行故障排除。 `TypeScript` 还为参数添加了新选项。 例如，虽然在 `JavaScript` 函数中，所有参数都是可选的，但你可以在 `TypeScript` 中将参数设置为必需的或可选的。

---

### 命名函数

```typescript
function addNumbers(x: number, y: number): number {
    return x + y;
}
console.log(addNumbers(1, 2))
```

---

### 匿名函数

函数表达式（或匿名函数）是未预先加载到执行上下文中的函数，并且仅当代码遇到该函数时才会运行。 函数表达式是在运行时创建的，并且必须先声明才能调用。 （这意味着不会对它们进行提升，而命名函数声明在程序开始执行时就会进行提升，并且可以在其声明之前调用。）

```typescript
let addNumbers_anonymous = function (x: number, y: number): number {
    return x + y;
}
console.log(addNumbers_anonymous(3, 2))

let total = function (input: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        sum += input[i];
    }
    return sum;
}
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9]))
```

在使用匿名函数时，你将获得类型检查和 Intellisense。 你还会注意到，在此示例中，变量 `total` 不是类型化的变量，但 TypeScript 可以通过称为“上下文类型化”的内容（一种类型推理形式）来确定其类型。 这可以减少保持程序类型所需的工作量。

---

### 箭头函数

箭头函数（也称为 Lambda 或胖箭头函数，因为定义它们的是 `=>` 运算符）提供用于定义匿名函数的简写语法。 由于其简洁性，箭头函数通常用于简单的函数和某些事件处理场景。

 箭头函数通过省略函数关键字并在参数和函数体之间添加 `=>` 运算符来简化语法。

```typescript
let addNumbers_arrow = (x: number, y: number): number => {
    return x + y;
}
console.log(addNumbers_arrow(3, 4))
```

> 箭头函数是在 ES2015 中引入的，因此并非所有浏览器都支持它们。 通过使用 TypeScript，你可以利用这些函数类型，然后转译到更低的 JavaScript 版本（如有必要），这样你的代码就可以在旧版浏览器上使用。

![image-20220301224130936](http://cdn.ayusummer233.top/img/202203012241501.png)

---

### 参数

> [运用参数的乐趣 - Learn | Microsoft Docs](https://docs.microsoft.com/zh-cn/learn/modules/typescript-develop-typed-functions/4-parameters)

- 可选参数

  ```typescript
  console.log("可选参数:")
  let addNumbers_optional = (x: number, y?: number): number => {
      if (y === undefined) {
          y = 0;
      }
      return x + y;
  }
  console.log(addNumbers_optional(5, 4))
  console.log(addNumbers_optional(5))
  ```

  ![image-20220301224948862](http://cdn.ayusummer233.top/img/202203012249148.png)

  需要注意的是设置了参数可选后, 函数体内需要对没有参数的情况进行相应处理
  
- 默认参数

  ```typescript
  let addNumbers_default = (x: number, y: number = 10): number => {
      return x + y;
  }
  console.log(addNumbers_default(5, 4))
  console.log(addNumbers_default(5))
  ```

  ![image-20220302081528148](http://cdn.ayusummer233.top/img/202203020815408.png)

- `rest 参数` 

  如果要使用多个参数作为一个组（在数组中）或不知道函数最终将采用的参数数量，则可以使用 rest 参数。 rest 参数被视为无限数量的可选参数。 可以将它们保留不动，或根据需要调整数量。

  此示例包含一个必需参数和一个可选参数 `restOfNumbers`，该参数可接受任意数量的其他数字。 `restOfNumbers` 之前的省略号 (`...`) 指示编译器构建一个传递给函数的参数数组，并给它后面的名称赋值，这样你就可以在函数中使用它。

  ```typescript
  let addAllNumbers_rest = (firstNumber: number, ...restOfNumbers: number[]): number => {
      let total: number = firstNumber;
      for (let counter = 0; counter < restOfNumbers.length; counter++) {
          if (isNaN(restOfNumbers[counter])) {
              continue;
          }
          total += Number(restOfNumbers[counter]);
      }
      return total;
  }
  console.log(addAllNumbers_rest(1, 2, 3, 4, 5, 6, 7, 8, 9))
  console.log(addAllNumbers_rest(2))
  console.log(addAllNumbers_rest(2, 3, NaN, 4))
  ```

  ![image-20220302082942124](http://cdn.ayusummer233.top/img/202203020829351.png)

- 析构对象参数

  函数参数是有位置的，并且必须按照它们在函数中定义的顺序传递。 在调用具有多个可选参数或相同数据类型的函数时，这可能会降低代码的可读性。

  若要启用命名参数，可以使用称为析构对象参数的技术。 这使你能够在函数中使用接口来定义命名参数，而不是定位参数。

  以下示例定义了一个接口 `Message`，该接口又定义了两个属性。 在 `displayMessage` 函数中，`Message` 对象作为参数传递，提供对属性的访问，就像它们是普通参数一样。

  > 主要是当参数多的时候能够更加明显看出参数的含义

  ```typescript
  interface Message {
      text: string;
      sender: string;
  }
  
  function displayMessage({ text, sender }: Message) {
      console.log(`Message from ${sender}: ${text}`);
  }
  
  displayMessage({ sender: 'Christopher', text: 'hello, world' });
  ```

  ![image-20220302090757288](http://cdn.ayusummer233.top/img/202203020907460.png)

---

### 定义函数类型

可以使用类型别名来定义函数类型

```typescript
// 定义一个用于对两个 number 进行运算并返回一个 number 的函数类型别名 calculator
type calculator = (x: number, y: number) => number;
// 定义一个加法运算 calculator 函数 addNumbers_calculator
let addNumbers_calculator: calculator = (x: number, y: number) => x + y;
// 定义一个减法运算 calculator 函数 subtractNumbers_calculator
let subtractNumbers_calculator: calculator = (x: number, y: number) => x - y;
// 定义一个参数为 operation 字符串(add | subtract) 返回 calculator 类型的函数 doCalculation
let doCalculation = (operation: "add" | "substract"): calculator => {
    if (operation === "add") {
        return addNumbers_calculator;
    } else {
        return subtractNumbers_calculator;
    }
}
console.log(doCalculation("add")(1, 2))
console.log(doCalculation("substract")(1, 2))
```

![image-20220302093052728](http://cdn.ayusummer233.top/img/202203020930891.png)

将别名换成 interface 定义接口, 主体逻辑也不用改变

```typescript
// 定义一个用于对两个 number 进行运算并返回一个 number 的函数类型别名 calculator
// type calculator = (x: number, y: number) => number;
// 使用接口定义 calculator
interface calculator {
    (x: number, y: number): number;
}

// 定义一个加法运算 calculator 函数 addNumbers_calculator
let addNumbers_calculator: calculator = (x: number, y: number) => x + y;
// 定义一个减法运算 calculator 函数 subtractNumbers_calculator
let subtractNumbers_calculator: calculator = (x: number, y: number) => x - y;
// 定义一个参数为 operation 字符串(add | subtract) 返回 calculator 类型的函数 doCalculation
let doCalculation = (operation: "add" | "substract"): calculator => {
    if (operation === "add") {
        return addNumbers_calculator;
    } else {
        return subtractNumbers_calculator;
    }
}
console.log(doCalculation("add")(1, 2))
console.log(doCalculation("substract")(1, 2))
```

---



---

## Tips

---

### VSCode

---

#### 扩展

- Live Server

  ![image-20210717150010179](http://cdn.ayusummer233.top/img/20210717150010.png)

  Launch a development local Server with live reload feature for static & dynamic pages

  实时编译运行 JS, 再打开开发者工具, 可以边改动边观察效果

- HTML Boilerplate

  ![image-20210717150127783](http://cdn.ayusummer233.top/img/20210717150127.png)

  自动生成 HTML5 模板

  



----

### 在线编译运行

- [TypeScript: 游乐场 - 一个用于 TypeScript 和 JavaScript 的在线编辑器 (typescriptlang.org)](https://www.typescriptlang.org/zh/play#code/GYVwdgxgLglg9mABAQwCaoHIgLYCMCmATgM4AUAHgFxg4GEA0iAntbUQJQDeAUIn4oXxQQhJOUQBqZgG5uAX24QExOABt8AOlVwA5qTSY2JUgCIoAC0H4T9AGzt2QA)

- [TypeScript: TS Playground - An online editor for exploring TypeScript and JavaScript (typescriptlang.org)](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCoASMFmgY7p7ehCTkVOle4jUMdRLYTqCc8LEZzCZmoNJODPHFZZXVtZYYkAAeRJTInDQS8po+rf40gnjbDKv8LqD2jpbYoACqAEoAMsK7sUmxkGSCc+VVQQuaTwVb1UBrDYULY7PagbgUZLJH6QbYmJAECjuMigZEMVDsJzCFLNXxtajBBCcQQ0MwAUVWDEQNUgADVHBQGNJ3KAALygABEAAkYNAMOB4GRogLFFTBPB3AExcwABT0xnM9zsyhc9wASmCKhwDQ8ZC8iElzhB7Bo3zcZmY7AYzEg-Fg0HUiS58D0Ii8AoZTJZggFSRxAvADlQAHJhAA5SASAVBFQAeW+ZF2gldWkgx1QjgUrmkeFATgtOlGWH0KAQiBhwiudokkuiIgMHBx3RYbC43CCJSAA)

  



----

## Promise

> [Promise · 深入挖掘 TypeScript (gitbooks.io)](https://rexdainiel.gitbooks.io/typescript/content/docs/promise.html)[**感觉文档比较生硬, 夹杂着很多奇怪的词汇, 看起来像是蹩脚的翻译**]
>
> [Promise - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
>
> [Promise - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544)

`Promise` 类存在于很多现代 JavaScript 引擎中，而且可以很容易地被 [polyfill](https://github.com/stefanpenner/es6-promise)。Promise 的主要目的是为异步／回调风格的代码带来同步风格的错误处理。

`Promise` 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。

一个 `Promise` 对象代表一个在这个 `promise` 被创建出来时不一定已知的值。它让您能够把异步操作最终的成功返回值或者失败原因和相应的处理程序关联起来。 这样使得异步方法可以像同步方法那样返回值：异步方法并不会立即返回最终的值，而是会返回一个 `promise`，以便在未来某个时候把值交给使用者。

一个 `Promise` 必然处于以下几种状态之一：

- *待定（pending）*: 初始状态，既没有被兑现，也没有被拒绝。
- *已兑现（fulfilled）*: 意味着操作成功完成。
- *已拒绝（rejected）*: 意味着操作失败。

待定状态的 Promise 对象要么会通过一个值*被兑现（fulfilled）*，要么会通过一个原因（错误）*被拒绝（rejected）*。当这些情况之一发生时，我们用 promise 的 then 方法排列起来的相关处理程序就会被调用。如果 promise 在一个相应的处理程序被绑定时就已经被兑现或被拒绝了，那么这个处理程序就会被调用，因此在完成异步操作和绑定处理方法之间不会存在竞争状态。

![img](http://cdn.ayusummer233.top/img/202203281209302.png)

> 如果一个 promise 已经被兑现（fulfilled）或被拒绝（rejected），那么我们也可以说它处于*已敲定（settled）*状态。您还会听到一个经常跟 promise 一起使用的术语：*已决议（resolved）*，它表示 promise 已经处于已敲定(settled)状态，或者为了匹配另一个 promise 的状态被"锁定"了。`Domenic Denicola` 的 [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) 中有更多关于 promise 术语的细节可以供您参考。

---

### 创建 Promise

创建 `promise` 只需要简单地在 `Promise 构造器` 上调用 `new` 即可; `promise 构造器` 传入 `resolve` 和 `reject` 以控制 `promise 状态`

```typescript
const promise = new Promise((resolve, reject) => {
    // resolve / reject 函数操控着 promise 的命运
});
```



