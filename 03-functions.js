/**
* Write a function min that takes two arguments and returns their minimum.
*/
function min(a, b){
  return a <= b ? a : b;
}

/**
* A number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
* - Zero is even.
* - One is odd.
* - For any other number N, its evenness is the same as N - 2.
* Define a recursive function isEven corresponding to this description.
*/
function isEven(x){
  const abs = Math.abs(x);
  
  if(abs === 0){
    return true;
  } 
  
  if(abs === 1){
    return false;
  }
  
  return isEven(abs - 2);
}

/**
* Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
* Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/
function countChar(str, target){
  let count = 0;
  
  for(char in str){
    if(str[char] === target){
      count++;
    }
  }

  return count;
}

const countBs = (str) => countChar(str, 'b');
