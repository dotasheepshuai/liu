const { uniq, min, random, sum, pick } = require('lodash'); // unique

function print(something, count = 1) {
  for (let i = 0; i < count; i++) {
    console.log(something);
  }
}



const SW = {
  socialWorker: ["huahua", "yangyang"],
  skillsOfIntervention: ["case", "groups", "community"],
  clients: [
    { name: "xiaofeiyang", age: 18 },
    { name: "xiaodu", age: 12 }
  ],
  problems: ["divorce", "bullying", "retirement"]
};
print(SW);
print(SW.problems[random(0, 2)]);
print(SW.clients[random(0, 1)]);
print(SW.skillsOfIntervention[random(0, 2)]);
print(SW.socialWorker[random(0, 1)]);
SW.resourse = ["policy", "volunteer", "fundation"];
print(SW);
