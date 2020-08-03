import { randomNum, arrayRandElement, engine } from '../index.js';

const arrSymbol = ['+', '-', '*'];

const calc = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    let currentArr = [];
    const oneNum = randomNum(100);
    const twoNum = randomNum(100);
    const currentSym = arrayRandElement(arrSymbol);
    const currentStr = `${oneNum}${currentSym}${twoNum}`;
    if (currentSym === '-') {
      currentArr = [currentStr, String(oneNum - twoNum)];
      result.push(currentArr);
    } if (currentSym === '+') {
      currentArr = [currentStr, String(oneNum + twoNum)];
      result.push(currentArr);
    } if (currentSym === '*') {
      currentArr = [currentStr, String(oneNum * twoNum)];
      result.push(currentArr);
    }
  }
  const question = 'What is the result of the expression?\n';
  return engine(result, question);
};

export default calc;
