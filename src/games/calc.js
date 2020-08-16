import runEngine from '../index.js';
import randomNum from '../utils.js';

const description = 'What is the result of the expression?\n';
const mathematicalSigns = ['+', '-', '*'];

const getArrayRandElement = (arr = []) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const calculate = (currentMathSingn, firstNum, secondNum) => {
  switch (currentMathSingn) {
    case '-':
      return String(firstNum - secondNum);
    case '+':
      return String(firstNum + secondNum);
    case '*':
      return String(firstNum * secondNum);
    default:
      break;
  }
};

const generatingRound = () => {
  let dataOfRound = [];
  const firstNum = randomNum(100);
  const secondNum = randomNum(100);
  const currentMathSingn = getArrayRandElement(mathematicalSigns);
  const question = `${firstNum}${currentMathSingn}${secondNum}`;
  const correctAnswer = calculate(currentMathSingn, firstNum, secondNum);
  dataOfRound = [question, correctAnswer];
  return dataOfRound;
};

const runCalc = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(generatingRound());
  }
  return runEngine(result, description);
};

export default runCalc;
