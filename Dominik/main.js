/* Basic ex 1

Make a multiplication table using TypeScript loops from an array with
 number values 1 to 10 and the result should look like this:

 */
for (var i = 0; i < 11; i++) {
    document.write([i] + "x1 = " + [i] + "<br>" + "<hr>" + [i] + "x 2 " + [i] * 2 + "<br>" + [i] + "x 3 " + [i] * 3 + "<br>" + [i] + "x 4 " + [i] * 4 + "<br>" + [i] + "x 5 " + [i] * 5 + "<br>" + [i] + "x 6 " + [i] * 6 + "<br>" + [i] + "x 7 " + [i] * 7 + "<br>" + [i] + "x 8 " + [i] * 8 + "<br>" + [i] + "x 9 " + [i] * 9 + "<br>" + [i] + "x 10 " + [i] * 10 + "<br>");
}
var message = 'Hello World';
console.log(message);
/*
1. Print your full name in the browser.
2. Print your first name 10 times in the browser using a forEach loop.
3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.

 */
var zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
zahlen.forEach(function (value) {
    document.write("Dominik <br>");
});
setTimeout(nachname, 3000);
function nachname() {
    var a = $("body");
    a.append("DUDA");
    b = "DUDA";
    for (var i = 0; i < 10; i++) {
        console.log(b);
    }
}
/*
Basic ex 3

Create an array of names, this array should only accept strings.

1. Print only the index of the elements.(ForIn)
2. Print only the values. (ForOf)
3. Print both index and values(ForIn)
 */
var names = ["Alf", "Kieran", "Peter", "Speter", "Herta", "Monika", "Mulan"];
for (var index in names) {
    console.log(index);
}
;
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var value = names_1[_i];
    console.log(value);
}
for (var index in names) {
    console.log(index);
    console.log(names[index]);
}
;
//  let name: string[] = ["name", "name"] <<<-------- EXAMPLE Doing it a different way
//# sourceMappingURL=main.js.map