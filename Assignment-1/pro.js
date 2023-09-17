"use strict";
// Assignment for this week is:
// 1 - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
// 2 Write a program that calculates the percentage./  
// 3 - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
// 4 - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
// 5 - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
// 6 - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
// 7 - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
// 8 - Write a program that checks if the given year is leap year or not.
// 9 - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
// 10 - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
// 1 Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
var temperatureinc = 40;
var temperatureinf = temperatureinc * (9 / 5) + 32;
console.log("temperature in farenheight", temperatureinf);
// 2 Write a program that calculates the percentage./
// var english:number =89
// var urdu:number =84
// var math:number =90
// var sum:number =english+urdu+math
// var total:number=300
// var percentage:number=total/sum*100
// console.log("percentage",percentage)  
// var obNum:number = 914
// var totNum:number = 1100
// var percentage:number = obNum/totNum*100
// console.log("percentage is =>",percentage);
// 2 Write a program that calculates the percentage.
var glish = 89;
var urdu = 84;
var math = 90;
var sum = glish + urdu + math;
console.log("sum", sum);
var total = 300;
var percentage = sum / total * 100;
console.log("percentage", percentage);
// 3 - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var days = 45;
var weeks = Math.floor(days / 7);
var day = days % 7;
console.log(`Weeks are ${weeks} and days is ${day}`);
// 4 - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var applePrice = 200;
if (applePrice > 100) {
    var discount = applePrice * 10 / 100;
    console.log("discount is =>", discount);
}
else if (applePrice < 100) {
    var discount = applePrice * 5 / 100;
    console.log(`discount is =>${discount},"dollar"`);
}
// 5 - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var age = 14;
if (age <= 12) {
    console.log("boy is child");
}
else if (age >= 13 && age <= 19) {
    console.log("boy is tenager");
}
else if (age > 19) {
    console.log("boy is adult");
}
else {
    console.log("invalid input");
}
// 6 - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var weather = "normal";
if (weather === "cold") {
    console.log("You should wear warm clothes");
}
else if (weather === "warm") {
    console.log("You should wear white and thin clothes");
}
else if (weather === "normal") {
    console.log("You can wear thin or warm  clothes");
}
else {
    console.log("invalid input");
}
// 7 - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var num = 25;
if (num % 3 == 0 && num % 5 == 0) {
    console.log("number is divisible by 3 and 5");
}
else if (num % 5 == 0) {
    console.log("number is divisible by 5");
}
else if (num % 3 == 0) {
    console.log("number is divisible by 3");
}
else {
    console.log("invalid input");
}
// 8 - Write a program that checks if the given year is leap year or not.
var year = 2023;
if (year % 4 == 0) {
    console.log("It is a leap year");
}
else {
    console.log("It is not a leap year");
}
// 9 - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var weekDay = 3;
if (weekDay == 1) {
    console.log("today is monday");
}
else if (weekDay == 2) {
    console.log("today is tuesday");
}
else if (weekDay == 3) {
    console.log("today is wednesday");
}
else if (weekDay == 4) {
    console.log("today is thursday");
}
else if (weekDay == 5) {
    console.log("today is friday");
}
else if (weekDay == 6) {
    console.log("today is sathurday");
}
else if (weekDay == 7) {
    console.log("today is suday");
}
else {
    console.log("wrong input");
}
// 10 - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
var units = 149;
var oneUnit = 43;
var bill;
if (units > 100 && units < 200) {
    units = units * 10 / 100 + units;
    console.log(units);
}
else if (units > 200 && units < 300) {
    units = units * 15 / 100 + units;
    console.log(units);
}
else if (units > 300 && units < 500) {
    units = units * 20 / 100 + units;
    console.log(units);
}
else if (units > 500) {
    units = units * 25 / 100 + units;
    console.log(units);
}
else {
    console.log("valid input");
}
bill = units * 43;
console.log(bill);
