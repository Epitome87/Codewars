/*
Let's take a look at an interesting feature of JS: custom Getters and Setters for objects.

Skimming over this may help you prepare for this kata: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FWorking_with_Objects#Defining_Getters_and_Setters (thanks to @contablebrew for pointing out the more "forward-compatible" approach to this.)

The object of this exercise will be to provide a constructor named "Archiver" that creates a "self-archiving" object with respect to its "temperature" property, but otherwise looks and acts just like a normal JS object. Each time the "temperature" property is assigned, the object should add a log entry to an array (the "archive") that it returns via a "getArchive" function. The log entry should be formed as such: {date: //the Date when the "temperature" property was assigned, val: //the value that was written to the "temperature" property.} . The "date" property of the log entry should be a valid JS Date object.

so e.g.:

//new Date() == '2013-09-24...Z'
var arc = new Archiver();
arc.temperature = 33;
arc.temperature = 28;
arc.temperature = 21;
arc.getArchive() // == [{date: 2013-09-24..., val:33},{date: 2013-09-24..., val:28},{date: 2013-09-24..., val:21}]
*/

// My solution:
class Archiver {
  constructor() {
    this._temp = null;
    this.archive = [];
  }

  getArchive() {
    return this.archive;
  }

  get temperature() {
    return this._temp;
  }

  set temperature(temp) {
    this.archive.push({ date: new Date(), val: temp });
    this._temp = temp;
  }
}

// Top user solution:
function Archiver() {
  var temperature = null;
  var archive = [];
  Object.defineProperty(this, 'temperature', {
    get: function () {
      return temperature;
    },
    set: function (x) {
      temperature = x;
      archive.push({
        date: new Date(),
        val: x,
      });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}

// Another good user solution:
function Archiver() {
  var temperature = null;
  var archive = [];

  this.__defineSetter__('temperature', function (val) {
    archive.push({ date: new Date(), val: val });
    temperature = val;
  });
  this.__defineGetter__('temperature', function (val) {
    return temperature;
  });

  this.getArchive = function () {
    return archive;
  };
}

// Another user solution:
function Archiver() {
  var archive = [];
  this.getArchive = function () {
    return archive;
  };
}

Archiver.prototype = {
  set temperature(v) {
    this.temp = v;
    this.getArchive().push({ date: new Date(), val: v });
  },
  get temperature() {
    return this.temp;
  },
};

/* Takeaways:
1) Although possible with function-based objects, just stick to the Class syntax!
*/
