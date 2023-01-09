/*
The Twenty-One Card Trick, also known as the 11th card trick or three column trick, is a simple self-working card trick that uses basic mathematics to reveal the user's selected card.
The game uses a selection of 21 cards out of a standard deck. These are shuffled and the player selects one at random. The cards are then dealt out face up in three columns of 7 cards each. The player points to the column containing their card. The cards are picked up and the process is repeated three times, at which point the magician reveals the selected card.

Source: Wikipedia

Your task is to implement an algorithm that is able to execute the Twenty-One Card Trick. To simplify things, the cards will be changed to the set of integers between 1 and 21(inclusive). The function will be passed as argument a member of the audience that has selected a certain card and has a method get_input that receives a list of 3 lists as arguments and returns the index of the column containing the selected card. Example:

const audience = new Audience(13);

> audience.getInput([[1,2,3,4,5,6,7], [8,9,10,11,12,13,14], [15,16,17,18,19,20,21]]);
1 // Since 13 is at the 2nd column
After 3 times it is asked, however, the audience member no longer will give an answer. Use these three functions invokations to discover which card the audience member has.
*/

// My solution:
const guessTheCard = (audience) => {
  let cardList = [...Array(21)].map((_, idx) => idx + 1);

  for (let i = 0; i < 3; i++) {
    const columns = [[], [], []];
    cardList.forEach((card, idx) => columns[idx % 3].push(card));
    let columnWithCard = audience.getInput(columns);
    const [col1, col2, col3] = columns;
    columnWithCard === 0
      ? (cardList = [...col2, ...col1, ...col3])
      : columnWithCard === 1
      ? (cardList = [...col1, ...col2, ...col3])
      : (cardList = [...col1, ...col3, ...col2]);
  }

  return cardList[10];
};

// Good user solution:
function guessTheCard(audience) {
  let columns = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
  ];

  const spread = (cards) => {
    let res = columns.map((_) => []);
    for (let i = 0; i < cards.length; i++) res[i % columns.length].push(cards[i]);
    return res;
  };

  const next = (_) => {
    let copy = [...columns];

    // remove the selected column
    let selected = copy.splice(audience.getInput(columns), 1)[0];

    // create a new set of cards with the selecte
    let cards = [].concat(copy[0], selected, copy[1]);

    // spread the cards back into columns
    return spread(cards);
  };

  for (let i = 0; i < 3; i++) columns = next();

  return columns[1][3];
}
