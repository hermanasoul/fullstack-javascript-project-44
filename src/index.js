import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (description, generateRound, isLoggingEnabled) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (isLoggingEnabled) {
      console.log(`User  Answer: ${userAnswer}`); // лог на пользователя, выводится только при включенных логах
    }

    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
