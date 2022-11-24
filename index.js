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