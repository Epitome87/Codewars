/*
 */

// My solution:
const isReallyNaN = (val) => val !== val;

// User solution:
const isReallyNaN = ($) => typeof $ === 'number' && isNaN($);

// User solution:
const isReallyNaN = (val) => Number.isNaN(val);

// Alternate form of the above:
const isReallyNaN = Number.isNaN;

/* Takeways: 
1) Remember, NaN is the ONLY value where comparing it to the INEQUALITY of itself always returns true!
2) Number.isNaN behaves correctly for undefined values
3. Implicit arguments
*/
