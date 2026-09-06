const cards = [
    "fromboise.jpg",
    "fruits.jpg",
    "kiwi.jpg",
    "Raisin.jpg",
    "sourise.jpg",
    "strawberry.jpg"
];

const gameCards = [...cards, ...cards];

function shuffleCards() { gameCards.sort(() => Math.random() - 0.5); }

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

let coups = 0;

let pairesTrouves = 0;

function createCards() {

    gameCards.forEach((image) => {

        const card = document.createElement("div");

        card.classList.add("card");

        const img = document.createElement("img");

        img.src = `assets/images/${image}`;

        img.alt = "Image de carte";

        card.dataset.image = image;

        card.addEventListener("click", CardClick);

        card.appendChild(img);

        gameBoard.appendChild(card);
    });
}

createCards();

function CardClick(event) {

    const card = event.currentTarget;

    if (lockBoard) {
        return;
    }

    if (card === firstCard) {
        return;
    }

    card.classList.add("flipped");

    if (firstCard === null) {

        firstCard = card;

        return;
    }

    secondCard = card;

    coups++;

    movesElement.textContent = coups;

    lockBoard = true;

    checkmatch();

    // console.log(card);
}

function checkmatch() {

    const isMatch = firstCard.dataset.image === secondCard.dataset.image;

    if (isMatch) {

        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        // console.log("Match");

        pairesTrouves++;

        pairsElement.textContent = pairesTrouves;

        resetCards();
        checkVictory();
    }
    else {
        // console.log("Pas match");

        setTimeout(() => {

            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");


            resetCards();

        }, 1000);

    }
}

function resetCards() {

    firstCard = null;
    secondCard = null;

    lockBoard = false;
}

function checkVictory() {

    if (pairesTrouves === cards.length) {

        messageElement.textContent =
            " Félicitations , Vous avez trouvé toutes les paires ";
    }
}

