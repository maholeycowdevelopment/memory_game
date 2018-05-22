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

let iconMap = new Array(2, 2, 2, 2, 2, 2, 2, 2);
let iconCount = 16;

// Randomly place icons in cards
let cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  cards[i].innerHTML = '<i class="' + populateCard() + '"></i>';
}

//function for placing icons into cards
function populateCard() {
  let picker = Math.floor(Math.random() * 8) + 1;
  picker--;
  console.log(picker);
  while (iconMap[picker] == 0) {
    picker++;
    if (picker == 8) {
      picker = 0;
    }
  }
  console.log(picker);

  iconMap[picker] -= 1;
  iconCount--;

  return iconSource(picker);
}

//function for returning icon string, tightly coupled to populateCard()
function iconSource(index) {
  switch (index) {
    case 0:
      return fort;
      break;
    case 1:
      return trophy;
      break;
    case 2:
      return bell;
      break;
    case 3:
      return flask;
      break;
    case 4:
      return cloud;
      break;
    case 5:
      return coffee;
      break;
    case 6:
      return umbrella;
      break;
    case 7:
      return gamepad;
      break;
  }
}
