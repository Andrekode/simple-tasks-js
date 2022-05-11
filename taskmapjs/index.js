const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["coding", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
];

// Complete the .map method on the people array to return the following sentence for each element:
// "Thomas is a 23 year old man, and he likes pool among other things"
// For females, it should read: "..year old woman, and she likes.."
// the hobby in the sentence should be a randomly chosen one from the hobby array.
// HINT: Use Template Literals (Google it if unsure)

const mappedPeople = people.map((person) => {
  const { name, age, male, hobbies } = person;
  const randomHobbies = Math.floor(Math.random() * 3);

  return `${name} is a ${age} year old ${male ? "man" : "woman"} and ${
    male ? "he" : "she"
  } likes ${hobbies[randomHobbies]} among other things`;
});

console.log(mappedPeople);

// This should log something like this:

// (5)[
//   ("Thomas is a 23 year old man, and he likes football among other things",
//   "Susan is a 26 year old woman, and she likes dancing among other things",
//   "Monica is a 21 year old woman, and she likes skateboarding among other things",
//   "Avery is a 28 year old man, and he likes coding among other things",
//   "Phillip is a 24 year old man, and he likes mma among other things")
// ];
