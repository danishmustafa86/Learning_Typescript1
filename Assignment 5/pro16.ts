// **16**. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let listOfInviters: string[] = ["Hamid", "Abdullah","danish", "Ahmad"]
console.log(`I want to invite some friends as Rehman, Afzal and Bilal`);
listOfInviters.unshift("Rehman")
listOfInviters.splice(listOfInviters.length/2+1,0,"Afzal")
listOfInviters.push("Bilal")
console.log("list of inviters after modification",listOfInviters);
listOfInviters.map((elm)=>{
console.log(`I will be very happy if you attend my birthday party my dear friend ${elm}`);
})















