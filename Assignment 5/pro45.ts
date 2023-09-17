
// **45**. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
function car(manufacturer:string,model_name:string,arbitrary_number?:number,color?:string,optional_feature?:string) {
   let obgect={
    manufacturer,
    model_name,
    arbitrary_number,
    color,
    optional_feature
    }
    return obgect
}
console.log(car("Abdul Qadeer","2023",786,"blue","top window"));
console.log(car("Abdul Qadeer","2023",786,"top window","none"));
console.log(car("Danish Jajja","2023",555,"Black","none"))

