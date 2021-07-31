const { random } = require('lodash');
const { print } = require('../utils/print');
const { selectBeauty } = require('../services/selectBeauty');
const { db_write } = require('../db/db');

module.exports = {
 populateDatabase
}

// function main() {
//   audition();
// }

async function populateDatabase() {
  const beauties = generateBeauties();
  // const filteredBeauties = filterBeauties(beauties); 
  printFirstBeauty(beauties);
  await db_write(beauties);
}

function generateBeauties() {
  const beauties = [];
  for (let i = 1; i <= 10; i++) {
    const beauty = selectBeauty();
    beauties.push(beauty);
  }

  print("How many beauties we generated: " + beauties.length);
  return beauties;
}

// function filterBeauties(beauties) {
//   const filteredBeauties = beauties
//   .filter((beauty) => (beauty.cup === "C"))
//   .filter((beauty) => (beauty.height === "160cm"))
//   .filter((beauty) => (beauty.weight === "52kg"))
//   .filter((beauty) => (beauty.age === 21))
//   // .filter((beauty) => (beauty.hasBoyfriend === false))
//   .filter((beauty) => (beauty.name === "Dudu Wang"))
//   .sort((beauty1, beauty2) => (beauty2.gpa - beauty1.gpa));

//   print("We got " + filteredBeauties.length + " beauties left after several rounds of filtering.");
//   return filteredBeauties;
// }

function printFirstBeauty(beauties) {
   const firstBeauty = beauties[0];
   print("The first one is " + JSON.stringify(firstBeauty));
   return;
}