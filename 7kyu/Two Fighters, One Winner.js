/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/

// My eh solution:
const declareWinner = (fighter1, fighter2, firstAttacker) => {
  let attacker = firstAttacker;

  while (fighter1.health > 0 && fighter2.health > 0) {
    if (attacker === fighter1.name) {
      fighter2.health -= fighter1.damagePerAttack;
      attacker = fighter2.name;
    } else {
      fighter1.health -= fighter2.damagePerAttack;
      attacker = fighter1.name;
    }
  }

  return fighter1.health <= 0 ? fighter2.name : fighter1.name;
};

// Top user solution:
function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  if (fac1 < fac2) {
    return fighter2.name;
  } else if (fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

// Nice recursive user solution:
function declareWinner(fighter1, fighter2, firstAttacker) {
  if (fighter1.name !== firstAttacker) return declareWinner(fighter2, fighter1, fighter2.name);
  if (fighter1.health <= 0) return fighter2.name;
  if (fighter2.health <= 0) return fighter1.name;

  return declareWinner(
    new Fighter(fighter2.name, fighter2.health - fighter1.damagePerAttack, fighter2.damagePerAttack),
    fighter1,
    fighter2.name
  );
}
