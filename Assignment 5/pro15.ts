// **15**. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.


let listOfInviters: string[] = ["Hamid", "Usman", "Ahmad"]
console.log(listOfInviters);
console.log("from the upper list my dear friend" ,listOfInviters[1],"will not come to my invitation");

listOfInviters.splice(1,1,"jajja")
console.log("list of inviters after modifocation",listOfInviters);

let inviters = listOfInviters.map((element) =>

console.log(`I want to invite ${element} on Birthday. I will be very happy if you will attend my Birthday`)
    )




