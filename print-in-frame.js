function printInFrame(list) {
  var list = list.split(' ');
  var longestFinal = longestStr(list).length;
  var border = repeat('*', longestFinal + 4);
// printInFrame takes a string (list), turns into a variable with each word printed
// on a new line, calls a variable longest which refers to the longest word in the list

  console.log(border);
  for (word of list) {
    console.log('* ' + word + repeat(' ', longestFinal - word.length + 1) + '*');
  }
  console.log(border);
}

function repeat(str, times) {
  var result = str;
  for (var i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

function longestStr(list) {
  var longestWord = list[0]; // the current longest word is the first spot of the array
  for (var x = list.length - 1; x > 0; x--){ //x is the last spot in the array
    var temp = list[x].length;
    if (temp < list[x - 1].length){
      longestWord = list[x - 1];
    }
  }
  return longestWord;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
