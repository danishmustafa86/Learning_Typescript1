//  3 - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
var arryOfNumbers = [1, 2, 3, 4, 53, 34, 756, 324, 21];
for (var index = 0; index < arryOfNumbers.length; index++) {
    var element = arryOfNumbers[index];
    if (element % 2 == 1) {
        console.log(element);
    }
}
