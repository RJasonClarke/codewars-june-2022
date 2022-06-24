// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }

  // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

  // Example: (Input --> Output)

  // "Dermatoglyphics" --> true
  // "aba" --> false
  // "moOse" --> false (ignore letter case)

  function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }

  // Set removes duplicates!

  //

  // Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

  // [Make sure you type the exact thing I wrote or the program may not execute properly]

  function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

  // Make a simple function called greet that returns the most-famous "hello world!".

  function greet(){
    return "hello world!"
  }

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
  return words.join(" ")
};

// Now you have to write a function that takes an argument and returns the square of it.

function square(num){
  return num * num
}

// Messi's Goal Total
// Use variables to find the sum of the goals Messi scored in 3 competitions

// Information
// Messi goal scoring statistics:

// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Task
// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

function move (position, roll) {
  return roll * 2 + position
}

// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90

function saleHotdogs(n){
  return n*(n<5?100:n<10?95:90);
}