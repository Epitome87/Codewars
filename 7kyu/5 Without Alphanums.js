/*
Write a function/proc/lambda called _ that always returns 5.

Sounds easy right? Just bear in mind that you can only use the following characters:

~!@#$%^&*()-_+=[]\{}|:;"'<,>.?/`
Kata inspired by 5 without numbers !!.

Good luck :)
*/

// My solution:
_ = () => ('' == '') + ('' == '') + ('' == '') + ('' == '') + ('' == '');

// Top user solution:
_ = (_) => -~-~-~-~-~[];

// Another good user solution:
_ = (__) => !'' + !'' + !'' + !'' + !'';

/* Takeaways:
1) Some odd results when not using parenthesis in my solution, and I don't understand why.
2) In the user's solution, it's odd that !'' + !'' equals 2, while !'' + '' equals "true" -- why?
*/
