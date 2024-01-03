const findTheOldest = function(people) {
  let current, oldest = people[0];
  for (let person of people) {
    current = person;
    let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

    if (currentAge > oldestAge) oldest = current;
  }
  return oldest.name;
};

function getAge(birth, death) { 
  if (!death) {
    return (new Date().getFullYear()) - birth;
  } else {
    return death - birth;
  };
};

console.log(findTheOldest([
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]));

console.log(findTheOldest([
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]));

console.log(findTheOldest([
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]));
// Do not edit below this line
module.exports = findTheOldest;
