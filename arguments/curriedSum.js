function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum() {
    let args = Array.from(arguments);
    // args = args.slice(1, args.length);
    console.log(args);
    console.log(numbers);
    numbers.push(args[0]);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach( (el) => sum += el );
      return sum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56