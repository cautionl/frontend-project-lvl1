import { randomNum, arrayRandElement, runEngine } from '../index.js';

const arrSymbol = ['+', '-', '*'];

const dataAcquisition = (arr = []) => {
  let currentArr = [];
  const oneNum = randomNum(100);
  const twoNum = randomNum(100);
  const currentSym = arrayRandElement(arrSymbol);
  const currentStr = `${oneNum}${currentSym}${twoNum}`;
  if (currentSym === '-') {
    currentArr = [currentStr, String(oneNum - twoNum)];
    arr.push(currentArr);
  } if (currentSym === '+') {
    currentArr = [currentStr, String(oneNum + twoNum)];
    arr.push(currentArr);
  } if (currentSym === '*') {
    currentArr = [currentStr, String(oneNum * twoNum)];
    arr.push(currentArr);
  }
};

const runCalc = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    dataAcquisition(result);
  }
  const description = 'What is the result of the expression?\n';
  return runEngine(result, description);
};

export default runCalc;
