const names = [
  "Bradley",
  "Mae",
  "Oscar",
  "Isac",
  "Alexandra",
  "Margie",
  "Rob",
  "Clay",
  "Timothy",
  "Kennedy",
  "Rita",
  "Scott",
  "Sarah",
  "Felicia",
  "Gill",
  "Gavin",
  "Nellie",
  "Hope",
];

const hobbies = [
  "cycling",
  "football",
  "pool",
  "jogging",
  "travelling",
  "dancing",
  "movies",
  "coffee",
  "skateboarding",
  "guitar",
  "concerts",
  "Dancing",
  "movies",
  "coding",
  "games",
  "Books",
  "memes",
  "electronics",
  "dancing",
  "boxing",
  "wrestling",
  "mma",
  "gym",
  "cycling",
  "football",
  "pool",
  "tv",
  "writing",
  "piano",
  "books",
  "opera",
];

const regex = new RegExp("^(?!.*?[._]{2})[a-zA-Z0-9_.]+$");

function sortData(data) {
  const dataLowerCase = data.map((activity) => activity.toLowerCase());
  const dataNoDup = new Set(dataLowerCase);

  return [...dataNoDup];
}

function getRandom(arr, n) {
  let result = new Array(n);
  let len = arr.length;
  let taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

console.log(names);
const createObject = names.map((person) => {
  const randomHobbies = getRandom(sortData(hobbies), 3);
  const randomNum = Math.floor(Math.random() * (50 - 18 + 1) + 18);

  return { name: person, age: randomNum, hobbies: randomHobbies };
});
console.log([...createObject]);

// Use whatever tools you deem necessary to accomplish the following:

// Generate an object for each name in the names array formatted as follows:
// {
//     name: (the name from the name array),
//     age: (generate a random age from 18-50),
//     hobbies: (randomly generate an array of 3 hobbies from the hobbies array. PS make
//               sure the hobbies are 3 unique ones)
// }

// example:

// {
//     name: "Scott"
//     age: 31
//     hobbies: ["books", "electronics", "guitar"]
// }

// Place these objects into an array.

// PS: The hobbies array has to be cleaned up! Write code to remove duplicates before using it.
// Beware the capitalized duplicates as well.

// Good luck!
