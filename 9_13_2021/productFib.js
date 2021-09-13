// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// Some Examples of Return:
// (depend on the language)

// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true], 
// productFib(800) # should return [34, 55, false], 
// -----
// productFib(714) # should return {21, 34, 1}, 
// productFib(800) # should return {34, 55, 0},        
// -----
// productFib(714) # should return {21, 34, true}, 
// productFib(800) # should return {34, 55, false}, 
// Note:
// You can see examples for your language in "Sample Tests".

function productFib(prod){
  let fib = [0, 1];

  for (var i = 0; i < prod; i++) {
    if ((fib[i] * fib[i + 1]) < prod) {
        fib.push(fib[i] + fib[i + 1]);
        continue;
    }
    if ((fib[i] * fib[i + 1]) === prod) {
        console.log(true);
        return [fib[i], fib[i + 1], true];
    }
    if ((fib[i] * fib[i + 1]) > prod) {
        console.log(false);
        return [fib[i], fib[i + 1], false];
    }
  }
}

productFib(4895); // [55, 89, true])
productFib(5895); // [89, 144, false])
productFib(74049690); // [6765, 10946, true])
productFib(84049690); // [10946, 17711, false])
productFib(193864606); // [10946, 17711, true])
productFib(447577); // [610, 987, false])
productFib(602070); // [610, 987, true])
