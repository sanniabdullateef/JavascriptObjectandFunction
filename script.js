// function Constructor to create Object from a blueprint

// var john = {
//     name: 'john',
//     yearOfBirth: 1990,
//     job: 'teacher',

// };

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function (){

//         console.log (2016 
//             - this.yearOfBirth);
        
//     }
// }



// // Person.prototype.calculateAge = function (){

// //     console.log (2016 
// //         - this.yearOfBirth);
// // };

// // Person.prototype.lastName = 'Sanni'

// var john = new Person ('john', 1990, 'teacher');
// var ola = new Person ('Ola', 1992, 'programmer');
// var gbenga = new Person ('gbenga', 1982, 'logistic');

// john.calculateAge();
// ola.calculateAge();
// gbenga.calculateAge();

// console.log(john.lastName  + ' john');
// console.log(ola.lastName  + ' ola');
// console.log(gbenga.lastName  + ' Gbenga');



// Object.create Method and Inheritance

// var personProto = {
//     calculateAge : function(){
//        console.log(2019 - this.yearOfBirth);
//     }
// };

// var john = Object.create (personProto);
// john.name = 'john';
// john.age = 1992;
// john.job = 'LogisticMan'


// var jane = Object.create (personProto,{
//     name : { value: 'jane'},
//     yearOfBirth: { value : 1970 },
//     job: { value : 'designer' }
// });



//Primitives versus Object

//Primitive

/*
var a = 20;
var b = a;
a = 40 ;

console.log(a);
console.log(b);

//Object

var a = {
    name : 'olanrewaju',
    age : 27,
    job : 'Web developer'
};

var b = a;
a.age = 'Designer';
console.log(a.age);
console.log (b.age);

//function

var age = 27;
var obj = {
    name : 'Olanrewaju',
    city : 'Lagos'
};

function priObjFun (a, b){
    a = 30;
    b.city = 'ibadan';
}

priObjFun (age, obj);
console.log (age);
console.log(obj.city);

*/

//Passing function to a function as anrgument

/*var years = [1992, 1980, 1988, 2000, 1978]

function arrayCalc (arr, fn) {
    var arrayRes = [];
    for (var i = 0; i < arr.length; i++ ){
        arrayRes.push (fn(arr[i]));
    } 
    return arrayRes;
}

function calculateAge (el){
    return 2019 - el;  
}

function isFullAges (el){
    return el >= 20; 
}

function maxHeart (el){
    if (el >= 20 && el <= 70){
    return Math.round(209.8 - (0.82 * el));
    } else {
        return -1;
    }

}

var ages = arrayCalc (years, calculateAge);
var fullAge = arrayCalc (ages, isFullAges);
var heart = arrayCalc(ages, maxHeart);
console.log (ages);
console.log(fullAge);
console.log (heart);
*/

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log (name + ', can you please explain wht Uxx designe is?');
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion =interviewQuestion ('designer');
// var coblerQuestion = interviewQuestion('cobler');

// teacherQuestion('John');
// designerQuestion('mike');
// coblerQuestion('olanrwaju');

// teacherQuestion('Mr Ajagbe');
// designerQuestion('Olanrewaju');
// coblerQuestion('Ajagbe kekere');

// //Closures property

// function interviewQuestion(job){
//     return function(name){
//         if (job==='teacher'){
//             console.log('What subject do you teach, ' + name + '?');
//         } else if (job==='designer'){
//             console.log(name + ', can you please explain wht Uxx designe is?');
//         } else{
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// interviewQuestion('designer')('john');
// interviewQuestion('teacher')('mike');
// interviewQuestion('worker')('Steve');


// bind, call and apply Method

// var ola = {
//     name: 'ola',
//     job:'Website Designer',
//     age: 27,
//     presentation:function (style, timeOfDay){
//         if (style === 'formal'){
//             console.log('Good ' + timeOfDay + ' , Ladies and Gentlemen! I\'m ' + this.name + ' I\'m ' + this.age +' years old' + ' and I\'m a ' + this.job );
//         } else if (style === 'friendly'){
//             console.log('Hey Good ' + timeOfDay + ' , Dude I\'m ' + this.name + ' I\'m ' + this.age +' years old' + 'and I\'m a ' + this.job + ' hope you ae doing good!');
//         } else {
//             console.log( 'Not friendly and Not formal negative');
//         }
//     }
// }

// ola.presentation('friendly', 'Afternoon');

// var kamal = {
//     name: 'kamal',
//     age : 32,
//     job :'Printing press'
// };

// ola.presentation.call(kamal, 'formal', 'morning');

// // Apply method
// // ola.presentation.apply(kamal, ['friendly', 'afternoon'])

// //bind method
// var olaFormal= ola.presentation.bind(ola, 'formal')
// olaFormal('morning') ;
// olaFormal('aftrenoon')

// var kamalFriendly = ola.presentation.bind(kamal, 'friendly')
// kamalFriendly('afternoon')


// 


//Coding Challenge little quiz game puzzle for getting it right or wrong (Expert Level)

(function() {
  function Question(question, answer, correctAnswer) {
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
  }
  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (i = 0; i < this.answer.length; i++) {
      console.log(i + " : " + this.answer[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans, callback) {
      var sc;
    if (ans === this.correctAnswer) {
      console.log("Wao the answer is right!");
    sc = callback(true);
    } else {
      console.log("Wrong answer, Try again");
    sc = callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore =
  function (score){
      console.log('Your scores is now : ' + score);
      console.log('-----------------------');
  }

  var q1 = new Question(
    " Is JavaScript the coolest language in he world!",
    ["yes", "no"], 0);
  var q2 = new Question(
    "Is Abdullateef just Learning programming language?",
    ["yes", "no"], 0);
  var q3 = new Question(
    "What is my full name?",
    [
      "Sanni Abdullateef Junior",
      "Sanni Olaken AbdulMalik",
      "Sanni Abdullateef Olanrewaju"
    ], 2);
  var questions = [q1, q2, q3];
  // to keep scores of player 


  function score () {
      var sc = 0;
      return function (correct){
          sc++;
      }
      return sc;
  }

  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt("Please select the correct answer");

    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);

      nextQuestion();
    }
  }

  nextQuestion();
})();











