"use strict";
// Creat an array of names, this should only accept strings
let nameArr = ["kieran", "dominic", "ted", "louis", "Hannah"];
// Print the index of the elements
$("#container").append(`Indexes of the array elements: <br>`);
for (let name in nameArr) {
    $("#container").append(`${name} <br>`);
}
$("#container").append(`<br>`);
// Print the values of the array
$("#container").append(`Content of the array elements: <br>`);
for (let name of nameArr) {
    $("#container").append(`${name} <br>`);
}
$("#container").append(`<br>`);
// Print both the index and values
$("#container").append(`Both the index and element of the array elements: <br>`);
for (let name in nameArr) {
    $("#container").append(`${name}) ${nameArr[name]} <br>`);
}
