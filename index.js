const { print } = require('./print');
const { selectBeauty } = require('./selectBeauty');

main();

function main() {
  audition();
}

function audition() {
  let beauties = [];
  
  for (let i = 1; i <= 100000; i++) {
    const beauty = selectBeauty();
    beauties.push(beauty);
  }

  print("How many beauties we generated: " + beauties.length);

  beauties = beauties
  .filter((beauty) => (beauty.cup === "C"))
  .filter((beauty) => (beauty.height === "160cm"))
  .filter((beauty) => (beauty.weight === "52kg"))
  .filter((beauty) => (beauty.age === 21))
  .filter((beauty) => (beauty.hasBoyfriend === false))
  .filter((beauty) => (beauty.name === "Dudu Wang"))
  .sort((beauty1, beauty2) => (beauty2.gpa - beauty1.gpa));

  print("We got " + beauties.length + " beauties left after several filtering.");

  print("The winner is " + JSON.stringify(beauties[0]));
}