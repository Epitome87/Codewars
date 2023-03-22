/*
Just another day in the world of Minecraft, Steve is getting ready to start his next exciting project -- building a railway system!

Alt text

But first, Steve needs to melt some iron ores in the furnace to get the main building blocks of rails -- iron ingots.ironingot_icon32

Each iron ingot takes 11 seconds* to produce. Steve needs a lot of them, and he has the following fuel options to add into the furnace:

Buckets of lava, each lasts 800 seconds*bucketL
Blaze rod, each lasts 120 secondsblazerod
Coals, each lasts 80 secondscoal
Blocks of Wood, each lasts 15 secondslogs
Sticks, each lasts 1 second*stick
In Ruby: Write a function calc_fuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return a hash of the form {:lava => 2, :blaze_rod => 1, :coal => 1, :wood => 0, :stick => 0} In JavaScript: Write a function calcFuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return an object of the form {lava: 2, blazeRod: 1, coal: 1, wood: 0, stick: 0} In Python: Write a function calc_fuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return a dictionary of the form {"lava": 2, "blaze rod": 1, "coal": 1, "wood": 0, "stick": 0}

*fictional values

To all the Minecraft players out there: feel free to expand this series or let me know if you have any ideas related to Minecraft that can be turned into codewars puzzles. Some ideas I have that might potentially be turned into katas:

distance traveled in real world vs. in Nether
shortest path problems related to mining diamonds/gold/goodies that appears in different levels under ground
growth of animal population from breeding
redstone stuff?!
If you do end up expanding this series, please send me a link of your kata so I can check it out and include a link to your kata here :-)

Minecraft Series #1: Steve wants to build a beacon pyramid
Minecraft Series #3: Lava is amazing!
Minecraft Series #4: Lava is amazing, however...
*/

// My refactored solution:
function calcFuel(n) {
  let fuelSecondsNeeded = n * 11;
  const fuelMap = { lava: 800, blazeRod: 120, coal: 80, wood: 15, stick: 1 };
  const result = {};
  for (const fuel in fuelMap) {
    result[fuel] = Math.floor(fuelSecondsNeeded / fuelMap[fuel]);
    fuelSecondsNeeded -= result[fuel] * fuelMap[fuel];
  }
  return result;
}

// My solution:
function calcFuel(n) {
  let fuelSecondsNeeded = n * 11;

  const numLava = Math.floor(fuelSecondsNeeded / 800);
  fuelSecondsNeeded -= numLava * 800;

  const numRod = Math.floor(fuelSecondsNeeded / 120);
  fuelSecondsNeeded -= numRod * 120;

  const numCoal = Math.floor(fuelSecondsNeeded / 80);
  fuelSecondsNeeded -= numCoal * 80;

  const numWood = Math.floor(fuelSecondsNeeded / 15);
  fuelSecondsNeeded -= numWood * 15;

  const numStick = Math.floor(fuelSecondsNeeded / 1);
  fuelSecondsNeeded -= numStick * 1;

  return {
    lava: numLava,
    blazeRod: numRod,
    coal: numCoal,
    wood: numWood,
    stick: numStick,
  };
}

// Top user solution:
function calcFuel(n) {
  let time = n * 11;

  let obj = { lava: 800, blazeRod: 120, coal: 80, wood: 15, stick: 1 };
  let obj2 = { lava: 0, blazeRod: 0, coal: 0, wood: 0, stick: 0 };

  for (let key in obj) {
    obj2[key] = Math.floor(time / obj[key]);
    time %= obj[key];
  }
  return obj2;
}

// "Clever" user solution:
calcFuel = (n) => (
  (n *= 11),
  {
    lava: (n / 800) | 0,
    blazeRod: ((n % 800) / 120) | 0,
    coal: (((n % 800) % 120) / 80) | 0,
    wood: ((((n % 800) % 120) % 80) / 15) | 0,
    stick: ((((n % 800) % 120) % 80) % 15) / 1,
  }
);
