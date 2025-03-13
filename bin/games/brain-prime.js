#!/usr/bin/env node

import runGame from '../../src/index.js';

const isLoggingEnabled = process.env.LOGGING_ENABLED === 'true';

if (isLoggingEnabled) {
  console.log('Starting brain-prime game...'); // лог
}

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNumber = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  if (isLoggingEnabled) {
    console.log(`Generated number: ${number}`); // лог
  }
  return number;
};

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question: number.toString(), correctAnswer };
};

const startGame = () => {
  if (isLoggingEnabled) {
    console.log('Starting the game...'); // лог перед запуском игры
  }
  runGame(gameDescription, generateQuestionAndAnswer);
};

export default startGame;
