/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';

const randomNum = (n) => (Math.floor(Math.random() * n));

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

const getArrayProgressions = (n) => {
  const arr = [randomNum(100)];
  const value = randomNum(10);
  for (let i = 0; i < n - 1; i += 1) {
    arr.push(arr[i] + value);
  }
  return arr;
};

const arrayOfUnknown = (arr, index) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr[i]);
    if (i === index) {
      result.pop();
      result.push('..');
    }
  }
  return result.join(' ');
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

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

export {
  randomNum, greatestCommonDivisor, arrayRandElement, getArrayProgressions,
  arrayOfUnknown, isPrime, runEngine,
};
