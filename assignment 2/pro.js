// 6 - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
function arryOfNumbers(rray) {
    var positive = [];
    for (var _i = 0, rray_1 = rray; _i < rray_1.length; _i++) {
        var numb = rray_1[_i];
        if (numb >= 0) {
            positive.push(numb);
        }
    }
    return positive;
}
console.log(arryOfNumbers([1, -2, 3, 4, -5, 6, -76, 8, -9]));
