import readlineSync from 'readline-sync';

let userName = '';

export const greeting = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const invertedAns = (answer = '') => (answer !== 'yes' ? 'yes' : 'no');

const Ans = (even) => (even === true ? 'yes' : 'no');

export const checkingResponses = () => {
  for (let i = 0; i < 3;) {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer:');
    const even = isEven(randomNum);
    const trueNum = (even === true && answer === 'yes');
    const falseNum = (even === false && answer === 'no');
    const strange = (answer !== 'yes' && answer !== 'no');
    if (strange) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${Ans(even)}".\nLets try again, ${userName}!`);
      return;
    }
    if (trueNum || falseNum) {
      console.log('Correct!');
      i += 1;
    } else if (!trueNum || !falseNum) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${invertedAns(answer)}".\nLets try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
