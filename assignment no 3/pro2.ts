// **2** - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    if (element % 2 == 0) {
        console.log(element);
    }
}










