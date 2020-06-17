// Print my name in browser
$("#container").append(`Kieran Mortimer`);
$("#container").append(`<br>`);

// Print your first name x10 in the browser using a forEach loop
const myName: string[] = [];

for (let i = 0; i < 10; i++) {
	myName.push("kieran");
}

myName.forEach((value) => {
	$("#container").append(value);
	$("#container").append(`<br>`);
});

// 3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.
setTimeout(() => {
	const myLastName: string[] = [];

	for (let i = 0; i < 10; i++) {
		myLastName.push("mortimer");
	}

	myLastName.forEach((value) => {
		$("#container").append(value);
		$("#container").append(`<br>`);
	});
}, 5000);
