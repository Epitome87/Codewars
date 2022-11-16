/*
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

// My solution:
const initializeNames = (name) => {
  const parts = name.split(' ');
  if (parts.length < 3) return name;
  return (
    parts[0] +
    ' ' +
    parts
      .slice(1, parts.length - 1)
      .map((n) => `${n[0].toUpperCase()}. `)
      .join('') +
    parts.slice(-1)
  );
};

// Clever user solution:
const initializeNames = (name) => name.replace(/ (\w)\w*(?= )/g, ' $1.');

// Another clever user solution:
function initializeNames(name) {
  return name.replace(/(?!^)\b\w+\b(?!$)/g, (w) => w[0] + '.');
}

// Another clever user solution:
const initializeNames = (name) => name.replace(/(?<=\s)(\w)\w+(?=\s)/g, `$1.`);

/* Takeaways:
1) Note how you can use a callback function as the second argument in .replace()!
*/
