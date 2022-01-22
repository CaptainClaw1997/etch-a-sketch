function createCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    

    return card;
}

function createCardRow() {
    const cardRowDiv = document.createElement("div");
    cardRowDiv.classList.add("card-row");
    return cardRowDiv;
}

function loadCards() {
    const bodyDiv = document.querySelector("#body");
    let cardRow;

    for (let i = 0; i < 16; i++) {
        cardRow = createCardRow(bodyDiv);
        for (let j = 0; j < 16; j++) {
            cardRow.appendChild(createCard());
        }

        bodyDiv.appendChild(cardRow);
    }
}

loadCards();