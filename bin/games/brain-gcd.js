#!/usr/bin/env node

import runGame from '../../src/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  let a = Math.abs(x);
  let b = Math.abs(y);

  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return a;
};

const generateQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;

  if (process.env.LOGGING_ENABLED === 'true') {
    console.log(`Generated numbers: ${num1}, ${num2}`);
  }

  const correctAnswer = String(gcd(num1, num2));

  if (process.env.LOGGING_ENABLED === 'true') {
    console.log(`Generated question: ${num1} ${num2}, correct answer: ${correctAnswer}`);
  }

  return {
    question: `${num1} ${num2}`,
    correctAnswer,
  };
};

const startGame = () => {
  if (process.env.LOGGING_ENABLED === 'true') {
    console.log('Starting the game...');
  }

  runGame(gameDescription, generateQuestionAndAnswer);
};

startGame();
