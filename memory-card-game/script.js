const cards = [
    "fromboise.jpg",
    "fruits.jpg",
    "kiwi.jpg",
    "Raisin.jpg",
    "sourise.jpg",
    "strawberry.jpg"
];

const gameCards = [...cards, ...cards];

gameCards.sort(() => Math.random() - 0.5);

// console.log(gameCards);

gameCards.sort(() => Math.random() - 0.5);

// console.log(gameCards);

// dom

const gameBoard = document.querySelector("#game-board");

const movesElement = document.querySelector("#moves");

const pairsElement = document.querySelector("#pairs");

const messageElement = document.querySelector("#message");

const restartButton = document.querySelector("#restart");



let firstCard = null;
let secondCard = null;

let lockBoard = false;

let moves = 0;

let matchedPairs = 0;

function createCards() {

    gameCards.forEach((image) => {

        const card = document.createElement("div");

        card.classList.add("card");

        const img = document.createElement("img");

        img.src = `assets/images/${image}`;

        img.alt = "Image de carte";

        card.dataset.image = image;

        card.addEventListener("click", handleCardClick);

        card.appendChild(img);

        gameBoard.appendChild(card);
    });
}

 createCards();

function handleCardClick(event) {

    const card = event.currentTarget;

    card.classList.add("flipped");

    // console.log(card);
}
