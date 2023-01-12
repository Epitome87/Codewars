/*
Grinch wants to spoil Christmas for JavaScript programmers. For that, he devised a hellish plan: pollute their Date prototype so that Christmas never happens. He wants to change method getDate of Date so that it returns 26 for Date objects that represent 25th of December but works correctly for all other days of the year.

However, Grinch does not know how to do that. Can you help him?
*/

// My solution:
Date.prototype.getDate = function getGrinchDate() {
  if (this.getMonth() === 11 && this.toDateString().split(' ')[2] === '25')
    return 26;
  return this.toDateString().split(' ')[2];
};

// Top user solution:
Date.prototype.getDate = function getGrinchDate() {
  let [day, month, date] = this.toString().split(' ');
  return month == 'Dec' && date == 25 ? 26 : +date;
};

// Another good user solution:
Date.prototype.builtinGetDate = Date.prototype.getDate;

Date.prototype.getDate = function () {
  const date = this.builtinGetDate();
  const month = this.getMonth();

  if (date === 25 && month == 11) return 26;
  return date;
};
