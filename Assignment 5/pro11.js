// **11**. Names: Store the names of a few of your friends in a array called names. Print each person’s name by 
// accessing each element in the list, one at a time.
let myFriends = ["Ali Zohair", "Usman Bunty", "Rashid Munir", "Abdullah Jamu", "Usman Riaz"];
// for (let index = 0; index < myFriends.length; index++) {
//     // const element = array[index];
//     console.log(myFriends[index]);
// }
// OR
// let friendsarry=myFriends.map((elm)=>{
// console.log(elm);
// })
// OR
// let friendsarry=myFriends.filter((elm)=>{
//     console.log(elm);
//     return elm
//     })
//     let frend=friendsarry
//     console.log(frend);
//  OR
let friendsarry = myFriends.filter((elm) => elm);
console.log(friendsarry);
export {};
