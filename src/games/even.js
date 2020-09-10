import { roundsCount, runEngine } from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRoundData = () => {
  const question = generateNumber(1, 20);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const runEven = () => {
  const result = [];
  for (let i = 0; i < roundsCount; i += 1) {
    result.push(generateRoundData());
  }
  return runEngine(result, description);
};

export default runEven;
