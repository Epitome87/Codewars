/*
This is related to my other Kata about cats and dogs.

Kata Task
I have a cat and a dog which I got as kitten / puppy.

I forget when that was, but I do know their current ages as catYears and dogYears.

Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:

Results are truncated whole numbers of "human" years
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
References

http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
*/

// My eh-but-refactored solution:
const ownedCatAndDog = (catYears, dogYears) => {
  const convert = (years, isDog = false) => {
    if (years >= 15 && years < 24) return 1;
    if (years >= 24 && years < 28 + isDog) return 2;
    if (years >= 28 + isDog) return 2 + (years - 24) / (4 + isDog);
    return 0;
  };

  return [Math.floor(convert(catYears)), Math.floor(convert(dogYears, true))];
};

// My eh solution:
const ownedCatAndDog = (catYears, dogYears) => {
  let cat = 0;
  let dog = 0;
  if (catYears >= 15 && catYears < 24) cat = 1;
  else if (catYears >= 24 && catYears < 28) cat = 2;
  else if (catYears >= 28) cat = 2 + (catYears - 24) / 4;

  if (dogYears >= 15 && dogYears < 24) dog = 1;
  else if (dogYears >= 24 && dogYears < 29) dog = 2;
  else if (dogYears >= 29) dog = 2 + (dogYears - 24) / 5;

  return [Math.floor(cat), Math.floor(dog)];
};

// Top user solution:
const ownedCatAndDog = (catYears, dogYears) =>
  [catYears < 24 ? catYears / 15 : (catYears - 16) / 4, dogYears < 24 ? dogYears / 15 : (dogYears - 14) / 5].map(
    Math.floor
  );

// Clever user solution:
const ownedCatAndDog = (...pets) =>
  pets.map((petYears, i) => {
    if (petYears < 15) return 0;
    if (petYears < 24) return 1;

    return 2 + Math.floor((petYears - 24) / (4 + i));
  });
