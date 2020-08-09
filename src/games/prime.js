import { randomNum, isPrime, runEngine } from '../index.js';

const dataAcquisition = (result = []) => {
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
};

const runPrime = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    dataAcquisition(result);
  }
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return runEngine(result, description);
};

export default runPrime;
