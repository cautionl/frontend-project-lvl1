import runEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (firstNum, secondNum) => {
  if (secondNum > firstNum) {
    return greatestCommonDivisor(secondNum, firstNum);
  }
  if (!secondNum) {
    return firstNum;
  }
  return greatestCommonDivisor(secondNum, firstNum % secondNum);
};

const generateRound = () => {
  const firstNum = generateRandomNumber(0, 100);
  const secondNum = generateRandomNumber(0, 100);
  const correctAnswer = String(greatestCommonDivisor(firstNum, secondNum));
  return [`${firstNum} ${secondNum}`, correctAnswer];
};

const runGcd = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(generateRound());
  }
  return runEngine(result, description);
};

export default runGcd;
