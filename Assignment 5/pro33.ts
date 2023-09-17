// **33**. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
let ordinalNumbers:any[]=["1st","2nd","3rd","4th","5th","6th","7th","8th","9th"]
for (let index = 0; index < ordinalNumbers.length; index++) {
    const element = ordinalNumbers[index];
    if (index==0) {
        console.log("1st");
        
    }
    else if(index==1) {
        console.log("2nd");
        
    }
    else if(index==2) {
        console.log("3rd");
        
    }
    else if(index==3) {
        console.log("4th");
        
    }
    else if(index==4) {
        console.log("5th");
        
    }
    else if(index==5) {
        console.log("6th");
        
    }
    else if(index==6) {
        console.log("7th");
        
    }
    else if(index==7) {
        console.log("8th");
        
    }
    else if(index==8) {
        console.log("9th");
        
    }
    else  {
        console.log("invald input");
        
    }
}






