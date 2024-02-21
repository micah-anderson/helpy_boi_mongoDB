#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

import { commandsForLearning } from "./commandsForLearning.js"; // Importing the commandsForLearning object

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "Welcome to the MongoDB Mastery Game! \n"
  );
  await sleep();
  rainbowTitle.stop();

  console.log(`
        ${chalk.bgBlue("HOW TO PLAY")} 
        You will learn MongoDB commands through interaction.
        After each question, you'll have the chance to type the correct command.
        Let's start your journey to becoming a MongoDB Master!
    `);
}

async function askName() {
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What is your name?",
    default() {
      return "Player";
    },
  });

  playerName = answers.player_name;
}

async function handleAnswer(isCorrect, command, explanation) {
  const spinner = createSpinner("Checking answer...").start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `That's correct, ${playerName}!` });
  } else {
    spinner.error({
      text: `Nice try, ${playerName}! Let's try typing the correct command.`,
    });
  }

  const { typed_command } = await inquirer.prompt({
    name: "typed_command",
    type: "input",
    message: `Type the correct command:\n${chalk.yellow(command)}\n`,
  });

  if (typed_command === command) {
    console.log(chalk.green(`Perfect! That's it: ${command}`));
  } else {
    console.log(
      chalk.red(
        `The correct command was: ${command}. But that's okay, let's keep learning!`
      )
    );
  }

  console.log(chalk.blue(`Explanation: ${explanation}`));
  await inquirer.prompt({
    name: "continue",
    type: "confirm",
    message: "Press enter to continue...",
  });
}

async function askQuestion(questionObj) {
  let { answer } = await inquirer.prompt({
    name: "answer",
    type: "confirm",
    message: questionObj.question,
  });

  // Assuming all answers are 'yes' for simplicity
  await handleAnswer(answer, questionObj.command, questionObj.explanation);
}

async function levelQuestions(level) {
  for (let questionObj of commandsForLearning[level]) {
    await askQuestion(questionObj);
  }
}

async function selectLevel() {
  const { level } = await inquirer.prompt({
    name: "level",
    type: "rawlist",
    message: "Select your MongoDB mastery level:",
    choices: [
      { name: "Absolute Beginner", value: "Absolute Beginner" },
      { name: "Medium", value: "Medium" },
      { name: "Pro", value: "Pro" },
    ],
  });

  await levelQuestions(level);
}

async function main() {
  console.clear();
  await welcome();
  await askName();
  await selectLevel(); // Let the user select a level and start questions for that level
  winner();
}

async function winner() {
  console.clear();
  figlet(`Congrats, ${playerName}!\nYou're a MongoDB Master!`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + "\n");
    console.log(
      chalk.green(`Your journey doesn't end here. Keep exploring MongoDB!`)
    );
    process.exit(0);
  });
}

main().catch(console.error);
