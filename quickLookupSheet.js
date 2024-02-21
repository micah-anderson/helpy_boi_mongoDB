import chalk from "chalk";

const quickLookupSheet = {
  // Add all the key-value pairs here
  "insertOne()": "Adds a single document to a collection.",
  // ...add other commands
};

const showQuickLookupSheet = () => {
  console.log(chalk.blue("Quick Lookup Sheet:"));
  Object.entries(quickLookupSheet).forEach(([command, description]) => {
    console.log(chalk.green(command) + ": " + description);
  });
};

export { showQuickLookupSheet };
