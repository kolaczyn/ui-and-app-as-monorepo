const {
  helloWorld,
  byeWorld,
  greeter,
  getSumOfTwoRandomNumber,
} = require("@yarn-workspaces/admin-frontend");

const handleFrontend = () => {
  helloWorld();
  greeter("Paweł");
  byeWorld();
};

const handleClick = () => {
  console.log(getSumOfTwoRandomNumber());
};

handleFrontend();
handleClick();
