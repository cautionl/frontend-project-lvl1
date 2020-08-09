import { randomNum, runEngine } from '../index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const dataAcquisition = (result = []) => {
  const ranNum = randomNum(100);
  const even = isEven(ranNum);
  let currentArr = [];
  if (even) {
    currentArr = [ranNum, 'yes'];
    result.push(currentArr);
  } if (!even) {
    currentArr = [ranNum, 'no'];
    result.push(currentArr);
  }
};

const runEven = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    dataAcquisition(result);
  }
  const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';
  return runEngine(result, description);
};

export default runEven;
