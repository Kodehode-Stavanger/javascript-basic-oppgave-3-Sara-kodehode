/******************************************************************************
------------------------------------
!READ THE ASSIGNMENT TEXT CAREFULLY!
------------------------------------

1.

Use a normal 'for loop' to loop over the people array and do the following:

- If the objects 'name' value is "Otto", do not do any of the changes below to 
  that object (hint: the 'continue' keyword)

- Make a new key on each person object in the array called "city" and set the 
	value to a random city from the cities array.

- Make a new key on each person object called "title" and set it to "Mr." for
	males and "Ms." for females.
	
- Increment the age by 2

- Add "coding" to the beginning of the hobby array on each object.



PS: Use only 1 loop to do the above steps.

console.log(people) after your loop to check that your changes are correct.

EXTRA CREDIT (not mandatory): Use your loop to also calculate the combined 
age of all the people objects and store it in the combinedAge variable.

Then, after the loop, use the combined age to calculate the average age
of everyone and store it in the averageAge variable.

Do your calculations AFTER you add the two years to the ages, and remember,
skip Otto!

******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

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
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];
let combinedAge = 0;
let loopCounter = 0;

//your code here
// for loop to check all the objects values
for (let i = 0; i < people.length; i++) {
  //condition to not make any changes if name value = Otto
  if (people[i].name === "Otto") {
    continue;
  } else {
    // declar a newkey city to add for index in people object
    // add random values to city value
    people[i].city = cities[Math.floor(Math.random() * cities.length)];

    // add newkey value title for every index in people object
    // use condition to check if its male or female
    if (people[i].male === true) {
      people[i].title = "Mr.";
    } else {
      people[i].title = "Ms.";
    }
  }
  // increment the age by 2
  people[i].age += 2;
  // addinf coding in the begining of hobbies array to all indexes
  people[i].hobbies.unshift("coding");
  //console.log(people[i]);
  // calculating the combined age for all indexes
  combinedAge += people[i].age;
  //loop counter know the number of people to calculate teh average age
  loopCounter++;
}

let averageAge = 0;
averageAge = combinedAge / loopCounter;

/******************************************************************************
2.

Complete the function below:

It should take in 1 number as a parameter.

The function should return an array of random numbers between 1 and 6, the 
length of the array is decided by the number the function receives as a 
parameter (think of it as the number of dice we roll)

Examples: 
diceRoller(4) should return something like: [4, 1, 2, 6]
diceRoller(6) should return something like: [5, 5, 6, 2, 3, 4]

EXTRA CREDIT:
(This is not mandatory)
Add a second parameter to the function that decides how many faces the dice 
should have.
diceRoller(5, 20) should return an array of 5 random numbers ranging from 1-20 
******************************************************************************/

function diceRoller(arrLength, maxNum) {
  //your code here
  // declaring an array to push the randoms numbers in
  let newArr = [];
  // for loop runs "arrlength" times
  for (let i = 0; i < arrLength; i++) {
    // take the ceil number from math.random because the average between 1 and maxNum (0 is not included)
    newArr.push(Math.ceil(Math.random() * maxNum));
  }
  return newArr;
}

/******************************************************************************
3.

Complete the function below.

The function should take in 1 array of strings.

Inside the function, do this:

Write a loop that loops strings in the array, and does the following:
- Removes whitespace from the beginning and end of each word
- Converts all the words to lower case

Use a "FOR of" loop.

After the loop, use a method to join the array into a string with a single 
space between the words (" "), and return the resulting string.

Example:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
should return:
"this text needs to be cleaned up"
******************************************************************************/

function wordCleaner(stringsArr) {
  //your code here
  // declare array to push in clean strings
  let cleanStrings = [];
  // use for of lop to check the given array
  for (let str of stringsArr) {
    //.trim() removes the space before and after the string .toLowercase()
    cleanStrings.push(str.trim().toLowerCase());
  }
  // join all the clean srings in one string
  let cleanString = cleanStrings.join(" ");
  return cleanString;
}

/******************************************************************************
4.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Complete the  function called 'helloChecker' that takes in 1 string 
as a parameter.

Write code that checks all the words in the string if they match the word for 
'hello' in any of these languages:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
czesc - polish

If any of the words in the string matches any of these, the function should 
return: "HELLO detected in (name of the language)."

If none of the words in the string match any of the words for hello in the 
different languages, your function should return: "No HELLO detected."

PS: Make sure the function is case insensitive, both 'Hello' and 'hello' 
should be detected.

I have provided some string variables to test your function with.
******************************************************************************/

const greetingsInLanguages = [
  { greeting: "hello", language: "english" },
  { greeting: "ciao", language: "italian" },
  { greeting: "salut", language: "french" },
  { greeting: "hallo", language: "german" },
  { greeting: "hola", language: "spanish" },
  { greeting: "czesc", language: "polish" },
];
//your code here
//I wrote 2 codes for this function
//code 1
// const helloChecker = (str) => {
//   //declare array to split srting in lowercase words
//   let wordsArray = str.toLowerCase().split(" ");
//   //two for loops to compare the greetings in all languages with all words in the array
//   for (let i = 0; i < greetingsInLanguages.length; i++) {
//     for (let j = 0; j < wordsArray.length; j++) {
//       if (wordsArray[j] === greetingsInLanguages[i].greeting) {
//         return `HELLO detected in ${greetingsInLanguages[i].language}.`;
//       }
//     }
//   }
//   return "No HELLO detected.";
// };
// console.log(helloChecker("Ciao signore!"));

//code 2
const helloChecker = (str) => {
  // array to have all the words in lowercase
  const wordsArray = str.toLowerCase();
  // for loop to loop over all the indexes in greetingsinlangauge object
  for (let i = 0; i < greetingsInLanguages.length; i++) {
    // if the words array includes the greeting return the language with the same index
    if (wordsArray.includes(greetingsInLanguages[i].greeting)) {
      return `HELLO detected in ${greetingsInLanguages[i].language}.`;
    }
  }
  return "No HELLO detected.";
};
/******************************************************************************
5.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Complete the function below to accomplish the following:

Return the string received in the first parameter with the 
following alterations:

any letter in the string matching charA (the second parameter in the function) 
will be replaced with charB (the third parameter) and VICE VERSA - meaning 
letters matching charA will be replaced with charB, and letters matching charB 
will be replaced with charA. See the expected console log comments below.

Examples:

doubleSwap("this is a string", "i", "s")
should return "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
should return "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
should return "whao is ohe ptino tf ohis?"
******************************************************************************/

function doubleSwap(string, charA, charB) {
  // your code here
  // declare array to push the letters in
  let newString = [];
  // spliting the given array into letters
  const charArray = string.split("");
  // loop over the chararray to compare with the given two letters
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === charA) {
      newString.push(charB);
    } else if (charArray[i] === charB) {
      newString.push(charA);
    } else {
      newString.push(charArray[i]);
    }
    //join all the letters in one string
    outputString = newString.join("");
  }
  return outputString;
}

console.log(doubleSwap("what is the point of this?", "o", "t"));
/******************************************************************************
⬇️ FOR TESTING - DON'T TOUCH ⬇️
******************************************************************************/

module.exports = {
  cities,
  people,
  wordCleaner,
  helloChecker,
  doubleSwap,
  diceRoller,
  averageAge,
  combinedAge,
};
