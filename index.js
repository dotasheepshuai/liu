const { uniq, min, random, sum, pick } = require('lodash'); // unique

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
  return random(16, 20);
}

function getHeight() {
  return random(156, 168) + 'cm';
}

function getWeight() {
  return random(46, 58) + 'kg';
}

function getCup() {
  const cupOptions = ['B', 'C', 'D', 'E'];
  const randomIndex = random(0, cupOptions.length - 1);
  return cupOptions[randomIndex];
}

function getGpa() {
  return random(20, 100);
}

// 需求：姓：赵钱孙李周吴郑王 名：lily,rose,flower,river,sheep,lion,hydrangea,cloud

function getName() {
  const firstName = ['lily', 'rose', 'flower', 'river', 'sheep', 'lion', 'hydrangea', 'cloud', 'dudu', 'yangyang'];
  const firstNameIndex = random(0, firstName.length - 1);
  const lastName = ['zhao', 'qian', 'sun', 'lee', 'zhou', 'wu', 'zheng', 'wang'];
  const lastNameIndex = random(0, lastName.length - 1);
  
  const name =firstName[firstNameIndex] + ' ' + lastName[lastNameIndex];
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


function getHasBoyfriend() {

  const randomNumber = random(1, 100);
  const threshold = 30;
  const a = randomNumber > threshold;

  if (a) {
    return("i have a boyfriend !");

  } else {
    return("i don't have a boyfriend!" );
  }
}


/**
 * homework1: 30% hasBoyfriend is true
 * homework2: 40% hasBoyfriend is true
 * homework3: if hasBoyfriend is true, print "i have a boyfriend !". if hasBoyfriend is false, print "i don't have a boyfriend!" 
 * homework4: improve the code to make it as readible as possible.
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

