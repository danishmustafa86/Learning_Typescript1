 import { log } from "console";
import inquirer from "inquirer";

async function name() {
    var result =await inquirer.prompt([{
        type:"number",
        name:"num",
        message:"enter 1st number"
    },{
        type:"number",
        name:"num2",
        message:"enter 2nd number"  
    }])
    try {
        if (result.num>100||result.num<0) {
            throw new Error("enter a valid number")
        }
        else{
            if(result.num>90){
            console.log("user get A grade");
            }else if(result.num>60){
                console.log("user get B grade");
                }else if(result.num>33){
                    console.log("user get C grade");
                    }else{
                        console.log("user is fail");
                        }
        }
        // console.log(result.num+result.num2);
      
    } catch (error) {
        console.log("error",error);
        
    }
    
    finally{
        console.log("Your response is submitting");
        
    }
    
}


//  const question =[{
//     type:"number",
//     name:"num1",
//     message:"enter 1st number"
//  },{
//     type:"number",
//     name:"num2",
//     message:"enter 2nd number"
//  }]

// const result= await inquirer.prompt(question)
// console.log("result is ",result.num1+result.num2);








name()