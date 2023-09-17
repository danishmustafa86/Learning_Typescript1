// **27**. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let Alien_color: string[] = ["red", "green", "yellow"]
Alien_color.filter((elm) => {
    if (elm == "green") {
        console.log(`player  will earned 5 points`);
    }
    else if(elm=="yellow") {
        console.log(`player will earned 10 points`);
    }
    else if(elm=="red") {
        console.log(`player just earned 15 points`);
    }
    else  {
        console.log(`invalid input`);
    }
})




