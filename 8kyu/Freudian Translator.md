# [Freudian Translator](https://www.codewars.com/kata/5713bc89c82eff33c60009f7)

## Description

You probably know that number 42 is "the answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different...

In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was related to, and explained by sex.

In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.

## My Solution

**JavaScript**

```js
const toFreud = (string = '') =>
  string === ''
    ? ''
    : string
        .split(' ')
        .map((word) => 'sex')
        .join(' ');
```

**Python**

```py
def to_freud(sentence):
    return ' '.join(['sex' for word in sentence.split(' ')]) if sentence else ''
```

```py
def to_freud(sentence):
    return ' '.join(map(lambda x: "sex", sentence.split(' '))) if sentence else ''
```

### User Solution

**JavaScript**

```js
var toFreud = (s) => s.replace(/[^ ]+/g, 'sex');
```

**Python**

```py
def to_freud(sentence):
    return ' '.join('sex' for _ in sentence.split())
```

## Takeaways

1. In Python, rather than using `split(' ')`, use `split()`. The default value is to split on whitespace, which for some reason produces an empty array for an empty string (which is desirable), whereas `split(' ')` produces `['']`
