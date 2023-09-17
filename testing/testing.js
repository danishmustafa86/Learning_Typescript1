'use strict'
// var studentNames:string[]=["ali","ahmad","danish","jajja","hamid"]
// studentNames.splice(3,10,"jutt")
// console.log(studentNames);
// let todos:string[]=["learn ary","learn aray methods"];
// var updatetodos=todos.splice(1,0,"how are you")
// console.log(todos);
// write a program having arrays of todos if todos are in odd delete one from center of array otherwise remove two todos from center
// var todoss:string[]=["ali","ahmad","danish","jajja","hamid","ham" ]
// if(todoss.length%2==0){
// todoss.splice(todoss.length/2,2)
// }
// else{
//     todoss.splice(todoss.length/2,1)
//     }
//     console.log(todoss)
// var num1:number = 1
// var num2:number =5
// while(num1<=10){
//     var num3:number = num2*num1
//     console.log("2*"+num1+"=",num3);
//     num1=num1+1
//     }
//     var nums:number[]=[2,456,74,2,34,12 ,23]
//     var sum:number=nums[1]+nums[3]
// console.log(sum);
// var names:string[]=["ali","danish","hamid","sultan","ahmad"]
// names[2]="adil"
// // console.log(names);
var names:string[]=["ali","danish","hamid","sultan","ahmad"]
function pushInarry(){
    names.splice(2,0,"jajja")
    console.log(names)
}
pushInarry()
// var num:number[]=[23,35,54,42,12,2,13]
// function minuss(num1:number[],num2:number[]){
//     var results:number=num1[2]+num2[3]
//     console.log(results)
// // }
// var suResult = (num1, num2) => num1 + num2
// // var num1:number=4
// // var num2:number=3
// // var num3:number=num1+num2
// // return num3
// // console.log(num3);
// var howREsult = suResult(10, 20)
// howREsult = howREsult + 90
// console.log(howREsult)
function pr(name:String,roolNo:Number)
