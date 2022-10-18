const { add } = require("./math/add");
const { subtract } = require("./math/subtract");
const { getRandomNumber } = require("./getRandomNumber");

module.exports = {
  add,
  subtract,
  getRandomNumber,
  getTwentyOne: () => 21,
};
