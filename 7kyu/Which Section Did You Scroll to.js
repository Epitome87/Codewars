/*
Your website is divided vertically in sections, and each can be of different size (height).
You need to establish the section index (starting at 0) you are at, given the scrollY and sizes of all sections.
Sections start with 0, so if first section is 200 high, it takes 0-199 "pixels" and second starts at 200.

Example:
With scrollY = 300 and sizes = [300,200,400,600,100]

the result will be 1 as it's the second section.

With scrollY = 1600 and size = [300,200,400,600,100]

the result will be -1 as it's past last section.

Given the scrollY integer (always non-negative) and an array of non-negative integers (with at least one element), calculate the index (starting at 0) or -1 if scrollY falls beyond last section (indication of an error).
*/

// My eh solution:
const getSectionIdFromScroll = (scrollY, sizes) => {
  // Section 1: 0 to size[0]
  // Section 2: size of all previous to size all previous + sizee[1]
  let sumAllPrevious = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (scrollY >= sumAllPrevious && scrollY < sumAllPrevious + sizes[i]) return i;
    sumAllPrevious += sizes[i];
  }

  return -1;
};

// Top user solution:
function getSectionIdFromScroll(y, s) {
  var t = 0;
  return s.findIndex((e) => (t += e) > y);
}

// Good user solution:
function getSectionIdFromScroll(scrollY, sizes) {
  let size = -1;
  const arr = sizes.map((el) => (size += el));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= scrollY) return i;
  }
  return -1;
}

// Good user solution:
const getSectionIdFromScroll = (scrollY, sizes, sum = 0) => sizes.findIndex((el) => (sum += el) > scrollY);

// Good user solution:
const getSectionIdFromScroll = (scrollY, sizes) => sizes.findIndex((val) => (scrollY -= val) < 0);
