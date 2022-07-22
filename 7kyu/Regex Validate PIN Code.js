/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

// My solution:
const validatePIN = (pin) => {
  if (pin.length !== 4 && pin.length !== 6) return false;

  return pin
    .split("")
    .every((digit) =>
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(digit)
    );
};

// Top user solution, using Regex:
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
