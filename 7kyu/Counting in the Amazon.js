/*
The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

1 = anane
2 = adak
3 = adak anane
4 = adak adak
5 = adak adak anane
6 = adak adak adak
7 = adak adak adak anane
8 = adak adak adak adak

Take a given number and return the Arara's equivalent.

e.g.

countArara(3) 'adak anane'

countArara(8) 'adak adak adak adak'
countArara 3 // -> "adak anane"

countArara 8 // -> "adak adak adak adak"
https://en.wikipedia.org/wiki/Arara_people
*/

// My solution:
const countArara = (n) => 'adak '.repeat(n / 2) + (n % 2 ? ' anane' : '').trim();

// Top solution:
function countArara(n) {
  switch (n) {
    case 0:
      return '';
    case 1:
      return 'anane';
    case 2:
      return 'adak';
    default:
      return 'adak ' + countArara(n - 2);
  }
}
