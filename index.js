const { uniq, min, random, sum, pick } = require('lodash');

main();

function main() {
  printBeauty('beauty1');  
  print('\n');
  printBeauty('beauty2'); 
}

function printBeauty(beautyName) {
  print(beautyName);
  const beauty = selectBeauty();
  print(beauty);
}

function selectBeauty() {
  return {
    age: getAge(), 
    height: getHeight(),
    weight: getWeight(),
    cup: getCup(),
    gpa: getGpa(),
    name: getName(),
    hasBoyfriend: getHasBoyfriend(),
  };
}

function getAge() {
  const beautyAge = random(16, 40);
  const olderThanYangyang = beautyAge >= 28;
 
  if (olderThanYangyang) {
    print("I am older than yangyang.");

  } else {
    print("I am younger than yangyang.");
  }
  
  return beautyAge;
}

function getHeight() {
  return random(156, 168) + 'cm';
}

function getWeight() {
  return random(46, 58) + 'kg';
}

function getCup() {
  const cupOptions = ['A', 'B', 'C', 'D', 'E'];
  const randomIndex = random(0, cupOptions.length - 1);
  const cup = cupOptions[randomIndex];

  if (cup === 'A') {
    print('I am small.');

  } else if ((cup === 'B') || (cup === 'C') || (cup === 'D'))  {
    print('I am middle.');

  } else {
    print('I am big.');
  }

   return cup;
}

function getGpa() {
  return random(20, 100);
}


function getName() {
  const firstNames = ['Lily', 'Rose', 'Flower', 'River', 'Sheep', 'Lion', 'Hydrangea', 'Cloud', 'Dudu', 'Yangyang'];
  const firstNamesIndex = random(0, firstNames.length - 1);
  const lastNames = ['Zhao', 'Qian', 'Sun', 'Lee', 'Zhou', 'Wu', 'Zheng', 'Wang'];
  const lastNamesIndex = random(0, lastNames.length - 1);
  
  const name = firstNames[firstNamesIndex] + ' ' + lastNames[lastNamesIndex];

  return name;
}

function getHasBoyfriend() {
  const hasBoyfriendPercentage = 60;

  const randomPercentage = random(1, 100);
  const hasBoyfriend = randomPercentage <= hasBoyfriendPercentage;

  if (hasBoyfriend) {
    print("I have a boyfriend!");
    print("I don't belong to yangyang.");

  } else {
    print("I don't have a boyfriend!" + "\n" + "I belong to yangyang.");
  }

  return hasBoyfriend;
}

function print(something, count = 1) {
  for (let i = 0; i < count; i++) {
    console.log(something);
  }
}