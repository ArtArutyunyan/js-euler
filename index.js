/* Task N2 */
let sum = 2, 
    prev = 1, 
    next = 2, 
    fib;

while(prev < 4000000) {
   fib = prev + next;
   prev = next;
   next = fib;
   if(fib%2===0) sum += fib;
}

// console.log(sum);


/* Task N3 */
function getBiggestDivider(number)
{
  let divider = 2;
  while(number != divider){
    number % divider === 0 ? number = number / divider : divider++;
  }
  return divider;
}

// console.log(getBiggestDivider(600851475143));


/* Task N3 */
function isPalindrome(number) {
  let reversed = String(number).split('').reverse().join('');
  return Number(reversed) === number;
}

function largestPalindrome(n) {
  let highest = 0;
  let largestNum = '9';
  largestNum += Number(largestNum.repeat(n - 1));
  largestNum = Number(largestNum);
	
  for (let i = largestNum; i > 0; i--) {
    for (let j = largestNum; j > 0; j--) {
      let number = i * j;
      if (isPalindrome(number)) {
        if (number > highest) highest = number;
        break;
      }
    }
  }
  return highest;
}

// console.log(largestPalindrome(3));

/* Task N6 */
function getSumSquares(count) {
  let sumSquare = 0;
  let sum = 0;
  for(var i = 1; i <= count; i++){
    var square = Math.pow(i, 2);
    sumSquare += square;
    sum += i;
  }

  return  Math.pow(sum, 2) - sumSquare;
}

console.log(getSumSquares(100));
