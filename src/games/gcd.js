import { randomNum, greatestCommonDivisor, runEngine } from '../index.js';

const dataAcquisition = (result = []) => {
  const oneNum = randomNum(100);
  const twoNum = randomNum(100);
  const answerFuc = String(greatestCommonDivisor(oneNum, twoNum));
  const currentArr = [`${oneNum} ${twoNum}`, answerFuc];
  result.push(currentArr);
};

const runGcd = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    dataAcquisition(result);
  }
  const description = 'Find the greatest common divisor of given numbers.';
  return runEngine(result, description);
};

export default runGcd;
