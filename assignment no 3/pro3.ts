//  3 - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let aryOfNumbers:number[]=[1,2,3,4,53,34,756,324,21]
for (let index = 0; index < aryOfNumbers.length; index++) {
    const element = aryOfNumbers[index];
    if (element%2==1) {
        console.log(element);
         }
}