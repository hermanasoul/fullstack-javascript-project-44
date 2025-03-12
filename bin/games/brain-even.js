#!/usr/bin/env node

import runGame from '../../src/index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return { question: number.toString(), correctAnswer };
};

const startGame = () => {
  runGame(gameDescription, generateQuestionAndAnswer);
};

export default startGame;
