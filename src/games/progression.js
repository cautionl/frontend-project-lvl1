import {
  randomNum, arrayOfUnknown, getArrayProgressions, runEngine,
} from '../index.js';

const dataAcquisition = (result = []) => {
  const arr = getArrayProgressions(10);
  const indexArr = randomNum(arr.length - 1);
  const arrOutput = arrayOfUnknown(arr, indexArr);
  const valueArrIndex = String(arr[indexArr]);
  const currentArr = [arrOutput, valueArrIndex];
  result.push(currentArr);
};

const runProgression = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    dataAcquisition(result);
  }
  const description = 'What number is missing in the progression?';
  return runEngine(result, description);
};

export default runProgression;
