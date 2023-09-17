
// **17**. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
let listOfInviters: string[] = [`Rehman`, `Hamid`, `Abdullah`, `Afzal`, `Danish`, `Ahmad`, `Bilal`]
console.log(`Mu deat friends ${listOfInviters} I can invite only two peoples from you because I have insufficient arrangement by chance`);
for (let index = 6; index > 1; index--) {
    let element: string = listOfInviters[index]
    console.log(`My dear friend ${element} , you’re sorry you can’t invite them to dinner.`);
    listOfInviters.pop()
}
console.log("My remaining list is", listOfInviters);
listOfInviters.map((elm) => {
    console.log(`My dear friend ${elm} you are still invied`);
})
listOfInviters.filter(() => {
    listOfInviters.pop()
    console.log(`Now I have an empty list`);
})







