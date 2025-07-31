//? Are you using functions to organize your code?
//? Do your variables and functions have meaningful names?
//? Is your code formatted?

//! Prompt the user for froyo flavors and store their input

const answer = prompt (
    "Enter a list of comma-separated froyo flavors. ex: vanilla, vanilla, vanilla, strawberry, coffee, coffee");

//! Parse the user input into an array of froyo flavors

const response = answer.split(",");

//! Build an object to track which flavors you have counted so far

function countFlavors(flavors){};

//! Object to be updated through the array of flavors

const flavors = {};
    for (
        let i = 0;
        i < flavors.length;
        i++
    )
    flavors[i];
    return flavors;
    console.log(flavors);

// ! TO DO

// Student repo contains multiple commits with descriptive messages.
// The repo contains an HTML file and a connected JS file.
// The user is prompted for froyo flavors upon entering the website.
// The user's input string is split into an array of strings.
// A loop is used to iterate through the array of flavors.
// An object is used to keep count of how many orders there are of each flavor.
// The program correctly counts the number of each flavor in the user's input.
// The logic for counting the frequencies of elements in an array is organized into a function that returns an object.
// Variables and functions have meaningful names.
// The console output changes depending on the user's input.
