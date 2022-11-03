/*
A runner, who runs with base speed s with duration t will cover a distances d: d = s * t
However, this runner can sprint for one unit of time with double speed s * 2
After sprinting, base speed s will permanently reduced by 1, and for next one unit of time runner will enter recovery phase and can't sprint again.

Your task, given base speed s and time t, is to find the maximum possible distance d.

Input:
1 <= s < 1000
1 <= t < 1000

Example:
Given s = 2 and t = 4.
We could schedule when runner should sprint so we could get these possible sequences:

Seq.: RRRR
=> s + s + s + s
=> 2 + 2 + 2 + 2 = 8
Seq.: RRRS
=> s + s + s + s*2
=> 2 + 2 + 2 + 2*2 = 10
Seq.: RRSR
=> s + s + s*2 + (s-1)
=> 2 + 2 + 2*2 + (2-1) = 9
Seq.: RSRR
=> s + s*2 + (s-1) + (s-1)
=> 2 + 2*2 + (2-1) + (2-1) = 8
Seq.: RSRS
=> s + s*2 + (s-1) + (s-1)*2
=> 2 + 2*2 + (2-1) + (2-1)*2 = 9
Seq.: SRRR
=> s*2 + (s-1) + (s-1) + (s-1)
=> 2*2 + (2-1) + (2-1) + (2-1) = 7
Seq.: SRRS
=> s*2 + (s-1) + (s-1) + (s-1)*2
=> 2*2 + (2-1) + (2-1) + (2-1)*2 = 8
Seq.: SRSR
=> s*2 + (s-1) + (s-1)*2 + (s-1-1)
=> 2*2 + (2-1) + (2-1)*2 + (2-1-1) = 7

Where:
- R: Normal Run / Recovery
- S: Sprint
Based on above sequences, the maximum possible distance d is 10.
*/

// My solution:
const solution = (s, t) => {
  let distance = s * t;
  const maxSprints = Math.ceil(t / 2);

  for (let i = 0; i < maxSprints; i++) {
    if (s - 3 * i > 0) distance += s - 3 * i;
  }

  return distance;
};

// Clever user solution:
function solution(speed, time) {
  const optimumSprints = Math.floor(speed / 3) + 1;
  const possibleSprints = ((time + 1) / 2) | 0;
  const sprints = Math.min(optimumSprints, possibleSprints);

  return speed * time + speed * sprints - (sprints - 1) * sprints * 1.5;
}

// User solution, with helpful comments:
function solution(s, t) {
  /*optimal to sprint on last leg...each additional sprint will add (s) but cost (3*i) in distance=> 1 from the recovery phase,
and another 2 from the subsequent sprint. so basically keep adding sprints from the right side (last leg) until the
gain matches or is less than the loss, where s is the gain and 3*i is the loss.
*/

  let distance = s * t; //initialize with all regular run
  let maxSprint = Math.ceil(t / 2); //the max number of sprints possible

  for (let i = 0; i < maxSprint; i++) {
    //loop thru each sprint from the right side,
    if (s - 3 * i >= 0) {
      distance += s - 3 * i;
    } //if the result from the sprint is net positive, then we add it to the distance
  }
  return distance;
}
