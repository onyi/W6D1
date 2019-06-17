Function.prototype.curry = function(numArgs) {
  let args = [];
  let that = this;
  const _curry = function () {
    args.push(arguments[0]);
    if (numArgs === args.length) {
      // return that(...args); // ... operations
      return that.apply(this, args); // .apply solution
    } else {
      return _curry;
    }
  };

  return _curry;

}


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}


console.log( sumThree.curry(3)(4)(20)(6) ); // == 30




