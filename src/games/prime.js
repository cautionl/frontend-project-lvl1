import { roundsCount, runEngine } from '../index.js';
import { generateNumber } from '../utils.js';

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

const generateRound = () => {
  const question = generateNumber(1, 20);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const runPrime = () => {
  const result = [];
  for (let i = 0; i < roundsCount; i += 1) {
    result.push(generateRound());
  }
  return runEngine(result, description);
};

export default runPrime;
