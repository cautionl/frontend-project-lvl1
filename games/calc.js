/* eslint-disable import/prefer-default-export */
import {
  randomNum, currentAnswer, getAnswer, congratulation, arrayRandElement,
} from '../src/index.js';

const arrSymbol = ['+', '-', '*'];

const calc = () => {
  for (let i = 0; i < 3; i += 1) {
    const currentStr = `${randomNum(100)}${arrayRandElement(arrSymbol)}${randomNum(100)}`;
    console.log(currentStr);
    const currentAns = Number(currentAnswer());
    // eslint-disable-next-line no-eval
    const currentNum = eval(currentStr);
    const trueAns = (currentAns === currentNum);
    getAnswer(trueAns, currentAns, currentNum);
    if (!trueAns) {
      return;
    }
  }
  console.log(congratulation);
};

export { calc };