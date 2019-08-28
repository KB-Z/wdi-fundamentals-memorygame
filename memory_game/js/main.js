console.log("Up and running!");
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];
if (cardsInPlay.length === 2) {
	alert("You found a match!");
} else if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("Sorry, try again");
}
