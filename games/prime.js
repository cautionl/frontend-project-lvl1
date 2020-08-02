import {
  userName, randomNum, currentAnswer, getAnswer, congratulation, isPrime, invertedAns, Ans,
} from '../src/index.js';

const prime = () => {
  for (let i = 0; i < 3; i += 1) {
    const ranNum = randomNum(100);
    console.log(`Question: ${ranNum}`);
    const answer = currentAnswer();
    const even = isPrime(ranNum);
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

export { prime };
