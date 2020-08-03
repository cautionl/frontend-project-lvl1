import {
  randomNum, arrayOfUnknown, getArrayProgressions, engine,
} from '../index.js';

const progression = () => {
  console.log('What number is missing in the progression?');
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const arr = getArrayProgressions(10);
    const indexArr = randomNum(arr.length - 1);
    const arrOutput = arrayOfUnknown(arr, indexArr);
    const valueArrIndex = String(arr[indexArr]);
    const currentArr = [arrOutput, valueArrIndex];
    result.push(currentArr);
  }
  const question = 'What number is missing in the progression?';
  return engine(result, question);
};

export default progression;
