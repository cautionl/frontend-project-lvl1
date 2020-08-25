import runEngine from '../index.js';
import { generateRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

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

const generateProgression = (arr, number) => {
  for (let i = 0; i < 9; i += 1) {
    arr.push(arr[i] + number);
  }
  return arr;
};

const generateRound = () => {
  const firstElementProgression = [generateRandomNumber(1, 20)];
  const progressionStep = generateRandomNumber(1, 20);
  const progression = generateProgression(firstElementProgression, progressionStep);
  const indexArr = generateRandomNumber(0, progression.length - 1);
  const question = getQuestion(progression, indexArr);
  const answer = String(progression[indexArr]);
  return [question, answer];
};

const runProgression = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(generateRound());
  }
  return runEngine(result, description);
};

export default runProgression;
