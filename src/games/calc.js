import runEngine from '../index.js';
import randomNum from '../utils.js';

const description = 'What is the result of the expression?\n';
const mathematicalSigns = ['+', '-', '*'];

const arrayRandElement = (arr = []) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const figuringOutMathOperations = (firstNum, secondNum, currentMathSingn) => {
  switch (currentMathSingn) {
    case '-':
      return String(firstNum - secondNum);
    case '+':
      return String(firstNum + secondNum);
    case '*':
      return String(firstNum * secondNum);
    default:
      return undefined;
  }
};

const acquisitionData = (arr = []) => {
  let currentArr = [];
  const firstNum = randomNum(100);
  const secondNum = randomNum(100);
  const currentMathSingn = arrayRandElement(mathematicalSigns);
  const question = `${firstNum}${currentMathSingn}${secondNum}`;
  const resultMathOperation = figuringOutMathOperations(firstNum, secondNum, currentMathSingn);
  currentArr = [question, resultMathOperation];
  arr.push(currentArr);
};

const runCalc = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    acquisitionData(result);
  }
  return runEngine(result, description);
};

export default runCalc;
