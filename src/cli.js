import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
};
