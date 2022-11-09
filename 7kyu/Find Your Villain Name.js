/*
*/

// My solution:
function getVillainName(birthday) {
  const m = [
    'Evil',
    'Vile',
    'Cruel',
    'Trashy',
    'Despicable',
    'Embarrassing',
    'Disreputable',
    'Atrocious',
    'Twirling',
    'Orange',
    'Terrifying',
    'Awkward',
  ];
  const d = [
    'Mustache',
    'Pickle',
    'Hood Ornament',
    'Raisin',
    'Recycling Bin',
    'Potato',
    'Tomato',
    'House Cat',
    'Teaspoon',
    'Laundry Basket',
  ];
  return `The ${m[birthday.getMonth()]} ${d[+birthday.getDate().toString().slice(-1)]}`;
}

// My solution:
function getVillainName(birthday) {
  firstNames = [
    'The Evil',
    'The Vile',
    'The Cruel',
    'The Trashy',
    'The Despicable',
    'The Embarrassing',
    'The Disreputable',
    'The Atrocious',
    'The Twirling',
    'The Orange',
    'The Terrifying',
    'The Awkward',
  ];
  lastNames = [
    'Mustache',
    'Pickle',
    'Hood Ornament',
    'Raisin',
    'Recycling Bin',
    'Potato',
    'Tomato',
    'House Cat',
    'Teaspoon',
    'Laundry Basket',
  ];
  return firstNames[birthday.getMonth()] + ' ' + lastNames[birthday.getDate() % 10];
}