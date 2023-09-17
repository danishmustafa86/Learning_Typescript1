// **29**. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.
let favourite_fruit:string[]=["banana","apple","peach"]
console.log(favourite_fruit);

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
let fruitarray1:string[]=["banana","apple","mango","peach"]
fruitarray1.map((elm,index,fruitarray1)=>{
    if (elm=="banana") {
    console.log("I like banana");
     }
    // if (elm=="apple") {
    if (index==1) {
    console.log("I like very much apple");
     }
    if (elm=="mango") {
    console.log("I like mango but eat rarely");
     }
    if (elm=="peach") {
    console.log("I like peach . It is very healthy fruit");
     }
})