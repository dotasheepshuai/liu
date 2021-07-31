const { random } = require('lodash');
const { print } = require('../utils/print');
const { selectBeauty } = require('../services/selectBeauty');

module.exports = {
 audition
}

// function main() {
//   audition();
// }

function audition() {
  const beauties = generateBeauties();
  const filteredBeauties = filterBeauties(beauties); 
  printWinnerBeauty(filteredBeauties);
}

function generateBeauties() {
  const beauties = [];
  for (let i = 1; i <= 10000; i++) {
    const beauty = selectBeauty();
    beauties.push(beauty);
  }

  print("How many beauties we generated: " + beauties.length);
  return beauties;
}

function filterBeauties(beauties) {
  const filteredBeauties = beauties
  .filter((beauty) => (beauty.cup === "C"))
  .filter((beauty) => (beauty.height === "160cm"))
  .filter((beauty) => (beauty.weight === "52kg"))
  .filter((beauty) => (beauty.age === 21))
  // .filter((beauty) => (beauty.hasBoyfriend === false))
  .filter((beauty) => (beauty.name === "Dudu Wang"))
  .sort((beauty1, beauty2) => (beauty2.gpa - beauty1.gpa));

  print("We got " + filteredBeauties.length + " beauties left after several rounds of filtering.");
  return filteredBeauties;
}

function printWinnerBeauty(beauties) {
   const winnerBeauty = beauties[0];
   print("The winner is " + JSON.stringify(winnerBeauty));
   return;
}