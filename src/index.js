/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';

const runEngine = (arr, str) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  const trueArr = arr;
  console.log(str);
  for (const answer of trueArr) {
    console.log(answer[0]);
    const currentAnswer = readlineSync.question('Your answer:');
    if (answer[1] === currentAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${currentAnswer}" is wrong answer ;(. Correct answer was "${answer[1]}".\nLets try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
