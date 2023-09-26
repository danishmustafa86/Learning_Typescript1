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
  functionExample: function (x:number) {
    return x * 2;
  },
};
// making types
type addresss={street:string,city:string,postalCode:string}
type contacts={email:string,phone:string}
type maths={midterm:number,final:number}
type sciences={midterm:number,final:number}
type gradees={math:maths,science:sciences};
// assigning types;

let names: string="danish"
let age: number=20
let isStudent: boolean=true
let interests: [string,string,string]=["programming", "music", "hiking"]
let address: addresss={
  street: "123 Main St",
  city: "Exampleville",
  postalCode: "12345",
}
let grades: gradees= {
  math: {
    midterm: 85,
    final: 92,
  },
  science: {
    midterm: 78,
    final: 88,
  },
}
let contact:contacts={
  email: "john.doe@example.com",
  phone: "+1234567890",
}
let tuple:[number,string,boolean]= [1, "two", true]
let functionExample:any = function (x:any) {
  return x * 2;
}
console.log("funtionExample is",functionExample());
console.log("age is",age);
console.log("yes I am a student",isStudent);
console.log("tuple is",tuple);
console.log("Contact is",contact);
console.log("grades is",grades);
console.log("name is",names);



