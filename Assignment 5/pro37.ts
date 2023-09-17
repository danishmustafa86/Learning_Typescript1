// **37**. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function shirts_size(size:any) {
    if (size=="large") {
        console.log(`Our shirts are of large size from 40 inch to 60 inch`);
        
    }  
      else if (size=="medium") {
        console.log(`Our shirts are of medium size from 24 inch to 39 inch`);
        
    }
    else if (size=="medium") {
        console.log(`Our shirts are of small size from 12 inch to 24 inch`);
        
    }
    else  {
        console.log(`Invalid input`);
        
    }
}
console.log(shirts_size("medium"));














