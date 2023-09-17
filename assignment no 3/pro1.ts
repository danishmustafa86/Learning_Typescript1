// 1 - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
function sumOfEvenNumber(n: number): number {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        if ((i % 2) == 0) {
            sum += i
        }
    }
    return sum
}
console.log(sumOfEvenNumber(10));
