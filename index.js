const { print } = require('./print');
const { selectBeauty } = require('./selectBeauty');

main();

function main() {
  audition();
}

function audition() {
  let beauties = [];
  
  for (let i = 1; i <= 1000000; i++) {
    const beauty = selectBeauty();
    beauties.push(beauty);
  }

  print(beauties.length);

  beauties = beauties.filter(
    (beauty) => { 
      return beauty.cup === 'C'; 
    }
  );
  print(beauties.length);

  beauties = beauties.filter(
    (beauty) => {
      return beauty.height === "160cm";
    }
  );
  print(beauties.length);
  
  beauties = beauties.filter(
    (beauty) => {
      return beauty.weight === "52kg";
    }
  );
  print(beauties.length);
  
  beauties = beauties.filter(
    (beauty) => {
      return beauty.age === 21;
    }
  );
  print(beauties.length);

  beauties = beauties.filter(
    (beauty) => {
      return beauty.hasBoyfriend === false;
    }
  );
  print(beauties.length);

  beauties = beauties.filter(
    (beauty) => {
      return beauty.name === "Dudu Wang";
    }
  );
  print(beauties.length);

  print(beauties);
}