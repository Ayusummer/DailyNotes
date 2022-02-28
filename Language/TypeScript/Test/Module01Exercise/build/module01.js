"use strict";
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
let x;
let y = 1;
let z;
// 模板字符串
let firstName = "233";
let sentence = `My name is ${firstName}`;
console.log(sentence);
// 枚举
var Grade;
(function (Grade) {
    Grade[Grade["freshman"] = 0] = "freshman";
    Grade[Grade["sophomore"] = 1] = "sophomore";
    Grade[Grade["junior"] = 2] = "junior";
    Grade[Grade["senior"] = 3] = "senior";
})(Grade || (Grade = {}));
let ayusummer = Grade.senior;
console.log("233:" + ayusummer);
// 更改序列起始值为 2
var Grade2;
(function (Grade2) {
    Grade2[Grade2["freshman"] = 2] = "freshman";
    Grade2[Grade2["sophomore"] = 3] = "sophomore";
    Grade2[Grade2["junior"] = 4] = "junior";
    Grade2[Grade2["senior"] = 5] = "senior";
})(Grade2 || (Grade2 = {}));
let ayusummer2 = Grade2.senior;
console.log("233:" + ayusummer2);
console.log("233:" + Grade2[ayusummer2]); // 根据枚举值获取枚举名称
// // unknown 类型
// let randomValue: unknown = 10;
// randomValue = true;
// randomValue = 'Mateo';
// console.log(randomValue.name);  // Error: Object is of type unknown
// randomValue();                  // Error: Object is of type unknown
// randomValue.toUpperCase();      // Error: Object is of type unknown
// 类型断言
let randomValue = 10;
randomValue = true;
randomValue = 'Mateo';
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
// 联合类型
let age;
let age1;
age = 20;
age1 = "二十";
console.log(age);
console.log(age1);
let newManager = {
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
let list = [1, 2, 3];
console.log(list);
// 使用泛型表示
let list2 = [4, 5, 6];
console.log(list2);
// 元组
// 创建一个包含字符串和数字的元组
let person1 = ['Marcia', 35];
console.log(person1);
