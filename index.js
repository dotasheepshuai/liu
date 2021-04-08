const { uniq, min, random, sum, pick } = require('lodash'); // unique

function print(something, count = 1) {
  for (let i = 0; i < count; i++) {
    console.log(something);
  }
}

// const a = [1];
// const c = '1';
// const b = uniq(a);
// print(b);


// re-invent the wheels



// const studentAges = [21, 18, 22, 24, 22];
// const s = uniq(studentAges);
// print(studentAges);
// print(studentAges);



// const m = min(studentAges);
// print(m);



// need: pick a number from 18 to 24, inclusive
// const r = random(18,24);
// print(r);
// print(r);
// print(r);
// print(r);

// print(random(18,24));
// print(random(18,24));
// print(random(18,24));
// print(random(18,24));
// print(random(18,24));


// const a = 'qinqin';
// print('qinqin');//没有定义的变量
// const a = random(5,6);
// const b = random(5,6);
// const c = random(5,6);
// print(a);
// print(b);
// print(c);
// print(sum([a, b, c]));
// print("yangyang");
// const d = random(1,6);
// const e = random(1,6);
// const f = random(1,6);
// print(d);
// print(e);
// print(f);
// print(sum([d, e, f]));

//[1, true, "1"]//从零开始




// const g = {
//   "age": 18,
//   "name":  "yangyang",
//   "height": "182cm",
//   "handsome": true
// };
// console.log(g);



// const huahua = "hei"
// const handsome = huahua + "ght";
// print(g[handsome]);



// const gg = {
//   "apple": "red",
//   "pear": "yellow"
// };
// const pear = "yellow";
// print(gg[pear]);
// gg[pear] = "new value";
// print(gg[pear]);
//我想给gg加一个新的属性，叫做name，名字叫做tianyang
// const apple = "name";
// print(gg[apple]);
// gg[apple] = "tianyang";

// gg["sister"] = "qinqin";
// gg.brother = "meimei";//取值赋值

//我想给gg加一个新的属性，叫做age，值是21
// gg.age = 21;
// print(gg);


//object example嘻嘻
// const school = {
//   name: 'tianyang school',
//   students: ['qinqin', 'meimei'],
//   age: 1,
//   teachers: [
//     {name:'tianyang', age: 14},
//     {name:'miaomiao', age: 18}
//   ]
// };



// parameter argument
// constant variable


//函数嘻嘻
// function printNamesHappyCase(yangyang) {//此时是argument
//   console.log("yangyang");//变量常量
//   console.log(a + "yangyang");
//   console.log(a);
//   console.log(a);
//   console.log(a);
//   console.log(a);
//   console.log(a);
//   console.log(a);
//   return 3;
// }

// const result = printNames();
// print(result, 4);
// ok();

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
// console.log(SW.problems[1]);
// print = SW.socialWorker[0];
// const 2 = SW.socialWorker[1];
// print(1);
// random([SW.socialWorker[0],SW.socialWorker[1]])
// random(1,3);
// print(SW.problems[0]);
print(SW.problems[random(0, 2)]);
print(SW.clients[random(0, 1)]);
print(SW.skillsOfIntervention[random(0, 2)]);
print(SW.socialWorker[random(0, 1)]);
// const a = "SW.problems[random(0,2)]";
// print(a);
SW.resourse = ["policy", "volunteer", "fundation"];
//添加新的属性之后要重新print哈
print(SW);



const pickedSW = pick(SW, ["skillsOfIntervention", "socialWorker"]);
//这要打引号的哈//给我选出来的起个名
print(pickedSW);
print(pickedSW);

// version control
// git
// github implementation