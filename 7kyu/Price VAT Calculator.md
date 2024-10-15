# [Price VAT Calculator](https://www.codewars.com/kata/5483930b98aa44a34d000e54)

## Description

Create a simple vat calculator class for retrieving the net value and the vat amount from a gross price.

Within the class create the two methods `getNet(grossPrice)` and `getVat(grossPrice)`.

What is passed to you: `vatRate` - number 0 - 100 (%) `grossPrice` - Gross price value

Rounding is achieved using :

    toFixed(2)

but the return value has to be the rounded `Number` not `String`.

Background:

`Vat = Net * vatRate`

`Net + Vat = grossPrice`

Note : you have to re-arrange those two definitions to come up with the equations needed.

Ex :

    var calc = new Calculator(20); // vat rate at 20%
    calc.getNet(100) === 83.33  //gross price of 100 => net will be 83.33
    calc.getVat(100) === 16.67  //gross price of 100 => var === 16.67```

**JavaScript**

```js
function Calculator(vat) {
  this.getNet = (gross) => +((100 * gross) / (100 + vat)).toFixed(2);
  this.getVat = (gross) => +((vat * gross) / (100 + vat)).toFixed(2);
}
```

### User Solution

**JavaScript**

```js
const Calculator = (r) => {
  const rate = r / 100 + 1;
  return {
    getNet: (p) => +(p / rate).toFixed(2),
    getVat: (p) => +(p - p / rate).toFixed(2),
  };
};
```
