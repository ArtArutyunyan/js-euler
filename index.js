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

console.log(getBiggestDivider(600851475143));