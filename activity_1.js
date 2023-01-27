const ourFactorial = (n) => {
  if (n == 0 || n === 1) {
    return 1;
  } else {
    return n * ourFactorial(n - 1);
  }
};
console.log(ourFactorial(33));
