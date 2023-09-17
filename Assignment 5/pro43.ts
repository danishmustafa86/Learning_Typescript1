
// **43**. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function show_magicians(showmagicians:string[]) {
    showmagicians.map((elm)=>{
        console.log(`The great magician`,elm,`is very popular in the world these days`);
        
    })
}
show_magicians(["Danish","Ahmad","Hamid","Mustafa","Ali"])
var make_great=(show_magicians);
var newArray:string[]=["wahab","butt","rana","tayyab"];
make_great(newArray);


















