/*
You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.

['Northern', 'Central', 243, 1, 'Victoria']
Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

For example: 'Piccadilly', 56, 93, 243, 20, 14 -> "£6.90"

Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx
*/

// My solution:
const londonCityHacker = (journey) => {
  const tubeCost = journey.filter((v) => typeof v === 'string').length * 2.4;
  let busCost = journey.filter((v) => typeof v === 'number').length * 1.5;
  for (let i = 0; i < journey.length - 1; i++) {
    if (typeof journey[i] === 'number' && typeof journey[i + 1] === 'number') {
      busCost -= 1.5;
      i++;
    }
  }
  return `£${(tubeCost + busCost).toFixed(2)}`;
};

// Top user solution:
function londonCityHacker(journey) {
  let sum = 0;

  for (let i = 0; i < journey.length; i++) {
    if (typeof journey[i] === 'string') sum += 2.4;
    else {
      sum += 1.5;
      if (typeof journey[i + 1] === 'number') i++;
    }
  }

  return `£${sum.toFixed(2)}`;
}

// Clever user solution:
function londonCityHacker(journey) {
  console.log(journey);
  let busFare = 0;
  return `£${journey
    .map((v, i) =>
      isNaN(v) ? ((busFare = 0), 2.4) : (busFare = 1.5 - busFare)
    )
    .reduce((v, w) => v + w, 0)
    .toFixed(2)}`;
}

/* Takeaways:
1) What the heck is that syntx in the map function?!
*/
