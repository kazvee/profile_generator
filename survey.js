const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  `What's your name? Nicknames are also acceptable! 🙂 `,
  (answerName) => {
    console.log(`Nice to meet you, ${answerName}! 😃 `);
    rl.question(`What's an activity you like doing? 🤔 `, (answerActivity) => {
      rl.question(
        `What do you listen to while doing that? 🤔 `,
        (answerListen) => {
          rl.question(
            `Which meal is your favourite (e.g., dinner, brunch, etc.)? 🤔 `,
            (answerMeal) => {
              rl.question(
                `What's your favourite thing to eat for that meal? 🤔 `,
                (answerFood) => {
                  rl.question(
                    `Which sport is your absolute favourite? 🤔 `,
                    (answerSport) => {
                      rl.question(
                        `What is your superpower? In a few words, tell us what you are amazing at! 🤔 `,
                        (answerSuperpower) => {
                          console.log(
                            `\nGreat! Those are all the questions we had for you, ${answerName}! Here's the profile description we've generated for you to use online:\n\n${answerName} loves listening to ${answerListen} while ${answerActivity}, devouring ${answerFood} for ${answerMeal}, prefers ${answerSport} over any other sport, and is amazing at ${answerSuperpower}! \n\nThank you for creating your profile with our service! 😃 \n`
                          );
                          rl.close();
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  }
);