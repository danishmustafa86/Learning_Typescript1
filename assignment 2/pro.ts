// 6 - Write a program having an array of numbers if the numbr is negative it should remove the negative number from the array.
function arryOfNumbers(rray:number[]) {
    let positive:number[]=[]
    for (const numb of rray) {
        if (numb>=0) {
            positive.push(numb)
        }
    }return positive
}console.log(arryOfNumbers([1,2,-9,76,-8,9]));





