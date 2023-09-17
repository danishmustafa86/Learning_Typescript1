
// **40**. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function make_album(artist_name:string,album_title:string,optional_parameter?:string) {
    let obgect={
        artist_name,
    album_title,
    optional_parameter
    }
    return obgect
}
console.log(make_album("danish","Why I love country",`this is my album`));
console.log(make_album("ahmad","Why I love religion"));
console.log(make_album("hamid","Why I hate enemy",`this is my album`));

