// 1 Write a program that uses filter to remove all negative numbers from an array of numbers
// 2 Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
// 3 Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
// 4 Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
// 5 Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
// 6 Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
// 7 Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".


// 1=> Write a program that uses filter to remove alll negative numbers from an array of numbers
let Arry:number[]=[1,2,-3,4,-45,56,-786,555]
let updateArry=Arry.filter((elm)=>{
    if (elm>=0) {
        return elm
         }
})
console.log(updateArry);


// 2 Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let numArry:number[]=[1,2,3,4,5]
let newArry=numArry.map((element)=>{
    element=element*2
    return element
    console.log(element);
    })
console.log(newArry);


// 3 Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let stringArry:string[]=["apple", "banana", "cherry", "date", "grape"]
let upDateStringArry=stringArry.filter((elm)=>{
    if (elm.length>5) {
        return elm
    }
})
console.log(upDateStringArry);


// 5 Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let ary:number[]= [0, 10, 20, 30, 40]
let aryInf=ary.map((elm)=>{
    elm=elm*9/5+32
    return elm
})
console.log(aryInf);


// 7 Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let arry:string[]=["Alice", "Bob", "Charlie", "David", "Emily"]
let araString=arry.forEach((elm)=>{
console.log(`${elm}!`);
})
console.log(araString);


// 6 Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
var Ara:number[]=[3, 6, 9, 12, 15, 18]
let doubedAra=Ara.filter((elm)=>{
    if (elm%2==1) {
        elm=elm+elm
        return elm
    }
    else{
        console.log(elm);
        return elm
    }
    return elm
})
console.log(doubedAra);

//OR
// 6 Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
var Ara:number[]=[3, 6, 9, 12, 15, 18]
let doubledAra=Ara.filter((elm)=>{
    if (elm%2==1) {
        elm=elm+elm
        return elm
    }
    else{
        console.log(elm);
        return elm
    }
    return elm
})
console.log(doubledAra);

// 4 Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
// let nums:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let modifyAry=nums.map((elm)=>{
//     if (elm%2==0) {
//         elm=elm**2
//         return elm
//     }
//     return elm
// })
// console.log(modifyAry);

//OR

// 4 Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let nums:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let modifyArry=nums.filter((elm)=>{ elm++
    if (elm%2==0) {
        elm=elm**2
        return elm
        
    }
    return elm
})
console.log(modifyArry);





