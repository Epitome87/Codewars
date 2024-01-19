# [USD to CNY](https://www.codewars.com/kata/5977618080ef220766000022)

## Description

Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

Examples (Input -> Output)

```
15  -> '101.25 Chinese Yuan'
465 -> '3138.75 Chinese Yuan'
```

The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

## My Solution

**JavaScript**

```js
const usdcny = (usd) => `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
```

**Python**

```py
def usdcny(usd):
    return "{:.2f}".format(6.75 * usd) + " Chinese Yuan"
```

### User Solution

**Python**

```py
def usdcny(usd):
    return f"{(usd * 6.75):.2f} Chinese Yuan"
```

```py
def usdcny(bucks):
    return '%.2f Chinese Yuan' %(bucks * 6.75)
```
