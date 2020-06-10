import users from './users.js';

console.log(users);

const calculateTotalBalance = users => {
  const totalBalance = users.reduce((acc, user) => 
acc + user.balance, 0);
  return totalBalance
};

console.log(calculateTotalBalance(users)); // 20916