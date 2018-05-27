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

let numberOfCardsSelected = 0;

// Randomly place icons in cards
let cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  cards[i].innerHTML = '<i class="' + populateCard() + '"></i>';
}

//function for placing icons into cards
function populateCard() {
  let picker = Math.floor(Math.random() * 8) + 1;
  picker--;
  while (iconMap[picker] == 0) {
    picker++;
    if (picker == 8) {
      picker = 0;
    }
  }

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

//Timer logic & Star rating logic
let timer = document.getElementById("timer");
let start = document.getElementById("start");
let seconds = 0,
  minutes = 0,
  hours = 0,
  t;
let stars = document.getElementsByClassName("fa-star");

function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  if (minutes === 1) {
    stars[2].style.visibility = "hidden";
  } else if (minutes === 2) {
    stars[1].style.visibility = "hidden";
  } else if (minutes > 2) {
    stars[0].style.visibility = "hidden";
  }

  timer.textContent =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);

  timerFunc();
}

function timerFunc() {
  t = setTimeout(add, 1000);
}

timerFunc();

// Logic for number of moves user makes
let moveCount = document.getElementById("moves");

let cardDeck = document.getElementsByClassName("deck")[0];

cardDeck.addEventListener("click", function() {
  let x = moveCount.innerText;
  x++;
  moveCount.innerText = x;
});

// Logic for refresh button
let refreshButton = document.getElementsByClassName("refresh")[0];

refreshButton.addEventListener("click", function() {
  //TODO: Reset stars

  timer.textContent = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;

  moveCount.innerText = "0";

  iconMap = new Array(2, 2, 2, 2, 2, 2, 2, 2);
  iconCount = 16;

  for (let i = 0; i < cards.length; i++) {
    cards[i].removeChild(cards[i].firstChild);
    cards[i].innerHTML = '<i class="' + populateCard() + '"></i>';
  }

  hideCards();
});

/* Logic manage game state */
let cardHasBeenSelected = false;
let cardOneIndex;
let cardTwoIndex;
let successfulMoves = 0;

/* Make cards face down at start of game and add event listener*/
let deckOfCardsList = document.getElementsByClassName("card");
function hideCards() {
  for (let i = 0; i < deckOfCardsList.length; i++) {
    let cardIcon = deckOfCardsList[i].querySelector(".fa");
    cardIcon.style.visibility = "hidden";
    deckOfCardsList[i].style.backgroundColor = "#855E42";
  }
}
hideCards();

// Event listener logic for which card was clicked

document
  .getElementsByClassName("deck")[0]
  .addEventListener("click", function() {
    let clickedItem = event.target;
    if (
      clickedItem.className === "card" &&
      clickedItem.style.visibility !== "visible" &&
      numberOfCardsSelected < 2
    ) {
      numberOfCardsSelected++;
      flipCardZ(clickedItem);
      clickedItem.style.backgroundColor = "wheat";
      let clickedItemIcon = clickedItem.querySelector(".fa");
      clickedItemIcon.style.visibility = "visible";
      if (numberOfCardsSelected < 2) {
        cardOneIndex = indexOfHTMLCollection(deckOfCardsList, clickedItem);
      } else {
        cardTwoIndex = indexOfHTMLCollection(deckOfCardsList, clickedItem);
        let cardEquality = areEqual();
        setTimeout(leaveFlipped, 1000, cardEquality);
        numberOfCardsSelected = 0;
      }
    }
  });

// Function that checks if selected cards are equal
function areEqual() {
  if (
    deckOfCardsList[cardOneIndex].innerHTML ===
    deckOfCardsList[cardTwoIndex].innerHTML
  ) {
    return true;
  } else {
    return false;
  }
}

// Function that determines whether or not to leave cards flipped
function leaveFlipped(equality) {
  if (!equality) {
    deckOfCardsList[cardOneIndex].querySelector(".fa").style.visibility =
      "hidden";

    deckOfCardsList[cardOneIndex].style.backgroundColor = "#855E42";

    deckOfCardsList[cardTwoIndex].querySelector(".fa").style.visibility =
      "hidden";

    deckOfCardsList[cardTwoIndex].style.backgroundColor = "#855E42";

    flipCardZ(deckOfCardsList[cardOneIndex]);
    flipCardZ(deckOfCardsList[cardTwoIndex]);
  } else {
    successfulMatch(deckOfCardsList[cardOneIndex]);
    successfulMatch(deckOfCardsList[cardTwoIndex]);
    successfulMoves++;
    hasWon();
  }
}

// Function that determines if end of game has been reached.
function hasWon() {
  if (successfulMoves === 8) {
    document.getElementsByClassName("overlay")[0].style.display = "flex";
  }
}

// Custom function to get index of HTMLCollection
function indexOfHTMLCollection(HtmlCollection, searchData) {
  let index = 0;
  while (HtmlCollection[index] !== searchData) {
    index++;
  }
  return index;
}

// Styling function when card is flipped over
function flipCardZ(targetCard) {
  targetCard.classList.toggle("rotate-z");
}

// Styling function for successful matches
function successfulMatch(targetCard) {
  // some rewarding animation
  targetCard.classList.toggle("successful-match");
}

function playAgain() {
  location.reload();
}
