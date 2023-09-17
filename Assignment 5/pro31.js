// **31**. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let listof = ["Ali", "Zaman", "Usman", "Farhan", "abdullah"];
console.log(listof);
// • If the list is empty, print the message We need to find some users!
if (listof.length == 0) {
    console.log("We need to find some users!");
}
// • Remove all of the usernames from your array, and make sure the correct message is printed.
listof.splice(0, listof.length);
console.log(listof, `my list is empty`);
export {};
