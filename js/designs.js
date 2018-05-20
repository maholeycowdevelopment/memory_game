// Collection of svn icons to be used in memory matcher
// pattern to be used <i class="fa fa-gamepad"></i>
let fort = "fa fa-fort-awesome";
let trophy = "fa fa-trophy";
let bell = "fa fa-bell";
let flask = "fa fa-flask";
let cloud = "fa fa-cloud";
let coffee = "fa fa-coffee";
let umbrella = "fa fa-umbrella";
let gamepad = "fa fa-gamepad";

let iconMap = new Map();
iconMap.set(fort, 2);
iconMap.set(trophy, 2);
iconMap.set(bell, 2);
iconMap.set(flask, 2);
iconMap.set(cloud, 2);
iconMap.set(coffee, 2);
iconMap.set(umbrella, 2);
iconMap.set(gamepad, 2);

// Randomly place icons in cards
let cards = document.getElementsByClassName("card");

console.log(cards);
console.log(iconMap);
