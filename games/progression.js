import {
  randomNum, currentAnswer, getAnswer, congratulation, arrayOfUnknown, getArrayProgressions,
} from '../src/index.js';

const progression = () => {
  for (let i = 0; i < 3; i += 1) {
    const arr = getArrayProgressions(10);
    const indexArr = randomNum(arr.length - 1);
    const valueArrIndex = arr[indexArr];
    console.log(arrayOfUnknown(arr, indexArr));
    const currentAns = Number(currentAnswer());
    const trueAns = (valueArrIndex === currentAns);
    getAnswer(trueAns, currentAns, valueArrIndex);
    if (!trueAns) {
      return;
    }
  }
  console.log(congratulation);
};

export { progression };
