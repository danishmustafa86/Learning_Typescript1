// **38**. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city) {
    if (city == "Karachi") {
        console.log(`${city} is in Pakistan`);
    }
    else if (city == "Delhi") {
        console.log(`${city} is in India`);
    }
    else if (city == "Dhaka") {
        console.log(`${city} is in Bangladesh`);
    }
    else {
        console.log(`invalid input`);
    }
    return city;
}
console.log(describe_city("Delhi"));
console.log(describe_city("Karachi"));
console.log(describe_city("Jakarta"));
export {};
