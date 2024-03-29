/*
Baby Shark Lyrics
baby shark

Create a function, as short as possible, that returns this lyrics.
Your code should be less than 300 characters. Watch out for the three points at the end of the song.

Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark!
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark!
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark!
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark!
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark!
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt!
Run away,…
Good Luck!
*/

// My solution:
const babySharkLyrics = () =>
  [
    'Baby shark',
    'Mommy shark',
    'Daddy shark',
    'Grandma shark',
    'Grandpa shark',
    "Let's go hunt",
  ]
    .map((e) => `${e},${' doo'.repeat(6)}\n`.repeat(3) + `${e}!\n`)
    .join('') + 'Run away,…';

// Clever user solution:
babySharkLyrics = (_) =>
  [
    ...[`Baby`, `Mommy`, `Daddy`, `Grandma`, `Grandpa`].map(
      (v) => v + ` shark`
    ),
    `Let's go hunt`,
  ].map((v) => `${v},${` doo`.repeat(6)}\n`.repeat(3) + v + `!\n`).join`` +
  `Run away,…`;
