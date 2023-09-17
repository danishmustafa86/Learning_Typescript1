// **6**. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let nam: string = "   Ahmad    "
console.log("my name is", nam)
console.log("my name is", nam.trim())

// OR

let nameis:string= `ali\nzohair\t`
console.log("my name is", nameis)
console.log("my name is", nameis.replace(/\s+/g,""))


// OR

let nameWithSpaces:string = 'ali\nhamza\t'
console.log(nameWithSpaces)
let nameWithoutSpaces:string = nameWithSpaces.replace(/\s+/g, "");
console.log(nameWithoutSpaces)
