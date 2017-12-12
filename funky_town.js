/*
 * laughing-barnacles
 * Jen Yu and Joyce Wu
 * SoftDev pd 7
 * 2017-12-06
 * K#15: Sequential Progression
 */

var fibonacci = function(n){
    if(n == 0){return 0;}
    else if (n == 1){return 1;}
    else{return fibonacci(n-1) + fibonacci(n-2);}
};

var fibButton = function(){
  console.log("\nThe answer should be 1!\n");
  console.log(fibonacci(2));
};

var fib = document.getElementById("fib");
fib.addEventListener('click', fibButton);
/**
//testing
var value = "fib 0: " +  fibonacci(0) + "\n"; //-> 0
value += "fib 1: " + fibonacci(1) + "\n"; //-> 1
value += "fib 2: "+ fibonacci(2) + "\n"; //-> 1
value += "fib 3: "+ fibonacci(3) + "\n"; //-> 2
value += "fib 4: "+ fibonacci(4) + "\n"; //-> 3
console.log(value);
**/

var gcd = function(a, b){
    if (a == 0){return b;}
    else if (b == 0){return a;}
    else{
	max = Math.max(a, b);
	min = Math.min(a, b);
	return gcd(min, max%min);
    }
}

var gcdButton = function(e){
  console.log("\nThe answer should be 8!\n");
  console.log(gcd(40, 8));
};

var gcdBtn = document.getElementById("gcd");
gcdBtn.addEventListener("click", gcdButton);
/**
//testing
var value = "GCD 36, 6: " +  gcd(36,6) + "\n"; //-> 6
value += "GCD 6, 36: " + gcd(6,36) + "\n"; //-> 6
value += "GCD 17, 5: "+ gcd(17,5) + "\n"; //-> 1
value += "GCD 200, 5: "+ gcd(200,5) + "\n"; //-> 5
value += "GCD 4, 0:  "+ gcd(4, 0) + "\n"; //-> 4
console.log(value);
**/

var names = ["Elmo","Big Bird", "Oscar", "Cookie Monster", "Bert", "Ernie", "Abby Cadabby", "Grover", "Mr. Snuffleupagus"];
var randomStudent = function(list){
    var len = list.length;
    return list[Math.floor(len*Math.random())];
}

var randStudentButton = function(e){
  console.log("\nRandom student coming your way!\n");
  console.log(randomStudent(names));
};
var randStudent = document.getElementById("randomStudent");
randStudent.addEventListener("click", randStudentButton);

/**
//testing
var value = "Student 1: " +  randomStudent(names) + "\n";
value += "Student 2:  " + randomStudent(names)+ "\n";
console.log(value);
**/
