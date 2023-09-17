// **4** - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function areaOfCircle(radius:number):number {
    let formula:number= 3.14*(radius**2)
    return formula
}
console.log("area of circle is aproximately ",areaOfCircle(7));
