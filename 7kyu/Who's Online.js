/*
 */

// My solution:
const whosOnline = (friends) => {
  const online = [];
  const offline = [];
  const away = [];
  const res = {};

  for (let friend of friends) {
    if (friend.status === 'offline') offline.push(friend.username);
    else if (friend.status === 'online' && friend.lastActivity > 10) away.push(friend.username);
    else online.push(friend.username);
  }

  if (online.length) res.online = online;
  if (away.length) res.away = away;
  if (offline.length) res.offline = offline;

  return res;
};

// My other solution:
const whosOnline = (friends) => {
  return friends.reduce((acc, curr) => {
    if (curr.status === 'offline') acc.offline ? acc.offline.push(curr.username) : (acc.offline = [curr.username]);
    else if (curr.status === 'online' && curr.lastActivity > 10)
      acc.away ? acc.away.push(curr.username) : (acc.away = [curr.username]);
    else acc.online ? acc.online.push(curr.username) : (acc.online = [curr.username]);
    return acc;
  }, {});
};

// My solution that times out (but is logically sound):
const whosOnline = (friends) => {
  return friends.reduce((acc, curr) => {
    if (curr.status === 'offline')
      return { ...acc, offline: acc.offline ? [...acc.offline, curr.username] : [curr.username] };
    else if (curr.status === 'online' && curr.lastActivity > 10)
      return { ...acc, away: acc.away ? [...acc.away, curr.username] : [curr.username] };
    return { ...acc, online: acc.online ? [...acc.online, curr.username] : [curr.username] };
  }, {});
};

// Clever user solution:
const whosOnline = (friends) =>
  friends.reduce((a, { username, status, lastActivity }) => {
    const fStatus = status === 'online' && lastActivity > 10 ? 'away' : status;
    a[fStatus] ? a[fStatus].push(username) : (a[fStatus] = [username]);
    return a;
  }, {});
