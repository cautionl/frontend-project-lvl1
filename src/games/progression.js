import { roundsCount, runEngine } from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getQuestion = (arr, index) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i === index) {
      result.push('..');
    } else {
      result.push(arr[i]);
    }
  }
  return result.join(' ');
};

const generateProgression = (firstElement, step) => {
  const progression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(firstElement + i * step);
  }
  return progression;
};

const generateRound = () => {
  const firstElement = generateNumber(1, 20);
  const step = generateNumber(1, 20);
  const progression = generateProgression(firstElement, step);
  const indexArr = generateNumber(0, progression.length - 1);
  const question = getQuestion(progression, indexArr);
  const answer = String(progression[indexArr]);
  return [question, answer];
};

const runProgression = () => {
  const result = [];
  for (let i = 0; i < roundsCount; i += 1) {
    result.push(generateRound());
  }
  return runEngine(result, description);
};

export default runProgression;
