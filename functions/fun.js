"use strict";
// function sum(n1:number , n2:number){
// var n1:number = 5
// var n2:number = 7
// var result:number = n1+n2
// return result
// }
// var sumResult:number= sum(52,56)
// sumResult=sumResult+50
// console.log(sumResult);
// var addResult:number= sum(30,20)
// addResult=addResult+100
// console.log(addResult);
function names(name1, ...name2) {
    console.log(`${name1} and his roll no is `);
    if (name2) {
        console.log(`name2 is =>,${name2}`);
    }
}
names("ali", 3, 6, 8, 2, 1);
console.log(names);
