# [RegEx Like a Boss #2: Alphabetical Order String](https://www.codewars.com/kata/5c1a334516537ccd450000d8)

## Description

Create a Regular Expression that matches a string with lowercase characters in alphabetical order, including any number of spaces. There can be NO whitespace between groups of the same letter. Leading and trailing whitespace is also allowed. An empty string should match.

Your regex should match:

```
""
"abc"
"aaabc "
"a bc"
"  abcdefghijk"
"abdfkmnpstvxz"
"cxy"
"cdklstxy"
"bfrtw"
"a b c  "
" acg jko pr"
"a z "
"v  z"
"a  b cdefg kl"
"uv xyz"
" ab de gh"
"x yz"
"abcdefghijklmnopqrstuvwxyz"
"a bcdefghijklmnopqrstuvwxyz"
```

It should NOT match:

```
"abcb"
"a ab"
"abccc cd"
"a bcdjkrza"
"qwerty"
"zyxcba"
"abcdfe"
"ab c dfe"
"a  z  a"
"asdfg"
"asd  f g"
"poqwoieruytjhfg"
"\tab"
"abc\n"
```

## My Solution

**Python**

```py
REGEX = r'(?!\n)^ *a* *b* *c* *d* *e* *f* *g* *h* *i* *j* *k* *l* *m* *n* *o* *p* *q* *r* *s* *t* *u* *v* *w*x* *y* *z* *(?!\n)$'
```

### User Solution

**Python**

```py
REGEX = fr" *{'* *'.join('abcdefghijklmnopqrstuvwxyz')}* *\Z"
```
