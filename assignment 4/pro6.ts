// **6** Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.<br>
const array:number[]=[3, 6, 9, 12, 15, 18]
const oddarry=array.filter((elm)=>elm%2==1)
const squarearry=oddarry.map((elm)=>elm=elm+elm)
console.log(squarearry);


