"use strict";
// Starters Menu
let starterMenu = ["Garlic Bread", "Hummus", "Mozzarella and Tomatoes", "Olives"];
// Main Menu
let mainMenu = ["Lasagne", "Knödel", "Bean Soup", "Pizza"];
// Desert Menu
let dessertMenu = ["Tirramasu", "Trifel", "Cake", "Merrange"];
// Drinks Menu
let drinksMenu = ["Tea", "Coffee", "Wine", "Water"];
// Pills Array
let pillArr = ["starter", "main", "dessert", "drinks"];
// Listing the arrays in their respective pill columns
for (let menu of pillArr) {
    switch (menu) {
        case "starter":
            // Building the unordered list
            $(`#v-pills-${menu}`).append(`
                <ul class="list-unstyled" id="${menu}list"></ul>
            `);
            // Appends a new media object to the pill column
            function setFoodMediaObj(foodItem, imgPath) {
                $(`#${menu}list`).append(`
                <li class="media mb-3">
                    <img src="img/${imgPath}" class="mr-3 h-25 w-25 img-fluid" alt="">

                    <div class="media-body">
                        <h5 class="mt-0 mb-1">${foodItem}</h5>
                    
                    </div>

                    <div class="${foodItem}StarRatings">
                        <span class="fa fa-star" id="${foodItem}Star1"></span>
                        <span class="fa fa-star" id="${foodItem}Star2"></span>
                        <span class="fa fa-star" id="${foodItem}Star3"></span>
                        <span class="fa fa-star" id="${foodItem}Star4"></span>
                        <span class="fa fa-star" id="${foodItem}Star5"></span>
                    </div>
                </li>
                `);
            }
            // Destructuring the list (Stupid way of doing it, but alas. This is what I am told to do)
            const [w, x, y, z] = starterMenu;
            setFoodMediaObj(w, "garlicbread.jpg");
            setFoodMediaObj(x, "hummus.jpg");
            setFoodMediaObj(y, "tom-moz.jpg");
            setFoodMediaObj(z, "olives.jpg");
            break;
        case "main":
            break;
        case "dessert":
            break;
        case "drinks":
            break;
    }
}
// Waiting for the page to load before attaching onclick listeners to the star ratings
window.onload = () => {
    function setStarClick(foodItem) {
        for (let i = 1; i <= 5; i++) {
            $(`#${foodItem}Star${i}`).on("click", () => {
                $(`#${foodItem}Star${i}`).addClass("checked");
                alert("ive been pressed");
            });
        }
    }
    const [w, x, y, z] = starterMenu;
    setStarClick(w);
    setStarClick(x);
    setStarClick(y);
    setStarClick(z);
};
