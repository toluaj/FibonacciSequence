function fibonacci (n) {
  const fibonacciSequence = [0, 1]
  for (let i=2; i<n; i++) {
    fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i-2]
  }
  return fibonacciSequence
}

//Approx. time complexity (worst case) is O(n) - it increases as the number of n increases