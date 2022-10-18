const { getRandomNumber, add } = require("@yarn-workspaces/utils");

const helloWorld = () => {
  console.log("hello world");
};

const byeWorld = () => {
  console.log("bye world");
};

const greeter = (name) => {
  console.log(`hello ${name}`);
};

const getSumOfTwoRandomNumber = () => add(getRandomNumber(), getRandomNumber());

module.exports = { helloWorld, byeWorld, greeter, getSumOfTwoRandomNumber };
