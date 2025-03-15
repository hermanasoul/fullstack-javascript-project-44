#!/usr/bin/env node

import runGame from '../../src/index.js';

const isLoggingEnabled = process.env.LOGGING_ENABLED === 'true';

const gameDescription = 'What number is missing in the progression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(2, 5);
  const length = 10;

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  const missingIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[missingIndex]);
  progression[missingIndex] = '..';

  if (isLoggingEnabled) {
    console.log(`Generated start: ${start}, step: ${step}, length: ${length}`);
    console.log(`Progression array: ${progression.join(', ')}`);
  }

  return {
    question: progression.join(' '), // возвращаем только вопрос
    correctAnswer,
  };
};

/* const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    // всегда показываем правильный ответ, если пользователь ошибся
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
}; */

const startGame = () => {
  if (isLoggingEnabled) {
    console.log('Starting the game...');
  }
  runGame(gameDescription, generateRound, isLoggingEnabled);
};

startGame();

export default startGame;
