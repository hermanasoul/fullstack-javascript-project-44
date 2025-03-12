#!/usr/bin/env node

import runGame from '../../src/index.js';

// Логирование
const isLoggingEnabled = process.env.LOGGING_ENABLED === 'true';

if (isLoggingEnabled) {
  console.log('Starting brain-even game...'); // лог
}

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  
  if (isLoggingEnabled) {
    console.log(`Generated random number: ${number}`); // лог
  }

  return number;
};

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  if (isLoggingEnabled) {
    console.log(`Generated question: ${number}, correct answer: ${correctAnswer}`); // лог
  }

  return { question: number.toString(), correctAnswer };
};

if (isLoggingEnabled) {
  console.log('Game description and question generation ready.'); // лог
}

const startGame = () => {
  if (isLoggingEnabled) {
    console.log('Starting the game...'); // лог перед запуском игры
  }
  runGame(gameDescription, generateQuestionAndAnswer);
};

startGame(); // запуск игры

export default startGame;
