/*
 * @Author: your name
 * @Date: 2021-07-17 11:44:10
 * @LastEditTime: 2021-07-17 12:20:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Module01Exercise\module01.ts
 */

/*
function addNumbers(x:number, y:number){
    return x + y;
}

console.log(addNumbers(1,6));
*/

let x: number;
let y = 1;
let z;


// 模板字符串
let firstName: string = "233";
let sentence: string = `My name is ${firstName}`;
console.log(sentence);


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

// // unknown 类型
// let randomValue: unknown = 10;
// randomValue = true;
// randomValue = 'Mateo';

// console.log(randomValue.name);  // Error: Object is of type unknown
// randomValue();                  // Error: Object is of type unknown
// randomValue.toUpperCase();      // Error: Object is of type unknown


// 类型断言
let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}


// 联合类型
let age: number | string;
let age1: number | string;
age = 20;
age1 = "二十";
console.log(age);
console.log(age1);


// 交叉类型
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

let test = {
    employeeID: 12345,
    age: 34
};
console.log(test);


// 数组
// 使用方括号表示
let list: number[] = [1, 2, 3];
console.log(list);
// 使用泛型表示
let list2: Array<number> = [4, 5, 6];
console.log(list2);


// 元组
// 创建一个包含字符串和数字的元组
let person1: [string, number] = ['Marcia', 35];
console.log(person1);


// var 重复声明
var a = 1;
var a = 2;
console.log(a);

// let 尝试重复声明
let b = 1;
// let b = 2;
console.log(b);


// const 声明常量后尝试改变常量值
const c = 1;
// c = 2;

// const 声明对象后改变对象属性
const d = {
    name: '咸鱼型233'
};
d.name = '233';

