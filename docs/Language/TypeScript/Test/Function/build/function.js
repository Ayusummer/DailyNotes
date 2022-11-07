"use strict";
//  使用 TypeScript 开发类型函数
// 命名函数
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(1, 2));
// 匿名函数
let addNumbers_anonymous = function (x, y) {
    return x + y;
};
console.log(addNumbers_anonymous(3, 2));
let total = function (input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        sum += input[i];
    }
    return sum;
};
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 箭头函数
let addNumbers_arrow = (x, y) => {
    return x + y;
};
console.log(addNumbers_arrow(3, 4));
// 可选参数
console.log("可选参数:");
let addNumbers_optional = (x, y) => {
    if (y === undefined) {
        y = 0;
    }
    return x + y;
};
console.log(addNumbers_optional(5, 4));
console.log(addNumbers_optional(5));
// 默认参数
console.log("默认参数:");
let addNumbers_default = (x, y = 10) => {
    return x + y;
};
console.log(addNumbers_default(5, 4));
console.log(addNumbers_default(5));
// rest 参数
console.log("rest 参数:");
let addAllNumbers_rest = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
console.log(addAllNumbers_rest(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(addAllNumbers_rest(2));
console.log(addAllNumbers_rest(2, 3, NaN, 4));
// 析构对象参数
console.log("析构对象参数:");
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
// 定义函数类型
console.log("定义函数类型:");
// 定义一个加法运算 calculator 函数 addNumbers_calculator
let addNumbers_calculator = (x, y) => x + y;
// 定义一个减法运算 calculator 函数 subtractNumbers_calculator
let subtractNumbers_calculator = (x, y) => x - y;
// 定义一个参数为 operation 字符串(add | subtract) 返回 calculator 类型的函数 doCalculation
let doCalculation = (operation) => {
    if (operation === "add") {
        return addNumbers_calculator;
    }
    else {
        return subtractNumbers_calculator;
    }
};
console.log(doCalculation("add")(1, 2));
console.log(doCalculation("substract")(1, 2));
