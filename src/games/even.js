import { randomNum, engine } from '../index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const checkingResponses = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const ranNum = randomNum(100);
    const even = isEven(ranNum);
    let currentArr = [];
    if (even) {
      currentArr = [ranNum, 'yes'];
      result.push(currentArr);
    } if (!even) {
      currentArr = [ranNum, 'no'];
      result.push(currentArr);
    }
  }
  const question = 'Answer "yes" if the number is even, otherwise answer "no".\n';
  return engine(result, question);
};

export default checkingResponses;
