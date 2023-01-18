/*
 * @Author: your name
 * @Date: 2021-07-17 15:43:50
 * @LastEditTime: 2021-07-17 21:44:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\ProgrammingLanguage\TypeScript\Test\Module02Exercise\helloType.ts
 */
// let isMale:boolean = true;
// let user_weight:number = 77;
// let user_name = "Ryan";

// enum CurrentStatus {
//     Working, 
//     Playing,
//     Sleeping,
//     Eating,
//     中文
// }

// let user_status:CurrentStatus = CurrentStatus.Playing;
// //console.log(user_status);
// console.log(CurrentStatus[user_status]);


// enum Days {星期天, 星期一, 星期二, 星期三, 星期四, 星期五, 星期六};
// console.log("您预约的是"+Days[6]);


// enum Days {星期天=7, 星期一=1, 星期二=2, 星期三=3, 星期四=4, 星期五=5, 星期六=6};
// console.log("您预约的是"+Days[7]);



// let anyTypeValue:any = 10;
// anyTypeValue = "Hello";
// anyTypeValue = true;


// let anyTypeValue:any = 10;
// anyTypeValue = "Hello";
// anyTypeValue = true;
// console.log(anyTypeValue.unKnownProperty);
// anyTypeValue();
// anyTypeValue.toUpperCase();


// let unKnownValue:unknown = 10;
// unKnownValue = "Hello";
// unKnownValue = true;
// console.log(unKnownValue.unKnownProperty);
// unKnownValue();
// unKnownValue.toUpperCase();


// let unKnownValue:unknown = 10;
// unKnownValue = "Hello";
// //unKnownValue = true;
// //console.log(unKnownValue.unKnownProperty);
// //unKnownValue();
// console.log((unKnownValue as string).toLowerCase());


// let unKnownValue:unknown = 10;
// unKnownValue = "Hello";
// //unKnownValue = true;
// //console.log(unKnownValue.unKnownProperty);
// //unKnownValue();
// console.log((unKnownValue as string).toUpperCase());
// console.log((<string>unKnownValue).toLowerCase());


// let unKnownValue:unknown = 10;
// unKnownValue = "Hello";
// //unKnownValue = true;
// //console.log(unKnownValue.unKnownProperty);
// //unKnownValue();
// if(typeof unKnownValue === 'string'){
// console.log((unKnownValue as string).toUpperCase());
// console.log((<string>unKnownValue).toLowerCase());
// }else{
// console.log("It's not a string");
// }


// let unKnownValue:unknown = 10;
// //unKnownValue = "Hello";
// unKnownValue = true;
// //console.log(unKnownValue.unKnownProperty);
// //unKnownValue();
// if(typeof unKnownValue === 'string'){
// console.log((unKnownValue as string).toUpperCase());
// console.log((<string>unKnownValue).toLowerCase());
// }else{
// console.log("It's not a string");
// }



// function getLength(obj: string | string[]){
//     return obj.length; 
// }
// console.log(getLength("Hello"));
// console.log(getLength(["David","John","Ryan"]));



// function getNumber(obj: number | string){
//     if(typeof obj === "string"){
//         return "国字的"+obj;
//     }
//     else{
//         return `${obj}+4=${obj+3}`
//     } 
// }
// console.log(getNumber("七"));
// console.log(getNumber(7));


// type BasicProfile = {
//     name:string;
//     age:number; 
// }

// type ExtraProfile = {
//     education:string;
//     work_experience:number; 
// }

// type FullProfile = BasicProfile & ExtraProfile;

// let newbie1_full_profile:FullProfile = {
//     name:"Ryan",
//     age:99,
//     education:"Master",
//     work_experience:15
// };




// type TrafficTools = "Bike" | "Car" | "Scooter";
// let myTrafficTool:TrafficTools = "Bike";
// console.log(myTrafficTool);




// type StringArray = Array<string>;
// type NumberArray = Array<number>;
// type ObjectWithNameArray = Array<{name:string}>;
// let className:StringArray = ["HTML", "CSS", "JavaScript", "TypeScript"];
// let audienceNumber:NumberArray = [666,777,888,999];
// let instructors:ObjectWithNameArray = [ {name:"Ryan"},{name:"David"},{name:"John"},{name:"Marry"}];
// console.log(`在${className[0]}课中，有${audienceNumber[0]}人参与，讲师是${instructors[0].name}`);



/* Module 2: Declare variable types in TypeScript
   Lab start  */

// /*  EXERCISE 1
//     todo: Modify the code to add types to the variable declarations. 
//     The resulting JavaScript should look the same as the original example when you're done. */

// let firstName:string;
// let lastName:string;
// let fullName:string;
// let age:number;
// let ukCitizen:boolean;
    
// firstName = 'Rebecca';
// lastName = 'Smith';
// age = 42;
// ukCitizen = false;
// fullName = firstName + " " + lastName;

// if (ukCitizen) {
//     console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
// } else {
//     console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
// }

// /* EXERCISE 2
//     todo: You can use types to ensure operation outcomes. Run the code as is and then modify 
//     it to have strongly typed variables. Then, address any errors you find so that the result 
//     returned to a is 12. */

// let x:number;
// let y:number;
// let a:number;

// x = 5;
// y = 7;
// a = x + y;

// console.log(a);

// /* EXERCISE 3
//     todo: In the following code, implement an enum type called Season that represents 
//     the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
//     you can pass in the season by referencing an item in the enum, for example 
//     Season.Fall, instead of the literal string "Fall". */

// enum Season{
//     "Fall",
//     "Winter",
//     "Spring",
//     "Summer"
// }
    
// function whichMonths(season:Season) {

//     let monthsInSeason: string;

//     switch (season) {
//         case Season.Fall:
//             monthsInSeason = "September to November";
//             break;
//         case Season.Winter:
//             monthsInSeason = "December to February";
//             break;
//         case Season.Spring:
//             monthsInSeason = "March to May";
//             break;
//         case Season.Summer:
//             monthsInSeason = "June to August";
//     }

//     return monthsInSeason;
// }

// console.log(whichMonths(Season.Fall));


// /* EXERCISE 4
//     todo: Declare the array as the type to match the type of the items in the array. */

// let randomNumbers:number[]=[];
// let nextNumber:number;

// for (let i = 0; i < 10; i++) {
//     nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
//     randomNumbers.push(nextNumber);
// }

// console.log(randomNumbers);

    



// let x: number;
// let y = 0;
// let z: number = 123.456;
// let big: bigint = 100n;
// console.log(BigInt);



// interface Employee{
//    firstName:string;
//    lastName:string;
//    fullName():string; }
//    let thisEmployee:Employee = {
//    firstName:"Ryan",
//    lastName:"Chung",
//    fullName():string{   
//    return this.firstName + " " + this.lastName
//    }
// };
// console.log(`Hello! ${thisEmployee.fullName()}`);



// interface IceCream{
//    flavor:string;
//    scoops:number; 
// }

// let myIceCream:IceCream = {
//    flavor:'vanilla',
//    scoops:2 
// }

// console.log(`I have ${myIceCream.scoops} scoops of ${myIceCream.flavor} ice cream.`);



// interface IceCream{
//    flavor:string;
//    scoops:number; 
//    instructions?:string;
// }
// let myIceCream:IceCream = {
//    flavor:'vanilla',
//    scoops:5 
// }
// function countCheck(dessert:IceCream){
// if(dessert.scoops>=4){
//    return dessert.scoops + '!? TOO many!!'; }
//    else{
//       return 'Enjoy it!'; 
//    } 
// }
// console.log(`I have ${myIceCream.scoops} scoops of ${myIceCream.flavor} ice cream.`);
// console.log(`${countCheck(myIceCream)}`);



// interface SauceType{ 
//    [index:number]:string; 
// }
// let sundaeSauceType:SauceType = ['chocolate','caramel','strawberry'];
// console.log(`The Sundae Sauce types are ${sundaeSauceType[0]}, ${sundaeSauceType[1]} and ${sundaeSauceType[2]}`);


interface Loan{
   principle: number;
   interestRate: number;
}

interface ConventionalLoan extends Loan{
   months: number;
}

function calculateInterestOnlyLoanPayment(loanTerms: Loan):string{
   let interest = loanTerms.interestRate / 1200;
   let payment = loanTerms.principle * interest;
   return "只付息贷款的付款金额为:" + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
console.log(interestOnlyPayment);