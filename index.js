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