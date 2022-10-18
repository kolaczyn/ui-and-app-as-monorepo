const {
  helloWorld,
  byeWorld,
  greeter,
} = require("@yarn-workspaces/admin-frontend");

const handleFrontend = () => {
  helloWorld();
  greeter("Paweł");
  byeWorld();
};

handleFrontend();
