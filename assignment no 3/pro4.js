// **4** - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function areaOfCircle(radius) {
    var formula = 3.14 * (Math.pow(radius, 2));
    return formula;
}
console.log("area of circle is aproximately ", areaOfCircle(7));
