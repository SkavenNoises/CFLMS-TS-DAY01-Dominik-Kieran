"use strict";
for (let i = 1; i <= 10; i++) {
    // Create table structure
    $("#container").append(`
        ${i}x Table:

        <table id="${i}table">
            <tr>
                <th><strong>X</strong></th>
                <th><strong>Y</strong></th>
                <th><strong>Result</strong></th>
            </tr>
        </table>
    `);
    // Filling the table with the info
    for (let j = 1; j <= 10; j++) {
        $(`#${i}table`).append(`
            <tr>
                <th>${j}</th>
                <th>${i}</th>
                <th>${i * j}</th>
            </tr>
       `);
    }
    $("#container").append("<br>");
}
