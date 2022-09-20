/*
 */

// My solution:
const uefaEuro2016 = (teams, scores) =>
  `At match ${teams[0]} - ${teams[1]}, ${
    scores[0] > scores[1] ? teams[0] + ' won!' : scores[1] > scores[0] ? teams[1] + ' won!' : 'teams played draw.'
  }`;

// Clever user solution:
const uefaEuro2016 = (c, s) =>
  `At match ${c[0]} - ${c[1]}, ${s[0] == s[1] ? 'commands played draw.' : (s[0] > s[1] ? c[0] : c[1]) + ' won!'}`;
