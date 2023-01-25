/*
Escape the room
You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).
*/

// My solution:
const rooms = {
  bedroom: {
    name: 'Master Bedroom',
    description: 'A ransacked bedroom',
    completed: false,
  },
  bathroom: {
    name: 'Bathroom',
    description: 'A dirty bathroom with a leaky tub',
    completed: true,
  },
  garage: {
    name: 'Garage',
    description: 'A cluttered garage with a foul odor',
    completed: false,
  },
};
