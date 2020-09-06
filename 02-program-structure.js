/**
* Exercise 1 - Looping a triangle
* ----------
* 
* Write a loop that makes seven calls to console.log to output the following triangle:
* 
* #
* ##
* ###
* ####
* #####
* ######
* #######
**/
function asciiTriangle(triangleHeight){
  for(let i = 1; i <= triangleHeight; i++){
    console.log('#'.repeat(i));
  }
}

/**
* Exercise 2 - Looping a triangle
* ----------
* 
* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
* For numbers divisible by 3, print "Fizz" instead of the number, 
* and for numbers divisible by 5 (and not 3), print "Buzz" instead.
* When you have that working, modify your program to print "FizzBuzz" for numbers that 
* are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible 
* by only one of those).
* 
**/
function fizzBuzzV1(){ // First iteration
  for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log('FizzBuzz');
    } else {
      if(i % 3 === 0){
        console.log('Fizz');
      } else if(i % 5 === 0){
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
}

function fizzBuzzV2(){ // After a mini refactor
  for(let i = 1; i <= 100; i++){
    const message = [];

    i % 3 === 0 && message.push('Fizz');
    i % 5 === 0 && message.push('Buzz');
    
    console.log(message.join('') || i);
  }
}

/**
* Exercise 3 - Chessboard
* ----------
* 
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
* 
* Passing this string to console.log should show something like this:
* 
*  # # # #
* # # # # 
*  # # # #
* # # # # 
*  # # # #
* # # # # 
*  # # # #
* # # # #
* 
**/
function chessBoard(size){
  let board = '';

  for(let i = 0; i < size; i++){
    board += (i % 2 === 0 ? ' #' : '# ').repeat(size) + '\n';
  }

  return board;
}
