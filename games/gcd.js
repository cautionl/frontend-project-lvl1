import {
  randomNum, currentAnswer, getAnswer, congratulation, greatestCommonDivisor,
} from '../src/index.js';

const gcd = () => {
  for (let i = 0; i < 3; i += 1) {
    const oneNum = randomNum();
    const twoNum = randomNum();
    console.log(`${oneNum} ${twoNum}`);
    const currentAns = Number(currentAnswer());
    const answerFuc = greatestCommonDivisor(oneNum, twoNum);
    const trueAns = (answerFuc === currentAns);
    getAnswer(trueAns, currentAns, answerFuc);
    if (!trueAns) {
      return;
    }
  }
  console.log(congratulation);
};

export { gcd };
