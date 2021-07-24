const { loveLetter } = require('./features/loveLetter');

main();

function main() {
  loveLetter();
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

// 个人信息 天气 嘘寒问暖 每天 动态