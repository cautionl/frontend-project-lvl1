import runEngine from '../index.js';
import { generateRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (firstNum, secondNum) => {
  if (secondNum > firstNum) return greatestCommonDivisor(secondNum, firstNum);
  if (!secondNum) return firstNum;
  return greatestCommonDivisor(secondNum, firstNum % secondNum);
};

const generateRound = () => {
  const firstNum = generateRandomNumber(1, 20);
  const secondNum = generateRandomNumber(1, 20);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(greatestCommonDivisor(firstNum, secondNum));
  return [question, answer];
};

const runGcd = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(generateRound());
  }
  return runEngine(result, description);
};

export default runGcd;
