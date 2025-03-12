import readlineSync from 'readline-sync';
import { getRandomInt } from '../utils.js';

const DESCRIPTION = 'Найди число, которое пропущено в арифметической прогрессии.';

const generateProgression = () => {
  const start = getRandomInt(1, 10);
  const step = getRandomInt(2, 5);
  const length = 10;

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + step * i);
  }

  const missingIndex = getRandomInt(0, length - 1);
  const answer = progression[missingIndex];
  progression[missingIndex] = '..';

  return { progression: progression.join(' '), answer: String(answer) };
};

export const runGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log(DESCRIPTION);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const { progression, answer } = generateProgression();
    console.log(`Question: ${progression}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`${userAnswer} is wrong. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
