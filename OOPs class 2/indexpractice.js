class bike {
    company = "danish";
    model = 0;
}
class vehicle extends bike {
    color = "black";
}
let testing = new vehicle();
console.log("company is", testing.company);
export {};
