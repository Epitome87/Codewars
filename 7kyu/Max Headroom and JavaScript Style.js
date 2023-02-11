/*
Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

Original code:
function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  return
  {
    name: 'Max Headroom'
  }
}
*/

// My solution:
function getMax1() {
  var max = {
    name: 'Max Headroom',
  };
  return max;
}

function getMax2() {
  return {
    name: 'Max Headroom',
  };
}

// My other solution (how I would write the code from scratch, rather than how I would write it as a refactor of the sloppy original code):
const getMax1 = () => ({ name: 'Max Headroom' });
const getMax2 = () => ({ name: 'Max Headroom' });

/* Takeaways:
1) Somehow I have never personally encountered this little quirk of JavaScript! The function getMax2 was returning undefined, as the curly braces denoting the object we WANTED to return was on the next line. Thus it was assumed we wanted to return nothing (undefined), not the object itself.
*/
