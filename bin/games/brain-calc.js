import runGame from '../src/index.js';

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

  return { question, correctAnswer };
};

const startGame = () => {
  runGame(gameDescription, generateQuestionAndAnswer);
};

export default startGame;
