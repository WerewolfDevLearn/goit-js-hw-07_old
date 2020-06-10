import users from './users.js';

const getSortedUniqueSkills = users => {
  const sortedUniqueSkills = users
    .reduce((acc, user) => {
      acc.push(...user.skills);
      return acc;
    }, [])
    .filter((skill, index, skills) => index === skills.indexOf(skill))
    .sort();
  return sortedUniqueSkills;
};

console.log(getSortedUniqueSkills(users));
// [
//   'adipisicing',
//   'amet',
//   'anim',
//   'commodo',
//   'culpa',
//   'elit',
//   'ex',
//   'ipsum',
//   'irure',
//   'laborum',
//   'lorem',
//   'mollit',
//   'non',
//   'nostrud',
//   'nulla',
//   'proident',
//   'tempor',
//   'velit',
//   'veniam',
// ];
