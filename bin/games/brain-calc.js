#!/usr/bin/env node

import runGame from '../../src/index.js';

// Проверка переменной окружения для включения логов
const isLoggingEnabled = process.env.LOGGING_ENABLED === 'true'; // Логи включены, если переменная окружения установлена в "true"

// Функция для логирования (выводит лог, если isLoggingEnabled = true)
const log = (message) => {
  if (isLoggingEnabled) {
    console.log(message);
  }
};

log('Starting brain-calc game...'); // лог

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

  log(`Generated question: ${question}, correct answer: ${correctAnswer}`); // лог

  return { question, correctAnswer };
};

log('Game description and question generation ready.'); // лог

const startGame = () => {
  log('Starting the game...'); // лог перед запуском игры
  runGame(gameDescription, generateQuestionAndAnswer);
};

startGame();
