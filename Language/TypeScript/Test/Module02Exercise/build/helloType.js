"use strict";
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
function calculateInterestOnlyLoanPayment(loanTerms) {
    let interest = loanTerms.interestRate / 1200;
    let payment = loanTerms.principle * interest;
    return "只付息贷款的付款金额为:" + payment.toFixed(2);
}
let interestOnlyPayment = calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
console.log(interestOnlyPayment);
