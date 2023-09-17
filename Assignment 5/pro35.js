// **35**. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
let animals = ["goat", "cow", "buffalo"];
console.log(animals);
for (let index = 0; index < animals.length; index++) {
    const element = animals[index];
    console.log(element);
    if (element == "goat") {
        console.log(` It gives 2 kg milk daily`);
    }
    else if (element == "cow") {
        console.log(` It gives 12 kg milk daily`);
    }
    else if (element == "buffalo") {
        console.log(` It gives 8 kg milk daily`);
    }
    else {
        console.log(` Invalid input`);
    }
}
console.log(`These animals gives milk. moreover these animals eat grass.I like them very much`);
export {};
