/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';

const runEngine = (dataForRounds, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(description);
  for (const [question, answer] of dataForRounds) {
    console.log(`Question: ${question}`);
    const currentAnswer = readlineSync.question('Your answer:');
    if (answer !== currentAnswer) {
      console.log(`"${currentAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Lets try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
