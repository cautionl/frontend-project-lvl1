import runEngine from '../index.js';
import randomNum from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEven = (num) => (num % 2 === 0);

const acquisitionData = (result = []) => {
  const number = randomNum(100);
  const even = isEven(number);
  const data = [number];
  if (even) {
    data.push('yes');
  } else {
    data.push('no');
  }
  result.push(data);
};

const runEven = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    acquisitionData(result);
  }
  return runEngine(result, description);
};

export default runEven;
