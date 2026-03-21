// Simulated Private Set Intersection (PSI)

function privateSetIntersection(userList, platformList) {
  return userList.filter(item => platformList.includes(item));
}

module.exports = {
  privateSetIntersection
};
