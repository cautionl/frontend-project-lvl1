import runEngine from '../index.js';
import randomNum from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const acquisitionData = (result = []) => {
  const number = randomNum(100);
  const even = isPrime(number);
  const data = [number];
  if (even) {
    data.push('yes');
  } else {
    data.push('no');
  }
  result.push(data);
};

const runPrime = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    acquisitionData(result);
  }
  return runEngine(result, description);
};

export default runPrime;
