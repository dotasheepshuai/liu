const { random } = require('lodash');
const { print } = require('../utils/print');
// const { selectBeauty } = require('../services/selectBeauty');
const { db_query } = require('../db/db');
const { db_list } = require('../db/db');
const { getWeather, getFutureWeather } = require('../services/weather');

module.exports = {
 loveLetter
}


async function loveLetter() {
  print(" 我们正在运行情书功能哟。");

 const beautyId = (await db_list())[3];
 const beauty = await db_query(beautyId);
  print(beauty);

  print(sayHi(beauty));
  print(selfInroduction());
  print(theReasons(beauty));
  print(theProposal(beauty));
  print(await theCaring(beauty));
  // const future = await getFutureWeather('Beijing');
  // print(future);
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
 return("因为你的资料上显示，你的身高是" + beauty.height + "再配上你的体重" + beauty.weight + "是我非常欣赏的健康身材。");
}

function theProposal(beauty){
  let proposal;

    if (beauty.gpa >= 80) {
   proposal = "况且你成绩有" + beauty.gpa + "，" + "因此我想向你学习。";

   } else {
    proposal = "能给我一个机会一起和你成长吗？";
   }

 return proposal;
}

async function theCaring(beauty){
  const girlCity = beauty.hometown;
  const girlWeather = await getWeather(girlCity);
  const usefulMessage = girlWeather.weather[0].description;
  //print(usefulMessage);

  let caringWords = "刚刚查了你们那里的天气是" + usefulMessage + "。" ;

  if (usefulMessage == '多云') {
     caringWords+= "可能会下雨记得带伞哟。" ;

   } else {
     caringWords+= "如果太阳很大就避免暴晒小心中暑。";
   }

 return caringWords;
}