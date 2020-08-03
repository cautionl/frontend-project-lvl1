import { randomNum, isPrime, engine } from '../index.js';

const prime = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const ranNum = randomNum(100);
    const even = isPrime(ranNum);
    let currentArr = [];
    if (even) {
      currentArr = [ranNum, 'yes'];
      result.push(currentArr);
    } if (!even) {
      currentArr = [ranNum, 'no'];
      result.push(currentArr);
    }
  }
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return engine(result, question);
};

export default prime;
