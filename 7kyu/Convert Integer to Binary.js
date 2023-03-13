/*
Convert integers to binary as simple as that. You would be given an integer as a argument and you have to return its binary form. To get an idea about how to convert a decimal number into a binary number, visit here.

Notes: negative numbers should be handled as two's complement; assume all numbers are integers stored using 4 bytes (or 32 bits) in any language.

Your output should ignore leading 0s.

So, for example:

toBinary(3)=="11"
toBinary(-3)=="11111111111111111111111111111101"
Be Ready for Large Numbers. Happy Coding ^_^
*/

// My solution:
const toBinary = (n) => (n >>> 0).toString(2);

// ALternative user approach:
function toBinary(n) {
  if (n < 0) {
    n += Math.pow(2, 32);
  }
  return n.toString(2);
}

/* Takeaways:
1) Remembering number >>> 0 may be useful: A zero fill right shift converts its operands to signed 32-bit integers. The result of that operation is always an unsigned 32-bit integer. The operands of all bitwise operators (besides >>>) are converted to signed 32-bit integers in two's complement format.
2) From a Stackoverflow post on negative numbers to binary in JavaScript:
Just to summarize a few points here, if the other answers are a little confusing:

what we want to obtain is the string representation of a negative number in binary representation; this means the string should show a signed binary number (using 2's complement)
the expression (-3 >>> 0).toString(2), let's call it A, does the job; but we want to know why and how it works
had we used var num = -3; num.toString(-3) we would have gotten -11, which is simply the unsigned binary representation of the number 3 with a negative sign in front, which is not what we want
expression A works like this:
1) (-3 >>> 0)

The >>> operation takes the left operand (-3), which is a signed integer, and simply shifts the bits 0 positions to the left (so the bits are unchanged), and the unsigned number corresponding to these unchanged bits.

The bit sequence of the signed number -3 is the same bit sequence as the unsigned number 4294967293, which is what node gives us if we simply type -3 >>> 0 into the REPL.

2) (-3 >>> 0).toString

Now, if we call toString on this unsigned number, we will just get the string representation of the bits of the number, which is the same sequence of bits as -3.

What we effectively did was say "hey toString, you have normal behavior when I tell you to print out the bits of an unsigned integer, so since I want to print out a signed integer, I'll just convert it to an unsigned integer, and you print the bits out for me."
*/
