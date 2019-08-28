console.log("Up and running!");
var cards = [
{
	rank: "Queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "Queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"	
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-diamonds.png"
}
];
const cardsInPlay = [];
function checkForMatch () {
	if (cardsInPlay.length === 2) {
	
	} else if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!")
	} else {
		alert("Sorry, try again.")
	}
};
function flipCard (cardId) {
	checkForMatch;
	var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards.cardImage);
	console.log(cards.suit);
};