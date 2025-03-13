### Hexlet tests and linter status:
[![Actions Status](https://github.com/hermanasoul/fullstack-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/hermanasoul/fullstack-javascript-project-44/actions)

### Code Climate Maintainability
[![Maintainability](https://api.codeclimate.com/v1/badges/1b7bdd98e58c97f2ed71/maintainability)](https://codeclimate.com/github/hermanasoul/fullstack-javascript-project-44/maintainability)

### Brain-even game
[Link to Ascii.nu example](https://asciinema.org/a/IdHDAU1ab7FBr3H8hTBYVAV3G)

## Game Description

In the Brain Even game, you will need to determine whether a given number is even or odd. For each round, a random number will be presented, and you must respond with "yes" if the number is even, or "no" if it is odd.

## Game Rules
1. The game will show a random number.
2. You need to determine if the number is even or odd.
3. If your answer is incorrect, you will be prompted to try again.
4. The game consists of 3 rounds, and you need to answer correctly in each round.

## How to Start the Game
Make sure you have Node.js installed and the required dependencies.

Install dependencies:

```bash
npm install -g hexlet-code
```

To start the game, run the following command:

```bash
brain-even
```
The game will start immediately, and you will be prompted to enter your name.

## Enable Logs
If you want to enable detailed logs (for debugging or seeing more information), you can run the game with the following command:

```bash
LOGGING_ENABLED=true brain-even
```
## Example Gameplay
```yaml
Running game...
Game description: Answer "yes" if the number is even, otherwise answer "no".
May I have your name? Alex
Hello, Alex!
What is the result of the expression?
Question: 72
Your answer: yes
Correct!
Question: 91
Your answer: no
Correct!
Question: 63
Your answer: no
Correct!
Congratulations, Alex!
```
## Important Commands
`brain-even` — Start the "Even or Odd" game.
`LOGGING_ENABLED=true brain-even` — Start the game with logs enabled (useful for debugging).

### Brain-calc game
[Link to Ascii.nu example](https://asciinema.org/a/nbFlL7CMUmHBVRX9w9MZ4XCba)

## Game Description

In the **Brain Calc** game, you will be solving simple mathematical expressions. Each round, a random expression, such as `72 + 54`, will be presented, and you need to enter the correct result.

## Game Rules

1. The game will show a simple mathematical expression involving addition (`+`), subtraction (`-`), or multiplication (`*`).
2. You need to enter the correct result of the expression.
3. If your answer is wrong, the game will prompt you to try again.
4. The game consists of 3 rounds, and you need to answer correctly in each round.

## How to Start the Game

1. Make sure you have Node.js installed and the `readline-sync` dependency.

Install dependencies:

```bash
npm install -g hexlet-code
```

2. To start the game, run the following command:

```bash
   brain-calc
```
The game will begin immediately, and you'll be prompted to enter your name.

## Enabling Logging
To enable logs (if you need to debug or see detailed information), use the following command:

`LOGGING_ENABLED=true brain-calc`

## Example Gameplay
```yaml
Running game...
Game description: What is the result of the expression?
May I have your name? Alex
Hello, Alex!
What is the result of the expression?
Question: 72 + 54
Your answer: 126
Correct!
Question: 91 - 58
Your answer: 33
Correct!
Question: 63 * 81
Your answer: 5103
Correct!
Congratulations, Alex!
```

## Important Commands
- `brain-calc` — start the calculator game.
- `LOGGING_ENABLED=true brain-calc` — start the game with logs enabled (useful for debugging).

### Brain-GCD Game

[Link to Ascii.nu example](https://asciinema.org/a/OaWhH4p9DDjWHi26TdJdERLyn)
In this game, you will need to find the greatest common divisor (GCD) of two random numbers. You will be presented with a pair of numbers, and your task is to input the correct GCD of those numbers.

## Game rules
1. The game generates two random numbers.
2. You need to enter their greatest common divisor (GCD).
3. If your answer is correct, you will get "Correct!". If it's wrong, you'll get "Wrong answer!" and the game will continue with a new question.

## How to Start the Game

Install dependencies:

```bash
npm install -g hexlet-code
```
To start the game, run the following command:

```bash
brain-gcd
```
The game will start immediately, and you will be prompted to enter your name.

## Enabling Logging
To enable logging for questions and answers, set the environment variable:

```bash
LOGGING_ENABLED=true brain-gcd
```

## Example Gameplay
```yaml
Running game...
Game description: Find the greatest common divisor of given numbers.
May I have your name? John
Hello, John!
Find the greatest common divisor of given numbers.
Question: 7 82
Your answer: 1
Correct!
Question: 40 61
Your answer: 1
Correct!
Congratulations, John!
```

### Brain-progression game

[Link to Ascii.nu example](https://asciinema.org/a/o7JNOHZxLokw7cwZ9It0LO4kb)

## Game Description
In the Brain Progression game, you will be presented with a series of numbers that follow an arithmetic progression. One number will be missing, and you need to find it.

## Game Rules
1. The game will show a sequence of numbers with one number missing, represented as ...
2. You need to identify the missing number in the progression.
3. If your answer is wrong, the game will prompt you to try again.
4. The game consists of 3 rounds, and you need to answer correctly in each round.

## How to Start the Game
Make sure you have Node.js installed and the readline-sync dependency.

# Install dependencies:

```bash
npm install -g hexlet-code
```

# To start the game, run the following command:
```bash
brain-progression
```

The game will begin immediately, and you'll be prompted to enter your name.

## Enabling Logging
To enable logs (if you need to debug or see detailed information), use the following command:

```bash
LOGGING_ENABLED=true brain-progression
```

## Example Gameplay

```yaml
Running game...
Game description: What number is missing in the progression?
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!
```

## Important Commands
`brain-progression` — start the progression game.
`LOGGING_ENABLED=true brain-progression` — start the game with logs enabled (useful for debugging).

### Brain-prime game

[Link to Ascii.nu example](https://asciinema.org/a/ttaWMjr2CxJLcydMgGxdROocc)

## Game Description

In the Brain Prime game, you will be asked whether a given number is prime or not. You need to answer "yes" if the number is prime, or "no" if it is not.

## Game Rules

1. The game will show a number, and you need to determine if it is prime.
2. A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.
3. If your answer is wrong, the game will prompt you to try again.
4. The game consists of 3 rounds, and you need to answer correctly in each round.

## How to Start the Game

Make sure you have Node.js installed and the readline-sync dependency.

# Install dependencies:
```bash
npm install -g hexlet-code
```

# To start the game, run the following command:
```bash
brain-prime
```
The game will begin immediately, and you'll be prompted to enter your name.

## Enabling Logging

To enable logs (if you need to debug or see detailed information), use the following command:

```bash
LOGGING_ENABLED=true brain-prime
```

## Example Gameplay
```yaml
Running game...
Game description: Answer "yes" if the given number is prime. Otherwise answer "no".
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
Question: 8
Your answer: no
Correct!
Question: 15
Your answer: no
Correct!
Congratulations, Sam!
```
## Important Commands
`brain-prime` — start the prime number game.
`LOGGING_ENABLED=true brain-prime` — start the game with logs enabled (useful for debugging).
