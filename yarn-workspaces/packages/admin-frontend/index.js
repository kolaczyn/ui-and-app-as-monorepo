const helloWorld = () => {
  console.log("hello world");
};

const byeWorld = () => {
  console.log("bye world");
};

const greeter = (name) => {
  console.log(`hello ${name}`);
};

module.exports = { helloWorld, byeWorld, greeter };
