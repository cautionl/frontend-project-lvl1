import runEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEven = (num) => (num % 2 === 0);

const getAnswer = (number, even) => {
  if (even) {
    return [number, 'yes'];
  }
  return [number, 'no'];
};

const generateRound = () => {
  const number = generateRandomNumber(0, 100);
  const even = isEven(number);
  return getAnswer(number, even);
};

const runEven = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(generateRound());
  }
  return runEngine(result, description);
};

export default runEven;
