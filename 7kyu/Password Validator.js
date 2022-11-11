/*
Your job is to create a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

There needs to be at least 1 uppercase letter.
There needs to be at least 1 lowercase letter.
There needs to be at least 1 number.
The password needs to be at least 8 characters long.
You are permitted to use any methods to validate the password.

Examples:
password("Abcd1234"); ===> true
password("Abcd123"); ===> false
password("abcd1234"); ===> false
password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"); ===> true
password("ABCD1234"); ===> false
password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> true;
password("!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> false;
Extra info
You will only be passed strings.
The string can contain any standard keyboard character.
Accepted strings can be any length, as long as they are 8 characters or more.
*/

// My eh solution:
const password = (str) => str.length >= 8 && /[a-z]/.test(str) && /[A-Z]/.test(str) && /[0-9]/.test(str);

// Clever user solution:
const password = (str) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(str);

// An interesting user solution:
const password = (str) => [/[A-Z]/, /[a-z]/, /[0-9]/, /.{8}/].every((regex) => regex.test(str));
