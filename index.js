const { print } = require('./print');
const { selectBeauty } = require('./selectBeauty');

main();

function main() {
  audition();
}

function audition(count){
  for (let i = 1; i <= 5; i++) {
    printBeauty("beauty" + i);
  }
}

function printBeauty(beatyName) {
  const a = selectBeauty();
  print(a);
}
