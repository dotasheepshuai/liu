const { uniq, min, random, sum, pick } = require('lodash'); // unique

function print(something, count = 1) {
  for (let i = 0; i < count; i++) {
    console.log(something);
  }
}



// const SW = {
//   socialWorkercha: ["huahua", "yangyang"],
//   skillsOfIntervention: ["case", "groups", "community"],
//   clients: [
//     { name: "xiaofeiyang", age: 18 },
//     { name: "xiaodu", age: 12 }
//   ],
//   problems: ["divorce", "bullying", "retirement"]
// };
// print(SW);
// // print(SW.problems[random(0, 2)]);
// // print(SW.clients[random(0, 1)]);
// // print(SW.skillsOfIntervention[random(0, 2)]);
// // print(SW.socialWorker[random(0, 1)]);
// SW.resourse = ["policy", "volunteer", "fundation"];
// // print(SW);

function selectBeauty() {
    

  return {
    age: getAge(), 
    height: getHeight(),
    weight: getWeight(),
    cup: getCup(),
    gpa: getGpa(),
    name: getName(),
  };
}

function getAge() {
  return random(18, 30);
}

function getHeight() {
  return random(156, 168) + 'cm';
}

function getWeight() {
  return random(46, 58) + 'kg';
}

function getCup() {
  const cupOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const randomIndex = random(0, cupOptions.length - 1);
  return cupOptions[randomIndex];
}

function getGpa() {
  return random(0, 100);
}

// 需求：姓：赵钱孙李周吴郑王 名：lily,rose,flower,river,sheep,lion,hydrangea,cloud

function getName() {
  const fisrtName = ['lily', 'rose', 'flower', 'river', 'sheep', 'lion', 'hydrangea', 'cloud'];
  const randomIndex1 = random(0, fisrtName.length - 1);
  const lastName = [' zhao', ' qian', ' sun', ' lee', ' zhou', ' wu', ' zheng', ' wang'];
  const randomIndex2 = random(0, lastName.length - 1);
  
  return name = fisrtName[randomIndex1] + lastName[randomIndex2];

}


const beauty1 = selectBeauty();
print(beauty1);


print("tianyang是傻子")