import runEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'What is the result of the expression?\n';
const operators = ['+', '-', '*'];

const calculate = (operator, firstNum, secondNum) => {
  switch (operator) {
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

const generateRound = () => {
  const firstNum = generateRandomNumber(0, 100);
  const secondNum = generateRandomNumber(0, 100);
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  const question = `${firstNum}${operator}${secondNum}`;
  const correctAnswer = calculate(operator, firstNum, secondNum);
  return [question, correctAnswer];
};

const runCalc = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(generateRound());
  }
  return runEngine(result, description);
};

export default runCalc;
