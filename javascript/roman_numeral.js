//create an object to store roman numeral values
// compare value of string[i] to string[j]
// if string[i] is larger than string[j] add J to I
//  When a symbol appears after a larger (or equal) symbol it is added
// if string[i] is smaller than string[j] subtract I from J
//  When a symbol appears after a smaller (or equal) symbol

const romanNums = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  VI: 6,
  VII: 7,
  VIII: 8,
  IX: 9,
  X: 10,
  L: 50, 
  C: 100,
  D: 500,
  M: 1000,
};

function romanNumeral(string) {
  let romanSum = 0;
  // type your code here
  if (string.length === 1) {
    return romanNums[string];
  }

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] >= string[j]) {
        let char = string[i];
        romanSum += romanNums[char];
      }
      if (string[j] >= string[i]) {
        let charJ = string[j];
        let charI = string[i];
        romanSum += (romanNums[charJ] - romanNums[charI]);
      }
    }
  }
  return romanSum;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral("I"));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral("IX"));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral("CDII"));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
