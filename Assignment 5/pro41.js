// **41**. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
// let magicuansArry:string[]=["Danish","Ahmad","Hamid","Mustafa","Ali"]
function show_magicians(showmagicians) {
    showmagicians.map((elm) => {
        console.log(elm);
    });
}
show_magicians(["Danish", "Ahmad", "Hamid", "Mustafa", "Ali"]);
export {};
