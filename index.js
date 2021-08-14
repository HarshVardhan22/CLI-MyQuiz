const readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(chalk.magentaBright('Welcome to the Quiz'));

let username = readlineSync.question("What's your Name: \n");
console.log(chalk.yellowBright('Hello',username,", Let's Play!!"));

console.log('\n');
console.log(chalk.blue('Rules & Instructions: '));
console.log(chalk.blue('1.',username + ', There are 5 Questions about Harshvardhan'));
console.log(chalk.blue('2. You will get 2 points on each Right Answer.'));
console.log(chalk.blue('3. No points will be deducted if your answer is wrong, it\'s not an exam chill!'));
console.log(chalk.blue('4. Oh but you will be judged, it\'s not dinsey either!'));


let questionsList = [
  {
    question : 'Harshvardhan\'s pet\'s name?',
    answer : 'Iba',
  },
  {
    question : 'What is his favorite sports?',
    answer : 'None',
  }, 
  {
    question : 'His favorite food?',
    answer : 'Biriyani',
  }, 
  {
    question : 'His favorite movie? ',
    answer : 'Interstellar',
  },
  {
    question : 'His favorite language? ',
    answer : 'JavaScript',
  },
];

let score = 0;
function quiz(question,answer){
  let userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log(chalk.green('You are Right.'));
    score = score + 2;
  } else{
    
    console.log(chalk.red('Ooops! The Correct Answer is:',answer));
  }

  console.log(chalk.cyan('Score is: ',score));
}



for(var i = 0;i<questionsList.length;i++){
  console.log('\n');
  quiz(questionsList[i].question,questionsList[i].answer);
  
}



console.log('\n');
console.log(chalk.magentaBright('Congratulations,',username,'your Total Score is: ',score));