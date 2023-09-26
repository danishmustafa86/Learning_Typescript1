"use strict";
const complexObject = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    interests: ["programming", "music", "hiking"],
    address: {
        street: "123 Main St",
        city: "Exampleville",
        postalCode: "12345",
    },
    grades: {
        math: {
            midterm: 85,
            final: 92,
        },
        science: {
            midterm: 78,
            final: 88,
        },
    },
    contact: {
        email: "john.doe@example.com",
        phone: "+1234567890",
    },
    tuple: [1, "two", true],
    functionExample: function (x) {
        return x * 2;
    },
};
// assigning types;
let names = "danish";
let age = 20;
let isStudent = true;
let interests = ["programming", "music", "hiking"];
let address = {
    street: "123 Main St",
    city: "Exampleville",
    postalCode: "12345",
};
let grades = {
    math: {
        midterm: 85,
        final: 92,
    },
    science: {
        midterm: 78,
        final: 88,
    },
};
let contact = {
    email: "john.doe@example.com",
    phone: "+1234567890",
};
let tuple = [1, "two", true];
let functionExample = function (x) {
    return x * 2;
};
console.log("funtionExample is", functionExample());
console.log("age is", age);
console.log("yes I am a student", isStudent);
console.log("tuple is", tuple);
console.log("Contact is", contact);
console.log("grades is", grades);
console.log("name is", names);
