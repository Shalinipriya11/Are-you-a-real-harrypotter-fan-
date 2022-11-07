var readlineSync = require('readline-sync')
var user=readlineSync.question("what is your name!")
console.log("Welcome to the world of harry potter "+user)
var score=0;
function play(question,answer)
  {
    var userAnswer=readlineSync.question(question)
    if(userAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log("correct")
      score=score+1;
    }
    else
    {
      console.log("wrong")
      
    }
    
  }
var question=[{
  question:"Who is the author of Harry Potter? " ,
  answer: "JK Rowling",
  
},{
   question:"Dumbledore was the headmaster of which school? ",
  answer: "Hogwarts",
  
},{
   question:"Who is the villain in Harry Potter? ",
  answer: "Voldemort",
  
},{
   question:"Who is the first freind of Harry Potter? ",
  answer: "Ron Weasley",
},{
   question:"Which number is mostly used in Harry Potter? ",
  answer: "7",
}]

for(var i=0;i<question.length;i++)
  {
    var current=question[i];
    play(current.question,current.answer)
  }
console.log("your score is "+score)
 var highscore=[{
   name: "shalini",
   score: "5"
 },{
   name:"priyanshu",
   score:"4"
 }]
for(var i=0;i<highscore.length;i++)
  {
    var current=highscore[i];
    console.log(current.name)
    console.log(current.score)
  }
console.log("if you beat the highscore send me a screenshot of it!")
console.log("hope you enjoy the game")