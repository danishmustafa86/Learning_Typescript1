// **30**. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing
//  code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
let users = ["Ali", "Zaman", "Usman", "Farhan", "abdullah"];
users.map((elm) => {
    console.log(`I greeted ${elm} very wide heartedly my dear user`);
});
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
users.map((elm) => {
    if (elm === "Ali") {
        console.log(`Hello ${elm}, would you like to see a status report?`);
    }
});
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
users.map((elm) => {
    if (elm != "Ali") {
        console.log(`Hello ${elm}, thank you for logging in again.`);
    }
});
export {};
