### Hexlet tests and linter status:
[![Actions Status](https://github.com/hermanasoul/fullstack-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/hermanasoul/fullstack-javascript-project-44/actions)

### Code Climate Maintainability
[![Maintainability](https://api.codeclimate.com/v1/badges/1b7bdd98e58c97f2ed71/maintainability)](https://codeclimate.com/github/hermanasoul/fullstack-javascript-project-44/maintainability)

### Brain-even game
[Link to Ascii.nu example](https://asciinema.org/a/IdHDAU1ab7FBr3H8hTBYVAV3G)

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
2. To start the game, run the following command:

   ```bash
   brain-calc
The game will begin immediately, and you'll be prompted to enter your name.

To enable logs (if you need to debug or see detailed information), use the following command:

`LOGGING_ENABLED=true brain-calc`

## Example Gameplay
```Running game...
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
Congratulations, Alex! You won!```

## Important Commands
- brain-calc — start the calculator game.
- LOGGING_ENABLED=true brain-calc — start the game with logs enabled (useful for debugging).
