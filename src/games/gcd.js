import { randomNum, greatestCommonDivisor, engine } from '../index.js';

const gcd = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const oneNum = randomNum(100);
    const twoNum = randomNum(100);
    const answerFuc = String(greatestCommonDivisor(oneNum, twoNum));
    const currentArr = [`${oneNum} ${twoNum}`, answerFuc];
    result.push(currentArr);
  }
  const question = 'Find the greatest common divisor of given numbers.';
  return engine(result, question);
};

export default gcd;
