/*
This is the simple version of Shortest Code series. If you need a tougher challenge, please try that challenge.

Task:
An important person was murdered, he said the name of the murderer before he died, but because the sound was so low it was difficult to identify.

Given two parameters:

said, a string, what the person said before death;

said starts with the first letter of the name, each "~" represents an uncertain letter, the length of the said does not mean the length of the name, because he might have died before he could say the full name of the murderer.

suspects, a string array, name list of all suspects.

Please refer to said, find the murderer from the suspects.

Result will be a string. If not found, should return "", if more than one suspect is found, return the name of all, separated by ','.

Example:
 
Example1:
 
 said='b~~~~~~~~~~~~~~l'
 it means the murderer's name first char is 'b',last char is 'l'
 (Because it is spoken, so please ignore the case)
 
 suspects=['Bernard Deltheil','Peter Gone','Peter Reeves','Roland Scorsini']
 Let's us search in suspects, Wow~~, 'Bernard Deltheil' maybe is the murderer.
 
 So, return a string: 'Bernard Deltheil'
 
 Example2:
 said='p~t~r'
 it means the murderer's name first char is 'p',3rd char is 't',5th char is 'r'
 
 suspects=['Bernard Deltheil','R Steell','Peter Gone','Peter Reeves','Roland Scorsini']
 Wow~, 'Peter Gone' and 'Peter Reeves' maybe is the murderer.
 
 So, return a string: 'Peter Gone,Peter Reeves'
 
 Example3:
 said='a~b~c~~d'
 
 suspects=['Bernard Deltheil','R Steell','Peter Gone','Peter Reeves','Roland Scorsini']
 It seems the murderer's name is not appear in the suspects.
 
 So, return a empty string: ''
*/

// My solution:
const sc = (said, suspects) => {
  return suspects
    .filter((suspect) => {
      for (let i = 0; i < said.length; i++) {
        if (said[i] === '~') continue;
        if ((suspect[i] || '').toLowerCase() !== said[i].toLowerCase())
          return false;
      }
      return true;
    })
    .join(',');
};

// Top user solution:
const sc = (said, suspects) => {
  const exp = '^' + said.replace(/(~+)/g, (m) => `.{${m.length}}`);
  const reg = new RegExp(exp, 'i');

  return suspects.filter((s) => reg.test(s)).join(',');
};

// Another clever user solution:
function sc(said, suspects) {
  return suspects
    .filter((suspect) =>
      RegExp('^' + said.replace(/~/gi, '.'), 'i').test(suspect)
    )
    .join();
}
