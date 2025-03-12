#!/usr/bin/env node

import runGame from '../../src/index.js';

console.log('Starting brain-calc game...'); // лог

const gameDescription = 'What is the result of the expression?';

const generateQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  const question = `${num1} ${operation} ${num2}`;
  let correctAnswer;

  switch (operation) {
    case '+':
      correctAnswer = String(num1 + num2);
      break;
    case '-':
      correctAnswer = String(num1 - num2);
      break;
    case '*':
      correctAnswer = String(num1 * num2);
      break;
    default:
      throw new Error('Unknown operation');
  }

  console.log(`Generated question: ${question}, correct answer: ${correctAnswer}`); // лог

  return { question, correctAnswer };
};

console.log('Game description and question generation ready.'); // лог

const startGame = () => {
  console.log('Starting the game...'); // лог перед запуском игры
  runGame(gameDescription, generateQuestionAndAnswer);
};

startGame();

export default startGame;
