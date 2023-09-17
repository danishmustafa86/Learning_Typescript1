// **24**. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let numbr = "874";
console.log(numbr == "874");
console.log(numbr == "875");
// • Tests using the lower case function
let myname = "Danish";
console.log(myname == "danish");
console.log(myname == "Danish");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let n1 = 4;
let n2 = 6;
console.log(n1 >= n2);
console.log(n1 <= n2);
console.log(n1 < n2);
console.log(n1 > n2);
// • Tests using "and" and "or" operators
let n3 = 5;
let n4 = 7;
console.log(n3 != n4);
console.log(n3 >= n4);
// • Test whether an item is in a array
let listof = [2, 3, 4, 5, 67, 54, 23];
console.log(listof[4] == 67);
// • Test whether an item is not in a array
let listoF = [2, 3, 4, 5, 67, 54, 23];
console.log(listof[3] == 67);
export {};
