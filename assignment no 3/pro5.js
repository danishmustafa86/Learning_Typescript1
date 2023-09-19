// **5** - Develop a program that reads a list of grades & uses the splice method to remove failing grades (below 50) from the array.
function Passinggrades(gradesarry) {
    for (var index = gradesarry.length - 1; index >= 0; index--) {
        if (gradesarry[index] < 50) {
            gradesarry.splice(index, 1);
        }
    }
    return gradesarry;
}
console.log(Passinggrades([43, 67, 58, 52, 34, 56, 34, 29, 13, 44, 23, 42, 8, 66, 23, 74, 39]));
