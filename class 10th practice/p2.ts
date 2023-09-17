

import inquirer from "inquirer"
async function numbers() {
    var numbers= inquirer.prompt([{
        type:"number",
        name:"num",
        message:"enter your message"
    }])
    var number= inquirer.prompt([{
        type:"number",
        name:"num",
        message:"enter your message"
    }])
        var numbes= inquirer.prompt([{
        type:"number",
        name:"num",
        message:"enter your message"
    }])
}





// try {
//     console.log("before error inquirer");
    
//     var result=await inquirer.prompt([{
//                 type:"number",
//                 name:"num",
//                 message:"enter marks"
//             }])
//             console.log(result,"result");
             
//             if (result.num>100||result.num<0) {
//                 console.log("please enter valid number");
//                            }
            
// } catch (error) {
//  console.log("error",error);
    
// }
// finally{
//     console.log("after error inquirer");
// }
// console.log("after inquirer");












// console.log("first");
// async function passinggrades() {
//     var result=await inquirer.prompt([{
//         type:"number",
//         name:"num",
//         message:"ente marks"
//     }])
//     if (result.num>40&&result.num<=50) {
//         console.log("user is pass");
        
//     }
//    else if (result.num>50&&result.num<=60) {
//         console.log("user get E grade");
        
//     } else if (result.num>60&&result.num<=70) {
//         console.log("user get D grade");
        
//     } else if (result.num>70&&result.num<=90) {
//         console.log("user get C grade");
        
//     } else if (result.num>90&&result.num<=100) {
//         console.log("user get B grade");
        
//     } 
//     else  {
//         console.log("user invalid input");
//  }
// }
// passinggrades()






