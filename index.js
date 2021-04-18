const { uniq, min, random, sum, pick } = require('lodash');

function print(something, count = 1) {
  for (let i = 0; i < count; i++) {
    console.log(something);
  }
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

// 需求：姓：赵钱孙李周吴郑王 名：lily,rose,flower,river,sheep,lion,hydrangea,cloud

function getName() {
  const firstNames = ['Lily', 'Rose', 'Flower', 'River', 'Sheep', 'Lion', 'Hydrangea', 'Cloud', 'Dudu', 'Yangyang'];
  const firstNamesIndex = random(0, firstNames.length - 1);
  const lastNames = ['Zhao', 'Qian', 'Sun', 'Lee', 'Zhou', 'Wu', 'Zheng', 'Wang'];
  const lastNamesIndex = random(0, lastNames.length - 1);
  
  const name = firstNames[firstNamesIndex] + ' ' + lastNames[lastNamesIndex];
  return name;

}
//维护性，清晰，明确//return出来一个结果


// 1、50% has boyfriend
// function getHasBoyfriend() {

//   if (!!random(0,1)) {
//     return('dating');

//   } else {
//     return('single');
//   }
// }

//   const randomNumber = random(0, 100);
//   const threshold = 30;
// const a = randomNumber > threshold;

// function request() {
//   const theNeed = 
// }




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


/**
 * homework3: if hasBoyfriend is true, print "i have a boyfriend !", in a separate line , print "print "i have a boyfriend !"". if hasBoyfriend is false, print "i don't have a boyfriend!" 
 */






print('beauty1');
const beauty1 = selectBeauty();
print(beauty1);

print('\n');

print('beauty2');
const beauty2 = selectBeauty();
print(beauty2);



// const xiang = random(1.1, true);
// print(xiang);

