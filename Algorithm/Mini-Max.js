// Find the min-sum and max-sum of an array of 5 integers

function miniMaxSum(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  console.log(sum - max, sum - min);
}

//miniMaxSum([1,3,5,2,4])
//miniMaxSum([1,3,5,7,9 ])
