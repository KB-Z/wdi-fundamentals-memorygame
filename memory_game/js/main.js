console.log("Up and running!");
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
	} else {
  console.log("Sorry, try again.");
	};
};
function flipCard (cardId) {
	checkForMatch;
	var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]);
};
