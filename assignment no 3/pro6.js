// **6** - Write a program that uses a function to find the largest element in an array of numbers.
// let arry:number[]=[1,2,34,23,65,87,34,58]
// function largestElement(arry:number[]=[1,2,34,23,65,87,34,58]) {
//    for (let index = 0; index < arry.length; index++) {
//     const element = arry[index];
//     if (element) {
//     }
//    }
// }
// function findLargestElement(array: number[]): number {
//    let largest = array[0];
//    for (let i = 1; i < array.length; i++) {
//      if (array[i] > largest) {
//        largest = array[i];
//      }
//    }
//    return largest;
//  }
//  let array = [1, 2, 34, 23, 65, 87, 34, 58];
//  console.log(findLargestElement(array)); 
// function findLargestElement(arry:number[]) {
//    let largest:number=arry[0]
//    for (let index = 0; index < arry.length; index++) {
//       const element = arry[index];
//       if (element>largest) {
//       largest=arry[index]
//       }
//    }
//    return largest
//   }
//    let arry:number[] = [1, 2, 34, 23, 65, 87, 34, 58];
//    let largestnuimberis=findLargestElement(arry)
// console.log(largestnuimberis);
// function largestNumber(arry:number[]) {
//    let largest:number=arry[0]
//    for (let index = 0; index < arry.length; index++) {
// if (arry[index]>largest) {
//    largest=arry[index]
// }
// }
// return largest
// }
// let arry=[1,34,54,78,54,78,89,89,89]
// console.log(largestNumber(arry));
function largestnumb(arry) {
    var largest = arry[0];
    for (var i = 0; i <= arry.length; i++) {
        if (arry[i] > largest) {
            largest = arry[i];
        }
    }
    return largest;
}
console.log(largestnumb([1, 2, 34, 64, 87, 24, 7, 97]));
