/* eslint-disable import/prefer-default-export */
import {
  userName, randomNum, currentAnswer, getAnswer, congratulation, invertedAns, Ans,
} from '../src/index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const checkingResponses = () => {
  for (let i = 0; i < 3; i += 1) {
    const ranNum = randomNum(100);
    console.log(`Question: ${ranNum}`);
    const answer = currentAnswer();
    const even = isEven(ranNum);
    const trueNum = (even === true && answer === 'yes');
    const falseNum = (even === false && answer === 'no');
    const strange = (answer !== 'yes' && answer !== 'no');
    if (strange) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${Ans(even)}".\nLets try again, ${userName}!`);
      return;
    }
    getAnswer(trueNum || falseNum, answer, invertedAns(answer));
    if (!trueNum && !falseNum) {
      return;
    }
  }
  console.log(congratulation);
};

export { checkingResponses };
