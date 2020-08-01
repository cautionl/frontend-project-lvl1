/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-mutable-exports
let userName = '';
let congratulation = '';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  congratulation = `Congratulations, ${userName}!`;
  console.log(`Hi ${userName}!`);
};

const randomNum = () => (Math.floor(Math.random() * 100));

const currentAnswer = () => {
  const answer = readlineSync.question('Your answer:');
  return answer;
};

const getAnswer = (value, answer, fuc) => {
  if (value) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${fuc}".\nLets try again, ${userName}!`);
  }
};

const greatestCommonDivisor = (one, two) => {
  let minVal = 0;
  const arrVal = [];
  if (one > two) {
    minVal = two;
  } else minVal = one;
  for (let i = 0; i <= minVal; i += 1) {
    if (one % i === 0 && two % i === 0) {
      arrVal.push(i);
    }
  }
  return arrVal.pop();
};

const arrayRandElement = (arr = []) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

export {
  userName, greeting, randomNum, currentAnswer, getAnswer, congratulation, greatestCommonDivisor,
  arrayRandElement,
};
