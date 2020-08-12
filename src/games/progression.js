import runEngine from '../index.js';
import randomNum from '../utils.js';

const description = 'What number is missing in the progression?';

const arrayOfUnknown = (arr, index) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr[i]);
    if (i === index) {
      result.pop();
      result.push('..');
    }
  }
  return result.join(' ');
};

const getArrayProgressions = (n) => {
  const arr = [randomNum(100)];
  const number = randomNum(10);
  for (let i = 0; i < n - 1; i += 1) {
    arr.push(arr[i] + number);
  }
  return arr;
};

const acquisitionData = (result = []) => {
  const arr = getArrayProgressions(10);
  const indexArr = randomNum(arr.length - 1);
  const arrOutput = arrayOfUnknown(arr, indexArr);
  const valueArrIndex = String(arr[indexArr]);
  const data = [arrOutput, valueArrIndex];
  result.push(data);
};

const runProgression = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    acquisitionData(result);
  }
  return runEngine(result, description);
};

export default runProgression;
