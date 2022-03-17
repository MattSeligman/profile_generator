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
  "What is your superpower? \nIn a few words, tell us what you are amazing at! "
];
let answers = [];

// the custom response
const theResponse = ()=> console.log(`\n\nVery cool!\n\nIt's great to meet you ${answers[0]}!\nI'm pleased to hear you enjoy ${answers[1]} and it's cool to know you listen to ${answers[2]} while enjoying it. I'll keep that in mind that your favorite meal is ${answers[4]} which you likely enjoy at ${answers[3]}. The sport of ${answers[5]} eh? (can you tell I'm Canadian). Interesting I'll keep that in mind. Your superpower is ${answers[6]}!? Woah.. I'll have to keep you more near me.`);

// runs the first question until the end of all the questions
const askQuestion = (index)=>{

  // begins the async question process
  rl.question(questions[index], (answer) => {
    answers.push(answer);
            
    // +1 so when it runs itself again it itterates against iself.
    askQuestion(index + 1, ()=> answers.push(answer));

    // if all questions are answered
    if (answers.length === questions.length - 1) {

      // closes the inputs after all the inputs are taken.
      rl.close();

      // response async so it waits until all are complete
      theResponse();
    }
            
  });
};

// start asking questions
askQuestion(0);