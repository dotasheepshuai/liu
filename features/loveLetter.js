const { random } = require('lodash');
const { print } = require('../utils/print');
const { selectBeauty } = require('../services/selectBeauty');

module.exports = {
 loveLetter
}



function loveLetter() {
  print(" 我们正在运行情书功能哟。");

  const beauty = selectBeauty();
  print(beauty);

  print(sayHi(beauty));
  print(selfInroduction());
  print(theReasons(beauty));
  print(theProposal(beauty));
 

}

//1. function 打招呼
//2.自我介绍
//3.理由
//4.提议

function sayHi(beauty){
 return("你好啊，" + beauty.age + "岁的" + beauty.name + "。");
}

function selfInroduction(){
 return("我是黑大帅，很高兴认识你。");
}

function theReasons(beauty){
 return("听说你身高" + beauty.height +"体重" + beauty.weight + "。" + "刚好是我心仪的样子,嘻嘻。");
}

function theProposal(beauty){
  let proposal;

    if (beauty.gpa >= 70) {
   proposal = "况且你成绩有" + beauty.gpa + "，" + "因此我想向你学习。";

  } else {
    proposal = "能给我一个机会一起和你成长吗？";
  }

 return proposal;
}