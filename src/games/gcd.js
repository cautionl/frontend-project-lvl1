import { roundsCount, runEngine } from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (firstNum, secondNum) => {
  if (!secondNum) return firstNum;
  return greatestCommonDivisor(secondNum, firstNum % secondNum);
};

const generateRoundData = () => {
  const firstNum = generateNumber(1, 20);
  const secondNum = generateNumber(1, 20);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(greatestCommonDivisor(firstNum, secondNum));
  return [question, answer];
};

const runGcd = () => {
  const result = [];
  for (let i = 0; i < roundsCount; i += 1) {
    result.push(generateRoundData());
  }
  return runEngine(result, description);
};

export default runGcd;
