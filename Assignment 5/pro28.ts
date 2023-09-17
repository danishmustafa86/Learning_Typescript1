
// **28**. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let ageOfPerson:number=45
// • If the person is less than 2 years old, print a message that the person is a baby.
if (ageOfPerson<2) {
    console.log(`person is baby`);
    
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
if (ageOfPerson>=2&&ageOfPerson<=4 ){
    console.log(`person is toddler`);
    
}

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
if (ageOfPerson>=4&&ageOfPerson<13) {
    console.log(`person is Kid`);
    
}

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
if (ageOfPerson==13&&ageOfPerson<=20) {
    console.log(`person is teenager`);
    
}

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
if (ageOfPerson==20&&ageOfPerson<=65) {
    console.log(`person is adult`);
    
}

// • If the person is age 65 or older, print a message that the person is an elder.
if (ageOfPerson>65) {
    console.log(`person is elder`);
    
}
