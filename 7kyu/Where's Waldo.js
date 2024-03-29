/*
Puzzle
If you don't know who Waldo is, he's a nice guy who likes to be in crowded places. But he's also a bit odd as he always likes to hide in plain sight. Can you spot Waldo in the crowd?

Task
Given crowd, an array of strings of equal length, representing a crowded place, return an array with two integers representing the coordinates [y, x] where Waldo can be found ([0, 0] is top-left, y being the row and x being the column ).

Examples
We've spotted Waldo a couple of times in the past. Below is what we found out. Note that he's been in much more crowded places lately.

#1 Waldo at the beach
"             "          Air
"         w   "           Air with a bird
"   w         "           Air with a bird
"~~~~~~~~~~~~~"           Sea
".~..~~.~~~..~"           Waves on beach
"...P......P.."           Beach with some people
"......P..P..."           Beach with some people
"..PW........."           Beach with Waldo and presumably a friend next to him

Unredacted report: Waldo can be found at [7, 3], wearing his usual outfit

#2 Waldo visiting the Great Pyramid
"                              "          Air
"                              "           Air
"            _                 "           Top of pyramid
"          _____               "           Layer of pyramid
"        _________             "           Layer of pyramid
"  B  _______________   G   GG "           Ground layer of pyramid with several people, including Waldo

Unredacted report: Waldo can be found at [5, 2], wearing special clothes protecting him from the sun

Hints
- he isn't always wearing his usual clothes

- why is there more than one bird in the first example ...
*/

// My solution:
const findWaldo = (crowd) => {
  const crowdStr = crowd.join('');
  const choices = [...new Set([...crowdStr])];
  const waldo = choices.filter((c) => crowdStr.split(c).length === 2)[0];
  const y = crowd.findIndex((row) => row.includes(waldo));
  const x = crowd[y].indexOf(waldo);
  return [y, x];
};

// Top user solution:
function findWaldo(crowd) {
  let count = new Map();
  for (let y = 0; y < crowd.length; y++) {
    for (let x = 0; x < crowd[y].length; x++) {
      count.set(crowd[y][x], (count.get(crowd[y][x]) || 0) + 1);
    }
  }
  for (let y = 0; y < crowd.length; y++) {
    for (let x = 0; x < crowd[y].length; x++) {
      if (count.get(crowd[y][x]) == 1) {
        return [y, x];
      }
    }
  }
}
