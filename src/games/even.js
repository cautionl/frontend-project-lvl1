import runEngine from '../index.js';
import { generateRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const generateRound = () => {
  const question = generateRandomNumber(1, 20);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const runEven = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(generateRound());
  }
  return runEngine(result, description);
};

export default runEven;
