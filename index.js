const { loveLetter } = require('./features/loveLetter');

main();

async function main() {
  await loveLetter();
}

// 选美大赛功能
// Task1.1: 将选美大赛女生人数改成1万个。
// Task1.2: 将选美大赛过滤条件有没有男朋友移除掉。
// Task1.3: 产生美女的时候，身高在140-200cm间随机取值。
// Task1.4: 选美大赛是基于selectBeauty的第一个feature，为了开始写第二个feature，请将audition refactor到另外一个文件

// 情书功能
// Task2.1: 我们开始做第二个feature。情书功能。请创建一个文件，叫做loveLetter.js
// Task2.2: 在loveLetter里创建一个loveLetter函数，这个函数会产生一个美女，并且print出来。请在main里使用loveLetter函数，并且删掉audition函数，因为我们先把选美比赛功能放一边儿。
// Task2.3：请写一个函数，根据美女的信息，表达对她的爱意。
// Task2.4：在selectBeauty时加入美女地址信息。
// Task2.5：使用API（需要老师备课准备好天气API），获取实时美女位置的天气，并且加入到情书里。
// Task2.6：如果不是会员，在情书下面打小广告；如果是会员，能够使用天气API的功能，并且情书更加真挚。

// 个人信息 天气 嘘寒问暖 每天 动态

// 用户个人偏好功能
// 3.1：用户选择以哪些为标准，根据用户喜好从object里选择属性属性。再根据属性写情书。
// 问题：怎么只给没有男朋友的发情书？

// Task 3.1 populateDatabase


// 7.30练习
// 练习一：使用futureWeather函数提取其中的信息并且写成关心的话
// 练习二：通过更多的数据库的采样，了解天气都会返回哪些值，然后使用if-else填写更为个性化的关心的话
// 练习三：通过让主函数连接到feature-populateDatabase，从而在数据库中加入100个元素，然后里面的地理位置更加多元化