#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const isEven = (number) => number % 2 === 0;

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = getRandomNumber();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

runGame();
