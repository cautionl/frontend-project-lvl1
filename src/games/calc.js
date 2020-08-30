import { roundsCount, runEngine } from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

// eslint-disable-next-line consistent-return
const calculate = (operator, firstNum, secondNum) => {
  switch (operator) {
    case '-':
      return firstNum - secondNum;
    case '+':
      return firstNum + secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      break;
  }
};

const generateRound = () => {
  const firstNum = generateNumber(1, 20);
  const secondNum = generateNumber(1, 20);
  const operatorIndex = generateNumber(0, operators.length - 1);
  const operator = operators[operatorIndex];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = String(calculate(operator, firstNum, secondNum));
  return [question, correctAnswer];
};

const runCalc = () => {
  const result = [];
  for (let i = 0; i < roundsCount; i += 1) {
    result.push(generateRound());
  }
  return runEngine(result, description);
};

export default runCalc;
