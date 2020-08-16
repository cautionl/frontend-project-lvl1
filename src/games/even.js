import runEngine from '../index.js';
import randomNum from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEven = (num) => (num % 2 === 0);

const generatingRound = () => {
  const number = randomNum(100);
  const even = isEven(number);
  const dataOfround = [number];
  if (even) {
    dataOfround.push('yes');
  } else {
    dataOfround.push('no');
  }
  return dataOfround;
};

const runEven = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(generatingRound());
  }
  return runEngine(result, description);
};

export default runEven;
