import runEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const createArrayUnknown = (arr, index) => {
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

const creatingProgression = (n) => {
  const arr = [generateRandomNumber(0, 100)];
  const number = generateRandomNumber(0, 10);
  for (let i = 0; i < n - 1; i += 1) {
    arr.push(arr[i] + number);
  }
  return arr;
};

const generateRound = () => {
  const arr = creatingProgression(10);
  const indexArr = generateRandomNumber(0, arr.length - 1);
  const question = createArrayUnknown(arr, indexArr);
  const correctAnswer = String(arr[indexArr]);
  return [question, correctAnswer];
};

const runProgression = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(generateRound());
  }
  return runEngine(result, description);
};

export default runProgression;
