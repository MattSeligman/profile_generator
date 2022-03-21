// importing the required npm library readline
const readline = require('readline');

// the connection to the readline.createInterface,
// allowing the input to run through process.stdin
// allowing the output to run through process.stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the questions & answers
const questions = [
  "What's your name? ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower?"
];
let answers = [];

/**
Contains the custom generated Paragraph from the survey
** Name = `answers[0]` ? answers[0] : "Answer instead of Undefined"
** Favorite Activity = `answers[1]`
** Favorite Listening Material = `answers[2]`
** Favorite Meal Type/Time = `answers[3]`
** Favorite Meal = `answers[4]`
** Favorite Sport = `answers[5]`
** Superpower = `answers[6]`
*/
const theResponse = ()=> {
  console.log(
    `\n\nHi! My name is ${answers[0] ? answers[0] : "..ermm private! Call me No Name"} and I am an avid ${answers[1] ? answers[1] : "skipper of typing tasks"}.` +
  `\nI enjoy ${answers[2] ? answers[2] : "not providing answers"} while doing so. My favorite meal type is ${answers[3] ? answers[3] : "still to be determined"}.` +
  `\nMy favorite meal is ${answers[4] ? answers[4] : "*stares blankly at screen*"}. My favorite sport is ${answers[5] ? answers[5] : "unknown to many"}. ` +
  `\nFinally my super secret superpower is ${answers[6] ? answers[6] : "mashing the enter key."}`
  );
};

// runs the first question until the end of all the questions
const askQuestion = (index)=>{

  // begins the async question process
  rl.question(questions[index], (answer) => {

    answers.push(answer);
            
    // +1 so when it runs itself again it itterates against iself.
    askQuestion(index + 1, ()=> answers.push(answer));

    console.log("answerLength", answers.length, "===", questions.length,"QuestionsLength");
    // if all questions are answered
    if (answers.length === questions.length) {

      // closes the inputs after all the inputs are taken.
      rl.close();

      // response async so it waits until all are complete
      theResponse();
    }
            
  });
};

// start asking questions
askQuestion(0);