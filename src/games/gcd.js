import runEngine from '../index.js';
import randomNum from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (firstNum, secondNum) => {
  let minVal = 0;
  const arrVal = [];
  if (firstNum > secondNum) {
    minVal = secondNum;
  } else minVal = firstNum;
  for (let i = 0; i <= minVal; i += 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      arrVal.push(i);
    }
  }
  return arrVal.pop();
};

const acquisitionData = (result = []) => {
  const firstNum = randomNum(100);
  const secondNum = randomNum(100);
  const answerFuc = String(greatestCommonDivisor(firstNum, secondNum));
  const data = [`${firstNum} ${secondNum}`, answerFuc];
  return result.push(data);
};

const runGcd = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    acquisitionData(result);
  }
  return runEngine(result, description);
};

export default runGcd;
