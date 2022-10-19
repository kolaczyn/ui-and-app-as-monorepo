import { getRandomNumber } from "./getRandomNumber";
import { add } from "./math/add";

export const getSumOfTwoRandomNumbers = () => add(getRandomNumber(), 200);
