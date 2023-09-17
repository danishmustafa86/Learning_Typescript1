// write a program to calculat sum from 1 to 100 of odd numbers and display list of these numbers
// var sum:number=0
// let list:number[]=[1,2,3,4,5,6,7]
// for(let num1:number=1;num1<=100;num1++){
//     if (num1%2==1) {
//       sum=sum+num1
//       list.push(num1)
//  }
// }
// console.log(sum,list);

//again
var sum:number=0
var list:number[]=[]
for(let num1:number=1;num1<=500;num1++){
  if(num1%7===0){
  sum=sum+num1
list.push(num1)}
}
console.log("sum of numbers is",sum,"list of numbers is",list);
