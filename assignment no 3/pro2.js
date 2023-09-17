// **2** - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
var arryOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var index = 0; index < arryOfNumbers.length; index++) {
    var element = arryOfNumbers[index];
    if (element % 2 == 0) {
        console.log(element);
    }
}
function arryOfEvenNumbers(arry) {
    for (var index = 0; index < arry.length; index++) {
        var element = arry[index];
        if (element % 2 == 0) {
            console.log(element);
        }
    }
}
console.log(arryOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
