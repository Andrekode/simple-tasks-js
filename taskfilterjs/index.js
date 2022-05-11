import { people } from "./people.js";

// Complete the .filter method to filter out only the objects that have an age from
// (and including) 26 to (and including) 28 and at least 3 hobbies

const filteredPeople = people.filter((obj) => {
  const { age, hobbies } = obj;
  return age >= 26 && age <= 28 && hobbies.length >= 3;
});

console.log(filteredPeople);

//this should log:
// (3) [{…}, {…}, {…}]
// 0: {name: 'Susan', male: false, age: 26, hobbies: Array(5)}
// 1: {name: 'Avery', male: true, age: 28, hobbies: Array(4)}
// 2: {name: 'Stephanie', male: false, age: 26, hobbies: Array(4)}
// length: 3

//////////////////////////////////////////////////////////////////////////////////

//Filter out the objects who are male and have a name of exactly 6 characters

const filteredPeople2 = people.filter((obj) => {
  const { name, male } = obj;
  return name.length === 6 && male;
});

console.log(filteredPeople2);

//this should log:
// (3) [{…}, {…}, {…}]
// 0: {name: 'Thomas', male: true, age: 23, hobbies: Array(3)}
// 1: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}
// 2: {name: 'Trevor', male: true, age: 19, hobbies: Array(1)}
// length: 3

//////////////////////////////////////////////////////////////////////////////////

//Filter out the objects that have "gym" included in their hobbies

const filteredPeople3 = people.filter((obj) => obj.hobbies.includes("gym"));

console.log(filteredPeople3);

//this should log:
// (2) [{…}, {…}]
// 0: {name: 'Phillip', male: true, age: 24, hobbies: Array(4)}
// 1: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}
// length: 2
