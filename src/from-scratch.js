/** FEEDBACK: Great job! You have all test cases passing! */
const coolGreeting = (person) => {
  if (person.isCool === true) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  } else if (person.isCool === false) {
    return `Greetings ${person["name"]}, how have you been lately?`
  }
};

const haveBirthday = (person) => {
  // const { name, age } = person;
  // person.age++
  person["age"]++
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle
};

const carMaker = (name, maker, year) => {
  return {
    name: name,
    maker: maker,
    year: year,
    needsOilChange: false
  };
};

const weAreNotFriends = (person) => {
  return person.friends.pop();
};

const listHobbies = (person) => {
  for (let i = 0; i < person.hobbies.length; i++) {
    console.log(`${person.name} likes ${person.hobbies[i]}.`)
  }
};

const getNextOpponent = (team) => {
  if (team.matches[0] === undefined) {
    return null;
  }
  return `${team.matches[0].teamName}`;
};


const listAllKeys = (theObject) => {
  const arr = [];
  for (const key of Object.keys(theObject)) {
    arr.push(key)
  }
  return arr;
};

const listAllValues = (theObject) => {
  const arr = [];
  for (const value of Object.values(theObject)) {
    arr.push(value)
  }
  return arr;
};

const convertToMatrix = (theObject) => {
  const matrix = [];
  /** FEEDBACK: This condition will always be false since arrays are references, remember that an array will never equal another array! */
  if (theObject === []) {
    return theObject
  }
  let valuesarr = [];
  for (let i = 0; i < theObject.length; i++) {
    if (i === 0) {
      matrix.push(Object.getOwnPropertyNames(theObject[i]))
    }
    valuesarr = []
    for (const value of Object.values(theObject[i])) {
      valuesarr.push(value)
    }
    matrix.push(valuesarr)
  }
  return matrix;
};
// the comma at the end of the final array really felt hard to add
// i gave up and test and it passed lol
// [
//   ['name', 'age', 'bio'],
//   ['Sara', 30, 'What a legend'],
//   ['Bob', 30, "Kind of mean if we're being honest"],<----- (,)
// ]
// const users = [
//   {
//     name: 'Sara',
//     age: 30,
//     bio: 'What a legend',
//   },
//   {
//     name: 'Bob',
//     age: 30,
//     bio: "Kind of mean if we're being honest",
//   },
// ];
// const app = [];
// console.log(convertToMatrix(users));
// console.log(convertToMatrix(app));

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
