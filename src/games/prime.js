import runEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (number, even) => {
  if (even) {
    return [number, 'yes'];
  }
  return [number, 'no'];
};

const generateRound = () => {
  const number = generateRandomNumber(0, 100);
  const even = isPrime(number);
  return getAnswer(number, even);
};

const runPrime = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(generateRound());
  }
  return runEngine(result, description);
};

export default runPrime;
