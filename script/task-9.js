import users from './users.js';

console.log(users);
const getNamesSortedByFriendsCount = users => {
  const usersForSort = [...users];
  console.log(usersForSort);
  const sortedUsers = usersForSort
    .sort((user1, user2) => {
      return user1.friends.length - user2.friends.length;
      // user1.balance - user2.balance;
      // console.log(user1.balance, user1.name);
      // console.log(user2.balance, user2.name);
    })
    .map(user => user.name);

  return sortedUsers;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
