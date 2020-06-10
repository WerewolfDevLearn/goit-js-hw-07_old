import users from './users.js';

console.log(users);

const getInactiveUsers = users => {
  const inactiveUsers = users.filter(user => !user.isActive);
  return inactiveUsers;
};

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
