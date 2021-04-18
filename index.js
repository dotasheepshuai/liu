const { print } = require('./print');
const { selectBeauty } = require('./selectBeauty');

main();

function main() {
  printBeauty('beauty1');  
  print('\n');
  printBeauty('beauty2'); 
  print('\n');
  printBeauty('beauty3'); 
}

function printBeauty(beautyName) {
  print(beautyName);
  const beauty = selectBeauty();
  print(beauty);
}

