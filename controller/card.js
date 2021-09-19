exports.shuffle = (req, res) => {
  const num = req.params.num;
  const players = {}
  starterDeck = createDeck()
  shuffledDeck = shuffleDeck(starterDeck)
   
  if (num < 1) {
    return res.send('Value must be bigger than 0')
  }
    for (let i = 0; i < parseInt(num); i++) {
      players["player_" + i] = [];
    }

    while (shuffledDeck[0] !== undefined) {
      for (let i = 0; i < parseInt(num); i++) {
        if (shuffledDeck[0] !== undefined) {
          let temp = shuffledDeck.pop();
          players["player_" + i].push(temp);
        }
      }
    }
  return res.send(players);
};


//return: starter deck in array
 const createDeck = () => {
  var suits = ["S", "H", "D", "C"];
  var values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "X",
    "J",
    "Q",
    "K",
    "A",
  ];
  var deck = [];

  for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (var valCounter = 0; valCounter < 13; valCounter++) {
      deck.push(suits[suitCounter] + values[valCounter]);
    }
  }
  return deck;
};

//param: deck(a starter deck)
//return: shuffled desc in array
 const shuffleDeck = (deck) => {
  for (var i = 0; i < 52; i++) {
    var tempCard = deck[i];
    var randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }
  return deck;
};