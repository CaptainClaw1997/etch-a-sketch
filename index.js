function createCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.addEventListener("mouseover", (e) => {
        e.target.style.setProperty("background-color", "green");
    });
    // card.addEventListener("mouseout", (e) => {
    //     e.target.style.removeProperty("background-color");
    // });
    return card;
}

function createCardRow() {
    const cardRowDiv = document.createElement("div");
    cardRowDiv.classList.add("card-row");
    return cardRowDiv;
}

function loadCards(lengthOfSide=16) {
    const bodyDiv = document.querySelector("#body");
    let cardRow;

    for (let i = 0; i < lengthOfSide; i++) {
        cardRow = createCardRow(bodyDiv);
        for (let j = 0; j < lengthOfSide; j++) {
            cardRow.appendChild(createCard());
        }

        bodyDiv.appendChild(cardRow);
    }
}

function prepareResetButton() {
    const resetButton = document.querySelector("#reset-button");
    const cards = document.querySelectorAll(".card");
    const PROMPT_MESSAGE = "Enter number of cards required in each dimension (MAX 100)"; 
    resetButton.addEventListener("click", (e) => {
        cards.forEach((card) => {
            card.style.removeProperty("background-color");
        });
        let lengthOfSide = parseInt(prompt(PROMPT_MESSAGE));
        if (lengthOfSide > 100) {
            lengthOfSide = 100;
        }
        document.querySelectorAll(".card-row").forEach((cardRow) => cardRow.remove());
        loadCards(lengthOfSide);
    })
}

loadCards();
prepareResetButton();