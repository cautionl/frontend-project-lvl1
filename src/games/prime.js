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

const generatingRound = () => {
  const number = randomNum(100);
  const even = isPrime(number);
  const dataOfRound = [number];
  if (even) {
    dataOfRound.push('yes');
  } else {
    dataOfRound.push('no');
  }
  return dataOfRound;
};

const runPrime = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(generatingRound());
  }
  return runEngine(result, description);
};

export default runPrime;
