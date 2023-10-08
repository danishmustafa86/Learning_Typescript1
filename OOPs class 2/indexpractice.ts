import inquirer from "inquirer"
class bike{
    company:string="danish"
    model:number=0
    
}
class vehicle extends bike{
    color:string="black"
}
let testing=new vehicle()
console.log("company is",testing.company);







