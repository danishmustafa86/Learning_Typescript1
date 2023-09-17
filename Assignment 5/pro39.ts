
// **39**. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function describe_city(city:string,country:string) {
    if (city=="Karachi") {
        console.log(`${city} is in  ${country}`);
    } else if (city=="Delhi") {
        console.log(`${city} is in  ${country}`);
    } else if (city=="Jakarta") {
        console.log(`${city} is in ${country}`);
    }else{
        console.log(`invalid input`);
        
    }
    return city
}
console.log(describe_city("Delhi","India"));
console.log(describe_city("Karachi","Pakistan"));
console.log(describe_city("Jakarta","Indonesia"));










